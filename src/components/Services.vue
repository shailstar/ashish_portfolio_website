<template>
  <section class="services" id="services">
    <div class="services-container">
      <div class="services-header">
        <div class="services-heading">
          <p class="services-eyebrow">Services</p>
          <h2 class="services-title">Care built around<br />the way you actually live.</h2>
        </div>
        <p class="services-subtitle">
          Comprehensive mental health care tailored to your needs — from first
          evaluation to long-term maintenance.
        </p>
      </div>

      <ol class="services-stack">
        <li
          v-for="(service, index) in services"
          :key="service.id"
          class="stack-slot"
          :style="{ '--i': index }"
        >
          <article
            class="service-card"
            :class="`theme-${service.theme}`"
          >
            <header class="card-head">
              <span class="head-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path v-for="(d, i) in service.icon" :key="i" :d="d" />
                </svg>
              </span>
              <h3 class="card-name">{{ service.title }}</h3>
              <span class="card-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            </header>

            <div class="card-body">
              <div class="card-copy">
                <div class="card-lead">
                  <p class="card-description">{{ service.description }}</p>
                  <a
                    :href="bookingUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-cta"
                  >
                    Book this <span aria-hidden="true">→</span>
                  </a>
                </div>

                <ul class="card-points">
                  <li v-for="point in service.points" :key="point">{{ point }}</li>
                </ul>
              </div>

              <img
                v-if="service.image"
                class="card-photo"
                :src="service.image"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </li>
      </ol>

      <div class="services-cta">
        <a
          :href="bookingUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button primary"
        >
          Schedule a Consultation
        </a>
        <button type="button" class="cta-button secondary">Begin Assessment</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const bookingUrl =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j'

const services = [
  {
    id: 1,
    icon: [
      'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14',
      'M16.4 16.4 20.6 20.6'
    ],
    theme: 'sage',
    image: '/service-consultation.webp',
    title: 'Personalised Psychiatric Consultation',
    description: 'Comprehensive evaluation with a tailored treatment plan.',
    points: ['Diagnosis + formulation', 'Medication when required', 'Clear roadmap']
  },
  {
    id: 2,
    icon: [
      'M3 12h3.6l2-5.2 3.1 10.4 2.4-5.2H21'
    ],
    theme: 'camel',
    image: '/service-anxiety.webp',
    title: 'Anxiety & Stress Disorders',
    description: 'Move from constant overthinking and tension to clarity and control.',
    points: ['Generalised anxiety', 'Panic episodes', 'Work-related stress']
  },
  {
    id: 3,
    icon: [
      'M6.8 19a4.1 4.1 0 0 1 .4-8.2 5.6 5.6 0 0 1 10.7-.4A3.8 3.8 0 0 1 17.4 19H6.8z'
    ],
    theme: 'ink',
    image: '/service-depression.webp',
    title: 'Depression & Mood Disorders',
    description: 'Address low mood, fatigue, and loss of motivation at the root.',
    points: ['Major depression', 'Burnout', 'Emotional numbness']
  },
  {
    id: 4,
    icon: [
      'M20.4 12a8.4 8.4 0 1 1-2.9-6.4',
      'M20.4 4.4v4.2h-4.2'
    ],
    theme: 'clay',
    image: '/service-overthinking.webp',
    title: 'Overthinking & Behavioural Patterns',
    description: 'Break repetitive thought loops and unhelpful habits.',
    points: ['Rumination', 'Procrastination', 'Binge behaviours (OTT, phone use)']
  },
  {
    id: 5,
    icon: [
      'M20.2 14.6A8.6 8.6 0 0 1 9.4 3.8a8.6 8.6 0 1 0 10.8 10.8z'
    ],
    theme: 'dusk',
    image: '/service-sleep.webp',
    title: 'Sleep & Lifestyle Regulation',
    description: 'Restore natural sleep and daily rhythm.',
    points: ['Insomnia', 'Irregular routines', 'Bedtime procrastination']
  },
  {
    id: 6,
    icon: [
      'M12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8',
      'M6.6 17.7a8 8 0 0 1 0-11.4',
      'M17.4 6.3a8 8 0 0 1 0 11.4'
    ],
    theme: 'leaf',
    image: '/service-mindbody.webp',
    title: 'Integrative Mind-Body Therapy',
    description: 'Structured use of yogic practices alongside psychiatry.',
    points: ['Breathwork (pranayama)', 'Awareness training', 'Nervous system regulation']
  },
  {
    id: 7,
    icon: [
      'M12 20.8s6.8-3.1 6.8-8.4V6.2L12 3.4 5.2 6.2v6.2c0 5.3 6.8 8.4 6.8 8.4z',
      'M9.4 12.1 11.3 14l3.4-3.6'
    ],
    theme: 'stone',
    image: '/service-followup.webp',
    title: 'Follow-up & Long-term Care',
    description: 'Ongoing refinement of treatment for sustained results.',
    points: ['Progress tracking', 'Adjustments in plan', 'Relapse prevention']
  },
  {
    id: 8,
    icon: [
      'm12 3.7 2.6 5.2 5.8.9-4.2 4 1 5.7-5.2-2.7-5.2 2.7 1-5.7-4.2-4 5.8-.9z'
    ],
    theme: 'moss',
    image: '/service-executive.webp',
    title: 'Executive & Specialised Programs',
    description:
      'High-touch, personalised care designed for complex needs and elevated expectations.',
    points: ['Personalised engagement', 'Complex case management', 'Premium support']
  }
]
</script>

