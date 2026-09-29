// Writes public/sitemap.xml from the static routes + blog posts. Runs automatically before `npm run build`.
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://thetaj.at';
const root = path.join(__dirname, '..');
const postsSource = fs.readFileSync(path.join(root, 'src/content/blog/posts.js'), 'utf8');

const pages = ['', '/about', '/food', '/drinks', '/info', '/blog', '/imprint'].map((p) => ({ loc: p, priority: p === '' ? '1.0' : '0.8' }));

// posts.js is an ES module, so pull the fields out with a regex rather than importing it.
const posts = [...postsSource.matchAll(/slug: '([^']+)',[\s\S]*?published: '([^']+)',(?:\s*updated: '([^']+)',)?/g)].map(([, slug, published, updated]) => ({
  loc: `/blog/${slug}`,
  lastmod: updated || published,
  priority: '0.6',
}));

const urls = [...pages, ...posts]
  .map(({ loc, lastmod, priority }) =>
    [`  <url>`, `    <loc>${SITE_URL}${loc}</loc>`, lastmod && `    <lastmod>${lastmod}</lastmod>`, `    <priority>${priority}</priority>`, `  </url>`].filter(Boolean).join('\n')
  )
  .join('\n');

fs.writeFileSync(
  path.join(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`sitemap.xml: ${pages.length + posts.length} URLs`);
