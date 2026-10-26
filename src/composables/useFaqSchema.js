import { useSSRContext } from 'vue'

// At build time, hands a page's { q, a } questions to scripts/prerender.mjs for the
// FAQPage schema, so the schema always matches what is on the page. Does nothing in the browser.
export const useFaqSchema = (items) => {
  if (!import.meta.env.SSR) return
  const context = useSSRContext()
  context.faqs = [...(context.faqs || []), ...items]
}
