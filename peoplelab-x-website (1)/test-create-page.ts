import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const ORG_DS_OLD = "379bebff-03a9-808c-ac4c-000bcdaa0f5a";

async function testWithOldIdAsDatabaseId() {
  console.log("Testing page creation with old ID passed as database_id...");
  try {
    const res = await notion.pages.create({
      parent: { database_id: ORG_DS_OLD },
      properties: {
        "Organisation": {
          title: [{ text: { content: "PLX Integration Test (old ID as database_id)" } }]
        }
      }
    });
    console.log("Success! Page created with ID:", res.id);
    return res.id;
  } catch (err: any) {
    console.error("Failed:", err.message);
    return null;
  }
}

async function run() {
  const id = await testWithOldIdAsDatabaseId();
  if (id) {
    try {
      await notion.pages.update({ page_id: id, in_trash: true } as any);
      console.log("Cleaned up page.");
    } catch {}
  }
}

run();
