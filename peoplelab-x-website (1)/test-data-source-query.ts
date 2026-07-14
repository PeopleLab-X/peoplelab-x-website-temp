import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

console.log("dataSources type:", typeof notion.dataSources);
if (notion.dataSources) {
  console.log("dataSources keys:", Object.keys(notion.dataSources));
  console.log("query type:", typeof (notion.dataSources as any).query);
}
