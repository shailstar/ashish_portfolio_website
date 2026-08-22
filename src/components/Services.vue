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

      <ul ref="rail" class="services-rail">
        <li
          v-for="(service, index) in services"
          :key="service.id"
          class="service-panel"
          :class="[`theme-${service.theme}`, { 'is-active': active === index }]"
        >
          <div class="panel-scene" aria-hidden="true">
            <span class="scene-orb"></span>
            <span class="scene-cloud cloud-a"></span>
            <span class="scene-cloud cloud-b"></span>
            <span class="scene-ridge"></span>
            <span class="scene-hill"></span>
            <span class="scene-field"></span>
          </div>

          <button
            type="button"
            class="panel-trigger"
            :aria-expanded="active === index"
            @focus="active = index"
            @click="active = index"
          >
            <span class="sr-only">{{ service.title }}</span>
          </button>

          <span class="panel-icon" aria-hidden="true">
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

          <p class="panel-label" aria-hidden="true">{{ service.title }}</p>

          <span class="panel-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>

          <div class="panel-detail">
            <h3 class="detail-title">{{ service.title }}</h3>
            <p class="detail-description">{{ service.description }}</p>
            <ul class="detail-points">
              <li v-for="point in service.points" :key="point">{{ point }}</li>
            </ul>
          </div>

          <a
            :href="bookingUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="panel-cta"
            :tabindex="active === index ? 0 : -1"
            :aria-hidden="active !== index"
          >
            Book this <span aria-hidden="true">→</span>
          </a>
        </li>
      </ul>

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
import { onBeforeUnmount, onMounted, ref } from 'vue'

const bookingUrl =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j'

const active = ref(0)
const rail = ref(null)

let ticking = false

/* Which row is open follows the scroll position: the stack is divided into as
   many equal bands as there are rows, and whichever band holds the viewport's
   centre line names the open row.
 *
 * Hit-testing the live row rectangles instead would oscillate — opening a row
 * moves the rows after it, which can push the centre line back onto the row
 * that was just closed. These bands are derived only from the stack's total
 * height, which stays constant (exactly one row is open at any moment, mid-
 * animation included), so nothing the animation does can feed back into the
 * choice. The geometry still works out: with n rows, the band for row k always
 * falls inside row k's own span once it is open. */
function syncActive() {
  ticking = false
  const el = rail.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  if (rect.height <= 0) return
  const band = (window.innerHeight / 2 - rect.top) / rect.height
  const index = Math.min(services.length - 1, Math.max(0, Math.floor(band * services.length)))
  if (index !== active.value) active.value = index
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(syncActive)
}

