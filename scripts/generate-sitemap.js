const fs = require('fs');
const path = require('path');
const { allPosts, allProjects } = require('../.contentlayer/generated');

const baseUrl = 'https://fernandotorres.io';

function generateSitemap() {
  const staticPages = [
    '',
    '/about',
    '/blog',
    '/projects',
    '/contact',
  ];

  const blogPages = allPosts.map((post) => `/blog/${post.slugAsParams}`);
  const projectPages = allProjects.map((project) => `/projects/${project.slugAsParams}`);

  const allPages = [...staticPages, ...blogPages, ...projectPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    const route = page === '' ? '' : page;
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
}

generateSitemap();