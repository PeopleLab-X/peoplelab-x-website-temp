import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const ORG_DB_NEW = "379bebff-03a9-80f1-9dc7-ecb260cc3a65";

async function run() {
  console.log("Querying with database_id on notion.dataSources.query...");
  try {
    const res = await (notion.dataSources as any).query({
      data_source_id: ORG_DB_NEW,
      filter: {
        property: "Organisation",
        title: { equals: "PeopleLab X Test Company" }
      }
    });
    console.log("Success! Results:", res.results.length);
  } catch (err: any) {
    console.error("Failed:", err.message);
  }
}

run();
