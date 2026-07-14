import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

console.log("type of notion.databases:", typeof notion.databases);
console.log("type of notion.databases.query:", typeof (notion.databases as any).query);
console.log("type of notion.databases.retrieve:", typeof (notion.databases as any).retrieve);
console.log("type of notion.request:", typeof notion.request);
