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

      <WorkGrid v-else-if="route === 'work'" heading="Clinical Experience" blurb="Comprehensive mental health consultations and treatment across diverse presentations and complexities." />

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

// Pages that have their own URL. Other routes live at "/".
// New paths also need a rewrite in public/_redirects.
const PATHS = {
  fees: '/fees',
  cancellation: '/cancellation-policy',
  adhd: '/adult-adhd-assessment',
  privacy: '/privacy',
  jaipur: '/psychiatrist-in-jaipur',
  jhotwara: '/psychiatrist-in-jhotwara',
  vaishali: '/psychiatrist-in-vaishali-nagar',
  about: '/about',
  book: '/book',
  confirmed: '/booking-confirmed',
}

// Browser tab title and search-result description per page
const DEFAULT_TITLE = 'Dr. Ashish - Psychiatrist'
const META = {
  book: {
    title: 'Book a Consultation | Dr. Ashish Yadav, Psychiatrist in Jaipur',
    description: 'Book an online or in-clinic psychiatry consultation, follow-up or adult ADHD assessment in Jaipur. Pay by Razorpay or UPI.',
  },
  confirmed: {
    title: 'Booking | Dr. Ashish Yadav',
    description: '',
    noindex: true,
  },
  about: {
    title: 'About Dr. Ashish Yadav | Neuro-psychiatrist in Jaipur',
    description: 'Neuro-psychiatrist in Jaipur trained at the Gujarat Institute of Mental Health, certified in psychotherapy by the WPA and a Yoga Alliance RYT-200 yoga teacher.',
  },
  fees: {
    title: 'Psychiatrist Consultation Fees | Dr. Ashish Yadav',
    description: 'Clear consultation fees for online, in-person and home-visit psychiatry consultations in Jaipur, with what every consultation includes.',
  },
  adhd: {
    title: 'Adult ADHD Assessment in Jaipur & Online | Dr. Ashish Yadav',
    description: 'A structured adult ADHD assessment by a neuro-psychiatrist (DNB Psychiatry), online across India or in person in Jaipur, with a written report.',
  },
  cancellation: {
    title: 'Cancellation & Refund Policy | Dr. Ashish Yadav',
    description: 'Rescheduling, cancellation and refund terms for consultations and the adult ADHD assessment.',
  },
  privacy: {
    title: 'Privacy Policy | Dr. Ashish Yadav',
    description: "How Dr. Ashish Yadav's practice collects, uses and protects your information.",
  },
  jaipur: {
    title: 'Psychiatrist in Jaipur | Dr. Ashish Yadav, Jhotwara & Vaishali Nagar',
    description: 'Neuro-psychiatrist (DNB Psychiatry) in Jaipur with clinics in Jhotwara and Vaishali Nagar, home visits and online consultations. English, Hindi and Gujarati.',
  },
  jhotwara: {
    title: 'Psychiatrist in Jhotwara, Jaipur | Dr. Ashish Yadav',
    description: 'Psychiatrist at Shri Ram Hospital, Hanuman Road, Tara Nagar, Jhotwara. Open every day except Wednesday, 1–2 PM and 5–7 PM. Also online.',
  },
  vaishali: {
    title: 'Psychiatrist in Vaishali Nagar, Jaipur | Dr. Ashish Yadav',
    description: 'Psychiatrist at Asha Clinic, Sirsi Road, Vaishali Nagar, opposite DMart. Every day except Wednesday, 10 AM–1 PM. Evenings at Shalby Hospital.',
  },
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
}

watch(route, setMeta, { immediate: true })

window.addEventListener('popstate', () => {
  route.value = routeFromPath(window.location.pathname)
})

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
