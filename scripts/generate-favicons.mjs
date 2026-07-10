import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const input = join(root, 'src/assets/icon.png');
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

async function createOgImage(outputPath) {
  const width = 1200;
  const height = 630;
  const iconSize = 220;

  const icon = await sharp(input)
    .resize(iconSize, iconSize, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${iconSize}" height="${iconSize}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${iconSize / 2}" cy="${iconSize / 2}" r="${iconSize / 2}" fill="#fff"/>
          </svg>`,
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  const background = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1f1f23"/>
          <stop offset="100%" stop-color="#111114"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <text x="50%" y="58%" text-anchor="middle" fill="#fafafa" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700">IziBook</text>
      <text x="50%" y="70%" text-anchor="middle" fill="#a1a1aa" font-family="Arial, Helvetica, sans-serif" font-size="30">Management salon: web si mobil</text>
    </svg>`,
  );

  await sharp(background)
    .composite([
      {
        input: icon,
        top: Math.round((height - iconSize) / 2) - 40,
        left: Math.round((width - iconSize) / 2),
      },
    ])
    .png()
    .toFile(outputPath);
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

await createOgImage(join(publicDir, 'og-image.png'));

const chrome512Path = join(publicDir, 'android-chrome-512x512.png');
await createFaviconSvg(join(publicDir, 'favicon.svg'), chrome512Path);

console.log('Generated rounded favicons and og-image.png in public/');
