<template>
  <div class="app">
    <Nav :route="route" @navigate="route = $event" />

    <main>
      <template v-if="route === 'home'">
        <Hero @navigate="route = $event" />
        <AboutHero />
        <TreatmentProcess />
        <Services />
        <Bookings />
      </template>

      <WorkGrid v-else-if="route === 'work'" heading="All work" blurb="Brand identities, product design, illustration systems and the occasional campaign." />

      <AboutHero v-else-if="route === 'about'" />
    </main>

    <Footer @navigate="route = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import AboutHero from './components/AboutHero.vue'
import TreatmentProcess from './components/TreatmentProcess.vue'
import Services from './components/Services.vue'
import Bookings from './components/Bookings.vue'
import Footer from './components/Footer.vue'

const route = ref('home')
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
