
// src/app/sitemap.xml/route.ts
const BASE_URL = 'https://www.creatornex.com'; // Replace with your actual domain

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/faqs', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/careers', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
];

const dynamicServiceSlugs = [
    'ai-agents-service',
    'social-media-marketing',
    'influencer-marketing',
    'logo-poster-design',
    'video-editing',
    'web-development',
    'seo-service' 
];

// Placeholder: In a real app, these would be fetched or imported from your blog data source
const allBlogPostsForSitemap = [
  { slug: '/blog/future-of-ai-social-media', date: '2024-10-15' },
  { slug: '/blog/effective-influencer-collaborations', date: '2024-10-10' },
  { slug: '/blog/designing-logos-that-last', date: '2024-10-05' },
  { slug: '/blog/video-thumbnails-engagement', date: '2024-09-28' },
];


export async function GET() {
  let sitemapEntries = staticRoutes.map(route => `
    <url>
      <loc>${BASE_URL}${route.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`).join('');

  dynamicServiceSlugs.forEach(slug => {
    sitemapEntries += `
    <url>
      <loc>${BASE_URL}/services/${slug}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`;
  });

  allBlogPostsForSitemap.forEach(post => {
    sitemapEntries += `
    <url>
      <loc>${BASE_URL}${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`;
  });


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
