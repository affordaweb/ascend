import sharp from 'sharp';
import { readdirSync, renameSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '..', 'public', 'images');

const files = readdirSync(imagesDir).filter(f => f.startsWith('illus-') && f.endsWith('.png') && !f.includes('logo') && !f.includes('-nobg'));

for (const file of files) {
  const imgPath = join(imagesDir, file);
  const img = sharp(imgPath);
  const meta = await img.metadata();
  const { width, height } = meta;

  // Get raw pixel data
  const raw = await img.ensureAlpha().raw().toBuffer();

  // Process: make white-ish pixels transparent
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const offset = i * 4;
    const r = raw[offset];
    const g = raw[offset + 1];
    const b = raw[offset + 2];
    const a = raw[offset + 3];
    
    // Threshold: pixels where all channels > 230 are background
    if (r > 230 && g > 230 && b > 230) {
      rgba[offset] = r;
      rgba[offset + 1] = g;
      rgba[offset + 2] = b;
      rgba[offset + 3] = 0;
    } else {
      rgba[offset] = r;
      rgba[offset + 1] = g;
      rgba[offset + 2] = b;
      rgba[offset + 3] = a;
    }
  }

  const outPath = join(imagesDir, file);
  // Write to temp first, then replace
  const tmpPath = join(imagesDir, file.replace('.png', '-tmp.png'));
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(tmpPath);
  
  unlinkSync(imgPath);
  renameSync(tmpPath, outPath);
  
  console.log(`Processed: ${file}`);
}

console.log('Done! All backgrounds removed.');
