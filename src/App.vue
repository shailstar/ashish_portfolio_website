<template>
  <div class="app">
    <Nav :route="route" @navigate="handleNavigate" />

    <main>
      <template v-if="route === 'home'">
        <Hero @navigate="handleNavigate" />
        <AboutHero />
        <TreatmentProcess />
        <Services />
        <Bookings />
      </template>

      <WorkGrid v-else-if="route === 'work'" heading="Clinical Experience" blurb="Comprehensive mental health consultations and treatment across diverse presentations and complexities." />

      <AboutHero v-else-if="route === 'about'" />

      <Resources v-else-if="route === 'resources'" />

      <FeesBooking v-else-if="route === 'fees'" @navigate="handleNavigate" />

      <CancellationPolicy v-else-if="route === 'cancellation'" @navigate="handleNavigate" />

      <AdhdAssessment v-else-if="route === 'adhd'" @navigate="handleNavigate" />

      <PrivacyPolicy v-else-if="route === 'privacy'" @navigate="handleNavigate" />
    </main>

    <Footer @navigate="handleNavigate" />

    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
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

// Pages that have their own URL. Other routes live at "/".
// New paths also need a rewrite in public/_redirects.
const PATHS = {
  fees: '/fees',
  cancellation: '/cancellation-policy',
  adhd: '/adult-adhd-assessment',
  privacy: '/privacy',
}

const routeFromPath = (pathname) =>
  Object.keys(PATHS).find((id) => PATHS[id] === pathname.replace(/\/$/, '')) || 'home'

const route = ref(routeFromPath(window.location.pathname))

const syncUrl = (target) => {
  const path = PATHS[target] || '/'
  if (window.location.pathname !== path) {
    window.history.pushState({ route: target }, '', path)
  }
}

window.addEventListener('popstate', () => {
  route.value = routeFromPath(window.location.pathname)
})

const handleNavigate = async (target) => {
  if (target === 'contact') {
    route.value = 'home'
    syncUrl('home')
    await nextTick()
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    return
  }
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