onMounted(() => {
  syncActive()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

const services = [
  {
    id: 1,
    icon: [
      'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14',
      'M16.4 16.4 20.6 20.6'
    ],
    theme: 'sage',
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
    title: 'Executive & Specialised Programs',
    description:
      'High-touch, personalised care designed for complex needs and elevated expectations.',
    points: ['Personalised engagement', 'Complex case management', 'Premium support']
  }
]
</script>

<style scoped>
.services {
  padding: clamp(3.5rem, 7vw, 6rem) var(--gutter);
  background-color: var(--bg-page);
}

.services-container {
  max-width: var(--container-xl);
  margin: 0 auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

/* ---------- the stack: one open row, the rest collapsed to bars ---------- */

.services-rail {
  /* the open height is shared with the artwork below, so a collapsed bar
     crops the bottom of the same painting rather than resizing it */
  --open-height: clamp(19rem, 26vw, 23rem);
  --bar-height: 9.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 0.8vw, 0.75rem);
}

.service-panel {
  position: relative;
  flex: 0 0 auto;
  height: var(--bar-height);
  border-radius: var(--radius-lg);
  overflow: hidden;
  isolation: isolate;
  transition: height var(--dur-slow) var(--ease-soft);
}

.service-panel.is-active {
  height: var(--open-height);
}

/* the trigger is the whole row — the overlay copy floats above it and lets
   clicks through, so only the CTA inside it is separately clickable */
.panel-trigger {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  appearance: none;
}

.panel-trigger:focus-visible {
  outline: 2px solid var(--white);
  outline-offset: -6px;
}

/* ---------- the illustrated art, edge to edge ----------
   The reference panels are full-bleed painted landscapes. With no per-service
   artwork to trace, each composes one from tinted layers: sky wash, sun, two
   cloud banks, a far ridge, a near hill and a foreground field. Every colour
   is a token. Swapping this block for an <img> is a contained change. */

.panel-scene {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  /* held at full open height and anchored to the bottom, so a collapsed bar
     shows the rich foreground of the painting instead of empty sky */
  height: var(--open-height);
  z-index: -2;
  background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 52%, var(--sky-bot) 100%);
}

.panel-scene > span {
  position: absolute;
}

.scene-orb {
  top: 15%;
  right: 19%;
  width: clamp(2.75rem, 3.5vw, 4rem);
  height: clamp(2.75rem, 3.5vw, 4rem);
  border-radius: 50%;
  background: var(--orb);
  opacity: 0.85;
}

.scene-cloud {
  border-radius: var(--radius-pill);
  background: var(--cloud);
  opacity: 0.72;
}

/* two lobes turn the capsule into a painted cloud bank rather than a bar */
.scene-cloud::before,
.scene-cloud::after {
  content: '';
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background: inherit;
}

.scene-cloud::before {
  left: 18%;
  width: 2.75rem;
  height: 2.75rem;
}

.scene-cloud::after {
  left: 46%;
  width: 2rem;
  height: 2rem;
}

.cloud-a {
  top: 16%;
  left: 8%;
  width: clamp(4.5rem, 7%, 6.5rem);
  height: 1.5rem;
}

.cloud-b {
  top: 31%;
  right: 30%;
  width: clamp(3.5rem, 5.5%, 5rem);
  height: 1.25rem;
  opacity: 0.5;
}

.cloud-b::before {
  left: 24%;
  width: 2rem;
  height: 2rem;
}

.cloud-b::after {
  left: 56%;
  width: 1.375rem;
  height: 1.375rem;
}

/* the domes run wider than the row so the ground reads as rolling hills
   rather than three stacked bubbles */
.scene-ridge {
  left: -8%;
  right: 38%;
  bottom: 32%;
  height: 30%;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background: var(--ridge);
}

.scene-hill {
  left: 24%;
  right: -14%;
  bottom: 14%;
  height: 34%;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background: var(--hill);
}

.scene-field {
  left: -14%;
  right: -14%;
  bottom: 0;
  height: 23%;
  border-radius: 50% 50% 0 0 / 40% 40% 0 0;
  background: var(--field);
}

/* Two washes cross-fade rather than one wash changing shape: a gradient can't
   animate between colour stops, but a pair of layers can trade opacity.
   Collapsed pulls dark in from the left, behind the row's title. */
.service-panel::before,
.service-panel::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  transition: opacity var(--dur-slow) var(--ease-soft);
}

.service-panel::before {
  background: linear-gradient(90deg, rgb(18 18 16 / 0.5) 0%, rgb(18 18 16 / 0.26) 48%, rgb(18 18 16 / 0.04) 100%);
  opacity: 1;
}

/* open trades it for a wash rising from the bottom, under four lines of copy */
.service-panel::after {
  background: linear-gradient(180deg, rgb(18 18 16 / 0) 26%, rgb(18 18 16 / 0.5) 62%, rgb(18 18 16 / 0.88) 100%);
  opacity: 0;
}

.service-panel.is-active::before {
  opacity: 0;
}

.service-panel.is-active::after {
  opacity: 1;
}

/* ---------- per-panel palettes ---------- */

.theme-sage {
  --sky-top: var(--sage-100);
  --sky-mid: var(--sage-200);
  --sky-bot: var(--sage-300);
  --orb: var(--camel-200);
  --cloud: var(--sage-50);
  --ridge: var(--sage-400);
  --hill: var(--sage-500);
  --field: var(--sage-700);
}

.theme-camel {
  --sky-top: var(--camel-100);
  --sky-mid: var(--camel-200);
  --sky-bot: var(--camel-300);
  --orb: var(--clay-200);
  --cloud: var(--camel-50);
  --ridge: var(--camel-400);
  --hill: var(--camel-500);
  --field: var(--camel-600);
}

