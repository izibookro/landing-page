import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const input = join(root, 'src/assets/icon.png');
const ogImageInput = join(root, 'src/assets/seo/og-image.png');
const publicDir = join(root, 'public');

const pngSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

async function createCircularPng(size, outputPath) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/>
    </svg>`,
  );

  await sharp(input)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(outputPath);
}

async function copyOgImage(outputPath) {
  await copyFile(ogImageInput, outputPath);
}

async function createFaviconSvg(outputPath, pngPath) {
  const pngBase64 = (await sharp(pngPath).png().toBuffer()).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="IziBook">
  <defs>
    <clipPath id="circle">
      <circle cx="256" cy="256" r="256"/>
    </clipPath>
  </defs>
  <image href="data:image/png;base64,${pngBase64}" width="512" height="512" clip-path="url(#circle)"/>
</svg>`;

  await writeFile(outputPath, svg, 'utf8');
}

await mkdir(publicDir, { recursive: true });

for (const { size, name } of pngSizes) {
  await createCircularPng(size, join(publicDir, name));
}

await copyOgImage(join(publicDir, 'og-image.png'));

const chrome512Path = join(publicDir, 'android-chrome-512x512.png');
await createFaviconSvg(join(publicDir, 'favicon.svg'), chrome512Path);

console.log('Generated rounded favicons and og-image.png in public/');
