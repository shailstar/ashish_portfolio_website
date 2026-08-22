<template>
  <section class="bookings" id="bookings">
    <div class="bookings-container">
      <div class="bookings-header">
        <p class="bookings-eyebrow">Consultations</p>
        <h2 class="bookings-title">How would you like to meet?</h2>
        <p class="bookings-note">
          Your information is confidential. This is a safe, judgment-free space.
        </p>
      </div>

      <ul class="booking-tiles">
        <li v-for="option in options" :key="option.id">
          <a
            class="tile"
            :class="`theme-${option.theme}`"
            :href="option.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${option.title}. Opens ${option.destination} in a new tab.`"
          >
            <div class="tile-art" aria-hidden="true">
              <span class="art-glow"></span>
              <div class="art-land">
                <span class="art-range range-far"></span>
                <span class="art-range range-mid"></span>
                <span class="art-range range-near"></span>
                <span class="art-mist"></span>
              </div>
              <span class="art-ridge"></span>
            </div>

            <div class="tile-frost" aria-hidden="true"></div>

            <div class="tile-copy">
              <h3 class="tile-title">{{ option.title }}</h3>

              <div class="tile-foot">
                <ul class="tile-tags">
                  <li v-for="tag in option.tags" :key="tag">{{ tag }}</li>
                </ul>

                <span class="tile-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 16 16 8" />
                    <path d="M9.4 8H16v6.6" />
                  </svg>
                  {{ option.destination }}
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const calendarUrl =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j'
const whatsappUrl = 'https://wa.me/message/75HLOF6Q7MV4A1'

const options = [
  {
    id: 'in-person',
    theme: 'dawn',
    title: 'In-Person Clinic Visit',
    tags: ['In person', 'Clinic'],
    destination: 'Google Calendar',
    href: calendarUrl
  },
  {
    id: 'online',
    theme: 'grove',
    title: 'Online Video Consult',
    tags: ['Online', 'Video call'],
    destination: 'WhatsApp',
    href: whatsappUrl
  },
  {
    id: 'home',
    theme: 'dusk',
    title: 'Home Visit Consultation',
    tags: ['At home', 'Doorstep'],
    destination: 'Google Calendar',
    href: calendarUrl
  }
]
</script>

<style scoped>
.bookings {
  padding: clamp(3.5rem, 7vw, 6rem) var(--gutter);
  background-color: var(--bg-sunken);
}

.bookings-container {
  max-width: var(--container-lg);
  margin: 0 auto;
}

/* ---------- header ---------- */

.bookings-header {
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
  text-align: center;
}

.bookings-eyebrow {
  margin: 0 0 1rem;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.bookings-title {
  margin: 0 0 1rem;
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: var(--fw-regular);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-tight);
  color: var(--text-strong);
}

.bookings-note {
  margin: 0 auto;
  max-width: 46ch;
  font-size: var(--fs-md);
  line-height: var(--lh-relaxed);
  color: var(--text-body);
}

/* ---------- the cards ---------- */

.booking-tiles {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 2.6vw, 2rem);
}

.tile {
  position: relative;
  display: block;
  /* slightly wider than tall, like the reference */
  aspect-ratio: 1.1 / 1;
  border: clamp(4px, 0.42vw, 6px) solid var(--white);
  border-radius: clamp(1.75rem, 2.8vw, 2.5rem);
  background-clip: padding-box;
  overflow: hidden;
  isolation: isolate;
  text-decoration: none;
  box-shadow: 0 4px 10px rgb(60 52 38 / 0.1), 0 22px 48px rgb(60 52 38 / 0.22);
  transition: transform var(--dur-base) var(--ease-soft),
    box-shadow var(--dur-base) var(--ease-soft);
}

.tile:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 14px rgb(60 52 38 / 0.12), 0 32px 64px rgb(60 52 38 / 0.3);
}

.tile:focus-visible {
  outline: 3px solid var(--ink-900);
  outline-offset: 3px;
}

/* ---------- the artwork, edge to edge ----------
   A hazy range of peaks built from tinted layers rather than a photograph: sky
   wash, a bright mist at the horizon, three ranges that dissolve into it, and a
   dark foreground the copy sits over. Swapping this for an <img> is contained
   to .tile-art. */

.tile-art {
  position: absolute;
  inset: 0;
  z-index: -2;
  background: linear-gradient(180deg, var(--sky-1) 0%, var(--sky-2) 46%, var(--sky-3) 100%);
}

.art-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(115% 58% at 50% 4%, rgb(255 255 255 / 0.5) 0%, rgb(255 255 255 / 0) 62%);
}

/* the horizon, so the peaks stay clear of the copy at the foot of the card */
.art-land {
  position: absolute;
  inset: 0 0 26% 0;
}

