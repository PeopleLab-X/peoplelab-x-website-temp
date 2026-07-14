import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function run() {
  try {
    const response = await notion.search({});
    console.log(`Total search results: ${response.results.length}`);
    for (const result of response.results) {
      const type = result.object;
      let title = 'No title';
      if (type === 'page') {
        const props = (result as any).properties;
        if (props) {
          for (const key of Object.keys(props)) {
            if (props[key].type === 'title') {
              title = props[key].title ? props[key].title.map((t: any) => t.plain_text).join('') : 'No title';
              break;
            }
          }
        }
      } else if (type === 'database') {
        title = (result as any).title ? (result as any).title.map((t: any) => t.plain_text).join('') : 'No title';
      }
      console.log(`- Type: "${type}" | Title: "${title}" | ID: ${result.id}`);
    }
  } catch (err: any) {
    console.error("Search failed:", err.message);
  }
}

run();