<style scoped>
.services {
  padding: clamp(3.5rem, 7vw, 6rem) var(--gutter) clamp(3rem, 6vw, 5rem);
  background-color: var(--bg-page);
}

.services-container {
  max-width: var(--container-xl);
  margin: 0 auto;
}

/* ---------- header ---------- */

.services-header {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: end;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.services-eyebrow {
  margin: 0 0 1rem;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.services-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: var(--fw-regular);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-tight);
  color: var(--text-strong);
}

.services-subtitle {
  margin: 0;
  max-width: 38ch;
  font-size: var(--fs-md);
  line-height: var(--lh-relaxed);
  color: var(--text-body);
}

/* ---------- the stack ----------
   Every card pins itself a little lower than the one before it and outranks it,
   so scrolling deals them onto a pile: the card you are reading sits on top and
   each one it has covered leaves a sliver of its own sky showing above.

   The slot is what scrolls; the card inside it is what sticks. Slot height is
   therefore the scroll distance one card gets before the next starts covering
   it — keep it equal to the card height, or cards overlap before you have read
   them. Nothing in this list may set `overflow` other than `visible`: an
   overflow on any ancestor silently kills position: sticky. */

.services-stack {
  --stack-top: clamp(5.25rem, 6vh, 6rem);
  /* the step IS the header band: what a covered card leaves showing is its own
     title bar, so the whole pile stays readable rather than fading into a run
     of anonymous slivers */
  --band-h: 3.125rem;
  --stack-step: var(--band-h);
  --card-h: clamp(16.5rem, 21vw, 19.5rem);

  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.stack-slot {
  position: sticky;
  top: calc(var(--stack-top) + var(--i) * var(--stack-step));
  z-index: calc(var(--i) + 1);
  height: var(--card-h);
}

.service-card {
  position: relative;
  height: var(--card-h);
  /* A large radius on a pile is what makes the edges ragged: every card's
     rounded top exposes a wedge of the card behind it, and eight of those
     stack into a stepped left edge. Small radius, crisp hairline, tight
     shadow — a wide soft shadow smears down the band above instead of
     separating the layers. */
  border-radius: 0.75rem;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-rows: var(--band-h) minmax(0, 1fr);
  box-shadow: 0 -8px 18px -6px rgb(18 18 16 / 0.3), inset 0 1px 0 rgb(255 255 255 / 0.22);
}

/* ---------- the header band ----------
   Bands alternate light and deep down the stack, each carrying type in its own
   hue, so the pile reads as a run of distinct layers rather than one field. */

.card-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 clamp(1.125rem, 2vw, 1.625rem);
  background: var(--tint);
  color: var(--ink);
}

.head-icon {
  flex-shrink: 0;
  display: flex;
  opacity: 0.85;
}

.head-icon svg {
  width: 1.25rem;
  height: 1.25rem;
  display: block;
}

