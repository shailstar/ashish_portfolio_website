<template>
  <div class="app">
    <Nav :route="route" @navigate="route = $event" />

    <main>
      <template v-if="route === 'home'">
        <Hero @navigate="route = $event" />
        <AboutHero />
        <Services />
        <WorkGrid heading="Selected work" blurb="A few recent projects across wellness, health, and the quieter corners of tech." :limit="3" />
        <Contact />
      </template>

      <WorkGrid v-else-if="route === 'work'" heading="All work" blurb="Brand identities, product design, illustration systems and the occasional campaign." />

      <AboutHero v-else-if="route === 'about'" />

      <Contact v-else-if="route === 'contact'" />
    </main>

    <Footer @navigate="route = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import AboutHero from './components/AboutHero.vue'
import Services from './components/Services.vue'
import WorkGrid from './components/WorkGrid.vue'
import Contact from './components/Contact.vue'
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
