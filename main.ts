import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My Monday alarm snoozed itself this morning. Even the clock called in sick.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
