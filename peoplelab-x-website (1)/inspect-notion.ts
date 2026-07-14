import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

console.log("=== Environment Keys ===");
console.log("NOTION_API_KEY set:", !!process.env.NOTION_API_KEY);
console.log("NOTION_DATABASE_ORG:", process.env.NOTION_DATABASE_ORG);
console.log("NOTION_DATABASE_CONTACT:", process.env.NOTION_DATABASE_CONTACT);
console.log("NOTION_DATABASE_OPPORTUNITY:", process.env.NOTION_DATABASE_OPPORTUNITY);
console.log("NOTION_DATABASE_CALL:", process.env.NOTION_DATABASE_CALL);

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DEFAULT_UUIDS: Record<string, string> = {
  NOTION_DATABASE_ORG: "379bebff-03a9-808c-ac4c-000bcdaa0f5a",
  NOTION_DATABASE_CONTACT: "37bbebff-03a9-8008-b7aa-000b43ddface",
  NOTION_DATABASE_OPPORTUNITY: "37cbebff-03a9-806e-9607-000b26c81f37",
  NOTION_DATABASE_CALL: "b2f4ce75-0a88-4922-8241-cda20b24075c"
};

const MAP_OLD_NAMES: Record<string, string> = {
  "05.17.02 Organisations": "379bebff-03a9-808c-ac4c-000bcdaa0f5a",
  "05.17.03 Contacts": "37bbebff-03a9-8008-b7aa-000b43ddface",
  "05.17.04 Opportunities": "37cbebff-03a9-806e-9607-000b26c81f37",
  "PeopleLab X – Afklarende samtaler": "b2f4ce75-0a88-4922-8241-cda20b24075c"
};

function isUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

function cleanEnvVar(val?: string): string {
  if (!val) return "";
  return val.trim().replace(/^['"]|['"]$/g, "");
}

function getDatabaseUuid(envVarName: string): string {
  const input = process.env[envVarName];
  const cleaned = cleanEnvVar(input);
  const fallbackUuid = DEFAULT_UUIDS[envVarName] || "";

  if (!cleaned) {
    return fallbackUuid;
  }

  if (isUUID(cleaned)) {
    return cleaned;
  }

  for (const [oldName, uuidValue] of Object.entries(MAP_OLD_NAMES)) {
    if (cleaned.toLowerCase() === oldName.toLowerCase()) {
      return uuidValue;
    }
  }

  return fallbackUuid;
}

async function inspectDb(envVarName: string, defaultName: string) {
  const dbId = getDatabaseUuid(envVarName);
  console.log(`\n==================================================`);
  console.log(`Inspecting Database: ${envVarName} (ID: ${dbId})`);
  console.log(`==================================================`);
  
  if (!process.env.NOTION_API_KEY) {
    console.log("NOTION_API_KEY is not defined in the environment!");
    return;
  }

  try {
    const db = await notion.databases.retrieve({ database_id: dbId });
    const title = 'title' in db ? (db as any).title.map((t: any) => t.plain_text).join('') : 'Unnamed';
    console.log(`Live Title: "${title}"`);
    console.log(`Properties:`);
    
    const props = db.properties;
    for (const [propName, propVal] of Object.entries(props)) {
      const type = propVal.type;
      let details = '';
      if (type === 'relation') {
        const databaseId = (propVal as any).relation.database_id;
        details = ` -> target db: ${databaseId}`;
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
  } catch (err: any) {
    console.error(`Error retrieving ${envVarName} (${dbId}):`, err.message);
  }
}

async function run() {
  await inspectDb("NOTION_DATABASE_ORG", "Organisations");
  await inspectDb("NOTION_DATABASE_CONTACT", "Contacts");
  await inspectDb("NOTION_DATABASE_OPPORTUNITY", "Opportunities");
  await inspectDb("NOTION_DATABASE_CALL", "Afklarende samtaler");
}

run();
