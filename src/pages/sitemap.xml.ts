import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { packages } from '../data/packages';
import { articles } from '../data/articles';
import { siteConfig } from '../data/site';

export const GET: APIRoute = () => {
  const base = siteConfig.domain;

  interface SitemapEntry {
    loc: string;
    lastmod?: string;
  }

  const staticUrls: SitemapEntry[] = [
    { loc: `${base}/` },
    { loc: `${base}/tentang-kami/` },
    { loc: `${base}/layanan/` },
    { loc: `${base}/paket/` },
    { loc: `${base}/galeri/` },
    { loc: `${base}/blog/` },
    { loc: `${base}/kontak/` },
    { loc: `${base}/kebijakan-privasi/` },
  ];

  const serviceUrls: SitemapEntry[] = services.map((s) => ({
    loc: `${base}/layanan/${s.slug}/`,
  }));

  const packageUrls: SitemapEntry[] = packages.map((p) => ({
    loc: `${base}/paket/${p.slug}/`,
  }));

  const articleUrls: SitemapEntry[] = articles.map((a) => ({
    loc: `${base}/blog/${a.slug}/`,
    lastmod: a.modifiedDate || a.publishDate,
  }));

  const allEntries: SitemapEntry[] = [
    ...staticUrls,
    ...serviceUrls,
    ...packageUrls,
    ...articleUrls,
  ];

  const urlsXml = allEntries
    .map((entry) => {
      let xml = `  <url>\n    <loc>${entry.loc}</loc>`;
      if (entry.lastmod) {
        xml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
      }
      xml += `\n  </url>`;
      return xml;
    })
    .join('\n');

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>`;

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

