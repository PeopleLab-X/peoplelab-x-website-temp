import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const dataSourceId = "379bebff-03a9-808c-ac4c-000bcdaa0f5a"; // Old/Data Source ID

async function run() {
  console.log("Trying to query via notion.dataSources.query with data_source_id for existing org...");
  try {
    const res = await (notion.dataSources as any).query({
      data_source_id: dataSourceId,
      filter: {
        property: "Organisation",
        title: { equals: "PeopleLab X Test Company" }
      }
    });
    console.log("Success! Results count:", res.results.length);
    if (res.results.length > 0) {
      console.log("Found page id:", res.results[0].id);
      console.log("Found page title (plain_text):", res.results[0].properties.Organisation.title[0].plain_text);
    }
  } catch (err: any) {
    console.error("Failed:", err.message);
  }
}

run();
