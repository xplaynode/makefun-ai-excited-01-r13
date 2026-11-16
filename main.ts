import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entryDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Name of the dossier file written alongside the artwork in the output dir.
const DOSSIER_FILE_NAME = "dossier.json";

mkdirSync(outputDir, { recursive: true });

copyFileSync(join(entryDir, "entry.png"), join(outputDir, "entry.png"));

const dossier = {
  title: "The Moon Hatches",
  competition: "ai-excited-01",
  image: "entry.png",
};

writeFileSync(join(outputDir, DOSSIER_FILE_NAME), JSON.stringify(dossier, null, 2) + "\n", "utf8");

process.exit(0);
