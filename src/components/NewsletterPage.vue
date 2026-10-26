<template>
  <section class="nl">
    <div class="nl-container">
      <!-- Header -->
      <header class="nl-hero">
        <div class="eyebrow">Weekly newsletter</div>
        <h1 class="nl-title">
          Svadhyaya:
          <em>self-study for a healthier mind and body.</em>
        </h1>
        <p class="nl-meaning">Svādhyāya (Sanskrit): the practice of studying yourself</p>
        <p class="nl-lead">
          One evidence-based idea about how your mind, brain and body work, explained in plain language by a practising
          neuro-psychiatrist and yoga teacher.
        </p>
        <ul class="nl-chips">
          <li>📅 Every Wednesday</li>
          <li>⏱️ 2-minute read</li>
          <li>✉️ Free</li>
        </ul>
        <a :href="NEWSLETTER_URL" target="_blank" rel="noopener noreferrer" class="nl-button">Join free</a>
        <p class="nl-small">Opens the sign-up page in a new tab. Unsubscribe anytime.</p>
      </header>

      <!-- What to expect -->
      <div class="nl-block">
        <div class="eyebrow">What to expect</div>
        <h2 class="nl-h2">
          Small ideas,
          <em>every week.</em>
        </h2>
        <ul class="nl-points">
          <li v-for="point in POINTS" :key="point.title" class="nl-point">
            <span class="nl-point-icon" aria-hidden="true">{{ point.icon }}</span>
            <h3 class="nl-point-title">{{ point.title }}</h3>
            <p>{{ point.text }}</p>
          </li>
        </ul>
      </div>

      <!-- Closing call to action -->
      <div class="nl-block nl-cta">
        <h2 class="nl-h2">
          Start studying
          <em>yourself.</em>
        </h2>
        <p>Join Svadhyaya and get the next issue on Wednesday.</p>
        <a :href="NEWSLETTER_URL" target="_blank" rel="noopener noreferrer" class="nl-button">Join free</a>
        <p class="nl-small">
          By subscribing, you agree to receive Svadhyaya, a weekly email from Dr Ashish Yadav. Your email is never shared.
        </p>
      </div>

      <p class="nl-disclaimer">
        Svadhyaya is for general education only. It is not medical advice and does not replace a consultation or
        treatment.
      </p>
    </div>
  </section>
</template>

<script setup>
import { NEWSLETTER_URL } from '../data/routes.js'

const POINTS = [
  {
    icon: '🧠',
    title: 'One idea per issue',
    text: 'A single, focused idea about the mind, brain or body, so it is easy to remember and use.',
  },
  {
    icon: '🔬',
    title: 'Grounded in evidence',
    text: 'Based on research and clinical practice, not trends or quick fixes.',
  },
  {
    icon: '🧘',
    title: 'Science meets yoga',
    text: 'Where it helps, modern psychiatry sits alongside ideas and practices from yoga.',
  },
  {
    icon: '💬',
    title: 'Plain language',
    text: 'No jargon. Written for anyone curious about their own mind and body.',
  },
]
</script>

<style scoped>
.nl {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.nl-container {
  max-width: var(--container-lg);
  margin: 0 auto;
}

.nl-title,
.nl-h2 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
}

.nl-title em,
.nl-h2 em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.nl-title {
  font-size: var(--fs-h1);
  margin: 1rem 0 0.75rem;
}

.nl-h2 {
  font-size: var(--fs-h2);
  margin: 0.75rem 0 1.5rem;
}

.nl-block {
  margin-top: clamp(3.5rem, 7vw, 5rem);
}

.nl-button {
  display: inline-block;
  padding: 13px 26px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: 0.9375rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: var(--radius-pill);
}

.nl-button:hover {
  background: var(--brand-hover);
}

.nl-small {
  margin: 0.75rem 0 0;
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

/* ---- Hero ---- */
.nl-hero {
  max-width: 820px;
}

.nl-meaning {
  margin: 0 0 1.25rem;
  font-style: italic;
  color: var(--text-muted);
}

.nl-lead {
  font-size: var(--fs-md);
  margin: 0 0 1.25rem;
}

.nl-chips {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nl-chips li {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
}

/* ---- What to expect ---- */
.nl-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.nl-point {
  padding: 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.nl-point-icon {
  font-size: 1.5rem;
}

.nl-point-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0 0.375rem;
}

.nl-point p {
  margin: 0;
  font-size: var(--fs-sm);
}

/* ---- Closing call to action ---- */
.nl-cta {
  padding: clamp(2rem, 5vw, 3rem);
  text-align: center;
  background: linear-gradient(135deg, var(--sage-100), var(--camel-100));
  border-radius: var(--radius-lg);
}

.nl-cta .nl-h2 {
  margin-top: 0;
}

.nl-cta p {
  margin: 0 auto 1.25rem;
  max-width: 560px;
}

.nl-cta .nl-small {
  margin: 0.75rem auto 0;
}

.nl-disclaimer {
  margin: 2.5rem 0 0;
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

@media (max-width: 960px) {
  .nl-points {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .nl-points {
    grid-template-columns: 1fr;
  }
}
</style>
