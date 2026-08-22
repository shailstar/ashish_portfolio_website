<template>
  <section class="treatment-process">
    <div class="process-container">
      <p class="process-eyebrow">
        <span class="eyebrow-rule" aria-hidden="true"></span>
        <span class="eyebrow-dot" aria-hidden="true"></span>
        Treatment Approach
        <span class="eyebrow-dot" aria-hidden="true"></span>
        <span class="eyebrow-rule" aria-hidden="true"></span>
      </p>

      <h2 class="process-headline">
        <span class="headline-lead">Each treatment plan</span> is tailored and may include:
      </h2>

      <ol class="process-grid">
        <li
          v-for="step in steps"
          :key="step.number"
          class="process-card"
          :class="`theme-${step.theme}`"
          :style="{ '--visual-width': step.visualWidth }"
        >
          <div class="card-visual">
            <img
              :src="step.image"
              :width="step.width"
              :height="step.height"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <span class="card-badge">{{ step.number }}</span>

          <h3 class="card-title">
            <span v-for="(line, i) in step.title" :key="i">{{ line }}</span>
          </h3>

          <span class="card-divider" aria-hidden="true"></span>

          <p class="card-text">{{ step.description }}</p>
        </li>
      </ol>

      <div class="process-cta">
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: '01',
    theme: 'stone',
    image: '/process-clinical.webp',
    width: 312,
    height: 323,
    visualWidth: '156px',
    title: ['Clinical Evaluation', '& Diagnosis'],
    description:
      'Comprehensive assessment to understand your condition and establish an accurate diagnosis.'
  },
  {
    number: '02',
    theme: 'ink',
    image: '/process-medication.webp',
    width: 310,
    height: 356,
    visualWidth: '155px',
    title: ['Medication', 'When Required'],
    description:
      'Carefully prescribed and monitored psychiatric medications tailored to your needs.'
  },
  {
    number: '03',
    theme: 'sage',
    image: '/process-behavioural.webp',
    width: 328,
    height: 391,
    visualWidth: '164px',
    title: ['Behavioural', 'Restructuring'],
    description:
      'Targeted interventions to address unhelpful patterns and build resilience.'
  },
  {
    number: '04',
    theme: 'camel',
    image: '/process-yogic.webp',
    width: 320,
    height: 338,
    visualWidth: '160px',
    title: ['Yogic', 'Practices'],
    description:
      'Breathwork (pranayama), awareness training, and lifestyle correction for holistic healing.'
  },
  {
    number: '05',
    theme: 'leaf',
    image: '/process-lotus.webp',
    width: 372,
    height: 246,
    visualWidth: '186px',
    title: ['Long-term', 'Relapse Prevention'],
    description:
      'Ongoing strategies and support to maintain progress and ensure lasting change.'
  }
]
</script>

<style scoped>
.treatment-process {
  padding: clamp(3.5rem, 7vw, 6rem) var(--gutter);
  background-color: var(--bg-page);
}

.process-container {
  max-width: var(--container-xl);
  margin: 0 auto;
}

/* ---------- header ---------- */

.process-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.eyebrow-rule {
  width: clamp(2rem, 7vw, 6.25rem);
  height: 1px;
  background: var(--accent-soft);
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-soft);
  margin-inline: 1rem;
}

.process-headline {
  margin: 0 0 clamp(2.5rem, 4.5vw, 3.75rem);
  text-align: center;
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: var(--fw-regular);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-tight);
  color: var(--text-strong);
  text-wrap: balance;
}

.headline-lead {
  font-weight: var(--fw-display-bold);
}

/* ---------- card grid ---------- */

.process-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.25rem;
}

.process-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.75rem 1.5rem 2.25rem;
  border-radius: var(--radius-lg);
  background: var(--card-bg);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.process-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgb(32 31 26 / 0.12);
}

/* Per-card palette, remapped from the reference onto the design tokens.
   The tints sit a step deeper than the reference's: --paper and the -50 ramp
   steps are all within dE 16 of each other, so reference-weight tints left
   three of the five cards with no visible edge against the page. Every tint
   below clears dE 43 from --paper and dE 56 from its neighbours. */

.theme-stone {
  --card-bg: var(--stone-100);
  --card-accent: var(--accent);
  --card-title: var(--text-strong);
  --card-body: var(--text-body);
}

