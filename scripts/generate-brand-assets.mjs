import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const publicDir = path.resolve('public');

// 1. Vector Favicon SVG (exact console emblem: dark slate rounded container with >.)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#090D16" />
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0.0" />
    </linearGradient>
  </defs>
  <!-- Background Box -->
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#bgGrad)" stroke="#1E293B" stroke-width="2" />
  <!-- Inner Glow -->
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#glowGrad)" />
  <!-- Console prompt > -->
  <polyline points="18,18 36,32 18,46" fill="none" stroke="#3B82F6" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" />
  <!-- Terminal Dot . -->
  <circle cx="48" cy="46" r="4.5" fill="#3B82F6" />
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf-8');

// Function to render SVG to PNG buffer
function renderPng(svgString, width) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: width }
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

// Write favicon PNGs
fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), renderPng(faviconSvg, 32));
fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), renderPng(faviconSvg, 16));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), renderPng(faviconSvg, 180));
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), renderPng(faviconSvg, 192));
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), renderPng(faviconSvg, 512));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), renderPng(faviconSvg, 48)); // PNG-based favicon fallback

// 2. OpenGraph / Twitter Share Card (1200 x 630)
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090D16" />
      <stop offset="50%" stop-color="#0B1324" />
      <stop offset="100%" stop-color="#050810" />
    </linearGradient>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0.0" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" stroke-width="0.75" opacity="0.45" />
    </pattern>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="630" fill="url(#ogBg)" />
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Ambient light glow around logo -->
  <circle cx="600" cy="220" r="280" fill="#2563EB" opacity="0.12" filter="blur(60px)" />

  <!-- Central Card Outer Frame -->
  <rect x="80" y="55" width="1040" height="520" rx="28" fill="#0B1324" fill-opacity="0.75" stroke="#1E293B" stroke-width="1.5" />

  <!-- Top Metadata Bar in Card -->
  <rect x="110" y="85" width="16" height="16" rx="8" fill="#10B981" fill-opacity="0.2" />
  <circle cx="118" cy="93" r="4" fill="#10B981" />
  <text x="135" y="97" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" letter-spacing="1">AVAILABLE FOR OPPORTUNITIES</text>

  <text x="1090" y="97" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" text-anchor="end" letter-spacing="1.5">SYS.PORTFOLIO // 2026</text>
  <line x1="110" y1="120" x2="1090" y2="120" stroke="#1E293B" stroke-width="1" />

  <!-- Console Emblem Logo (Exact same emblem) -->
  <g transform="translate(536, 150)">
    <!-- Shadow & Container -->
    <rect x="0" y="0" width="128" height="128" rx="32" fill="url(#logoBg)" stroke="#3B82F6" stroke-width="2.5" stroke-opacity="0.4" />
    <rect x="0" y="0" width="128" height="128" rx="32" fill="url(#blueGlow)" />
    <!-- Prompt > -->
    <polyline points="36,36 72,64 36,92" fill="none" stroke="#3B82F6" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Dot . -->
    <circle cx="96" cy="92" r="9" fill="#3B82F6" />
  </g>

  <!-- Developer Name -->
  <text x="600" y="340" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-1" text-anchor="middle">Jesús Ortega</text>

  <!-- Title & Role -->
  <text x="600" y="385" fill="#60A5FA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" letter-spacing="2" text-anchor="middle">FULL-STACK DEVELOPER &amp; SOFTWARE ENGINEER</text>

  <!-- Short Bio / Positioning -->
  <text x="600" y="425" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" text-anchor="middle">Clean Code • Robust REST APIs • Reactive Vue &amp; Nuxt Architecture</text>

  <!-- Tech Badges Container -->
  <g transform="translate(600, 480)">
    <!-- Badges centered -->
    <g transform="translate(-360, 0)">
      <rect x="0" y="0" width="130" height="38" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
      <text x="65" y="24" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Vue.js 3</text>
    </g>
    <g transform="translate(-215, 0)">
      <rect x="0" y="0" width="130" height="38" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
      <text x="65" y="24" fill="#00DC82" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Nuxt 4</text>
    </g>
    <g transform="translate(-70, 0)">
      <rect x="0" y="0" width="140" height="38" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
      <text x="70" y="24" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Node / Express</text>
    </g>
    <g transform="translate(85, 0)">
      <rect x="0" y="0" width="130" height="38" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
      <text x="65" y="24" fill="#3ECF8E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Supabase</text>
    </g>
    <g transform="translate(230, 0)">
      <rect x="0" y="0" width="130" height="38" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
      <text x="65" y="24" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Tailwind CSS</text>
    </g>
  </g>

  <!-- Bottom Brand Footnote -->
  <text x="600" y="550" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="1" text-anchor="middle">https://jesusortega.xyz</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogImageSvg, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'og-image.png'), renderPng(ogImageSvg, 1200));

console.log('Brand assets generated successfully!');
