import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

// Simple memory-based rate limiter
const ipLimits = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 requests per minute

// Duplicate submission prevention in-memory cache
const recentSubmissions = new Map<string, number>(); // signature -> timestamp
const DUP_PREVENTION_WINDOW_MS = 10000; // 10 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = ipLimits.get(ip);
  if (!limit) {
    ipLimits.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (now > limit.resetTime) {
    ipLimits.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (limit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  limit.count += 1;
  return true;
}

function normalizeNotionDatabaseId(rawId: string): string {
  let cleaned = (rawId || "").trim();
  if (cleaned.includes("notion.so")) {
    try {
      const url = new URL(cleaned);
      const pathname = url.pathname;
      const lastSegment = pathname.split("/").pop() || "";
      const match = lastSegment.match(/([a-f0-9]{32})/i);
      if (match) {
        return match[1];
      }
    } catch (e) {
      // ignore
    }
  }
  if (cleaned.includes("?")) {
    cleaned = cleaned.split("?")[0];
  }
  cleaned = cleaned.replace(/-/g, "");
  cleaned = cleaned.replace(/\//g, "").trim();
  return cleaned;
}

function isDuplicateSubmission(name: string, company: string, email: string, enquiry: string): boolean {
  const signature = `${name.toLowerCase()}|${company.toLowerCase()}|${email.toLowerCase()}|${enquiry.toLowerCase()}`;
  const now = Date.now();
  
  // Clean up old entries
  for (const [sig, time] of recentSubmissions.entries()) {
    if (now - time > DUP_PREVENTION_WINDOW_MS) {
      recentSubmissions.delete(sig);
    }
  }
  
  if (recentSubmissions.has(signature)) {
    return true;
  }
  
  recentSubmissions.set(signature, now);
  return false;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // 1. Check rate limit
      const clientIp = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown") as string;
      if (!checkRateLimit(clientIp)) {
        console.warn(`[Rate Limit Exceeded] IP: ${clientIp}`);
        return res.status(429).json({
          error: "Too many requests. Please try again later.",
        });
      }

      const { name, company, email, enquiry, language, website_hp } = req.body;

      // 2. Honeypot check for spam protection
      if (website_hp) {
        console.log(`[Spam Prevention] Honeypot field filled by robot: ${website_hp}`);
        // Return 200 success to deceive the spam bot silently
        return res.json({ success: true, message: "Decoy success" });
      }

      // 3. Trim all submitted values
      const cleanName = String(name || "").trim();
      const cleanCompany = String(company || "").trim();
      const cleanEmail = String(email || "").trim().toLowerCase();
      const cleanEnquiry = String(enquiry || "").trim();
      const cleanLanguageRaw = String(language || "DK").trim().toUpperCase();
      const cleanLanguage = cleanLanguageRaw === "EN" || cleanLanguageRaw === "UK" ? "UK" : "DK";

      // 4. Validate server-side that required fields are present
      if (!cleanName || !cleanCompany || !cleanEmail || !cleanEnquiry) {
        return res.status(400).json({
          error: "Missing required fields",
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return res.status(400).json({
          error: "Invalid email format",
        });
      }

      // Validate website language resolves to DK or UK
      if (cleanLanguage !== "DK" && cleanLanguage !== "UK") {
        return res.status(400).json({
          error: "Invalid language selection",
        });
      }

      // 5. Prevent duplicate submissions
      if (isDuplicateSubmission(cleanName, cleanCompany, cleanEmail, cleanEnquiry)) {
        console.warn(`[Duplicate Submission Prevented] ${cleanEmail}`);
        // Return success so the user sees a positive response, but don't double write
        return res.json({ success: true });
      }

      // Resolve environment variables
      const notionToken = process.env.NOTION_TOKEN;
      const rawDataSourceId = (process.env.NOTION_OPPORTUNITIES_DATA_SOURCE_ID || "").trim();

      if (!notionToken) {
        console.error("Configuration Error: NOTION_TOKEN is missing on server.");
        return res.status(500).json({
          error: "token or authorisation error",
        });
      }

      const EXPECTED_DATASOURCE_ID_NORM = "37cbebff03a9806e9607000b26c81f37";
      const normalizedId = rawDataSourceId.replace(/-/g, "").toLowerCase();

      if (!rawDataSourceId || normalizedId !== EXPECTED_DATASOURCE_ID_NORM) {
        console.error(`Configuration Error: NOTION_OPPORTUNITIES_DATA_SOURCE_ID ("${rawDataSourceId}") is incorrect or invalid.`);
        return res.status(500).json({
          error: "incorrect data source ID",
        });
      }

      // 6. Map the fields exactly as required by user specifications
      const notionProperties: Record<string, any> = {
        "Opportunity": {
          title: [
            {
              text: {
                content: `Website | ${cleanCompany} | ${cleanName}`,
              },
            },
          ],
        },
        "Virksomhed": {
          rich_text: [
            {
              text: {
                content: cleanCompany,
              },
            },
          ],
        },
        "Kontaktperson": {
          rich_text: [
            {
              text: {
                content: cleanName,
              },
            },
          ],
        },
        "Arbejdsmail": {
          email: cleanEmail,
        },
        "Henvendelse": {
          rich_text: [
            {
              text: {
                content: cleanEnquiry,
              },
            },
          ],
        },
        "Leadkilde": {
          select: {
            name: "Website",
          },
        },
        "Kanal": {
          select: {
            name: "Kontaktformular web",
          },
        },
        "Sprog": {
          select: {
            name: cleanLanguage, // "DK" or "UK"
          },
        },
        "Status": {
          select: {
            name: "Ny henvendelse",
          },
        },
      };

      // 7. Retrieve/query the schema using the data source endpoint, not the legacy database query endpoint.
      const queryEndpoint = `https://api.notion.com/v1/data_sources/${rawDataSourceId}/query`;
      console.log(`[Notion Query] Endpoint: ${queryEndpoint}`);
      console.log(`[Notion Query] Method: POST`);
      console.log(`[Notion Query] Notion-Version: 2022-06-28`);

      try {
        const queryRes = await fetch(queryEndpoint, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${notionToken}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        const queryData = await queryRes.json() as any;
        console.log(`[Notion Query] Response HTTP Status: ${queryRes.status}`);

        if (!queryRes.ok) {
          console.warn(`[Notion Query] Failed. Code: ${queryData.code}, Message: ${queryData.message}`);
        } else {
          console.log(`[Notion Query] Succeeded retrieving data source schema.`);
        }
      } catch (err) {
        console.error(`[Notion Query] Unexpected query error:`, err);
      }

      // 8. Create the Notion record
      const createEndpoint = "https://api.notion.com/v1/pages";
      const parentObject = {
        type: "data_source_id",
        data_source_id: rawDataSourceId,
      };

      console.log(`[Notion Create] Writing new opportunity...`);
      console.log(`[Notion Create] Endpoint: ${createEndpoint}`);
      console.log(`[Notion Create] Parent Object: ${JSON.stringify(parentObject)}`);
      console.log(`[Notion Create] Notion-Version: 2022-06-28`);

      const response = await fetch(createEndpoint, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${notionToken}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parent: parentObject,
          properties: notionProperties,
        }),
      });

      const responseData = await response.json() as any;
      console.log(`[Notion Create] Response HTTP Status: ${response.status}`);

      // 9. Confirm that Notion succeeded, map errors to safe specific categories
      if (!response.ok) {
        console.error(`[Notion Create] Failed. Endpoint: ${createEndpoint}, Status: ${response.status}`);
        console.error(`[Notion Create] Error Code: ${responseData.code}`);
        console.error(`[Notion Create] Safe Message: ${responseData.message}`);
        
        let category = "temporary server error";
        if (response.status === 401 || responseData.code === "unauthorized") {
          category = "token or authorisation error";
        } else if (response.status === 404 || responseData.code === "object_not_found") {
          category = "database inaccessible";
        } else if (responseData.code === "validation_error" || responseData.message?.includes("validation") || responseData.message?.includes("property")) {
          category = "property mapping error";
        }

        return res.status(500).json({
          error: category,
        });
      }

      const notionRecordUrl = responseData.url;
      console.log(`[Notion Create] Opportunity created successfully: ${notionRecordUrl}`);

      // 3. Optionally send a Google Chat notification
      const googleChatWebhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL;
      if (googleChatWebhookUrl) {
        try {
          const formattedDate = new Date().toLocaleString("da-DK", { timeZone: "Europe/Copenhagen" });
          const messageText = `*New Website Enquiry*\n\n*Company:* ${cleanCompany}\n*Contact Person:* ${cleanName}\n*Email:* ${cleanEmail}\n*Language:* ${cleanLanguage}\n*Received:* ${formattedDate}\n*Notion Record:* <${notionRecordUrl || ""}|Open in Notion>\n\n*Enquiry:* \n${cleanEnquiry}`;

          await fetch(googleChatWebhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              text: messageText,
            }),
          });
          console.log("Google Chat notification sent successfully.");
        } catch (chatError) {
          console.error("Failed to send Google Chat notification:", chatError);
          // A Google Chat error must never cause the Notion submission to fail.
        }
      }

      // 4. Return success to the website
      return res.json({ success: true });
    } catch (err) {
      console.error("Error in contact API handler:", err);
      return res.status(500).json({
        error: "temporary server error",
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on host 0.0.0.0 on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server", err);
});
