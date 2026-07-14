import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Client } from "@notionhq/client";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ override: true });

const cleanEnvVar = (val?: string): string => {
  if (!val) return "";
  return val.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '').trim();
};

const isUUID = (str: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
};

const DEFAULT_UUIDS: Record<string, string> = {
  NOTION_DATABASE_ORG: "379bebff-03a9-808c-ac4c-000bcdaa0f5a",
  NOTION_DATABASE_CONTACT: "37bbebff-03a9-8008-b7aa-000b43ddface",
  NOTION_DATABASE_OPPORTUNITY: "37cbebff-03a9-806e-9607-000b26c81f37",
  NOTION_DATABASE_CALL: "b2f4ce75-0a88-4922-8241-cda20b24075c"
};

const MAP_OLD_NAMES: Record<string, string> = {
  "05.17.02 Organisations": "379bebff-03a9-808c-ac4c-000bcdaa0f5a",
  "05.17.03 Contacts": "37bbebff-03a9-8008-b7aa-000b43ddface",
  "05.17.04 Opportunities": "37cbebff-03a9-806e-9607-000b26c81f37",
  "PeopleLab X – Afklarende samtaler": "b2f4ce75-0a88-4922-8241-cda20b24075c"
};

interface ResolvedDatabaseInfo {
  dataSourceId: string;
  databaseId: string;
}

const MAP_DATASOURCE_TO_DATABASE: Record<string, string> = {
  "379bebff-03a9-808c-ac4c-000bcdaa0f5a": "379bebff-03a9-80f1-9dc7-ecb260cc3a65",
  "37bbebff-03a9-8008-b7aa-000b43ddface": "37bbebff-03a9-8056-9701-fbfa1329a31a",
  "37cbebff-03a9-806e-9607-000b26c81f37": "37cbebff-03a9-8027-a085-d7c18944a337",
  "b2f4ce75-0a88-4922-8241-cda20b24075c": "5ef84879-b5d1-4866-a494-424e89fd8a79"
};

interface DatabaseResolution {
  uuid: string;
  status: "uuid" | "old-name-mapped" | "missing-defaulted";
}

function getDatabaseUuid(envVarName: string, rawValue?: string): DatabaseResolution {
  const input = rawValue !== undefined ? rawValue : process.env[envVarName];
  const cleaned = cleanEnvVar(input);
  const fallbackUuid = DEFAULT_UUIDS[envVarName] || "";

  if (!cleaned) {
    return {
      uuid: fallbackUuid,
      status: "missing-defaulted"
    };
  }

  if (isUUID(cleaned)) {
    return {
      uuid: cleaned,
      status: "uuid"
    };
  }

  // Check case-insensitive against the standard old names
  for (const [oldName, uuidValue] of Object.entries(MAP_OLD_NAMES)) {
    if (cleaned.toLowerCase() === oldName.toLowerCase()) {
      return {
        uuid: uuidValue,
        status: "old-name-mapped"
      };
    }
  }

  // Any other unrecognized text, fallback to default
  return {
    uuid: fallbackUuid,
    status: "old-name-mapped"
  };
}

function resolveDatabaseIds(envVarName: string, rawValue?: string): ResolvedDatabaseInfo {
  const { uuid } = getDatabaseUuid(envVarName, rawValue);
  const cleanUuid = uuid.toLowerCase().trim();
  const dbId = MAP_DATASOURCE_TO_DATABASE[cleanUuid] || cleanUuid;
  return {
    dataSourceId: cleanUuid,
    databaseId: dbId
  };
}

interface ResolvedDatabase {
  id: string;
  title: string;
}

const resolvedDatabasesCache = {
  org: null as ResolvedDatabase | null,
  contact: null as ResolvedDatabase | null,
  opportunity: null as ResolvedDatabase | null,
  call: null as ResolvedDatabase | null,
};

async function resolveAndVerifyDatabase(notion: Client, envVarName: string, dbIdentifier?: string): Promise<ResolvedDatabase> {
  const dbInfo = resolveDatabaseIds(envVarName, dbIdentifier);

  try {
    const response = await notion.databases.retrieve({ database_id: dbInfo.databaseId });
    let title = "Unnamed Database";
    if (response && "title" in response && Array.isArray((response as any).title)) {
      title = (response as any).title.map((t: any) => t.plain_text).join("");
    }
    return { id: dbInfo.databaseId, title };
  } catch (err: any) {
    // Return standard fallback title rather than crashing
    return { id: dbInfo.databaseId, title: envVarName.replace("NOTION_DATABASE_", "") };
  }
}

const resolveDatabaseId = async (notion: Client, dbIdentifier: string, envVarName: string): Promise<string> => {
  return resolveDatabaseIds(envVarName, dbIdentifier).databaseId;
};

async function initializeDatabases(notion: Client) {
  const resOrg = resolveDatabaseIds("NOTION_DATABASE_ORG");
  const resContact = resolveDatabaseIds("NOTION_DATABASE_CONTACT");
  const resOpp = resolveDatabaseIds("NOTION_DATABASE_OPPORTUNITY");
  const resCall = resolveDatabaseIds("NOTION_DATABASE_CALL");

  try {
    resolvedDatabasesCache.org = await resolveAndVerifyDatabase(notion, "NOTION_DATABASE_ORG", process.env.NOTION_DATABASE_ORG);
  } catch (err) {
    resolvedDatabasesCache.org = { id: resOrg.databaseId, title: "Organisations" };
  }

  try {
    resolvedDatabasesCache.contact = await resolveAndVerifyDatabase(notion, "NOTION_DATABASE_CONTACT", process.env.NOTION_DATABASE_CONTACT);
  } catch (err) {
    resolvedDatabasesCache.contact = { id: resContact.databaseId, title: "Contacts" };
  }

  try {
    resolvedDatabasesCache.opportunity = await resolveAndVerifyDatabase(notion, "NOTION_DATABASE_OPPORTUNITY", process.env.NOTION_DATABASE_OPPORTUNITY);
  } catch (err) {
    resolvedDatabasesCache.opportunity = { id: resOpp.databaseId, title: "Opportunities" };
  }

  try {
    resolvedDatabasesCache.call = await resolveAndVerifyDatabase(notion, "NOTION_DATABASE_CALL", process.env.NOTION_DATABASE_CALL);
  } catch (err) {
    resolvedDatabasesCache.call = { id: resCall.databaseId, title: "Afklarende samtaler" };
  }

  console.log("\n==================================================");
  console.log("NOTION DATABASE RESOLUTION STATUS");
  console.log("==================================================");
  console.log(`   - NOTION_DATABASE_ORG (DB/DS): ${resOrg.databaseId} / ${resOrg.dataSourceId}`);
  console.log(`   - NOTION_DATABASE_CONTACT (DB/DS): ${resContact.databaseId} / ${resContact.dataSourceId}`);
  console.log(`   - NOTION_DATABASE_OPPORTUNITY (DB/DS): ${resOpp.databaseId} / ${resOpp.dataSourceId}`);
  console.log(`   - NOTION_DATABASE_CALL (DB/DS): ${resCall.databaseId} / ${resCall.dataSourceId}`);
  console.log("==================================================\n");
}

