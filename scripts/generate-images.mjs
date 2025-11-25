import sharp from 'sharp';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const imagesDir = join(publicDir, 'images');

// Ensure directories exist
if (!existsSync(imagesDir)) {
  mkdirSync(imagesDir, { recursive: true });
}

// Color palette
const colors = {
  bg: '#0f0f0f',
  bgLight: '#1a1a1a',
  primary: '#f97316',
  primaryDark: '#ea580c',
  text: '#ffffff',
  textGray: '#9ca3af',
};

// Generate OG Image (1200x630)
async function generateOGImage(filename, title, subtitle, accent = colors.primary) {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.bg}"/>
          <stop offset="100%" style="stop-color:${colors.bgLight}"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${accent}"/>
          <stop offset="100%" style="stop-color:${colors.primaryDark}"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Decorative elements -->
      <circle cx="1100" cy="100" r="200" fill="${accent}" opacity="0.1"/>
      <circle cx="100" cy="530" r="150" fill="${accent}" opacity="0.08"/>

      <!-- Accent line -->
      <rect x="80" y="200" width="6" height="230" rx="3" fill="url(#accentGrad)"/>

      <!-- Logo/Initials -->
      <rect x="80" y="80" width="80" height="80" rx="16" fill="${colors.bgLight}" stroke="${accent}" stroke-width="2"/>
      <text x="120" y="135" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="32" fill="${accent}">MH</text>

      <!-- Title -->
      <text x="110" y="280" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="56" fill="${colors.text}">${title}</text>

      <!-- Subtitle -->
      <text x="110" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="${colors.textGray}">${subtitle}</text>

      <!-- Tags -->
      <rect x="110" y="400" width="120" height="40" rx="8" fill="${colors.bgLight}"/>
      <text x="170" y="428" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="${accent}">React</text>

      <rect x="250" y="400" width="120" height="40" rx="8" fill="${colors.bgLight}"/>
      <text x="310" y="428" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="${accent}">Swift</text>

      <rect x="390" y="400" width="120" height="40" rx="8" fill="${colors.bgLight}"/>
      <text x="450" y="428" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="${accent}">Next.js</text>

      <rect x="530" y="400" width="80" height="40" rx="8" fill="${colors.bgLight}"/>
      <text x="570" y="428" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="${accent}">IA</text>

      <!-- Website URL -->
      <text x="110" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="${colors.textGray}">mathishiguinen.fr</text>

      <!-- Border accent -->
      <rect x="0" y="${height - 6}" width="${width}" height="6" fill="url(#accentGrad)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(imagesDir, filename));

  console.log(`✅ Created ${filename}`);
}

// Generate Contact OG Image
async function generateContactOG() {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.bg}"/>
          <stop offset="100%" style="stop-color:${colors.bgLight}"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${colors.primary}"/>
          <stop offset="100%" style="stop-color:${colors.primaryDark}"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Mail icon circle -->
      <circle cx="600" cy="200" r="80" fill="${colors.bgLight}" stroke="${colors.primary}" stroke-width="3"/>
      <text x="600" y="220" text-anchor="middle" font-family="system-ui" font-size="60" fill="${colors.primary}">@</text>

      <!-- Title -->
      <text x="600" y="340" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="52" fill="${colors.text}">Contactez-moi</text>

      <!-- Subtitle -->
      <text x="600" y="400" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="${colors.textGray}">Devis gratuit • Réponse sous 24h</text>

      <!-- Contact info -->
      <text x="600" y="480" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${colors.primary}">mhiguinen235@gmail.com</text>
      <text x="600" y="520" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="${colors.textGray}">06 74 57 86 68</text>

      <!-- Border -->
      <rect x="0" y="${height - 6}" width="${width}" height="6" fill="url(#accentGrad)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(imagesDir, 'og-contact.png'));

  console.log('✅ Created og-contact.png');
}