.theme-ink {
  --card-bg: var(--ink-800);
  --card-accent: var(--camel-400);
  --card-title: var(--text-on-dark);
  --card-body: var(--stone-200);
}

.theme-sage {
  --card-bg: var(--sage-100);
  --card-accent: var(--brand);
  --card-title: var(--text-strong);
  --card-body: var(--text-body);
}

.theme-camel {
  --card-bg: var(--clay-200);
  --card-accent: var(--camel-700);
  --card-title: var(--text-strong);
  --card-body: var(--text-body);
}

.theme-leaf {
  --card-bg: var(--sage-200);
  --card-accent: var(--leaf);
  --card-title: var(--text-strong);
  --card-body: var(--text-body);
}

/* ---------- card contents ---------- */

.card-visual {
  /* tall enough for the fluted sphere, whose render carries a detached
     contact shadow below the object */
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-visual img {
  width: var(--visual-width);
  max-width: 100%;
  height: auto;
  /* the visual box shrinks on small screens; without a height cap the taller
     artworks overflow it and collide with the badge below */
  max-height: 100%;
  object-fit: contain;
}

/* Every artwork ships as a flat rectangle whose background is already matched
   to its card tint, carrying its own baked contact shadow. No CSS drop-shadow
   anywhere here - it would outline the rectangle instead of the object. */

.card-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6875rem;
  height: 2.6875rem;
  margin-top: 1.625rem;
  border-radius: 50%;
  background: var(--card-bg);
  background: color-mix(in srgb, var(--card-accent) 12%, var(--card-bg));
  border: 1px solid var(--card-accent);
  border-color: color-mix(in srgb, var(--card-accent) 45%, var(--card-bg));
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: var(--fw-bold);
  letter-spacing: var(--ls-normal);
  /* the numeral sits on a tint of its own accent, so it needs to run darker
     than the ring and divider to stay legible */
  color: var(--card-accent);
  color: color-mix(in srgb, var(--card-accent) 70%, var(--ink-900));
}

.theme-ink .card-badge {
  color: var(--camel-300);
}

.card-title {
  margin: 1.125rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.1875rem, 1.7vw, 1.375rem);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: var(--ls-tight);
  color: var(--card-title);
}

/* the reference breaks every title over exactly two lines */
.card-title span {
  display: block;
}

.card-divider {
  width: 2.875rem;
  height: 2px;
  margin: 1.125rem 0 1.5rem;
  border-radius: var(--radius-pill);
  background: var(--card-accent);
}

.card-text {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(0.9375rem, 1.15vw, 1rem);
  font-weight: var(--fw-regular);
  line-height: var(--lh-relaxed);
  color: var(--card-body);
}

/* ---------- cta ---------- */

.process-cta {
  display: flex;
  justify-content: center;
  margin-top: clamp(2.5rem, 4vw, 3.5rem);
}

.cta-button {
  display: inline-block;
  padding: clamp(0.875rem, 1.5vw, 1.125rem) clamp(1.75rem, 3vw, 2.75rem);
  border-radius: var(--radius-pill);
  background-color: var(--brand);
  color: var(--text-on-brand);
  font-family: var(--font-sans);
  font-size: clamp(0.8125rem, 1.1vw, 0.875rem);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  text-decoration: none;
  box-shadow: 0 12px 28px rgb(111 126 87 / 0.28);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  background-color: var(--brand-hover);
  box-shadow: 0 16px 34px rgb(111 126 87 / 0.34);
}

/* ---------- responsive ---------- */

/* below the 5-up breakpoint the cards keep their tall proportion and
   become a snap-scrolling row, rather than reflowing into orphan rows */
@media (max-width: 1100px) {
  .process-grid {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: minmax(15.375rem, 1fr);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--gutter);
    margin-inline: calc(var(--gutter) * -1);
    padding-inline: var(--gutter);
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .process-card {
    scroll-snap-align: start;
  }

  .process-card:hover {
    transform: none;
    box-shadow: none;
  }
}

@media (max-width: 600px) {
  .process-card {
    padding: 2.25rem 1.5rem 2rem;
  }

  .card-visual {
    height: 9.5rem;
  }

  .eyebrow-dot {
    margin-inline: 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .process-card,
  .cta-button {
    transition: none;
  }

  .process-card:hover,
  .cta-button:hover {
    transform: none;
  }
}
</style>
