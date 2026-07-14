import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const ORG_DB_OLD = "379bebff-03a9-808c-ac4c-000bcdaa0f5a";
const ORG_DB_NEW = "379bebff-03a9-80f1-9dc7-ecb260cc3a65";

async function queryDatabase(databaseId: string, filter: any) {
  return await notion.request<any>({
    path: `databases/${databaseId}/query`,
    method: "post",
    body: {
      filter
    }
  });
}

async function run() {
  console.log("Trying to query old ID...");
  try {
    const q1 = await queryDatabase(ORG_DB_OLD, {
      property: "Organisation",
      title: { equals: "PLX Integration Test" }
    });
    console.log("Query old ID success! Results:", q1.results.length);
  } catch (err: any) {
    console.log("Query old ID failed:", err.message);
  }

  console.log("\nTrying to query new ID...");
  try {
    const q2 = await queryDatabase(ORG_DB_NEW, {
      property: "Organisation",
      title: { equals: "PLX Integration Test" }
    });
    console.log("Query new ID success! Results:", q2.results.length);
  } catch (err: any) {
    console.log("Query new ID failed:", err.message);
  }
}

run();