// Generate Freelance OG Image
async function generateFreelanceOG() {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.bg}"/>
          <stop offset="100%" style="stop-color:${colors.bgLight}"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${colors.primary}"/>
          <stop offset="100%" style="stop-color:${colors.primaryDark}"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Decorative -->
      <circle cx="1050" cy="150" r="180" fill="${colors.primary}" opacity="0.1"/>

      <!-- Stats boxes -->
      <rect x="80" y="80" width="200" height="100" rx="12" fill="${colors.bgLight}"/>
      <text x="180" y="130" text-anchor="middle" font-family="system-ui" font-weight="bold" font-size="36" fill="${colors.primary}">7+</text>
      <text x="180" y="160" text-anchor="middle" font-family="system-ui" font-size="16" fill="${colors.textGray}">Ans d'exp.</text>

      <rect x="300" y="80" width="200" height="100" rx="12" fill="${colors.bgLight}"/>
      <text x="400" y="130" text-anchor="middle" font-family="system-ui" font-weight="bold" font-size="36" fill="${colors.primary}">125+</text>
      <text x="400" y="160" text-anchor="middle" font-family="system-ui" font-size="16" fill="${colors.textGray}">Projets</text>

      <rect x="520" y="80" width="200" height="100" rx="12" fill="${colors.bgLight}"/>
      <text x="620" y="130" text-anchor="middle" font-family="system-ui" font-weight="bold" font-size="36" fill="${colors.primary}">100%</text>
      <text x="620" y="160" text-anchor="middle" font-family="system-ui" font-size="16" fill="${colors.textGray}">Remote</text>

      <!-- Title -->
      <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="48" fill="${colors.text}">Services Freelance</text>

      <!-- Subtitle -->
      <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="${colors.textGray}">Développeur Full-Stack Expert IA &amp; Blockchain</text>

      <!-- Services -->
      <text x="80" y="420" font-family="system-ui" font-size="20" fill="${colors.primary}">• SaaS</text>
      <text x="200" y="420" font-family="system-ui" font-size="20" fill="${colors.primary}">• Apps iOS</text>
      <text x="380" y="420" font-family="system-ui" font-size="20" fill="${colors.primary}">• Extensions Chrome</text>
      <text x="640" y="420" font-family="system-ui" font-size="20" fill="${colors.primary}">• Bots Trading</text>

      <!-- CTA -->
      <rect x="80" y="480" width="280" height="60" rx="12" fill="url(#accentGrad)"/>
      <text x="220" y="520" text-anchor="middle" font-family="system-ui" font-weight="bold" font-size="22" fill="${colors.text}">Demander un devis</text>

      <!-- Border -->
      <rect x="0" y="${height - 6}" width="${width}" height="6" fill="url(#accentGrad)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(imagesDir, 'og-freelance.png'));

  console.log('✅ Created og-freelance.png');
}

// Generate Favicon
async function generateFavicon(size, filename) {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary}"/>
          <stop offset="100%" style="stop-color:${colors.primaryDark}"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="${colors.bg}"/>
      <text x="${size/2}" y="${size * 0.65}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="${size * 0.4}" fill="url(#grad)">MH</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(publicDir, filename));

  console.log(`✅ Created ${filename}`);
}

// Generate ICO file (using 32x32 PNG)
async function generateICO() {
  const size = 32;
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary}"/>
          <stop offset="100%" style="stop-color:${colors.primaryDark}"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="6" fill="${colors.bg}"/>
      <text x="${size/2}" y="${size * 0.68}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="${size * 0.45}" fill="url(#grad)">MH</text>
    </svg>
  `;

  // Create as PNG (browsers support PNG favicons)
  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(publicDir, 'favicon.ico'));

  console.log('✅ Created favicon.ico');
}

// Main execution
async function main() {
  console.log('🎨 Generating images...\n');

  // OG Images
  await generateOGImage('og-image.png', 'Mathis Higuinen', 'Developpeur Full-Stack iOS et Web - 7+ ans experience');
  await generateContactOG();
  await generateFreelanceOG();

  // Favicons
  await generateFavicon(16, 'favicon-16x16.png');
  await generateFavicon(32, 'favicon-32x32.png');
  await generateFavicon(180, 'apple-touch-icon.png');
  await generateFavicon(192, 'android-chrome-192x192.png');
  await generateFavicon(512, 'android-chrome-512x512.png');
  await generateICO();

  console.log('\n✨ All images generated successfully!');
}

main().catch(console.error);
