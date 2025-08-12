const fs = require('fs');
const path = require('path');
const { allPosts } = require('../.contentlayer/generated');

const baseUrl = 'https://fernandotn.github.io';
const author = 'Fernando Torres';
const email = 'fertorresnavarrete@gmail.com';

function generateRSS() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fernando Torres - AI Journey Blog</title>
    <description>Insights and thoughts on artificial intelligence, machine learning, and the future of technology.</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>${email} (${author})</managingEditor>
    <webMaster>${email} (${author})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${allPosts
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 20)
      .map((post) => {
        const postUrl = `${baseUrl}/blog/${post.slugAsParams}`;
        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.summary}]]></description>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${email} (${post.author || author})</author>
      ${post.tags?.map((tag) => `<category>${tag}</category>`).join('\n      ') || ''}
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rss);
  console.log('✅ RSS feed generated successfully');
}

generateRSS();
