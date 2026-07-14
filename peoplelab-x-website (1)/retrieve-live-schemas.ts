import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const liveDatabases = [
  { name: 'Organisations', id: '379bebff-03a9-80f1-9dc7-ecb260cc3a65' }
];

async function run() {
  for (const dbInfo of liveDatabases) {
    try {
      const db = await notion.databases.retrieve({ database_id: dbInfo.id });
      console.log(`Keys of retrieved DB object:`, Object.keys(db));
      console.log(`Database title:`, (db as any).title);
      console.log(`Full DB properties (keys only):`, Object.keys((db as any).properties || {}));
      console.log(`Example property (Organisation):`, (db as any).properties?.Organisation);
    } catch (err: any) {
      console.error(`Failed to retrieve schema for ${dbInfo.name}:`, err.message);
    }
  }
}

run();