.art-range,
.art-mist {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.range-far {
  height: 78%;
  background: linear-gradient(180deg, rgb(255 255 255 / 0.5) 0%, rgb(255 255 255 / 0) 64%);
  clip-path: polygon(
    0% 100%, 0% 54%, 7% 38%, 14% 52%, 22% 30%, 30% 48%, 38% 26%, 47% 46%,
    55% 22%, 64% 44%, 72% 28%, 80% 48%, 88% 32%, 96% 50%, 100% 42%, 100% 100%
  );
  filter: blur(1.4px);
}

/* one dominant massif, raked so it has a lit face and a shaded one */
.range-mid {
  height: 92%;
  background: linear-gradient(112deg, rgb(255 255 255 / 0.86) 0%, rgb(255 255 255 / 0.52) 38%, rgb(255 255 255 / 0) 74%);
  clip-path: polygon(
    0% 100%, 0% 84%, 10% 70%, 20% 48%, 30% 24%, 38% 8%, 48% 42%, 55% 30%,
    64% 48%, 72% 22%, 82% 54%, 90% 44%, 100% 64%, 100% 100%
  );
  filter: blur(0.6px);
}

.range-near {
  height: 46%;
  background: linear-gradient(180deg, var(--peak-near) 0%, rgb(255 255 255 / 0) 82%);
  opacity: 0.55;
  clip-path: polygon(
    0% 100%, 0% 70%, 10% 56%, 22% 72%, 34% 52%, 46% 70%, 58% 54%,
    70% 72%, 82% 56%, 92% 72%, 100% 62%, 100% 100%
  );
}

.art-mist {
  left: -10%;
  right: -10%;
  bottom: -6%;
  height: 30%;
  background: linear-gradient(180deg, rgb(255 255 255 / 0) 0%, rgb(255 255 255 / 0.26) 46%, rgb(255 255 255 / 0) 100%);
  filter: blur(7px);
}

.art-ridge {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42%;
  background: linear-gradient(180deg, rgb(255 255 255 / 0) 0%, var(--ridge) 46%, var(--ridge-deep) 100%);
}

/* ---------- the frosted panel the copy sits on ----------
   The reference blurs the photograph behind its text rather than laying a flat
   scrim over it, and feathers the blur in so there is no visible seam. */

.tile-frost {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 54%;
  z-index: -1;
  backdrop-filter: blur(14px) saturate(1.08);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  background: linear-gradient(180deg, rgb(22 17 12 / 0.06) 0%, rgb(22 17 12 / 0.34) 62%, rgb(22 17 12 / 0.48) 100%);
  -webkit-mask-image: linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 1) 26%);
  mask-image: linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 1) 26%);
}

/* ---------- per-card palettes ---------- */

.theme-dawn {
  --sky-1: var(--camel-100);
  --sky-2: var(--clay-300);
  --sky-3: var(--clay-600);
  --peak-near: var(--clay-600);
  --ridge: #57301D;
  --ridge-deep: #2D1A12;
}

.theme-grove {
  --sky-1: var(--sage-100);
  --sky-2: var(--sage-300);
  --sky-3: var(--sage-700);
  --peak-near: var(--sage-700);
  --ridge: #2C3620;
  --ridge-deep: #1F261A;
}

.theme-dusk {
  --sky-1: var(--clay-200);
  --sky-2: var(--clay-500);
  --sky-3: var(--stone-700);
  --peak-near: var(--stone-700);
  --ridge: #4A4133;
  --ridge-deep: #2A2620;
}

.theme-grove .art-range {
  transform: scaleX(-1);
}

.theme-dusk .art-range {
  transform: translateX(-7%) scaleX(1.14);
}

/* ---------- copy ---------- */

.tile-copy {
  position: absolute;
  inset: auto 0 0 0;
  padding: clamp(1rem, 1.8vw, 1.5rem);
  color: var(--white);
}

.tile-title {
  margin: 0 0 clamp(0.75rem, 1.4vw, 1rem);
  max-width: 12ch;
  font-family: var(--font-sans);
  font-size: clamp(1.125rem, 1.7vw, 1.4375rem);
  font-weight: var(--fw-bold);
  line-height: 1.2;
  letter-spacing: var(--ls-tight);
  color: var(--white);
  text-shadow: 0 1px 12px rgb(18 14 10 / 0.45);
}

.tile-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
}

.tile-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tile-tags li {
  padding: 0.25rem 0.5625rem;
  border-radius: var(--radius-pill);
  background: rgb(24 19 14 / 0.42);
  border: 1px solid rgb(255 255 255 / 0.16);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: var(--fw-medium);
  line-height: 1.2;
  white-space: nowrap;
  color: rgb(255 255 255 / 0.88);
}

/* every card leaves the site, so each says where it goes */
.tile-meta {
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: var(--fw-medium);
  white-space: nowrap;
  color: rgb(255 255 255 / 0.86);
}

.tile-meta svg {
  width: 0.8125rem;
  height: 0.8125rem;
}

/* ---------- responsive ---------- */

@media (max-width: 900px) {
  .booking-tiles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .booking-tiles {
    grid-template-columns: minmax(0, 1fr);
    max-width: 23rem;
    margin-inline: auto;
  }

  .tile:hover {
    transform: none;
  }

  .tile-foot {
    flex-wrap: wrap;
    row-gap: 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tile {
    transition: none;
  }

  .tile:hover {
    transform: none;
  }
}
</style>