.theme-ink {
  --sky-top: var(--stone-300);
  --sky-mid: var(--stone-400);
  --sky-bot: var(--stone-500);
  --orb: var(--camel-100);
  --cloud: var(--stone-200);
  --ridge: var(--stone-600);
  --hill: var(--stone-600);
  --field: var(--stone-700);
}

.theme-clay {
  --sky-top: var(--camel-200);
  --sky-mid: var(--clay-200);
  --sky-bot: var(--clay-300);
  --orb: var(--camel-50);
  --cloud: var(--camel-50);
  --ridge: var(--clay-400);
  --hill: var(--clay-500);
  --field: var(--clay-600);
}

.theme-dusk {
  --sky-top: var(--camel-200);
  --sky-mid: var(--camel-300);
  --sky-bot: var(--clay-400);
  --orb: var(--white);
  --cloud: var(--camel-100);
  --ridge: var(--clay-500);
  --hill: var(--clay-600);
  --field: var(--stone-600);
}

.theme-leaf {
  --sky-top: var(--sage-200);
  --sky-mid: var(--sage-300);
  --sky-bot: var(--sage-400);
  --orb: var(--camel-100);
  --cloud: var(--sage-50);
  --ridge: var(--sage-500);
  --hill: var(--sage-600);
  --field: var(--leaf);
}

.theme-stone {
  --sky-top: var(--stone-100);
  --sky-mid: var(--stone-200);
  --sky-bot: var(--stone-300);
  --orb: var(--camel-300);
  --cloud: var(--white);
  --ridge: var(--stone-400);
  --hill: var(--stone-400);
  --field: var(--stone-500);
}

.theme-moss {
  --sky-top: var(--sage-300);
  --sky-mid: var(--sage-400);
  --sky-bot: var(--sage-500);
  --orb: var(--camel-100);
  --cloud: var(--sage-100);
  --ridge: var(--sage-600);
  --hill: var(--sage-600);
  --field: var(--sage-800);
}

/* ---------- collapsed row ---------- */

.panel-icon {
  position: absolute;
  top: 50%;
  left: clamp(1.25rem, 2.4vw, 2rem);
  translate: 0 -50%;
  z-index: 3;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* smoked glass rather than a white sticker: the mark has to hold up over
     pale sky when the row is open and over dark ground when it is a bar */
  background: rgb(18 18 16 / 0.42);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgb(255 255 255 / 0.32);
  color: var(--white);
  transition: top var(--dur-slow) var(--ease-soft), translate var(--dur-slow) var(--ease-soft);
}

.panel-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  filter: drop-shadow(0 1px 3px rgb(18 18 16 / 0.45));
}

.is-active .panel-icon {
  top: clamp(1.25rem, 2vw, 1.75rem);
  translate: 0 0;
}

.panel-label {
  position: absolute;
  top: 50%;
  left: calc(clamp(1.25rem, 2.4vw, 2rem) + 4.25rem);
  z-index: 3;
  margin: 0;
  display: flex;
  align-items: center;
  height: 3rem;
  max-width: calc(100% - 12rem);
  translate: 0 -50%;
  overflow: hidden;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 1.9vw, 1.625rem);
  font-weight: var(--fw-bold);
  line-height: 1.15;
  letter-spacing: var(--ls-tight);
  color: var(--white);
  text-shadow: 0 1px 14px rgb(18 18 16 / 0.55);
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  transition: opacity var(--dur-base) var(--ease-soft);
}

/* an editorial marker at the far end, so a bar reads as one composed line
   rather than a mark and a title adrift in a wide empty field */
.panel-index {
  position: absolute;
  top: 50%;
  right: clamp(1.25rem, 2.4vw, 2rem);
  z-index: 3;
  translate: 0 -50%;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.1em;
  color: rgb(255 255 255 / 0.65);
  text-shadow: 0 1px 10px rgb(18 18 16 / 0.5);
  pointer-events: none;
  transition: opacity var(--dur-base) var(--ease-soft);
}

.is-active .panel-index {
  opacity: 0;
  transition-duration: var(--dur-fast);
}

