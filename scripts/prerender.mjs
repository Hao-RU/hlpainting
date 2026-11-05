// After `vite build`: writes a ready-made HTML page for the areas list and
// each suburb (dist/painters/<slug>.html) with its own title and
// description, plus sitemap.xml and robots.txt. Netlify serves a file that
// exists before the catch-all redirect, so these load as real pages; the app
// then takes over in the browser as usual.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
// Netlify sets URL to the site's main address during a build.
const site = (process.env.SITE_URL || process.env.URL || 'https://polarispainting.com.au').replace(/\/+$/, '');

const { render, prerenderPages } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page({ path, title, description }) {
  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
    .replace('</head>', `  <link rel="canonical" href="${site}${path}" />\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);
  if (!html.includes(`${site}${path}`)) throw new Error(`prerender: ${path} did not get its tags`);
  return html;
}

// /painters/chatswood is written as painters/chatswood.html: Netlify serves
// it at the address without a trailing slash, the one every link uses.
const pages = prerenderPages();
for (const p of pages) {
  const file = join(dist, `${p.path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(p));
}

const today = new Date().toISOString().slice(0, 10);
const urls = ['/', '/get-a-quote', ...pages.map((p) => p.path)];
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${site}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nDisallow: /thank-you\n\nSitemap: ${site}/sitemap.xml\n`);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${pages.length} pages for ${site}`);
