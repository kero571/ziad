import { execFileSync } from "node:child_process";
import { readdirSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = "public";

for (const folder of ["wedding", "fashion", "event"]) {
  const inDir = path.join(ROOT, "videos", folder);
  const outDir = path.join(ROOT, "posters", folder);
  mkdirSync(outDir, { recursive: true });

  for (const file of readdirSync(inDir)) {
    if (!/\.(mp4|mov)$/i.test(file)) continue;
    const out = path.join(outDir, `${path.parse(file).name}.webp`);
    if (existsSync(out)) continue;

    execFileSync(
      "ffmpeg",
      [
        "-y",
        "-ss", "0.5",
        "-i", path.join(inDir, file),
        "-frames:v", "1",
        "-vf", "scale=720:-2",
        "-c:v", "libwebp",
        "-quality", "80",
        out,
      ],
      { stdio: "ignore" }
    );
    console.log("✓", out);
  }
}