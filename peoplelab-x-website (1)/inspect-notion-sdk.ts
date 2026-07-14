import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

console.log("Notion properties:");
console.log("Keys:", Object.keys(notion));
console.log("databases:", typeof notion.databases);
if (notion.databases) {
  console.log("databases keys:", Object.keys(notion.databases));
}
console.log("pages:", typeof notion.pages);
if (notion.pages) {
  console.log("pages keys:", Object.keys(notion.pages));
}
