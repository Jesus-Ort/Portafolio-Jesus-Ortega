/**
 * Sitemap Dinámico (server/routes/sitemap.xml.ts)
 *
 * Genera el sitemap.xml automáticamente con la fecha del último build,
 * evitando que el `lastmod` manual quede desactualizado.
 * Solo se indexan URLs reales: la raíz y el manifiesto LLMs.txt
 * (los anclajes tipo /#projects NO son URLs indexables y se omiten).
 */
export default defineEventHandler((event) => {
  const today = new Date().toISOString().slice(0, 10);
  const baseUrl = 'https://jesusortega.xyz';

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/llms.txt</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;
});