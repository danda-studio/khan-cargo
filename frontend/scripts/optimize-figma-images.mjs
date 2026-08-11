/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";

const root = process.cwd();
const dl = path.join(root, "_figma_dl");
const pub = path.join(root, "public");
const images = path.join(pub, "images");

async function toWebp(input, output, { width, quality = 82 } = {}) {
  let pipeline = sharp(input).rotate();
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  await pipeline.webp({ quality }).toFile(output);
  const kb = (fs.statSync(output).size / 1024).toFixed(0);
  const meta = await sharp(output).metadata();
  console.log(`✓ ${path.relative(root, output)} ${meta.width}x${meta.height} ${kb}KB`);
}

async function main() {

  await toWebp(path.join(dl, "hero_raw1.png"), path.join(images, "hero-img.webp"), { width: 1800, quality: 85 });
  await toWebp(path.join(dl, "hero_raw1.png"), path.join(images, "hero-img-sm.webp"), { width: 720, quality: 80 });

  await toWebp(path.join(dl, "bg_raw1.png"), path.join(images, "image-bg.webp"), { width: 2000, quality: 80 });
  await toWebp(path.join(dl, "bg_raw1.png"), path.join(images, "image-bg-sm.webp"), { width: 800, quality: 78 });

  const sols = [
    ["s1a.png", "solution-1"],
    ["s2a.png", "solution-2"],
    ["s3a.png", "solution-3"],
    ["s4a.png", "solution-4"],
  ];
  for (const [src, name] of sols) {
    await toWebp(path.join(dl, src), path.join(images, `${name}.webp`), { width: 1600, quality: 82 });
    await toWebp(path.join(dl, src), path.join(images, `${name}-sm.webp`), { width: 800, quality: 78 });
  }

  await toWebp(path.join(dl, "china_hero_export.png"), path.join(images, "china-delivery", "hero-dock.webp"), { width: 2400, quality: 84 });
  await toWebp(path.join(dl, "china_hero_export.png"), path.join(images, "china-delivery", "hero-dock-sm.webp"), { width: 900, quality: 80 });

  await toWebp(path.join(dl, "turkey3.jpeg"), path.join(images, "turkey-delivery", "hero-highway.webp"), { width: 2400, quality: 84 });
  await toWebp(path.join(dl, "turkey3.jpeg"), path.join(images, "turkey-delivery", "hero-highway-sm.webp"), { width: 900, quality: 80 });

  await toWebp(path.join(dl, "about_hero_export.png"), path.join(images, "about-company", "hero.webp"), { width: 2400, quality: 84 });
  await toWebp(path.join(dl, "about_hero_export.png"), path.join(images, "about-company", "hero-sm.webp"), { width: 900, quality: 80 });

  const favSrc = path.join(dl, "favicon.png");
  const appDir = path.join(root, "src", "app");
  await sharp(favSrc).resize(32, 32).png().toFile(path.join(appDir, "icon.png"));
  await sharp(favSrc).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));
  await sharp(favSrc).resize(192, 192).png().toFile(path.join(pub, "favicon-192.png"));
  await sharp(favSrc).resize(512, 512).png().toFile(path.join(pub, "favicon-512.png"));

  await sharp(favSrc).resize(48, 48).png().toFile(path.join(pub, "favicon.png"));
  console.log("✓ favicons written to src/app and public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
