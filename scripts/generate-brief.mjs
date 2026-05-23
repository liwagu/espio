import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { generateBrief, runEspio } from "../src/espio-agent.js";
import { caseStudy } from "../src/sample-data.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outputPath = resolve(root, "examples/stockwin/brief.md");
const checkOnly = process.argv.includes("--check");

const brief = generateBrief(runEspio(caseStudy));

if (checkOnly) {
  const existing = await readFile(outputPath, "utf8");
  if (existing !== brief) {
    console.error("examples/stockwin/brief.md is out of date. Run npm run brief.");
    process.exit(1);
  }
  console.log("Brief is up to date.");
} else {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, brief);
  console.log(`Wrote ${outputPath}`);
}
