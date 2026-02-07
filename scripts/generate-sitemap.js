#!/usr/bin/env node
/**
 * Dynamic Sitemap Generator for sumansourabh.com
 * Run: node scripts/generate-sitemap.js
 * Outputs: public/sitemap.xml
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.sumansourabh.com';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/resume', changefreq: 'monthly', priority: '0.7' },
  { path: '/resource', changefreq: 'monthly', priority: '0.6' },
  // Case Studies (high priority for SEO)
  { path: '/Projects/Raikar', changefreq: 'monthly', priority: '0.8' },
  { path: '/Projects/CarterRedesign', changefreq: 'monthly', priority: '0.8' },
  { path: '/Projects/uvc', changefreq: 'monthly', priority: '0.8' },
  { path: '/Projects/carterdsp', changefreq: 'monthly', priority: '0.8' },
  { path: '/Projects/cartercampaign', changefreq: 'monthly', priority: '0.8' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');
console.log(`Sitemap generated at ${outputPath} with ${routes.length} URLs`);
