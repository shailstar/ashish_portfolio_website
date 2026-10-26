// Build-time entry used by scripts/prerender.mjs to render each page to HTML
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export { SITE_URL, PATHS, DEFAULT_TITLE, META } from './data/routes.js'
export { schemaFor } from './data/schema.js'

// Returns the page HTML and the FAQ items the page showed (see AppointmentFAQ.vue)
export const render = async (route) => {
  const context = {}
  const html = await renderToString(createSSRApp(App, { initialRoute: route }), context)
  return { html, faqs: context.faqs || [] }
}
