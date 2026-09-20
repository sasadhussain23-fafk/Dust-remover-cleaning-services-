import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const BEFORE_AFTER_DIR = path.resolve('public/images/before-after');
const SERVICES_DIR = path.resolve('public/images/services');

fs.mkdirSync(BEFORE_AFTER_DIR, { recursive: true });
fs.mkdirSync(SERVICES_DIR, { recursive: true });

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// 4 pairs of BEFORE and AFTER:
// EXACT SAME ITEM GUARANTEE
const comparisons = [
  {
    name: 'sofa',
    title: 'Sofa Cleaning',
    url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=85',
  },
  {
    name: 'carpet',
    title: 'Carpet Cleaning',
    url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&auto=format&fit=crop&q=85',
  },
  {
    name: 'mattress',
    title: 'Mattress Cleaning',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=85',
  },
  {
    name: 'curtain',
    title: 'Curtain Cleaning',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=85',
  },
];

async function processComparisons() {
  console.log('Generating Before & After pairs from identical item sources...');
  for (const item of comparisons) {
    try {
      console.log(`Downloading base photo for ${item.name}...`);
      const baseBuffer = await downloadBuffer(item.url);
      
      // Standardize to 1000x667
      const cleanImg = await sharp(baseBuffer)
        .resize(1000, 667, { fit: 'cover', position: 'center' })
        .toBuffer();

      // AFTER image: rich, vibrant, sanitized
      const afterSvgOverlay = `
        <svg width="1000" height="667" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="24" width="240" height="42" rx="8" fill="rgba(10, 37, 64, 0.85)" stroke="#0D9488" stroke-width="2"/>
          <text x="38" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#2DD4BF">AFTER CLEANING</text>
          <rect x="24" y="605" width="460" height="36" rx="6" fill="rgba(7, 19, 38, 0.85)"/>
          <text x="36" y="628" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#E2E8F0">Demonstration Placeholder • Same item comparison</text>
        </svg>
      `;

      const afterImage = await sharp(cleanImg)
        .modulate({ saturation: 1.15, brightness: 1.05 })
        .composite([{ input: Buffer.from(afterSvgOverlay), top: 0, left: 0 }])
        .jpeg({ quality: 88 })
        .toFile(path.join(BEFORE_AFTER_DIR, `${item.name}-after.jpg`));

      // BEFORE image: exact same image desaturated, slight haze, simulated dust/stains
      const beforeSvgOverlay = `
        <svg width="1000" height="667" xmlns="http://www.w3.org/2000/svg">
          <!-- Dust/stain particles layer -->
          <circle cx="380" cy="340" r="45" fill="rgba(80, 65, 45, 0.28)" />
          <circle cx="520" cy="390" r="60" fill="rgba(70, 55, 40, 0.22)" />
          <circle cx="680" cy="310" r="50" fill="rgba(85, 70, 50, 0.25)" />
          <rect x="24" y="24" width="240" height="42" rx="8" fill="rgba(10, 37, 64, 0.85)" stroke="#E11D48" stroke-width="2"/>
          <text x="38" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FDA4AF">BEFORE CLEANING</text>
          <rect x="24" y="605" width="460" height="36" rx="6" fill="rgba(7, 19, 38, 0.85)"/>
          <text x="36" y="628" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#E2E8F0">Demonstration Placeholder • Same item comparison</text>
        </svg>
      `;

      const beforeImage = await sharp(cleanImg)
        .modulate({ saturation: 0.75, brightness: 0.90 })
        .composite([{ input: Buffer.from(beforeSvgOverlay), top: 0, left: 0 }])
        .jpeg({ quality: 85 })
        .toFile(path.join(BEFORE_AFTER_DIR, `${item.name}-before.jpg`));

      console.log(`Saved ${item.name}-before.jpg and ${item.name}-after.jpg`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err);
    }
  }
}

// 13 Services photos for service cards
const servicesImages = [
  { id: 'sofa-cleaning', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&auto=format&fit=crop&q=80' },
  { id: 'carpet-cleaning', url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=700&auto=format&fit=crop&q=80' },
  { id: 'rug-cleaning', url: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=700&auto=format&fit=crop&q=80' },
  { id: 'upholstery-cleaning', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&auto=format&fit=crop&q=80' },
  { id: 'mattress-cleaning', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&auto=format&fit=crop&q=80' },
  { id: 'curtain-cleaning', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&auto=format&fit=crop&q=80' },
  { id: 'solar-panel-cleaning', url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=700&auto=format&fit=crop&q=80' },
  { id: 'kitchen-cleaning', url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80' },
  { id: 'washroom-cleaning', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&auto=format&fit=crop&q=80' },
  { id: 'office-cleaning', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&auto=format&fit=crop&q=80' },
  { id: 'floor-cleaning', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&auto=format&fit=crop&q=80' },
  { id: 'whole-house-cleaning', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format&fit=crop&q=80' },
  { id: 'fumigation', url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=700&auto=format&fit=crop&q=80' },
];

async function processServices() {
  console.log('Downloading service card photos...');
  for (const item of servicesImages) {
    try {
      const buf = await downloadBuffer(item.url);
      await sharp(buf)
        .resize(640, 420, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 80 })
        .toFile(path.join(SERVICES_DIR, `${item.id}.jpg`));
      console.log(`Saved service: ${item.id}.jpg`);
    } catch (e) {
      console.error(`Error with ${item.id}:`, e.message);
    }
  }
}

async function main() {
  await processComparisons();
  await processServices();
  console.log('All image assets prepared!');
}

main();
