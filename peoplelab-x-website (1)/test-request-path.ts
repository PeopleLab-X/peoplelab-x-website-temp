import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const dbId = "379bebff-03a9-80f1-9dc7-ecb260cc3a65"; // Organisations actual ID

async function testPath(path: string) {
  console.log(`Testing path: "${path}"...`);
  try {
    const res = await notion.request<any>({
      path: path,
      method: "post",
      body: {
        filter: {
          property: "Organisation",
          title: { equals: "PLX Integration Test" }
        }
      }
    });
    console.log(`Success! Results count: ${res.results.length}`);
    return true;
  } catch (err: any) {
    console.log(`Failed: [${err.code}] ${err.message}`);
    return false;
  }
}

async function run() {
  const paths = [
    `databases/${dbId}/query`,
    `/v1/databases/${dbId}/query`,
    `v1/databases/${dbId}/query`,
    `databases/${dbId.replace(/-/g, '')}/query`
  ];
  for (const p of paths) {
    await testPath(p);
  }
}

run();