/* a hairline keeps the paler bars from bleeding into the page */
.service-panel {
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.08);
}

/* clicking a bar opens it too, so a light hover cue is honest */
.service-panel:not(.is-active):hover .panel-label {
  translate: 0.25rem -50%;
}

.service-panel:not(.is-active):hover .panel-index {
  color: rgb(255 255 255 / 0.85);
}

.panel-label {
  transition: opacity var(--dur-base) var(--ease-soft),
    translate var(--dur-base) var(--ease-soft);
}

.is-active .panel-label {
  opacity: 0;
  transition-duration: var(--dur-fast);
}

/* ---------- open row ---------- */

.panel-detail {
  position: absolute;
  inset: auto 0 0 0;
  z-index: 3;
  padding: clamp(1.25rem, 2.2vw, 2rem) clamp(1.25rem, 2vw, 1.75rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  color: var(--white);
  opacity: 0;
  visibility: hidden;
  translate: 0 0.75rem;
  pointer-events: none;
  transition: opacity var(--dur-base) var(--ease-soft),
    translate var(--dur-slow) var(--ease-soft), visibility 0s linear var(--dur-slow);
}

.is-active .panel-detail {
  opacity: 1;
  visibility: visible;
  translate: 0 0;
  /* the copy waits for the row to finish opening, so lines don't reflow
     mid-animation */
  transition-delay: var(--dur-base), var(--dur-base), 0s;
}

.detail-title {
  margin: 0;
  max-width: 24ch;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.6vw, 2.25rem);
  font-weight: var(--fw-bold);
  line-height: 1.16;
  letter-spacing: var(--ls-tight);
  color: var(--white);
  text-shadow: 0 1px 14px rgb(18 18 16 / 0.5);
}

.detail-description {
  margin: 0;
  max-width: 58ch;
  font-size: clamp(0.9375rem, 1.1vw, 1rem);
  line-height: var(--lh-normal);
  color: rgb(255 255 255 / 0.88);
}

.detail-points {
  list-style: none;
  margin: 0.125rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem 1.5rem;
}

.detail-points li {
  position: relative;
  padding-left: 1.125rem;
  font-size: 0.875rem;
  line-height: 1.4;
  color: rgb(255 255 255 / 0.82);
}

.detail-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--camel-200);
  font-weight: var(--fw-bold);
}

.panel-cta {
  position: absolute;
  top: clamp(1.25rem, 2vw, 1.75rem);
  right: clamp(1.25rem, 2vw, 1.75rem);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5625rem 1.0625rem;
  border-radius: var(--radius-pill);
  background: rgb(255 255 255 / 0.92);
  color: var(--ink-900);
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wide);
  text-decoration: none;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity var(--dur-base) var(--ease-soft),
    background-color var(--dur-fast) var(--ease-soft),
    transform var(--dur-fast) var(--ease-soft), visibility 0s linear var(--dur-slow);
}

.is-active .panel-cta {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition-delay: var(--dur-base), 0s, 0s, 0s;
}

.panel-cta:hover {
  background: var(--white);
  transform: translateX(2px);
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
  .services-rail {
    --open-height: 21rem;
    --bar-height: 7rem;
  }

  .panel-icon {
    width: 2.625rem;
    height: 2.625rem;
  }

  .panel-icon svg {
    width: 1.1875rem;
    height: 1.1875rem;
  }

  .is-active .panel-icon {
    top: 1.125rem;
  }

  .panel-label {
    left: calc(clamp(1.25rem, 2.4vw, 2rem) + 3.5rem);
    height: 2.625rem;
    max-width: calc(100% - 9rem);
    font-size: 1.125rem;
    white-space: normal;
  }

  .panel-index {
    font-size: 0.75rem;
  }

  .detail-description {
    max-width: 42ch;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-panel,
  .service-panel::before,
  .service-panel::after,
  .panel-detail,
  .panel-icon,
  .panel-label,
  .panel-index,
  .panel-cta,
  .cta-button {
    transition: none;
  }

  .cta-button:hover,
  .panel-cta:hover {
    transform: none;
  }
}
</style>
