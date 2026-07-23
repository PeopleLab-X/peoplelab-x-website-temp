import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { Client as NotionClient } from '@notionhq/client';
import { Resend } from 'resend';

const PORT = 3000;

// ESM compatibility helpers
let currentDir = process.cwd();
try {
  const filename = fileURLToPath(import.meta.url);
  currentDir = path.dirname(filename);
} catch (e) {
  // Bundled CJS fallback
}

async function startServer() {
  const app = express();

  // Basic middleware
  app.use(cors());
  app.use(express.json());

  // Ensure no X-Robots-Tag: noindex/nofollow header is set
  app.use((req, res, next) => {
    res.removeHeader('X-Robots-Tag');
    next();
  });

  // 1. Canonical Redirect Middleware
  app.use((req, res, next) => {
    const host = req.get('host') || '';
    const hostname = req.hostname;

    // List of non-canonical domains to redirect to canonical https://peoplelabx.com
    const nonCanonicalHosts = [
      'www.peoplelabx.com',
      'peoplelabx.dk',
      'www.peoplelabx.dk'
    ];

    if (nonCanonicalHosts.includes(host) || nonCanonicalHosts.includes(hostname)) {
      return res.redirect(301, `https://peoplelabx.com${req.originalUrl}`);
    }
    next();
  });

  // 2. Health check route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', domain: 'peoplelabx.com' });
  });

  // 3. Contact Form POST route
  app.post('/api/contact', async (req, res) => {
    const { name, company, email, enquiry, website_hp, language } = req.body;

    console.log('Received contact submission:', { name, company, email, language });

    // Honeypot spam protection
    if (website_hp && website_hp.trim() !== '') {
      console.warn('Spam submission filtered via honeypot.');
      return res.json({ success: true, message: 'Spam filtered' });
    }

    let emailSent = false;
    let notionCreated = false;
    let googleChatNotified = false;

    // A. Resend Integration
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const textContent = `
          New B2B Lead from PeopleLab X
          
          Name: ${name}
          Company: ${company}
          Email: ${email}
          Language: ${language || 'DK'}
          
          Enquiry:
          ${enquiry}
        `;

        await resend.emails.send({
          from: 'office@peoplelabx.com',
          to: 'office@peoplelabx.com',
          subject: `New Lead: ${company || name} (PeopleLab X)`,
          text: textContent,
        });
        emailSent = true;
        console.log('Notification email sent successfully');
      } catch (err: any) {
        console.error('Resend send failure:', err.message);
      }
    } else {
      console.warn('RESEND_API_KEY not defined. Skipping email dispatch.');
    }

    // B. Notion Integration
    if (process.env.NOTION_TOKEN && process.env.NOTION_OPPORTUNITIES_DATABASE_ID) {
      try {
        const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });
        await notion.pages.create({
          parent: { database_id: process.env.NOTION_OPPORTUNITIES_DATABASE_ID },
          properties: {
            Name: {
              title: [
                {
                  text: { content: `${name} - ${company}` },
                },
              ],
            },
            Company: {
              rich_text: [
                {
                  text: { content: company || '' },
                },
              ],
            },
            Email: {
              email: email || '',
            },
            Enquiry: {
              rich_text: [
                {
                  text: { content: enquiry || '' },
                },
              ],
            },
            Language: {
              select: {
                name: language || 'DK',
              }
            }
          },
        });
        notionCreated = true;
        console.log('Notion entry created successfully');
      } catch (err: any) {
        console.error('Notion Integration failure (retrying with minimal properties):', err.message);
        // Fallback: Try with just title and rich text properties in case select/email are typed differently
        try {
          const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });
          await notion.pages.create({
            parent: { database_id: process.env.NOTION_OPPORTUNITIES_DATABASE_ID },
            properties: {
              Name: {
                title: [
                  {
                    text: { content: `${name} (${company || 'Private'}) - ${email}` },
                  },
                ],
              }
            },
          });
          notionCreated = true;
          console.log('Notion entry created via fallback successfully');
        } catch (fbErr: any) {
          console.error('Notion fallback failure:', fbErr.message);
        }
      }
    } else {
      console.warn('NOTION_TOKEN or database ID not defined. Skipping Notion creation.');
    }

    // C. Google Chat Webhook Integration
    if (process.env.GOOGLE_CHAT_WEBHOOK_URL) {
      try {
        const chatMessage = {
          text: `*New B2B Lead received from PeopleLab X!*\n\n*Name:* ${name}\n*Company:* ${company || 'N/A'}\n*Email:* ${email}\n*Language:* ${language || 'DK'}\n*Enquiry:*\n_${enquiry}_`
        };

        await fetch(process.env.GOOGLE_CHAT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(chatMessage),
        });
        googleChatNotified = true;
        console.log('Google Chat space notified successfully');
      } catch (err: any) {
        console.error('Google Chat Notification failure:', err.message);
      }
    }

    res.json({
      success: true,
      emailSent,
      notionCreated,
      googleChatNotified
    });
  });

  // Vite Integration & Static File Serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
