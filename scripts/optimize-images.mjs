// One-time image optimizer. Resizes oversized assets to a 2000px cap and
// recompresses (PNG palette q80 = same level imagemin/pngquant already shipped,
// JPEG mozjpeg q82). Run once, then delete this file.
import sharp from "sharp";
import { readdir, stat, rename, writeFile } from "fs/promises";
import { join, extname } from "path";

const ROOTS = ["src/assets"];
const MAX = 2000;
const EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let before = 0, after = 0, n = 0, skipped = 0;
for (const root of ROOTS) {
  for await (const f of walk(root)) {
    const ext = extname(f).toLowerCase();
    if (!EXTS.has(ext)) continue;
    const orig = (await stat(f)).size;
    before += orig;
    try {
      let img = sharp(f, { failOn: "none" }).rotate();
      img = img.resize(MAX, MAX, { fit: "inside", withoutEnlargement: true });
      if (ext === ".png") img = img.png({ palette: true, quality: 80, compressionLevel: 9, effort: 7 });
      else if (ext === ".webp") img = img.webp({ quality: 82 });
      else img = img.jpeg({ quality: 82, mozjpeg: true });
      const buf = await img.toBuffer();
      if (buf.length < orig) {
        const tmp = f + ".tmp";
        await writeFile(tmp, buf);
        await rename(tmp, f);
        after += buf.length;
      } else {
        after += orig; // keep original if we couldn't beat it
      }
      n++;
    } catch (e) {
      console.error("SKIP", f, e.message);
      after += orig;
      skipped++;
    }
  }
}
console.log(`\nOptimized ${n} images (${skipped} skipped): ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`);
