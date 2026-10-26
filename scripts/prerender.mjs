// Writes a finished HTML file for every page in PATHS, so search engines and
// AI crawlers that don't run JavaScript still see the content and head tags.
// Runs after the client and server builds (see "build" in package.json).
import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const { render, schemaFor, SITE_URL, PATHS, DEFAULT_TITLE, META } = await import(
  pathToFileURL('dist-ssr/entry-server.js').href
)

const template = readFileSync('dist/index.html', 'utf8')
const redirects = readFileSync('public/_redirects', 'utf8')
const sitemap = readFileSync('public/sitemap.xml', 'utf8')

const escapeAttr = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const headTags = (id, faqs) => {
  const meta = META[id] || {}
  const tags = [
    `<title>${escapeAttr(meta.title || DEFAULT_TITLE)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description || '')}" />`,
    `<link rel="canonical" href="${SITE_URL}${PATHS[id]}" />`,
  ]
  if (meta.noindex) tags.push('<meta name="robots" content="noindex, nofollow" />')

  const schema = schemaFor(id, faqs)
  if (schema) {
    // "<" escaped so text in the data can never close the script tag
    const json = JSON.stringify(schema).replace(/</g, '\\u003c')
    tags.push(`<script type="application/ld+json">${json}</script>`)
  }
  return tags.join('\n    ')
}

for (const [id, path] of Object.entries(PATHS)) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`

  // Without this rewrite Netlify would serve the page only at /<path>.html
  if (path !== '/' && !redirects.includes(`${path}  /${file}  200`)) {
    throw new Error(`public/_redirects is missing the line: ${path}  /${file}  200`)
  }
  if (!META[id]?.noindex && !sitemap.includes(`<loc>${SITE_URL}${path}</loc>`)) {
    throw new Error(`public/sitemap.xml is missing <loc>${SITE_URL}${path}</loc>`)
  }

  const { html: body, faqs } = await render(id)
  const html = template
    .replace(/<title>.*?<\/title>/, () => headTags(id, faqs))
    .replace('<div id="app"></div>', () => `<div id="app">${body}</div>`)
  mkdirSync(dirname(`dist/${file}`), { recursive: true })
  writeFileSync(`dist/${file}`, html)
  console.log(`prerendered ${path} -> dist/${file}`)
}

rmSync('dist-ssr', { recursive: true, force: true })
