// Build-time entry used by scripts/prerender.mjs to render each page to HTML
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export { SITE_URL, PATHS, DEFAULT_TITLE, META } from './data/routes.js'

export const render = (route) => renderToString(createSSRApp(App, { initialRoute: route }))
