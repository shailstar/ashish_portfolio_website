<template>
  <div class="app">
    <!-- Header with Navigation -->
    <header class="header">
      <nav class="nav-container">
        <a href="#home" class="logo">Dr. Ashish Yadav</a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#approach">Approach</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#contact" class="nav-cta">Book Now</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <Hero />
      <!-- <Features />
      <About />
      <Services />
      <Approach />
      <FAQ />
      <Contact /> -->
    </main>

    <!-- Footer -->
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Approach from './components/Approach.vue'
import FAQ from './components/FAQ.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app {
  width: 100%;
}

/* Header Styles */
.header {
  background-color: var(--surface-card);
  padding: var(--space-5) 0;
  box-shadow: var(--shadow-sm);
  border-bottom: var(--border-w) solid var(--border);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(12px);
  background-color: rgba(255, 248, 243, 0.95);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: var(--fw-display);
  color: var(--brand);
  text-decoration: none;
  letter-spacing: var(--ls-tight);
  font-family: var(--font-display);
  cursor: pointer;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--space-7);
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-body);
  text-decoration: none;
  transition: color var(--dur-base) var(--ease-soft);
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--brand);
}

.nav-cta {
  background-color: var(--brand) !important;
  color: var(--text-on-brand) !important;
  padding: var(--space-3) var(--space-5) !important;
  border-radius: var(--radius-pill);
  transition: all var(--dur-base) var(--ease-soft);
}

.nav-cta:hover {
  background-color: var(--brand-hover) !important;
  color: var(--text-on-brand) !important;
  transform: translateY(-2px);
  box-shadow: var(--shadow-brand);
}

/* Main Sections */
main {
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  :root {
    --gutter: var(--space-4);
  }

  .nav-links {
    gap: var(--space-5);
    font-size: var(--fs-sm);
  }

  .logo {
    font-size: 1.25rem;
  }
}
</style>
