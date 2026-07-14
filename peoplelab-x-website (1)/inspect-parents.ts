import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const testPages = [
  { name: 'Organisation Page (PeopleLab X Test Company)', id: '397bebff-03a9-812b-8693-f1261f14998d' },
  { name: 'Contact Page (Test Lead)', id: '397bebff-03a9-81f6-bca4-ee2cc19f7373' },
  { name: 'Opportunity Page (Opportunity - PeopleLab X Test Company)', id: '397bebff-03a9-81b5-8d6e-fb4ac05eb52b' },
  { name: 'Call Page (Clarification Call)', id: '397bebff-03a9-810d-a7d7-f0e8c7c106bb' }
];

async function run() {
  for (const pageInfo of testPages) {
    console.log(`\n==================================================`);
    console.log(`Retrieving Page: ${pageInfo.name} (ID: ${pageInfo.id})`);
    console.log(`==================================================`);
    try {
      const page = await notion.pages.retrieve({ page_id: pageInfo.id });
      console.log(`Parent structure:`, JSON.stringify(page.parent, null, 2));
      
      if (page.parent.type === 'database_id') {
        const dbId = page.parent.database_id;
        console.log(`Parent Database ID: ${dbId}`);
        try {
          const db = await notion.databases.retrieve({ database_id: dbId });
          console.log(`Database Title:`, 'title' in db ? (db as any).title.map((t: any) => t.plain_text).join('') : 'No title');
          console.log(`Database Properties:`);
          for (const [propName, propVal] of Object.entries(db.properties)) {
            const type = (propVal as any).type;
            let details = '';
            if (type === 'relation') {
              const targetDbId = (propVal as any).relation.database_id;
              details = ` -> target db: ${targetDbId}`;
            } else if (type === 'select') {
              const options = (propVal as any).select.options.map((o: any) => o.name);
              details = ` -> options: [${options.join(', ')}]`;
            } else if (type === 'multi_select') {
              const options = (propVal as any).multi_select.options.map((o: any) => o.name);
              details = ` -> options: [${options.join(', ')}]`;
            } else if (type === 'status') {
              const options = (propVal as any).status.options.map((o: any) => o.name);
              details = ` -> options: [${options.join(', ')}]`;
            }
            console.log(`  - "${propName}": type=${type}${details}`);
          }
        } catch (dbErr: any) {
          console.error(`  Failed to retrieve parent database ${dbId}:`, dbErr.message);
        }
      }
    } catch (err: any) {
      console.error(`Failed to retrieve page ${pageInfo.id}:`, err.message);
    }
  }
}

run();
