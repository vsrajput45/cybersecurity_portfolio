import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// pic.png is the authentic transparent cutout of Vivek
// Apply photographic enhancement: enhance contrast, rich saturation, and crisp sharpness
const enhancedCutout = sharp('pic.png')
  .linear(1.15, -8) // Deeper blacks, richer contrast
  .modulate({ brightness: 0.98, saturation: 1.12 }) // Vibrant, healthy skin tone & suit color
  .sharpen({ sigma: 1.2, m1: 1.5, m2: 0.8 }); // Sharp facial details & crisp suit lapels

const cutoutBuffer = await enhancedCutout.png().toBuffer();

// Generate responsive webp portraits for website
for (const w of [1100, 720, 420]) {
  await sharp(cutoutBuffer)
    .resize({ width: w })
    .webp({ quality: 92, alphaQuality: 94 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// -------------------------------------------------------------
// Executive Cinematic Series Poster (1200x630)
// Scaled to fit 630 height exactly so shoulders fill the right side commandingly
const heroPortrait = await sharp(cutoutBuffer)
  .resize({ height: 630 })
  .png()
  .toBuffer();

// Create a rich, cinematic backdrop with dark cyber telemetry and dual rim lights
const backdropSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#05070d"/>
      <stop offset="50%" stop-color="#080c16"/>
      <stop offset="100%" stop-color="#040509"/>
    </linearGradient>

    <!-- Dual Volumetric Light Glows -->
    <radialGradient id="cyanAmbient" cx="20%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Red Rim Light behind Vivek -->
    <radialGradient id="crimsonRim" cx="82%" cy="40%" r="45%">
      <stop offset="0%" stop-color="#e5132b" stop-opacity="0.32"/>
      <stop offset="55%" stop-color="#7a0f24" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Drop Shadow Filter for Text -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.9"/>
    </filter>

    <filter id="glowBadge" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ff3d5a" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Base Canvas -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#cyanAmbient)"/>
  <rect width="1200" height="630" fill="url(#crimsonRim)"/>

  <!-- Subtle Cyber Grid Overlay -->
  <g stroke="#ffffff" stroke-opacity="0.035" stroke-width="1">
    <line x1="80" y1="0" x2="80" y2="630"/>
    <line x1="240" y1="0" x2="240" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="560" y1="0" x2="560" y2="630"/>
    <line x1="0" y1="140" x2="1200" y2="140"/>
    <line x1="0" y1="280" x2="1200" y2="280"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="0" y1="560" x2="1200" y2="560"/>
  </g>

  <!-- Diagonal Light Streak -->
  <path d="M-100 630 L450 0 L550 0 L0 630 Z" fill="#00e5ff" fill-opacity="0.025"/>
  <path d="M600 630 L1150 0 L1250 0 L700 630 Z" fill="#e5132b" fill-opacity="0.03"/>

  <!-- Telemetry Accents -->
  <g font-family="'Courier New', monospace" font-size="10" fill="#64748b" letter-spacing="2">
    <text x="74" y="68">SYS.AUTH // VERIFIED TECH LEAD</text>
    <text x="74" y="582">DELHI NCR  •  NOIDA INTL UNIV  •  BCA 2025–2028</text>
    <circle cx="62" cy="64" r="3" fill="#10b981"/>
  </g>

  <!-- Top Studio Kicker -->
  <g filter="url(#shadow)">
    <rect x="74" y="148" width="168" height="26" rx="13" fill="#1e293b" fill-opacity="0.6" stroke="#ffffff" stroke-opacity="0.15"/>
    <circle cx="88" cy="161" r="3.5" fill="#e5132b"/>
    <text x="100" y="165" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#f8fafc" letter-spacing="3">A VIVEK ORIGINAL</text>
  </g>

  <!-- Main Title: VIVEK -->
  <g filter="url(#shadow)">
    <text x="72" y="295" font-family="Impact, 'Arial Black', sans-serif" font-size="132" font-weight="900" fill="#fbfaf8" letter-spacing="5">VIVEK</text>
  </g>

  <!-- Series Badge: VS SERIES with Crimson Glow Capsule -->
  <g filter="url(#glowBadge)">
    <rect x="74" y="325" width="220" height="46" rx="8" fill="#e5132b" fill-opacity="0.95" stroke="#ff4d6d" stroke-width="1.5"/>
    <text x="96" y="356" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="9">VS SERIES</text>
  </g>

  <!-- Professional Subtitle -->
  <g filter="url(#shadow)">
    <text x="76" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#38bdf8" letter-spacing="4">CYBERSECURITY  •  DATA ANALYTICS  •  SOFTWARE DEV</text>
    <text x="76" y="448" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="13" fill="#94a3b8" letter-spacing="2">SMART SYSTEMS  •  THREAT RECON  •  DECENTRALIZED TRUST</text>
  </g>

  <!-- Subtle bottom vignette shadow -->
  <rect y="520" width="1200" height="110" fill="url(#bgGrad)" fill-opacity="0.8"/>
</svg>
`;

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#05070d' } })
  .composite([
    { input: Buffer.from(backdropSvg) },
    // Anchor portrait firmly on right side with chest-up framing, right aligned
    { input: heroPortrait, left: 725, top: 0 },
  ])
  .jpeg({ quality: 92 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('images built successfully with enhanced executive portrait');


