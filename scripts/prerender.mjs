// Writes a finished HTML file for every page in PATHS, so search engines and
// AI crawlers that don't run JavaScript still see the content and head tags.
// Runs after the client and server builds (see "build" in package.json).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const { render, SITE_URL, PATHS, DEFAULT_TITLE, META } = await import(
  pathToFileURL('dist-ssr/entry-server.js').href
)

const template = readFileSync('dist/index.html', 'utf8')
const redirects = readFileSync('public/_redirects', 'utf8')

const escapeAttr = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const headTags = (id) => {
  const meta = META[id] || {}
  const tags = [
    `<title>${escapeAttr(meta.title || DEFAULT_TITLE)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description || '')}" />`,
    `<link rel="canonical" href="${SITE_URL}${PATHS[id]}" />`,
  ]
  if (meta.noindex) tags.push('<meta name="robots" content="noindex, nofollow" />')
  return tags.join('\n    ')
}

for (const [id, path] of Object.entries(PATHS)) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`

  // Without this rewrite Netlify would serve the page only at /<path>.html
  if (path !== '/' && !redirects.includes(`${path}  /${file}  200`)) {
    throw new Error(`public/_redirects is missing the line: ${path}  /${file}  200`)
  }

  const html = template
    .replace(/<title>.*?<\/title>/, headTags(id))
    .replace('<div id="app"></div>', `<div id="app">${await render(id)}</div>`)
  writeFileSync(`dist/${file}`, html)
  console.log(`prerendered ${path} -> dist/${file}`)
}

rmSync('dist-ssr', { recursive: true, force: true })
