<template>
  <footer class="footer">
    <div class="footer-main">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="footer-logo">
          Dr. Ashish Yadav<span class="dot">.</span>
        </div>
        <p class="footer-tagline">Modern psychiatry, rooted in yogic science.</p>
        <ul class="footer-credentials">
          <li>DNB Neuro-psychiatrist</li>
          <li>Guinness World Record holder</li>
          <li>Internationally certified yoga teacher</li>
        </ul>
        <p class="footer-location">
          <span aria-hidden="true">📍</span> Jaipur, Rajasthan · Online across India
        </p>
        <button class="footer-book" @click="$emit('navigate', 'contact')">Book a consultation</button>
      </div>

      <!-- Link columns -->
      <nav v-for="column in columns" :key="column.title" class="footer-col" :aria-label="column.title">
        <h3 class="footer-col-title">{{ column.title }}</h3>
        <ul>
          <li v-for="link in column.links" :key="link.label">
            <a
              v-if="link.url"
              :href="link.url"
              :target="link.external ? '_blank' : null"
              :rel="link.external ? 'noopener noreferrer' : null"
              class="footer-link"
            >
              {{ link.label }}
            </a>
            <a
              v-else
              :href="link.path || '/'"
              class="footer-link"
              @click.prevent="$emit('navigate', link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer-bottom">
      <span>© {{ year }} Dr. Ashish Yadav. All rights reserved.</span>
      <span class="footer-bottom-links">
        <span>Jaipur, India · Private practice</span>
        <a href="/cancellation-policy" class="footer-link" @click.prevent="$emit('navigate', 'cancellation')">
          Cancellation &amp; refunds
        </a>
        <a href="/privacy" class="footer-link" @click.prevent="$emit('navigate', 'privacy')">Privacy</a>
      </span>
    </div>
  </footer>
</template>

<script setup>
defineEmits(['navigate'])

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Navigate',
    links: [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'about', label: 'About' },
      { id: 'fees', label: 'Consultation fees', path: '/fees' },
      { id: 'adhd', label: 'Adult ADHD assessment', path: '/adult-adhd-assessment' },
      { id: 'resources', label: 'Resources' },
      { id: 'contact', label: 'Book a consultation' },
    ],
  },
  {
    title: 'Self-checks',
    links: [
      { label: 'PHQ-9 mood check', url: '/phq9.html', external: true },
      { label: 'ASRS ADHD self-check', url: '/asrs.html', external: true },
      { label: '2-minute self assessment', url: '/assessment.html', external: true },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'WhatsApp', url: 'https://wa.me/message/75HLOF6Q7MV4A1', external: true },
      { label: 'Instagram', url: 'https://www.instagram.com/drashishyadav/', external: true },
      { label: 'YouTube', url: 'https://www.youtube.com/@drashish', external: true },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/drashishyadav', external: true },
      { label: 'contact@drashishyadav.com', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@drashishyadav.com', external: true },
    ],
  },
]
</script>

<style scoped>
.footer {
  background: var(--sage-800);
  color: var(--sage-100);
}

.footer-main {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem);
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: clamp(2rem, 4vw, 3rem);
}

.footer-logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--white);
}

.dot {
  color: var(--camel-300);
}

.footer-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.0625rem;
  color: var(--sage-200);
  margin: 0.4rem 0 1.25rem;
}

.footer-credentials {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: var(--fs-sm);
}

.footer-credentials li {
  position: relative;
  padding-left: 1rem;
}

.footer-credentials li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--camel-300);
}

.footer-location {
  font-size: var(--fs-sm);
  margin: 0 0 1.25rem;
}

.footer-book {
  border: none;
  cursor: pointer;
  padding: 11px 24px;
  background: var(--camel-200);
  color: var(--ink-900);
  font-size: var(--fs-sm);
  font-weight: 700;
  border-radius: var(--radius-pill);
}

.footer-book:hover {
  background: var(--white);
}

.footer-col-title {
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--camel-300);
  margin: 0.4rem 0 1rem;
}

.footer-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-link {
  color: var(--sage-100);
  font-size: 0.9375rem;
  word-break: break-word;
}

.footer-link:hover {
  color: var(--white);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.footer-bottom {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 1.25rem clamp(1.25rem, 5vw, 4rem) 1.5rem;
  border-top: 1px solid rgba(231, 235, 221, 0.15);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  font-size: var(--fs-sm);
  color: var(--sage-200);
}

.footer-bottom-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}

.footer-bottom .footer-link {
  font-size: var(--fs-sm);
  color: var(--sage-200);
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-col:last-child {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
  }
}
</style>
