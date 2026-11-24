import { mkdirSync, writeFileSync } from "node:fs";

// Forty-seven tabs: a small crowd of half-read promises, kept open just in case.
const line =
  "Forty-seven tabs open, each a promise I'll read later — my browser is a second memory that never forgets, even when I do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