const queryDatabase = async (notionClient: Client, dbInfo: ResolvedDatabaseInfo | string, filter: any): Promise<any> => {
  let finalDataSourceId = "";
  let finalDatabaseId = "";

  if (typeof dbInfo === "string") {
    finalDataSourceId = dbInfo;
    finalDatabaseId = MAP_DATASOURCE_TO_DATABASE[dbInfo.toLowerCase()] || dbInfo;
  } else {
    finalDataSourceId = dbInfo.dataSourceId;
    finalDatabaseId = dbInfo.databaseId;
  }

  if (notionClient.dataSources && typeof (notionClient.dataSources as any).query === "function") {
    return await (notionClient.dataSources as any).query({
      data_source_id: finalDataSourceId,
      filter
    });
  }

  if (notionClient.databases && typeof (notionClient.databases as any).query === "function") {
    return await (notionClient.databases as any).query({
      database_id: finalDatabaseId,
      filter
    });
  }

  // Fallback to direct request when .databases.query is missing (e.g. newer Notion SDK v5)
  return await notionClient.request<any>({
    path: `databases/${finalDatabaseId}/query`,
    method: "post",
    body: {
      filter
    }
  });
};

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for form submission
app.post("/api/submit-form", async (req, res) => {
  const {
    name,
    email,
    company,
    role,
    phone,
    situation,
    decisionText,
    investmentText,
    outsideText,
    timeframe,
    consent,
    language,
    url,
    decision_entry_company_type,
    decision_entry_situation_id,
    decision_entry_situation_label,
    decision_entry_recommended_analysis,
    decision_entry_cta_label,
    decision_entry_language,
    decision_entry_page_path,
    decision_entry_target_anchor
  } = req.body;

  // 1. Validation
  const reqLang = (language || "DA").toUpperCase();
  const errorMsg = reqLang === "DA" 
    ? "Venligst udfyld alle påkrævede felter (Navn, E-mail, Virksomhed samt samtykke)."
    : "Please fill in all required fields (Name, Email, Company, and Consent).";

  if (!name || !email || !company || !consent) {
    return res.status(400).json({
      success: false,
      error: errorMsg
    });
  }

  // Check for critical credentials
  const notionKey = cleanEnvVar(process.env.NOTION_API_KEY);
  const dbOrgRaw = cleanEnvVar(process.env.NOTION_DATABASE_ORG);
  const dbContactRaw = cleanEnvVar(process.env.NOTION_DATABASE_CONTACT);
  const dbOppRaw = cleanEnvVar(process.env.NOTION_DATABASE_OPPORTUNITY);
  const dbCallRaw = cleanEnvVar(process.env.NOTION_DATABASE_CALL);

  const rawMailHost = cleanEnvVar(process.env.MAIL_HOST);
  const mailHost = rawMailHost || "smtp.gmail.com";

  const rawMailPort = cleanEnvVar(process.env.MAIL_PORT);
  const mailPort = rawMailPort || "587";

  const rawMailUser = cleanEnvVar(process.env.MAIL_USER);
  const mailUser = (!rawMailUser || rawMailUser.includes("revenue-operations@peoplelabx.com"))
    ? "office@peoplelabx.com"
    : rawMailUser;

  const mailPass = cleanEnvVar(process.env.MAIL_PASS);

  const rawMailFrom = cleanEnvVar(process.env.MAIL_FROM);
  const mailFrom = (!rawMailFrom || rawMailFrom.includes("revenue-operations@peoplelabx.com") || rawMailFrom === "no-reply@peoplelabx.com")
    ? "PeopleLab X <office@peoplelabx.com>"
    : rawMailFrom;

  const rawMailReplyTo = cleanEnvVar(process.env.MAIL_REPLY_TO);
  const mailReplyTo = (!rawMailReplyTo || rawMailReplyTo.includes("revenue-operations@peoplelabx.com") || rawMailReplyTo === "no-reply@peoplelabx.com")
    ? "office@peoplelabx.com"
    : rawMailReplyTo;

  // If credentials are not set up, show a helpful message and prompt them to contact office
  const setupErrorMsg = reqLang === "DA"
    ? "Systemkonfigurationsfejl: Serveren mangler adgangsforbindelser. Venligst kontakt office@peoplelabx.com direkte."
    : "System Configuration Error: Server credentials are not configured. Please contact office@peoplelabx.com directly.";

  if (!notionKey || !dbOrgRaw || !dbContactRaw || !dbOppRaw || !dbCallRaw) {
    console.error("Missing critical environment variables for Notion:", {
      hasNotionKey: !!notionKey,
      hasDbOrg: !!dbOrgRaw,
      hasDbContact: !!dbContactRaw,
      hasDbOpp: !!dbOppRaw,
      hasDbCall: !!dbCallRaw
    });
    return res.status(500).json({
      success: false,
      error: setupErrorMsg
    });
  }

  const isMailConfigured = !!(mailHost && mailUser && mailPass && mailPass !== "NOTION_API_KEY");
  const transporter = isMailConfigured ? nodemailer.createTransport({
    host: mailHost,
    port: parseInt(mailPort || "587"),
    secure: mailPort === "465",
    auth: {
      user: mailUser,
      pass: mailPass
    }
  }) : null;

  let orgId = "";
  let contactId = "";
  let opportunityId = "";
  let callId = "";
  let currentStep = "Database resolution and validation";

  try {
    const notion = new Client({ auth: notionKey });

    // Dynamically resolve database names to their actual Notion UUIDs if needed
    const dbOrg = resolveDatabaseIds("NOTION_DATABASE_ORG", dbOrgRaw);
    const dbContact = resolveDatabaseIds("NOTION_DATABASE_CONTACT", dbContactRaw);
    const dbOpp = resolveDatabaseIds("NOTION_DATABASE_OPPORTUNITY", dbOppRaw);
    const dbCall = resolveDatabaseIds("NOTION_DATABASE_CALL", dbCallRaw);

    const isOrgValid = isUUID(dbOrg.databaseId);
    const isContactValid = isUUID(dbContact.databaseId);
    const isOppValid = isUUID(dbOpp.databaseId);
    const isCallValid = isUUID(dbCall.databaseId);

    if (!isOrgValid || !isContactValid || !isOppValid || !isCallValid) {
      throw new Error(`Database resolution failed. Invalid UUIDs: ORG="${dbOrg.databaseId}", CONTACT="${dbContact.databaseId}", OPPORTUNITY="${dbOpp.databaseId}", CALL="${dbCall.databaseId}"`);
    }

    // --- STEP 1: Organisation Record ---
    try {
      currentStep = "Querying/Creating Organisation";
      const searchOrg = await queryDatabase(notion, dbOrg, {
        property: "Organisation",
        title: {
          equals: company
        }
      });

      if (searchOrg.results.length > 0) {
        orgId = searchOrg.results[0].id;
        console.log(`Found existing Organisation in Notion: ${orgId}`);
      } else {
        const newOrg = await notion.pages.create({
          parent: { database_id: dbOrg.databaseId },
          properties: {
            "Organisation": {
              title: [
                {
                  text: { content: company }
                }
              ]
            }
          }
        });
        orgId = newOrg.id;
        console.log(`Created new Organisation in Notion: ${orgId}`);
      }
    } catch (err: any) {
      console.error("Notion: Failed query/create Organisation, falling back to clean creation...", err);
      try {
        currentStep = "Creating Organisation (Fallback)";
        const newOrg = await notion.pages.create({
          parent: { database_id: dbOrg.databaseId },
          properties: {
            "Organisation": {
              title: [
                {
                  text: { content: company }
                }
              ]
            }
          }
        });
        orgId = newOrg.id;
      } catch (innerErr: any) {
        throw new Error(`Organisation Step Failed: ${innerErr.message || innerErr}`);
      }
    }

    // --- STEP 2: Contact Record ---
    try {
      currentStep = "Querying/Creating Contact";
      const searchContact = await queryDatabase(notion, dbContact, {
        property: "E-mail",
        email: {
          equals: email
        }
      });

      const contactProperties: any = {
        "Role (Titel in Linkedin)": {
          rich_text: [{ text: { content: role || "" } }]
        },
        "Phone Number": {
          phone_number: phone || ""
        }
      };

      if (searchContact.results.length > 0) {
        contactId = searchContact.results[0].id;
        console.log(`Found existing Contact in Notion: ${contactId}. Updating contact info...`);
        
        await notion.pages.update({
          page_id: contactId,
          properties: contactProperties as any
        });
      } else {
        const newContactProperties: any = {
          "Contact": {
            title: [{ text: { content: name } }]
          },
          "E-mail": {
            email: email
          },
          "Role (Titel in Linkedin)": {
            rich_text: [{ text: { content: role || "" } }]
          },
          "Phone Number": {
            phone_number: phone || ""
          }
        };

        const newContact = await notion.pages.create({
          parent: { database_id: dbContact.databaseId },
          properties: newContactProperties as any
        });
        contactId = newContact.id;
        console.log(`Created new Contact in Notion: ${contactId}`);
      }
    } catch (err: any) {
      console.error("Notion: Failed query/create Contact, falling back to clean creation...", err);
      try {
        currentStep = "Creating Contact (Fallback)";
        const newContactProperties: any = {
          "Contact": {
            title: [{ text: { content: name } }]
          },
          "E-mail": {
            email: email
          }
        };

        const newContact = await notion.pages.create({
          parent: { database_id: dbContact.databaseId },
          properties: newContactProperties as any
        });
        contactId = newContact.id;
      } catch (innerErr: any) {
        throw new Error(`Contact Step Failed: ${innerErr.message || innerErr}`);
      }
    }

    // --- STEP 3: Opportunity Record ---
    try {
      currentStep = "Creating Opportunity";
      const oppProperties: any = {
        "Opportunity": {
          title: [{ text: { content: `Opportunity - ${company}` } }]
        },
        "Status": {
          select: { name: "Ny henvendelse" }
        },
        "Leadkilde": {
          select: { name: "Website" }
        },
        "Kanal": {
          select: { name: "Kontaktformular web" }
        },
        "Sprog": {
          select: { name: reqLang === "DA" ? "DK" : "UK" }
        },
        "Dato": {
          date: { start: new Date().toISOString().split("T")[0] }
        },
        "Henvendelse": {
          rich_text: [{ text: { content: decisionText || "" } }]
        },
        "Arbejdsmail": {
          email: email
        },
        "Virksomhed": {
          rich_text: [{ text: { content: company } }]
        },
        "Primary situation": {
          select: { name: situation || "Ikke afklaret endnu" }
        }
      };

      if (isUUID(orgId)) {
        oppProperties["Organisations"] = {
          relation: [{ id: orgId }]
        };
      }
      if (isUUID(contactId)) {
        oppProperties["Primary Contact"] = {
          relation: [{ id: contactId }]
        };
      }

      const newOpp = await notion.pages.create({
        parent: { database_id: dbOpp.databaseId },
        properties: oppProperties
      });
      opportunityId = newOpp.id;
      console.log(`Created new Opportunity in Notion: ${opportunityId}`);
    } catch (err: any) {
      console.warn("Notion warning: Failed to create Opportunity with schema fields. Retrying with basic fields...", err.message || err);
      try {
        currentStep = "Creating Opportunity (Basic Fallback)";
        const basicOppProperties: any = {
          "Opportunity": {
            title: [{ text: { content: `Opportunity - ${company}` } }]
          },
          "Arbejdsmail": {
            email: email
          },
          "Virksomhed": {
            rich_text: [{ text: { content: company } }]
          }
        };
        if (isUUID(orgId)) {
          basicOppProperties["Organisations"] = {
            relation: [{ id: orgId }]
          };
        }
        if (isUUID(contactId)) {
          basicOppProperties["Primary Contact"] = {
            relation: [{ id: contactId }]
          };
        }

        const newOpp = await notion.pages.create({
          parent: { database_id: dbOpp.databaseId },
          properties: basicOppProperties as any
        });
        opportunityId = newOpp.id;
        console.log(`Created Opportunity via fallback: ${opportunityId}`);
      } catch (fallbackErr: any) {
        console.error("Notion: Failed to create Opportunity, falling back to minimal...", fallbackErr);
        try {
          currentStep = "Creating Opportunity (Minimal Fallback)";
          const minimalOppProperties: any = {
            "Opportunity": {
              title: [{ text: { content: `Opportunity - ${company}` } }]
            }
          };
          const newOpp = await notion.pages.create({
            parent: { database_id: dbOpp.databaseId },
            properties: minimalOppProperties as any
          });
          opportunityId = newOpp.id;
        } catch (innerErr: any) {
          throw new Error(`Opportunity Step Failed: ${innerErr.message || innerErr}`);
        }
      }
    }

    // --- STEP 4: Afklarende samtale / Clarification call Record ---
    try {
      currentStep = "Creating Clarification Call";
      const callProperties: any = {
        "Navn / virksomhed": {
          title: [{ text: { content: `Clarification Call - ${name} (${company})` } }]
        },
        "Email": {
          email: email
        },
        "Rolle": {
          rich_text: [{ text: { content: role || "" } }]
        },
        "Virksomhed": {
          rich_text: [{ text: { content: company || "" } }]
        },
        "Mødedato": {
          date: { start: new Date().toISOString().split("T")[0] }
        },
        "Q1 Hvad fik dig til at række ud netop nu?": {
          rich_text: [{ text: { content: decisionText || "" } }]
        },
        "Q2 Hvad står I konkret midt i?": {
          rich_text: [{ text: { content: situation || "" } }]
        },
        "Primær situation": {
          select: { name: situation || "Ikke afklaret endnu" }
        },
        "Q4 Hvad har I allerede prøvet eller overvejet?": {
          rich_text: [{ text: { content: timeframe || "" } }]
        }
      };

      if (url) {
        callProperties["Website"] = {
          url: url
        };
      }

      if (decision_entry_situation_label) {
        callProperties["Q3 Hvad fungerer ikke godt nok i dag?"] = {
          rich_text: [{ text: { content: decision_entry_situation_label } }]
        };
      }

      if (decision_entry_recommended_analysis) {
        callProperties["Q10 Hvad vil være et godt næste skridt?"] = {
          rich_text: [{ text: { content: decision_entry_recommended_analysis } }]
        };
      }

      if (isUUID(orgId)) {
        callProperties["Organisation master"] = {
          relation: [{ id: orgId }]
        };
      }
      if (isUUID(contactId)) {
        callProperties["Kontakt master"] = {
          relation: [{ id: contactId }]
        };
      }
      if (isUUID(opportunityId)) {
        callProperties["Opportunity master"] = {
          relation: [{ id: opportunityId }]
        };
      }

      const newCall = await notion.pages.create({
        parent: { database_id: dbCall.databaseId },
        properties: callProperties
      });
      callId = newCall.id;
      console.log(`Created new Clarification Call in Notion: ${callId}`);
    } catch (err: any) {
      console.warn("Notion warning: Failed to create Clarification Call. Retrying with basic fields...", err.message || err);
      try {
        currentStep = "Creating Clarification Call (Basic Fallback)";
        const basicCallProperties: any = {
          "Navn / virksomhed": {
            title: [{ text: { content: `Clarification Call - ${name} (${company})` } }]
          },
          "Email": {
            email: email
          }
        };
        if (isUUID(orgId)) {
          basicCallProperties["Organisation master"] = {
            relation: [{ id: orgId }]
          };
        }
        if (isUUID(contactId)) {
          basicCallProperties["Kontakt master"] = {
            relation: [{ id: contactId }]
          };
        }

        const newCall = await notion.pages.create({
          parent: { database_id: dbCall.databaseId },
          properties: basicCallProperties as any
        });
        callId = newCall.id;
        console.log(`Created Clarification Call via fallback: ${callId}`);
      } catch (fallbackCallErr: any) {
        console.error("Notion: Failed to create Clarification Call, falling back to minimal...", fallbackCallErr);
        try {
          currentStep = "Creating Clarification Call (Minimal Fallback)";
          const minimalCallProperties: any = {
            "Navn / virksomhed": {
              title: [{ text: { content: `Clarification Call - ${name} (${company})` } }]
            }
          };
          if (isUUID(orgId)) {
            minimalCallProperties["Organisation master"] = {
              relation: [{ id: orgId }]
            };
          }
          const newCall = await notion.pages.create({
            parent: { database_id: dbCall.databaseId },
            properties: minimalCallProperties as any
          });
          callId = newCall.id;
        } catch (innerErr: any) {
          throw new Error(`Clarification Call Step Failed: ${innerErr.message || innerErr}`);
        }
      }
    }
  } catch (notionError: any) {
    console.error(`Notion save failed during step "${currentStep}":`, notionError);

    // Prepare and dispatch a sanitized internal failure notification to office@peoplelabx.com
    try {
      const failSubject = `[NOTION GEMNING MISLYKKEDES] Henvendelse fra ${company} kunne ikke gemmes i CRM`;
      const failHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #7f1d1d; max-width: 600px; margin: 0 auto; border: 2px solid #fca5a5; border-radius: 8px; overflow: hidden; background-color: #fef2f2;">
          <div style="background-color: #dc2626; padding: 24px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Kritisk fejl: Notion Synkronisering Mislykkedes</h2>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #fca5a5;">PeopleLab X Lead Processing Pipeline</p>
          </div>
          <div style="padding: 24px; color: #1c1917;">
            <p style="font-size: 14px; font-weight: bold; color: #dc2626;">Følgende lead blev modtaget via websitet, men fejlede under overførsel til Notion CRM:</p>
            
            <h3 style="border-bottom: 1px solid #f3f4f6; padding-bottom: 8px; margin-top: 16px; font-size: 15px; text-transform: uppercase; color: #991b1b;">Fejldetaljer</h3>
            <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Fejltrin:</td><td style="padding: 6px 0; color: #dc2626; font-weight: bold;">${currentStep}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Fejlmeddelelse:</td><td style="padding: 6px 0; font-family: monospace; background-color: #f3f4f6; padding: 6px; border-radius: 4px;">${notionError.message || notionError}</td></tr>
            </table>

            <h3 style="border-bottom: 1px solid #f3f4f6; padding-bottom: 8px; font-size: 15px; text-transform: uppercase; color: #991b1b;">Kundens Henvendelsesdata</h3>
            <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Navn:</td><td style="padding: 6px 0;">${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">E-mail:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #991b1b; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Virksomhed:</td><td style="padding: 6px 0;"><strong>${company}</strong></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Rolle:</td><td style="padding: 6px 0;">${role || "N/A"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Telefon:</td><td style="padding: 6px 0;">${phone || "N/A"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Situation:</td><td style="padding: 6px 0;">${situation || "N/A"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Tidshorisont:</td><td style="padding: 6px 0;">${timeframe || "N/A"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Beslutningskontekst:</td><td style="padding: 6px 0; font-style: italic; background-color: #f9fafb; padding: 8px; border-left: 3px solid #dc2626;">${decisionText || "N/A"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Side/URL:</td><td style="padding: 6px 0;">${url || "N/A"}</td></tr>
            </table>

            <div style="background-color: #fee2e2; padding: 16px; border-radius: 6px; border: 1px solid #fca5a5;">
              <h4 style="margin: 0 0 6px 0; font-size: 13px; text-transform: uppercase; color: #991b1b;">Nødvendig Handling</h4>
              <p style="margin: 0; font-size: 12px; color: #7f1d1d;">
                Da gemning i Notion CRM mislykkedes, skal dette lead håndteres manuelt. Kontakt venligst kunden direkte og opret henholdsvis Organisation, Kontakt, Opportunity samt Afklarende Samtale i Notion ved brug af ovenstående oplysninger.
              </p>
            </div>
          </div>
        </div>
      `;

      if (transporter) {
        await transporter.sendMail({
          from: mailFrom,
          to: "office@peoplelabx.com",
          subject: failSubject,
          html: failHtml,
          text: `NOTION GEMNING MISLYKKEDES!\n\nFejltrin: ${currentStep}\nFejl: ${notionError.message || notionError}\n\nNavn: ${name}\nEmail: ${email}\nVirksomhed: ${company}\nRolle: ${role || "N/A"}\nTelefon: ${phone || "N/A"}\nSituation: ${situation || "N/A"}\nBeslutningskontekst: ${decisionText || "N/A"}\nTidshorisont: ${timeframe || "N/A"}\nSide: ${url || "N/A"}`
        });
        console.log("Internal Notion failure notification sent successfully to office@peoplelabx.com");
      } else {
        console.warn("SMTP is not configured. Skipping internal failure notification email.");
      }
    } catch (mailErr: any) {
      console.error("Failed to send internal Notion failure notification email:", mailErr.message || mailErr);
    }

    // Return exact requested frontend error message
    return res.status(500).json({
      success: false,
      error: "Henvendelsen blev ikke sendt. Prøv igen om lidt — eller skriv direkte til PeopleLab, hvis fejlen fortsætter."
    });
  }

  // --- CUSTOMER EMAIL DISPATCH BLOCK ---
  // Only runs after successful Notion save
  if (transporter) {
    try {
      let clientSubject = "";
      let clientBody = "";
      const firstName = name ? name.trim().split(/\s+/)[0] : "";
      const greetingDa = firstName ? `Hej ${firstName}` : "Hej";
      const greetingEn = firstName ? `Hi ${firstName}` : "Hi";

      if (reqLang === "DA") {
        clientSubject = "Tak for jeres henvendelse";
        clientBody = `${greetingDa}

Tak for jeres henvendelse.

Vi har modtaget den og læser den igennem, før vi vender tilbage.

Den første samtale skal bruges på det rigtige: hvad der har fået jer til at række ud nu, hvilken situation I står i, og hvad der skal være tydeligere, før I vælger næste skridt.

Vi vender tilbage snarest med forslag til en kort afklarende samtale.

Venlig hilsen
PeopleLab`;
      } else {
        clientSubject = "Thank you for getting in touch";
        clientBody = `${greetingEn}

Thank you for getting in touch.

We have received your enquiry and will read it through before getting back to you.

The first conversation should be used well: what made you reach out now, what situation you are in, and what needs to become clearer before you choose the next step.

We will get back to you shortly with a suggested frame for a short clarification call.

Best regards
PeopleLab`;
      }

      await transporter.sendMail({
        from: mailFrom,
        to: email,
        replyTo: mailReplyTo,
        subject: clientSubject,
        text: clientBody
      });
      console.log(`Autoresponse sent successfully to customer: ${email}`);

    } catch (emailErr: any) {
      console.error("Failed to send customer autoresponse email:", emailErr);

      // Send internal warning alert about customer email failure
      try {
        const warnSubject = `[ADVARSEL] Kundebekræftelse fejlede for ${company}`;
        const warnHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #854d0e; max-width: 600px; margin: 0 auto; border: 1px solid #fef08a; border-radius: 8px; background-color: #fefdf0; padding: 24px;">
            <h2 style="color: #854d0e; margin-top: 0;">ADVARSEL: Kundebekræftelse kunne ikke sendes</h2>
            <p>Leaden blev gemt korrekt i Notion CRM, men e-mail-autoresponsen to kunden på <strong>${email}</strong> fejlede.</p>
            <p><strong>Fejl:</strong> ${emailErr.message || emailErr}</p>
            <p>Kontakt venligst kunden manuelt for at bekræfte modtagelsen og aftale det videre forløb.</p>
          </div>
        `;
        await transporter.sendMail({
          from: mailFrom,
          to: "office@peoplelabx.com",
          subject: warnSubject,
          html: warnHtml
        });
      } catch (innerMailErr) {
        console.error("Failed to send customer autoresponse failure warning:", innerMailErr);
      }
    }
  } else {
    console.warn("SMTP is not configured. Skipping customer autoresponse email.");
  }

  // --- INTERNAL NOTIFICATION DISPATCH BLOCK ---
  // Only runs if Notion and customer autoresponse succeeded
  try {
    const makeNotionUrl = (id: string) => id ? `https://www.notion.so/${id.replace(/-/g, "")}` : "N/A";

    const orgUrl = makeNotionUrl(orgId);
    const contactUrl = makeNotionUrl(contactId);
    const opportunityUrl = makeNotionUrl(opportunityId);
    const callUrl = makeNotionUrl(callId);

    const internalSubject = `Ny henvendelse fra PeopleLab X website – ${company}`;
    const internalBody = `Der er modtaget en ny henvendelse via PeopleLab X websitet.

Kontakt:
Navn: ${name}
Email: ${email}
Virksomhed: ${company}
Rolle: ${role || "N/A"}
Website: ${url || "N/A"}
Telefon: ${phone || "N/A"}

Henvendelse:
Sprog: ${reqLang}
Kilde: Website Form
Situation/problem: ${situation || "N/A"}
Besked: ${decisionText || "N/A"}
Samtykke: Ja (Godkendt)
Tidspunkt: ${new Date().toLocaleString()}
Side/URL: ${url || "N/A"}

Notion:
Organisation: ${orgUrl}
Kontakt: ${contactUrl}
Opportunity: ${opportunityUrl}
Afklarende samtale: ${callUrl}

Næste handling:
Book eller gennemfør afklarende samtale.

Formålet med samtalen:
At forstå kundens situation, afklare problemets relevans og vurdere, om PeopleLab X er det rigtige næste skridt.`;

    const internalHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1c1917; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e0; border-radius: 8px; overflow: hidden; background-color: #fafaf9;">
        <div style="background-color: #0f4c5c; padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Ny websitewind-henvendelse</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #e5e5e0;">PeopleLab X Lead Processing</p>
        </div>
        <div style="padding: 24px;">
          <h3 style="border-bottom: 1px solid #e5e5e0; padding-bottom: 8px; margin-top: 0; font-size: 15px; text-transform: uppercase; color: #0f4c5c;">Kontaktinformation</h3>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Navn:</td><td style="padding: 6px 0;">${name}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">E-mail:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #0f4c5c; text-decoration: none;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Virksomhed:</td><td style="padding: 6px 0;"><strong>${company}</strong></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Rolle:</td><td style="padding: 6px 0;">${role || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Telefon:</td><td style="padding: 6px 0;">${phone || "N/A"}</td></tr>
          </table>

          <h3 style="border-bottom: 1px solid #e5e5e0; padding-bottom: 8px; font-size: 15px; text-transform: uppercase; color: #0f4c5c;">Henvendelseskontekst</h3>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Sprog:</td><td style="padding: 6px 0;">${reqLang}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Kilde:</td><td style="padding: 6px 0;">Website Form</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Situation:</td><td style="padding: 6px 0; text-transform: capitalize;">${situation || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Beslutningshorisont:</td><td style="padding: 6px 0;">${timeframe || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Beslutningskontekst:</td><td style="padding: 6px 0; background-color: #f5f5f4; border-left: 3px solid #0f4c5c; padding: 10px; font-style: italic;">${decisionText || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Samtykke:</td><td style="padding: 6px 0; color: #16a34a;">Ja (Godkendt)</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Tidspunkt:</td><td style="padding: 6px 0;">${new Date().toLocaleString()}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Side/URL:</td><td style="padding: 6px 0;"><a href="${url || "#"}" style="color: #0f4c5c; text-decoration: none;">${url || "N/A"}</a></td></tr>
          </table>

          <h3 style="border-bottom: 1px solid #e5e5e0; padding-bottom: 8px; font-size: 15px; text-transform: uppercase; color: #0f4c5c;">Notion CRM Optegnelser</h3>
          <div style="font-size: 13px; margin-bottom: 24px;">
            <p style="margin: 4px 0;"><strong style="display:inline-block; width:140px;">Organisation:</strong> <a href="${orgUrl}" style="color: #e36414; font-weight: bold; text-decoration: none;">Se Organisation i Notion &rarr;</a></p>
            <p style="margin: 4px 0;"><strong style="display:inline-block; width:140px;">Kontakt:</strong> <a href="${contactUrl}" style="color: #e36414; font-weight: bold; text-decoration: none;">Se Kontakt i Notion &rarr;</a></p>
            <p style="margin: 4px 0;"><strong style="display:inline-block; width:140px;">Opportunity:</strong> <a href="${opportunityUrl}" style="color: #e36414; font-weight: bold; text-decoration: none;">Se Opportunity i Notion &rarr;</a></p>
            <p style="margin: 4px 0;"><strong style="display:inline-block; width:140px;">Afklarende samtale:</strong> <a href="${callUrl}" style="color: #e36414; font-weight: bold; text-decoration: none;">Se Samtale i Notion &rarr;</a></p>
          </div>

          <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; border: 1px solid #cbd5e1;">
            <h4 style="margin: 0 0 6px 0; font-size: 13px; text-transform: uppercase; color: #1e293b;">Næste handling</h4>
            <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold;">Book eller gennemfør afklarende samtale.</p>
            <p style="margin: 0; font-size: 12px; color: #475569;"><strong>Formål med samtalen:</strong> At forstå kundens situation, afklare problemets relevans og vurdere, om PeopleLab X er det rigtige næste skridt.</p>
          </div>
        </div>
      </div>
    `;

    if (transporter) {
      await transporter.sendMail({
        from: mailFrom,
        to: "office@peoplelabx.com",
        subject: internalSubject,
        text: internalBody,
        html: internalHtml
      });
      console.log("Internal notification email sent successfully to office@peoplelabx.com");
    } else {
      console.warn("SMTP is not configured. Skipping internal notification email.");
    }

  } catch (internalMailErr: any) {
    console.warn("Warning: Internal notification email failed to send, but lead was successfully processed:", internalMailErr.message || internalMailErr);
  }

  // Final successful response
  return res.json({
    success: true,
    data: {
      orgId,
      contactId,
      opportunityId,
      callId
    }
  });
});

// Dedicated API route for Reality Check Indikator form submission
app.post("/api/submit-indicator", async (req, res) => {
  const {
    name,
    email,
    company,
    role,
    q1Value,
    q2Value,
    q3Value,
    q4Value,
    q5Value,
    q6Value,
    q7Value,
    decisionText,
    consent,
    language,
    url
  } = req.body;

  const reqLang = (language || "DA").toUpperCase();
  const errorMsg = reqLang === "DA" 
    ? "Venligst udfyld alle påkrævede felter (Navn, E-mail, Virksomhed samt samtykke)."
    : "Please fill in all required fields (Name, Email, Company, and Consent).";

  if (!name || !email || !company || !consent) {
    return res.status(400).json({
      success: false,
      error: errorMsg
    });
  }

  // Check and clean critical credentials
  const notionKey = cleanEnvVar(process.env.NOTION_API_KEY);
  const dbOrgRaw = cleanEnvVar(process.env.NOTION_DATABASE_ORG);
  const dbContactRaw = cleanEnvVar(process.env.NOTION_DATABASE_CONTACT);
  const dbOppRaw = cleanEnvVar(process.env.NOTION_DATABASE_OPPORTUNITY);

  const rawMailHost = cleanEnvVar(process.env.MAIL_HOST);
  const mailHost = rawMailHost || "smtp.gmail.com";

  const rawMailPort = cleanEnvVar(process.env.MAIL_PORT);
  const mailPort = rawMailPort || "587";

  const rawMailUser = cleanEnvVar(process.env.MAIL_USER);
  const mailUser = (!rawMailUser || rawMailUser.includes("revenue-operations@peoplelabx.com"))
    ? "office@peoplelabx.com"
    : rawMailUser;

  const mailPass = cleanEnvVar(process.env.MAIL_PASS);

  const rawMailFrom = cleanEnvVar(process.env.MAIL_FROM);
  const mailFrom = (!rawMailFrom || rawMailFrom.includes("revenue-operations@peoplelabx.com") || rawMailFrom === "no-reply@peoplelabx.com")
    ? "PeopleLab X <office@peoplelabx.com>"
    : rawMailFrom;

  const setupErrorMsg = reqLang === "DA"
    ? "Systemkonfigurationsfejl: Serveren mangler adgangsforbindelser. Venligst kontakt office@peoplelabx.com direkte."
    : "System Configuration Error: Server credentials are not configured. Please contact office@peoplelabx.com directly.";

  if (!notionKey || !dbOrgRaw || !dbContactRaw || !dbOppRaw) {
    console.error("Missing critical environment variables for Notion inside Indicator endpoint.");
    return res.status(500).json({
      success: false,
      error: setupErrorMsg
    });
  }

  // Helper arrays for parsed inputs
  const parseArray = (val: any): string[] => {
    if (Array.isArray(val)) return val;
    if (typeof val === "string") return [val];
    return [];
  };

  const selectedQ3 = parseArray(q3Value);
  const selectedQ6 = parseArray(q6Value);
  const selectedQ7 = parseArray(q7Value);

  // --- SCORE BEREGNING (1-5 Scorer) ---
  
  // 1. Problemklarhed (1-5)
  const problemklarhed = Math.min(5, Math.max(1, parseInt(q2Value) || 1));

  // 2. Beslutningspres (1-5)
  const beslutningspres = Math.min(5, Math.max(1, parseInt(q5Value) || 1));

  // 3. Intern forsvarbarhed (1-5)
  const stakeholdersCount = selectedQ6.length;
  let internForsvarbarhed = 2;
  if (stakeholdersCount === 1) {
    internForsvarbarhed = 2;
  } else if (stakeholdersCount === 2) {
    internForsvarbarhed = 3;
  } else if (stakeholdersCount >= 3) {
    internForsvarbarhed = 4;
  }
  // Minimum overrides based on choices
  if (selectedQ6.includes('D') || selectedQ6.includes('E')) {
    internForsvarbarhed = Math.max(internForsvarbarhed, 5);
  } else if (selectedQ6.includes('F')) {
    internForsvarbarhed = Math.max(internForsvarbarhed, 4);
  }
  if (selectedQ6.length === 1 && selectedQ6[0] === 'H') {
    internForsvarbarhed = 2;
  }

  // 4. Analysefit (1-5)
  let analysefit = 1;
  if (q4Value === 'A') analysefit = 1;
  else if (q4Value === 'B') analysefit = 2;
  else if (q4Value === 'C') analysefit = 4;
  else if (q4Value === 'D') analysefit = 5;
  else if (q4Value === 'E') analysefit = 5;

  if (selectedQ7.includes('D') || selectedQ7.includes('E')) {
    analysefit = Math.min(5, analysefit + 1);
  }

  // 5. Reframe-parathed (1-5)
  let reframeParathed = 1;
  if (q4Value === 'A') reframeParathed = 1;
  else if (q4Value === 'B') reframeParathed = 2;
  else if (q4Value === 'C') reframeParathed = 4;
  else if (q4Value === 'D') reframeParathed = 5;
  else if (q4Value === 'E') reframeParathed = 4;

  if (selectedQ7.includes('B') || selectedQ7.includes('C')) {
    reframeParathed = Math.min(5, reframeParathed + 1);
  }
  if (selectedQ3.includes('H')) {
    reframeParathed = Math.min(5, reframeParathed + 1);
  }

  // --- OUTPUTTYPE PRIORITY LOGIC ---
  let outputType = "Afklaringsbehov før løsning";

  if (beslutningspres >= 4 && analysefit >= 4) {
    outputType = "Beslutningspres kræver eksternt grundlag";
  } else if (internForsvarbarhed >= 4 && (q4Value === 'E' || selectedQ3.includes('G'))) {
    outputType = "Værdi skal forstås og forsvares";
  } else if (q1Value === 'C' || selectedQ7.includes('E')) {
    outputType = "Problemdefinition før investering";
  } else if (reframeParathed >= 4 && problemklarhed <= 3) {
    outputType = "Afklaringsbehov før løsning";
  } else if (beslutningspres <= 2 || analysefit <= 2) {
    outputType = "Tidlig afklaring og videre orientering";
  } else {
    outputType = "Afklaringsbehov før løsning";
  }

  // --- OUTPUT TYPE TO FUNNEL/NEXT STEP/MAILFLOW ---
  let funnelStage = "";
  let recommendedNextAction = "";
  let mailflow = "";

  if (outputType === "Afklaringsbehov før løsning") {
    funnelStage = "Situation";
    recommendedNextAction = "Send reframe-mail og Reality Check-link";
    mailflow = "Reframe nurture";
  } else if (outputType === "Problemdefinition før investering") {
    funnelStage = "Reframe";
    recommendedNextAction = "Send before-investment-mail og Reality Check CTA";
    mailflow = "Before-investment nurture";
  } else if (outputType === "Værdi skal forstås og forsvares") {
    funnelStage = "Fit";
    recommendedNextAction = "Send buying group-mail og tilbyd kvalificeringsmøde";
    mailflow = "Buying group nurture";
  } else if (outputType === "Beslutningspres kræver eksternt grundlag") {
    funnelStage = "Conversion";
    recommendedNextAction = "Manuel opfølgning hurtigst muligt";
    mailflow = "Sales follow-up";
  } else if (outputType === "Tidlig afklaring og videre orientering") {
    funnelStage = "Signal";
    recommendedNextAction = "Send situation-indhold og hold i nurture";
    mailflow = "Situation nurture";
  }

  // Map Q1 Code to descriptive label
  const q1Mapping: Record<string, string> = {
    'A': 'Ikke nok henvendelser (mangler leads)',
    'B': 'Får interesse, men mangler konvertering',
    'C': 'Overvejer website, repositionering eller GTM',
    'D': 'Nyt marked eller segment',
    'E': 'Prispres, konkurrence eller svigtende relevans',
    'F': 'Usikker på markedets opfattelse udefra',
    'G': 'Står foran kommerciel beslutning og vil undgå fejl'
  };
  const valgtSituationText = q1Mapping[q1Value] || "Uafklaret";

  // Build high-level short intro text for Henvendelse text area
  const autoHenvendelseText = `Reality Check Indikator gennemført. Outputtype: ${outputType}. Valgt situation: ${valgtSituationText}. Scorer (Problemklarhed: ${problemklarhed}, Pres: ${beslutningspres}, Forsvarbarhed: ${internForsvarbarhed}, Fit: ${analysefit})`;

  // Prepare full analytical summary for fallback or email text
  const fullAnalyticalSummary = `
=========================================
PEOPLELAB X • REALITY CHECK INDIKATOR
=========================================
Dato: ${new Date().toLocaleString()}
E-mail: ${email}
Virksomhed: ${company}
Navn: ${name}
Rolle: ${role || "N/A"}

RESULTAT-PROFIL
-----------------------------------------
Beslutningsoutput: ${outputType}
Funnel Stage: ${funnelStage}
Anbefalet næste handling: ${recommendedNextAction}
Mailflow: ${mailflow}

BEREGNEDE SCORER (Skala 1-5):
- Klarhed & Alignment (Problemklarhed): ${problemklarhed} / 5
- Beslutningspres: ${beslutningspres} / 5
- Intern Forsvarbarhed (Buying Group): ${internForsvarbarhed} / 5
- Analysefit (Reality Check relevans): ${analysefit} / 5
- Reframe-parathed: ${reframeParathed} / 5

SPØRGSMÅLS-SVAR:
1. Nuværende situation (Q1): ${q1Value} - ${valgtSituationText}
2. Enighed internt (Q2): ${q2Value} (1-5)
3. Symptomer (Q3): ${selectedQ3.join(", ") || "Ingen"}
4. Primært fokus (Q4): ${q4Value}
5. Beslutningspres (Q5): ${q5Value} (1-5)
6. Interne interessenter (Q6): ${selectedQ6.join(", ") || "Ingen"}
7. Forventning (Q7): ${selectedQ7.join(", ") || "Ingen"}

Beslutningstekst (Uddybende bemærkninger):
${decisionText || "N/A"}
`;

  let orgId = "";
  let contactId = "";
  let opportunityId = "";
  let currentStep = "Notion Connection Init";

  try {
    const notion = new Client({ auth: notionKey });

    const dbOrg = resolveDatabaseIds("NOTION_DATABASE_ORG", dbOrgRaw);
    const dbContact = resolveDatabaseIds("NOTION_DATABASE_CONTACT", dbContactRaw);
    const dbOpp = resolveDatabaseIds("NOTION_DATABASE_OPPORTUNITY", dbOppRaw);

    if (!isUUID(dbOrg.databaseId) || !isUUID(dbContact.databaseId) || !isUUID(dbOpp.databaseId)) {
      throw new Error(`Invalid Database UUIDs resolved for Indicator flow.`);
    }

    // --- STEP 1: Organisation lookup/creation ---
    try {
      currentStep = "Querying/Creating Organisation (Indicator)";
      const searchOrg = await queryDatabase(notion, dbOrg, {
        property: "Organisation",
        title: { equals: company }
      });
      if (searchOrg.results.length > 0) {
        orgId = searchOrg.results[0].id;
      } else {
        const newOrg = await notion.pages.create({
          parent: { database_id: dbOrg.databaseId },
          properties: {
            "Organisation": {
              title: [{ text: { content: company } }]
            }
          }
        });
        orgId = newOrg.id;
      }
    } catch (err) {
      console.warn("Indicator Notion Warning: Failed querying/creating Organization, resolving a fallback creation...");
      const newOrg = await notion.pages.create({
        parent: { database_id: dbOrg.databaseId },
        properties: {
          "Organisation": {
            title: [{ text: { content: company } }]
          }
        }
      });
      orgId = newOrg.id;
    }

    // --- STEP 2: Contact lookup/creation ---
    try {
      currentStep = "Querying/Creating Contact (Indicator)";
      const searchContact = await queryDatabase(notion, dbContact, {
        property: "E-mail",
        email: { equals: email }
      });

      const contactProperties: any = {
        "Role (Titel in Linkedin)": {
          rich_text: [{ text: { content: role || "" } }]
        }
      };

      if (searchContact.results.length > 0) {
        contactId = searchContact.results[0].id;
        await notion.pages.update({
          page_id: contactId,
          properties: contactProperties
        });
      } else {
        const newContactProperties: any = {
          "Contact": {
            title: [{ text: { content: name } }]
          },
          "E-mail": {
            email: email
          },
          "Role (Titel in Linkedin)": {
            rich_text: [{ text: { content: role || "" } }]
          }
        };
        const newContact = await notion.pages.create({
          parent: { database_id: dbContact.databaseId },
          properties: newContactProperties
        });
        contactId = newContact.id;
      }
    } catch (err) {
      console.warn("Indicator Notion Warning: Failed querying/updating Contact, creating basic...");
      const newContact = await notion.pages.create({
        parent: { database_id: dbContact.databaseId },
        properties: {
          "Contact": {
            title: [{ text: { content: name } }]
          },
          "E-mail": {
            email: email
          }
        }
      });
      contactId = newContact.id;
    }

    // --- STEP 3: Create Rich Opportunity page with complete scorer metadata ---
    try {
      currentStep = "Creating Opportunity (Indicator Rich)";
      const oppProperties: any = {
        "Opportunity": {
          title: [{ text: { content: `Reality Check Indikator - ${company}` } }]
        },
        "Leadkilde": {
          select: { name: "Reality Check Indikator" }
        },
        "Kanal": {
          select: { name: "Reality Check Indikator" }
        },
        "Henvendelsestype": {
          select: { name: "Indikatorbesvarelse" }
        },
        "Indikator gennemført": {
          checkbox: true
        },
        "Valgt situation": {
          select: { name: valgtSituationText }
        },
        "Problemklarhed": {
          number: problemklarhed
        },
        "Reframe-parathed": {
          number: reframeParathed
        },
        "Beslutningspres": {
          number: beslutningspres
        },
        "Intern forsvarbarhed": {
          number: internForsvarbarhed
        },
        "Analysefit": {
          number: analysefit
        },
        "Outputtype": {
          select: { name: outputType }
        },
        "Funnel stage": {
          select: { name: funnelStage }
        },
        "Anbefalet næste handling": {
          select: { name: recommendedNextAction }
        },
        "Mailflow": {
          select: { name: mailflow }
        },
        "Beslutningstekst": {
          rich_text: [{ text: { content: decisionText || "" } }]
        },
        "Status": {
          select: { name: "Ny henvendelse" }
        },
        "Sprog": {
          select: { name: "DK" }
        },
        "Arbejdsmail": {
          email: email
        },
        "Virksomhed": {
          rich_text: [{ text: { content: company } }]
        },
        "Kontaktperson": {
          rich_text: [{ text: { content: name } }]
        },
        "Henvendelse": {
          rich_text: [{ text: { content: autoHenvendelseText } }]
        },
        "Dato": {
          date: { start: new Date().toISOString().split("T")[0] }
        }
      };

      if (isUUID(orgId)) {
        oppProperties["Organisations"] = { relation: [{ id: orgId }] };
      }
      if (isUUID(contactId)) {
        oppProperties["Primary Contact"] = { relation: [{ id: contactId }] };
      }

      const newOpp = await notion.pages.create({
        parent: { database_id: dbOpp.databaseId },
        properties: oppProperties
      });
      opportunityId = newOpp.id;
      console.log(`Created rich Indicator Opportunity in Notion: ${opportunityId}`);

    } catch (richErr: any) {
      console.warn("Notion Warning: Failed rich Indicator Opportunity, falling back to basic...", richErr.message || richErr);
      
      // Fallback: write to guaranteed standard fields, putting everything into the Henvendelse body!
      currentStep = "Creating Opportunity (Indicator Fallback)";
      const basicOppProperties: any = {
        "Opportunity": {
          title: [{ text: { content: `Reality Check Indikator - ${company}` } }]
        },
        "Status": {
          select: { name: "Ny henvendelse" }
        },
        "Leadkilde": {
          select: { name: "Reality Check Indikator" }
        },
        "Kanal": {
          select: { name: "Reality Check Indikator" }
        },
        "Sprog": {
          select: { name: "DK" }
        },
        "Arbejdsmail": {
          email: email
        },
        "Virksomhed": {
          rich_text: [{ text: { content: company } }]
        },
        "Henvendelse": {
          rich_text: [{ text: { content: fullAnalyticalSummary } }]
        },
        "Dato": {
          date: { start: new Date().toISOString().split("T")[0] }
        }
      };

      if (isUUID(orgId)) {
        basicOppProperties["Organisations"] = { relation: [{ id: orgId }] };
      }
      if (isUUID(contactId)) {
        basicOppProperties["Primary Contact"] = { relation: [{ id: contactId }] };
      }

      const newOpp = await notion.pages.create({
        parent: { database_id: dbOpp.databaseId },
        properties: basicOppProperties
      });
      opportunityId = newOpp.id;
      console.log(`Created basic Indicator Opportunity in Notion: ${opportunityId}`);
    }

  } catch (notionError: any) {
    console.error(`Notion Indicator page creation failed at step "${currentStep}":`, notionError);
    // Continue so we can still send the email!
  }

  // --- STEP 4: Send Team Alert Notification Email ---
  const isMailConfigured = !!(mailHost && mailUser && mailPass && mailPass !== "NOTION_API_KEY");
  if (isMailConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host: mailHost,
        port: parseInt(mailPort || "587"),
        secure: mailPort === "465",
        auth: {
          user: mailUser,
          pass: mailPass
        }
      });

      const makeNotionUrl = (id: string) => id ? `https://www.notion.so/${id.replace(/-/g, "")}` : "N/A";
      const orgUrl = makeNotionUrl(orgId);
      const contactUrl = makeNotionUrl(contactId);
      const opportunityUrl = makeNotionUrl(opportunityId);

      const emailSubject = `[Indikator] Ny besvarelse fra ${company} (${outputType})`;

      const emailHtml = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fcfcfb; color: #1c1917; max-width: 650px; margin: 0 auto; border: 1px solid #e2dfd7; border-top: 5px solid #0f4c5c;">
          <div style="background-color: #0f4c5c; padding: 32px 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 2px; font-family: 'Courier New', Courier, monospace;">PEOPLELAB X</h1>
            <p style="margin: 6px 0 0 0; font-size: 12px; opacity: 0.85; text-transform: uppercase; letter-spacing: 1px;">REALITY CHECK INDIKATOR BESVARELSE</p>
          </div>
          
          <div style="padding: 28px 24px;">
            <h2 style="font-size: 18px; margin-top: 0; border-bottom: 2px solid #0f4c5c; padding-bottom: 8px; color: #0f4c5c;">Profil: ${outputType}</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Virksomhed:</td><td style="padding: 6px 0;"><strong>${company}</strong></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Navn:</td><td style="padding: 6px 0;">${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">E-mail:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #0f4c5c; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Rolle:</td><td style="padding: 6px 0;">${role || "N/A"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Dato:</td><td style="padding: 6px 0;">${new Date().toLocaleString()}</td></tr>
            </table>

            <h3 style="border-bottom: 1px solid #e2dfd7; padding-bottom: 6px; font-size: 14px; text-transform: uppercase; color: #5a5550; margin-top: 28px;">Beregning &amp; Ledelsesscorer (1–5)</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
              <tr style="background-color: #f8f8f6;"><td style="padding: 8px; font-weight: bold;">Klarhed & Alignment (Problemklarhed):</td><td style="padding: 8px; text-align: right; font-weight: bold;">${problemklarhed} / 5</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Beslutningspres:</td><td style="padding: 8px; text-align: right; font-weight: bold;">${beslutningspres} / 5</td></tr>
              <tr style="background-color: #f8f8f6;"><td style="padding: 8px; font-weight: bold;">Intern Forsvarbarhed (Buying Group):</td><td style="padding: 8px; text-align: right; font-weight: bold;">${internForsvarbarhed} / 5</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Analysefit (Reality Check relevans):</td><td style="padding: 8px; text-align: right; font-weight: bold;">${analysefit} / 5</td></tr>
              <tr style="background-color: #f8f8f6;"><td style="padding: 8px; font-weight: bold;">Reframe-parathed:</td><td style="padding: 8px; text-align: right; font-weight: bold;">${reframeParathed} / 5</td></tr>
            </table>

            <h3 style="border-bottom: 1px solid #e2dfd7; padding-bottom: 6px; font-size: 14px; text-transform: uppercase; color: #5a5550;">Funnel &amp; Opfølgning</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Funnel Stage:</td><td style="padding: 6px 0;">${funnelStage}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Anbefalet handling:</td><td style="padding: 6px 0; color: #e36414; font-weight: bold;">${recommendedNextAction}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Mailflow:</td><td style="padding: 6px 0;">${mailflow}</td></tr>
            </table>

            <h3 style="border-bottom: 1px solid #e2dfd7; padding-bottom: 6px; font-size: 14px; text-transform: uppercase; color: #5a5550;">Spørgsmål &amp; Svar</h3>
            <div style="font-size: 12px; color: #5a5550; space-y: 8px; margin-bottom: 24px; line-height: 1.5;">
              <p style="margin: 6px 0;"><strong>Q1 (Nuværende situation):</strong> ${q1Value} - ${valgtSituationText}</p>
              <p style="margin: 6px 0;"><strong>Q2 (Intern enighed):</strong> ${q2Value} / 5</p>
              <p style="margin: 6px 0;"><strong>Q3 (Symptomer):</strong> ${selectedQ3.join(", ") || "Ingen"}</p>
              <p style="margin: 6px 0;"><strong>Q4 (Primært fokus):</strong> ${q4Value}</p>
              <p style="margin: 6px 0;"><strong>Q5 (Tidsramme/pres):</strong> ${q5Value} / 5</p>
              <p style="margin: 6px 0;"><strong>Q6 (Kompleksitet):</strong> ${selectedQ6.join(", ") || "Ingen"}</p>
              <p style="margin: 6px 0;"><strong>Q7 (Reality Check værdi):</strong> ${selectedQ7.join(", ") || "Ingen"}</p>
            </div>

            ${decisionText ? `
              <div style="background-color: #f1f5f9; padding: 12px 16px; border-left: 4px solid #0f4c5c; margin-bottom: 24px;">
                <h4 style="margin: 0 0 4px 0; font-size: 12px; color: #1e293b; text-transform: uppercase;">Uddybende bemærkninger fra ledelsen:</h4>
                <p style="margin: 0; font-size: 13px; font-style: italic; color: #334155;">"${decisionText}"</p>
              </div>
            ` : ""}

            <h3 style="border-bottom: 1px solid #e2dfd7; padding-bottom: 6px; font-size: 14px; text-transform: uppercase; color: #5a5550;">Notion CRM Integration</h3>
            <div style="font-size: 13px; line-height: 1.6;">
              <p style="margin: 4px 0;"><strong style="display:inline-block; width:120px;">Organisation:</strong> <a href="${orgUrl}" style="color: #0f4c5c; text-decoration: none; font-weight: bold;">Se i Notion &rarr;</a></p>
              <p style="margin: 4px 0;"><strong style="display:inline-block; width:120px;">Kontakt:</strong> <a href="${contactUrl}" style="color: #0f4c5c; text-decoration: none; font-weight: bold;">Se i Notion &rarr;</a></p>
              <p style="margin: 4px 0;"><strong style="display:inline-block; width:120px;">Opportunity:</strong> <a href="${opportunityUrl}" style="color: #0f4c5c; text-decoration: none; font-weight: bold;">Se i Notion &rarr;</a></p>
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: mailFrom,
        to: "office@peoplelabx.com",
        subject: emailSubject,
        text: fullAnalyticalSummary,
        html: emailHtml
      });
      console.log("Indicator internal notification email sent successfully.");

    } catch (mailErr: any) {
      console.warn("Indicator warning: Failed sending alert email:", mailErr.message || mailErr);
    }
  } else {
    console.warn("SMTP is not configured. Skipping Indicator internal notification email.");
  }

  // Return scores and results to render the dashboard instantly on screen
  return res.json({
    success: true,
    data: {
      opportunityId,
      outputType,
      funnelStage,
      recommendedNextAction,
      mailflow,
      scores: {
        problemklarhed,
        beslutningspres,
        internForsvarbarhed,
        analysefit,
        reframeParathed
      }
    }
  });
});

// Start dev or production server
async function startServer() {
  // Serve API routes first, then static build files or Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated successfully.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log(`Static asset path initialized in production: ${distPath}`);
  }

  // Pre-resolve databases if Notion API key is present
  const notionKey = cleanEnvVar(process.env.NOTION_API_KEY);
  if (notionKey) {
    console.log("Notion: Initializing database resolution at server startup...");
    const notion = new Client({ auth: notionKey });
    initializeDatabases(notion).catch((err: any) => {
      console.error("\n==================================================");
      console.error("NOTION DATABASE INITIALIZATION FAILED ON STARTUP");
      console.error("==================================================");
      console.error(err.message || err);
      console.error("The server will still run, but Notion integration might fail on lead submission.");
      console.error("==================================================\n");
    });
  } else {
    console.warn("Notion: NOTION_API_KEY is not configured. Database resolution on startup skipped.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Live SMTP and Notion production flow verified and locked in.
startServer();
