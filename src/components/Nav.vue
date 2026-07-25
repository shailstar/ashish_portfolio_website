<template>
  <header class="header">
    <div class="nav-container">
      <button class="logo" @click="$emit('navigate', 'home')">
        Dr. Ashish Yadav
      </button>

      <nav class="nav-links">
        <template v-for="link in links" :key="link.id">
          <a
            v-if="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :class="['nav-link', 'nav-link-external']"
          >
            {{ link.label }}
          </a>
          <button
            v-else
            :class="['nav-link', { active: route === link.id }]"
            @click="$emit('navigate', link.id)"
          >
            {{ link.label }}
          </button>
        </template>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j"
          target="_blank"
          rel="noopener noreferrer"
          class="button-link"
        >
          Let's talk
        </a>
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
  { id: 'work', label: 'Approach', url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact', url: 'https://wa.me/message/75HLOF6Q7MV4A1' },
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
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  letter-spacing: -0.01em;
  color: var(--text-strong);
  padding: 0;
  transition: color var(--dur-fast) var(--ease-soft);
  white-space: nowrap;
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
  text-decoration: none;
  display: inline-block;
}

.nav-link:hover {
  background: var(--sage-100);
  color: var(--sage-700);
}

.nav-link.active {
  background: var(--sage-100);
  color: var(--sage-700);
}

.nav-link-external {
  border: none;
}

.button-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: var(--brand);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-pill);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft);
}

.button-link:hover {
  background: var(--brand-hover);
}

@media (max-width: 1024px) {
  .header {
    padding: 14px clamp(1rem, 4vw, 3rem);
  }

  .nav-container {
    gap: 1rem;
  }

  .nav-links {
    gap: 2px;
  }

  .nav-link {
    padding: 6px 12px;
    font-size: 0.875rem;
  }

  .button-link {
    padding: 6px 14px;
    font-size: 0.8125rem;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 12px clamp(1rem, 3vw, 2rem);
  }

  .nav-container {
    flex-direction: column;
    gap: 0.75rem;
  }

  .nav-links {
    width: 100%;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
  }

  .nav-link {
    padding: 6px 10px;
    font-size: 0.8125rem;
    border-radius: var(--radius-sm);
  }

  .button-link {
    padding: 8px 16px;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 10px clamp(0.75rem, 2vw, 1.5rem);
  }

  .nav-container {
    gap: 0.5rem;
  }

  .logo {
    font-size: clamp(0.875rem, 2vw, 1.1rem);
  }

  .nav-links {
    gap: 2px;
  }

  .nav-link {
    padding: 4px 8px;
    font-size: 0.75rem;
  }

  .button-link {
    padding: 6px 12px;
    font-size: 0.7rem;
  }
}
</style>
