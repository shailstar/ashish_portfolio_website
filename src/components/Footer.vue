<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="footer-logo">
          Dr. Ashish Yadav<span class="dot">.</span>
        </div>
        <p class="footer-tagline">Designing for calm, clear minds. © 2026</p>
      </div>

      <nav class="footer-nav">
        <template v-for="link in links" :key="link.id">
          <a
            v-if="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-nav-link"
          >
            {{ link.label }}
          </a>
          <button
            v-else
            class="footer-nav-link"
            @click="$emit('navigate', link.id)"
          >
            {{ link.label }}
          </button>
        </template>
      </nav>

      <div class="footer-social">
        <a href="https://www.instagram.com/drashishyadav/" target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>
        <a href="https://www.linkedin.com/in/drashishyadav" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
        <a href="https://www.youtube.com/@drashish" target="_blank" rel="noopener noreferrer" class="social-link">YouTube</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishyadav0210@gmail.com" target="_blank" rel="noopener noreferrer" class="social-link">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineEmits(['navigate'])

const links = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Approach', url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
</script>

<style scoped>
.footer {
  background: var(--bg-page);
  border-top: 1px solid var(--border);
}

.footer-content {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--text-strong);
}

.dot {
  color: var(--brand);
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 6px 0 0;
}

.footer-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.footer-nav-link {
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-body);
  padding: 6px 10px;
  text-transform: capitalize;
  transition: color var(--dur-fast) var(--ease-soft);
}

.footer-nav-link:hover {
  color: var(--brand);
}

.footer-social {
  display: flex;
  gap: 10px;
}

.social-link {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ink);
  padding: 8px 14px;
  border: 1.5px solid var(--border-brand);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all var(--dur-fast) var(--ease-soft);
}

.social-link:hover {
  background: var(--sage-100);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
  }

  .footer-nav,
  .footer-social {
    width: 100%;
    justify-content: center;
  }
}
</style>