.card-name {
  margin: 0;
  margin-right: auto;
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  font-weight: var(--fw-bold);
  line-height: 1.15;
  letter-spacing: var(--ls-tight);
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-index {
  flex-shrink: 0;
  padding-left: 1rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: var(--fw-semibold);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
  opacity: 0.6;
}

.card-body {
  position: relative;
  display: grid;
  /* The artwork is height-limited by `contain`, so its width follows the card
     height, not this column: at the current height it needs about 30% and the
     slack shows as tint under the image's faded edge. An `auto` column does
     NOT work here — `width: auto` on the image has no definite height to
     resolve against during intrinsic sizing and collapses it. */
  grid-template-columns: minmax(0, 1fr) minmax(0, 34%);
  /* the row has to be pinned to the body's own height: left auto it sizes to
     content and the copy and artwork overflow the card and get clipped */
  grid-template-rows: minmax(0, 1fr);
  /* stretch, not center: a percentage height on a centered grid item resolves
     against an auto-sized row and collapses the image to nothing */
  align-items: stretch;
  gap: clamp(1rem, 2vw, 2rem);
  /* no vertical padding: the artwork runs the full height of the body and out
     to the card's right edge, so it reads as a panel rather than a pasted-in
     rectangle */
  padding: 0 0 0 clamp(1.125rem, 2vw, 1.625rem);
  overflow: hidden;
  background: var(--tint);
}

/* The illustration sits contained at the right of the card rather than being
   cropped to fill it — these are drawn scenes with their own composition, and
   a 4:1 cover crop cut straight through them. The card's tint is sampled from
   each image, so the artwork's own ground melts into the card. */
.card-photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right center;
  /* each illustration carries its own pale ground, a shade off the card tint —
     fading the inner edge hides the seam between the two */
  -webkit-mask-image: linear-gradient(90deg, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 1) 22%);
  mask-image: linear-gradient(90deg, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 1) 22%);
}

/* ---------- per-card palettes ----------
   Each tint is sampled from that card's own artwork, so image and card read
   as one surface. */

.theme-sage {
  --tint: #F4E9E4;
  --ink: var(--clay-600);
}

.theme-camel {
  --tint: #F7EAE4;
  --ink: var(--camel-700);
}

.theme-ink {
  --tint: #FCF0E6;
  --ink: var(--stone-700);
}

.theme-clay {
  --tint: #FCF4EC;
  --ink: var(--clay-600);
}

.theme-dusk {
  --tint: #FBF2E7;
  --ink: var(--camel-700);
}

.theme-leaf {
  --tint: #FAF1E6;
  --ink: var(--sage-800);
}

.theme-stone {
  --tint: #FCF0E4;
  --ink: var(--stone-700);
}

.theme-moss {
  --tint: #FBF2E5;
  --ink: var(--sage-800);
}

/* ---------- copy ---------- */

/* The copy sat in one flush-left stack inside an 820px column whose longest
   line was 534px — 35% of the column unused, and a 315px void between the
   text and the artwork. Splitting it in two closes that gap with content:
   the sentence and its action on the left, the specifics in their own column
   against a hairline. */

.card-copy {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: center;
  column-gap: clamp(1.5rem, 3vw, 3.25rem);
  min-width: 0;
  padding-block: clamp(0.875rem, 1.8vw, 1.375rem);
}

.card-lead {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(0.875rem, 1.6vw, 1.25rem);
  min-width: 0;
}

.card-description {
  margin: 0;
  max-width: 34ch;
  font-family: var(--font-sans);
  font-size: clamp(1.0625rem, 1.35vw, 1.25rem);
  font-weight: var(--fw-medium);
  line-height: 1.5;
  letter-spacing: -0.005em;
  color: var(--ink-800);
  text-wrap: pretty;
}

/* the checkpoints are the most scannable thing on the card and were the least
   visible — a flat 14px run. Upright, spaced, and set off by a rule they read
   as three distinct inclusions. */
.card-points {
  list-style: none;
  margin: 0;
  padding: 0 0 0 clamp(1.25rem, 2.5vw, 2.25rem);
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-left: 1px solid color-mix(in srgb, var(--ink) 22%, transparent);
}

.card-points li {
  position: relative;
  padding-left: 1.375rem;
  font-size: 0.9375rem;
  line-height: 1.35;
  color: var(--stone-700);
}

.card-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0.05em;
  font-size: 0.8125rem;
  font-weight: var(--fw-bold);
  color: var(--ink);
}

