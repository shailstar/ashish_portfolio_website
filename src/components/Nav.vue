<template>
  <header class="header">
    <div class="nav-container">
      <button class="logo" @click="$emit('navigate', 'home')">
        Ashish<span class="dot">.</span>
      </button>

      <nav class="nav-links">
        <button
          v-for="link in links"
          :key="link.id"
          :class="['nav-link', { active: route === link.id }]"
          @click="$emit('navigate', link.id)"
        >
          {{ link.label }}
        </button>
        <Button variant="primary" size="sm" @click="$emit('navigate', 'contact')">
          Let's talk
        </Button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import Button from './Button.vue'

defineProps({
  route: String,
})

defineEmits(['navigate'])

const links = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px clamp(1.25rem, 5vw, 4rem);
  background: rgba(255, 248, 243, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo {
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: var(--text-strong);
  padding: 0;
  transition: color var(--dur-fast) var(--ease-soft);
}

.logo:hover {
  color: var(--brand);
}

.dot {
  color: var(--brand);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  border: none;
  background: transparent;
  color: var(--text-body);
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}

.nav-link:hover {
  background: var(--sage-100);
  color: var(--sage-700);
}

.nav-link.active {
  background: var(--sage-100);
  color: var(--sage-700);
}
</style>
