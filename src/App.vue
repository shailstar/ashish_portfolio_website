<template>
  <div class="app">
    <Nav :route="route" @navigate="handleNavigate" />

    <main>
      <template v-if="route === 'home'">
        <Hero @navigate="handleNavigate" />
        <AboutHero />
        <TreatmentProcess />
        <Services />
        <Bookings @navigate="handleNavigate" />
      </template>

      <AboutPage v-else-if="route === 'about'" @navigate="handleNavigate" />

      <Resources v-else-if="route === 'resources'" />

      <FeesBooking v-else-if="route === 'fees'" @navigate="handleNavigate" />

      <CancellationPolicy v-else-if="route === 'cancellation'" @navigate="handleNavigate" />

      <AdhdAssessment v-else-if="route === 'adhd'" @navigate="handleNavigate" />

      <PrivacyPolicy v-else-if="route === 'privacy'" @navigate="handleNavigate" />

      <JaipurPage v-else-if="route === 'jaipur'" @navigate="handleNavigate" />

      <ClinicPage v-else-if="route === 'jhotwara'" clinic-id="jhotwara" @navigate="handleNavigate" />

      <ClinicPage v-else-if="route === 'vaishali'" clinic-id="vaishali" @navigate="handleNavigate" />

      <BookPage v-else-if="route === 'book'" @navigate="handleNavigate" />

      <BookingConfirmed v-else-if="route === 'confirmed'" @navigate="handleNavigate" />

      <TalksPage v-else-if="route === 'talks'" />

      <NewsletterPage v-else-if="route === 'newsletter'" />

      <ServicePage v-else-if="SERVICES[route]" :key="route" :service-id="route" @navigate="handleNavigate" />

      <GuidePage v-else-if="GUIDES[route]" :key="route" :guide-id="route" @navigate="handleNavigate" />
    </main>

    <Footer @navigate="handleNavigate" />

    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import AboutHero from './components/AboutHero.vue'
import TreatmentProcess from './components/TreatmentProcess.vue'
import Services from './components/Services.vue'
import Bookings from './components/Bookings.vue'
import Footer from './components/Footer.vue'
import Resources from './components/Resources.vue'
import FeesBooking from './components/FeesBooking.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import CancellationPolicy from './components/CancellationPolicy.vue'
import AdhdAssessment from './components/AdhdAssessment.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import JaipurPage from './components/JaipurPage.vue'
import ClinicPage from './components/ClinicPage.vue'
import AboutPage from './components/AboutPage.vue'
import BookPage from './components/BookPage.vue'
import BookingConfirmed from './components/BookingConfirmed.vue'
import TalksPage from './components/TalksPage.vue'
import NewsletterPage from './components/NewsletterPage.vue'
import ServicePage from './components/ServicePage.vue'
import GuidePage from './components/GuidePage.vue'
import { SERVICES } from './data/services.js'
import { GUIDES } from './data/guides.js'
import { SITE_URL, PATHS, DEFAULT_TITLE, META, routeFromPath } from './data/routes.js'

// Set when prerendering at build time, where there is no browser URL to read
const props = defineProps({ initialRoute: { type: String, default: null } })

const route = ref(props.initialRoute || routeFromPath(window.location.pathname))

const syncUrl = (target) => {
  const path = PATHS[target] || '/'
  if (window.location.pathname !== path) {
    window.history.pushState({ route: target }, '', path)
  }
}

const setMeta = (id) => {
  const meta = META[id]
  document.title = meta?.title || DEFAULT_TITLE
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.name = 'description'
    document.head.appendChild(tag)
  }
  tag.content = meta?.description || ''

  // Keep private pages, like the booking confirmation, out of search results
  let robots = document.querySelector('meta[name="robots"]')
  if (meta?.noindex) {
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = 'noindex, nofollow'
  } else if (robots) {
    robots.remove()
  }

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.href = SITE_URL + (PATHS[id] || '/')
}

// The prerender script writes the head tags itself
if (!import.meta.env.SSR) {
  watch(route, setMeta, { immediate: true })

  window.addEventListener('popstate', () => {
    route.value = routeFromPath(window.location.pathname)
  })
}

const handleNavigate = async (target) => {
  // Every "Book a consultation" button leads to the booking page
  if (target === 'contact') target = 'book'
  route.value = target
  syncUrl(target)
  window.scrollTo(0, 0)
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
