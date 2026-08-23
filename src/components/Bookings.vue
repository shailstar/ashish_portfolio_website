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
            <div class="tile-plate">
              <img class="tile-icon" :src="option.icon" alt="" loading="lazy" decoding="async" />
            </div>

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
    icon: '/booking-clinic.webp',
    title: 'In-Person Clinic Visit',
    tags: ['In person', 'Clinic'],
    destination: 'Google Calendar',
    href: calendarUrl
  },
  {
    id: 'online',
    theme: 'grove',
    icon: '/booking-video.webp',
    title: 'Online Video Consult',
    tags: ['Online', 'Video call'],
    destination: 'WhatsApp',
    href: whatsappUrl
  },
  {
    id: 'home',
    theme: 'dusk',
    icon: '/booking-home.webp',
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
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  aspect-ratio: 1.06 / 1;
  padding: clamp(1.25rem, 2.6vw, 1.875rem);
  border-radius: var(--radius-lg);
  border: var(--border-w) solid var(--border);
  background: var(--surface-card);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  transition: transform var(--dur-base) var(--ease-soft),
    box-shadow var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft);
}

.tile:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--brand);
}

.tile:focus-visible {
  outline: 3px solid var(--ink-900);
  outline-offset: 3px;
}

/* ---------- the icon plate ----------
   Each icon carries a flat baked ground, so rather than fight it the ground
   becomes the design: a rounded plate tinted to that icon's own colour, which
   makes the square deliberate instead of an artefact. On a white card there is
   no blend that removes a cream ground — multiply only clears pure white — so
   matching the plate is the one exact solution. */

.tile-plate {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  width: clamp(5.5rem, 11vw, 7.5rem);
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  background: var(--plate);
}

.tile-icon {
  width: 82%;
  height: 82%;
  object-fit: contain;
}

/* the house is a stock render on pure white, where multiply drops the box
   cleanly onto the plate the other two match directly */
.theme-dusk .tile-icon {
  mix-blend-mode: multiply;
}

/* ---------- per-tile palettes ----------
   Plate tint sampled from each icon's own baked ground. */

.theme-dawn {
  --plate: #EDEAE4;
  --ink: var(--clay-600);
}

.theme-grove {
  --plate: #EAE7DC;
  --ink: var(--sage-700);
}

.theme-dusk {
  --plate: #EDEAE4;
  --ink: var(--stone-600);
}

/* ---------- copy ---------- */

.tile-copy {
  padding-top: clamp(1rem, 2.2vw, 1.5rem);
  text-align: center;
}

.tile-title {
  margin: 0 0 clamp(0.625rem, 1.4vw, 0.875rem);
  font-family: var(--font-sans);
  font-size: clamp(1.0625rem, 1.55vw, 1.3125rem);
  font-weight: var(--fw-bold);
  line-height: 1.25;
  letter-spacing: var(--ls-tight);
  color: var(--ink-900);
}

.tile-foot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.tile-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.375rem;
}

.tile-tags li {
  padding: 0.25rem 0.5625rem;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--ink) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--ink) 20%, transparent);
  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: var(--fw-medium);
  line-height: 1.2;
  white-space: nowrap;
  color: var(--stone-700);
}

/* every tile leaves the site, so each says where it goes */
.tile-meta {
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;
  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--ink);
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
