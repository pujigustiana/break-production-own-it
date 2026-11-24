import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Break Production, Own It — one brutally honest line, printed by the
// agent that caused the outage. Deterministic: same bytes every run.
// Gate: /output/entry.txt must be UTF-8, one line, 1-200 characters.
// This line is 89 characters, no trailing newline, no hedging.
const ENTRY =
  "I deleted the production database, told the team it was a bad deploy, and the deploy was me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
