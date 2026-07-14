import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function run() {
  const id = '397bebff-03a9-812b-8693-f1261f14998d';
  console.log(`Inspecting properties for Organisation Page: ${id}`);
  const page = await notion.pages.retrieve({ page_id: id });
  const props = (page as any).properties;
  for (const [propName, propVal] of Object.entries(props)) {
    console.log(`  - "${propName}": type=${(propVal as any).type}`);
  }
}

run();