/* a solid ink pill was the heaviest object on a pale card and out-weighed the
   sentence above it; outlined, it reads as an invitation rather than a stop */
.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4375rem;
  padding: 0.5rem 1.0625rem;
  border-radius: var(--radius-pill);
  border: 1px solid color-mix(in srgb, var(--ink) 45%, transparent);
  background: transparent;
  color: var(--ink-900);
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wide);
  text-decoration: none;
  white-space: nowrap;
  transition: background-color var(--dur-base) var(--ease-soft),
    border-color var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft);
}

.card-cta span {
  transition: transform var(--dur-base) var(--ease-soft);
}

.card-cta:hover {
  background: var(--ink-900);
  border-color: var(--ink-900);
  color: var(--white);
}

.card-cta:hover span {
  transform: translateX(3px);
}

/* ---------- cta ---------- */

.services-cta {
  display: flex;
  gap: clamp(1rem, 2vw, 1.5rem);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: clamp(2.25rem, 4vw, 3.25rem);
}

.cta-button {
  display: inline-block;
  padding: clamp(0.875rem, 1.5vw, 1.125rem) clamp(1.75rem, 3vw, 2.75rem);
  border-radius: var(--radius-pill);
  font-family: var(--font-sans);
  font-size: clamp(0.8125rem, 1.1vw, 0.875rem);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform var(--dur-base) var(--ease-soft),
    background-color var(--dur-base) var(--ease-soft),
    box-shadow var(--dur-base) var(--ease-soft);
}

.cta-button.primary {
  background-color: var(--brand);
  color: var(--text-on-brand);
  box-shadow: 0 12px 28px rgb(111 126 87 / 0.28);
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  background-color: var(--brand-hover);
  box-shadow: 0 16px 34px rgb(111 126 87 / 0.34);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--brand-ink);
  box-shadow: inset 0 0 0 1px var(--border-strong);
}

.cta-button.secondary:hover {
  transform: translateY(-2px);
  background-color: var(--surface-tint);
  box-shadow: inset 0 0 0 1px var(--border-brand);
}

/* ---------- responsive ---------- */

@media (max-width: 900px) {
  .services-header {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

@media (max-width: 640px) {
  .services-stack {
    --stack-top: 5rem;
    --band-h: 2.875rem;
    --card-h: 20rem;
  }

  /* a 40% column leaves a thumbnail at this width, so the artwork takes the
     top of the card and the copy sits under it */
  .card-body {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 45% minmax(0, 1fr);
    gap: 0;
    padding: 0 clamp(1.125rem, 2vw, 1.625rem);
  }

  .card-photo {
    grid-row: 1;
    object-position: center bottom;
    -webkit-mask-image: linear-gradient(180deg, rgb(0 0 0 / 1) 74%, rgb(0 0 0 / 0) 100%);
    mask-image: linear-gradient(180deg, rgb(0 0 0 / 1) 74%, rgb(0 0 0 / 0) 100%);
  }

  /* two copy columns don't fit a phone; the sentence, its checkpoints and the
     action stack, and the points lose their rule */
  .card-copy {
    grid-row: 2;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    row-gap: 0.75rem;
    padding-block: 0 clamp(0.875rem, 3vw, 1.25rem);
  }

  .card-description {
    max-width: none;
  }

  .card-lead {
    gap: 0.75rem;
  }

  /* the CTA follows the points on a phone, so it reads last */
  .card-lead .card-cta {
    order: 2;
  }

  .card-points {
    padding-left: 0;
    border-left: none;
  }

  .card-cta {
    padding: 0.5rem 0.875rem;
    font-size: 0.6875rem;
  }

  .head-icon svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  .card-points li {
    font-size: 0.875rem;
  }
}

/* Once every card is pinned the whole pile is on screen at once, so its height
   — stack-top + (n-1) bands + one card — has to fit the viewport, or the last
   card's checkpoints sit below the fold with no way to scroll them into view. */
@media (max-height: 720px) {
  .services-stack {
    /* the page header is 77px at every width, so 5.5rem is the floor here */
    --stack-top: 5.5rem;
    --band-h: 2.625rem;
    --card-h: 15rem;
  }

  .card-description {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-cta,
  .cta-button {
    transition: none;
  }

  .card-cta:hover,
  .cta-button:hover {
    transform: none;
  }
}
</style>
