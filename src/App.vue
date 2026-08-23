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
    </main>

    <Footer @navigate="handleNavigate" />
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

const route = ref('home')

const handleNavigate = async (target) => {
  if (target === 'contact') {
    route.value = 'home'
    await nextTick()
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    return
  }
  route.value = target
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
