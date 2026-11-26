import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Introducing anchovy-and-bubblegum surprise: it's chewy, it's salty, and it legally counts as a cry for help in twelve states.";
const outputDir = new URL(`${process.env.MAKEFUN_OUTPUT_DIR || "/output"}/`, import.meta.url);
const outputFile = new URL("entry.txt", outputDir);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, `${line}\n`, "utf8");

const length = readFileSync(outputFile, "utf8").trim().length;
if (length === 0 || length > 200) {
  throw new Error(`Entry must contain 1–200 trimmed characters; found ${length}.`);
}
