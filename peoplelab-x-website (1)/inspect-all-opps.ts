import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const oppPageIds = [
  '397bebff-03a9-81b5-8d6e-fb4ac05eb52b',
  '397bebff-03a9-81e9-bfcf-dd41363f6e04',
  '397bebff-03a9-81bc-8269-c2b18ea816a4',
  '397bebff-03a9-81ca-b33a-e9f72cde2fa2',
  '397bebff-03a9-813a-9064-c74f836cdb3a'
];

async function run() {
  for (const id of oppPageIds) {
    console.log(`\n==================================================`);
    console.log(`Inspecting Opportunity Page: ${id}`);
    console.log(`==================================================`);
    try {
      const page = await notion.pages.retrieve({ page_id: id });
      const props = (page as any).properties;
      if (!props) continue;
      
      const selectFields = [
        "Anbefalet næste handling",
        "Outputtype",
        "Funnel stage",
        "Valgt situation",
        "Leadkilde",
        "Kanal",
        "Status",
        "Sprog",
        "Primary situation"
      ];
      
      for (const field of selectFields) {
        const prop = props[field];
        if (prop) {
          console.log(`  - "${field}": type=${prop.type} | value=${prop.type === 'select' ? (prop.select ? prop.select.name : 'empty') : JSON.stringify(prop)}`);
        } else {
          console.log(`  - "${field}": NOT FOUND`);
        }
      }
    } catch (err: any) {
      console.error(`Failed to inspect ${id}:`, err.message);
    }
  }
}

run();
