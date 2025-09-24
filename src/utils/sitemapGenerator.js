import { SITE_CONFIG, getBaseUrl } from '../config/siteConfig';
import { routeConfig } from './routeConfig';

export const generateSitemap = () => {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  routeConfig.forEach((route) => {
    const spanishUrl = route.path.es;
    const englishUrl = route.path.en;

    // Priority based on page importance
    let priority = '0.8';
    let changefreq = 'monthly';

    if (spanishUrl === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (spanishUrl === '/carta') {
      priority = '0.9';
      changefreq = 'monthly';
    } else if (spanishUrl === '/contacto') {
      priority = '0.7';
      changefreq = 'yearly';
    }

    sitemap += `
  <url>
    <loc>${baseUrl}${spanishUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${spanishUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${englishUrl}" />
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Function to save sitemap to public folder (for build process)
export const saveSitemap = () => {
  const sitemapContent = generateSitemap();
  // In a real build process, you would write this to public/sitemap.xml
  console.log('Generated sitemap:', sitemapContent);
  return sitemapContent;
};