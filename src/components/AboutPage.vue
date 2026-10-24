<template>
  <section class="about-page">
    <!-- Header -->
    <div class="ap-container ap-hero">
      <div class="ap-hero-text">
        <div class="eyebrow">About</div>
        <h1 class="ap-title">Hi, I'm Dr. Ashish Yadav.</h1>
        <p class="ap-lead">
          I am a neuro-psychiatrist in Jaipur who works where psychiatry meets yogic science. My aim is simple: to
          understand what is really driving your difficulties, and to build care around you rather than around a
          label.
        </p>
        <p class="ap-tagline">You're a person, not a diagnosis.</p>
        <div class="ap-actions">
          <button class="ap-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
        </div>
      </div>
      <figure class="ap-portrait">
        <img src="/profile_about.png" alt="Dr. Ashish Yadav, neuro-psychiatrist in Jaipur" />
        <figcaption class="ap-portrait-caption">📍 Based in Jaipur, Rajasthan</figcaption>
      </figure>
    </div>

    <!-- Credentials strip -->
    <!-- Scrolling strip: the list is rendered twice so the loop is seamless -->
    <div class="ap-strip" aria-label="Credentials and recognition">
      <div class="ap-marquee">
        <ul class="ap-marquee-track">
          <li
            v-for="(item, index) in [...stripItems, ...stripItems]"
            :key="index"
            class="ap-strip-item"
            :aria-hidden="index >= stripItems.length ? 'true' : null"
          >
            <span class="ap-strip-icon" aria-hidden="true">{{ item.icon || '✦' }}</span>
            <span class="ap-strip-text">
              <span class="ap-strip-title">{{ item.title }}</span>
              <span v-if="item.detail" class="ap-strip-detail">{{ item.detail }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="ap-container">
      <!-- Story + credentials card -->
      <div class="ap-block ap-story">
        <div>
          <div class="eyebrow">My story</div>
          <h2 class="ap-h2">
            Trained in psychiatry,
            <em>grounded in yoga.</em>
          </h2>
          <div class="ap-prose">
            <p>
              I studied medicine at RUHS College of Medical Sciences, Jaipur, and trained in psychiatry at the Gujarat
              Institute of Mental Health, Ahmedabad, working across inpatient, de-addiction, geriatric, and child and
              adolescent clinics. Alongside, I trained as a yoga teacher in Rishikesh.
            </p>
            <p>
              So my approach looks beyond symptoms, at the patterns underneath. I use medicines where they are needed,
              and breathwork, sleep and lifestyle changes wherever they can help. I mostly work with people who want
              lasting change, not just quick relief.
            </p>
          </div>
        </div>

        <aside class="ap-card">
          <h3 class="ap-card-title">Credentials</h3>
          <ul class="ap-card-list">
            <li v-for="item in CARD_CREDENTIALS" :key="item">{{ item }}</li>
          </ul>
          <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer" class="ap-link">
            Full profile on LinkedIn &rarr;
          </a>
        </aside>
      </div>

      <!-- Highlights -->
      <ul v-if="HIGHLIGHTS.length" class="ap-block ap-highlights" aria-label="Highlights">
        <li v-for="item in HIGHLIGHTS" :key="item.title" class="ap-highlight">
          <span class="ap-highlight-icon" aria-hidden="true">{{ item.icon }}</span>
          <span class="ap-highlight-title">{{ item.title }}</span>
          <span class="ap-highlight-detail">{{ item.detail }}</span>
        </li>
      </ul>

      <!-- As featured in -->
      <div v-if="FEATURES.length" class="ap-block">
        <div class="eyebrow">As featured in</div>
        <h2 class="ap-h2">
          Podcasts &amp;
          <em>conversations.</em>
        </h2>
        <ul class="ap-features">
          <li v-for="item in FEATURES" :key="item.url">
            <a :href="item.url" target="_blank" rel="noopener noreferrer" class="ap-feature">
              <span v-if="item.youtubeId" class="ap-feature-thumb">
                <img :src="`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`" alt="" loading="lazy" />
                <span class="ap-feature-play" aria-hidden="true">▶</span>
              </span>
              <span class="ap-feature-body">
                <span class="ap-feature-outlet">{{ item.outlet }}</span>
                <span class="ap-feature-title">{{ item.title }}</span>
                <span v-if="item.date" class="ap-feature-date">{{ item.date }}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- How I work -->
      <div class="ap-block">
        <div class="eyebrow">How I work</div>
        <h2 class="ap-h2">
          What you can expect
          <em>from me.</em>
        </h2>
        <ul class="ap-values">
          <li v-for="item in values" :key="item.title" class="ap-value">
            <h3 class="ap-value-title">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>

      <!-- Find me + book -->
      <div class="ap-block ap-cta">
        <p class="ap-cta-line">Tum akele nahi ho dost. <strong>Healing starts here.</strong></p>
        <div class="ap-places">
          <button class="ap-place" @click="$emit('navigate', 'jhotwara')">
            <span class="ap-place-area">Jhotwara</span>
            <span class="ap-place-name">Shri Ram Hospital</span>
          </button>
          <button class="ap-place" @click="$emit('navigate', 'vaishali')">
            <span class="ap-place-area">Vaishali Nagar</span>
            <span class="ap-place-name">Asha Clinic · Shalby Hospital</span>
          </button>
          <button class="ap-place" @click="$emit('navigate', 'fees')">
            <span class="ap-place-area">Online</span>
            <span class="ap-place-name">Across India</span>
          </button>
        </div>
        <div class="ap-actions ap-cta-actions">
          <button class="ap-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="ap-button ap-button-outline">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LINKEDIN_URL, CREDENTIALS, CARD_CREDENTIALS, HIGHLIGHTS, FEATURES } from '../data/about.js'
import { WHATSAPP_URL } from '../data/clinics.js'

defineEmits(['navigate'])

// Credentials and recognition, shown together in the moving strip
const stripItems = [...CREDENTIALS, ...HIGHLIGHTS]

const values = [
  { title: 'Care built around you', text: 'Your plan is shaped by your history, goals and daily life, not a one-size-fits-all protocol.' },
  { title: 'Medicine only when needed', text: 'Sleep, breathwork, lifestyle and therapy guidance come first wherever they can do the job.' },
  { title: 'A safe, private space', text: 'No judgement, consultations are never recorded, and what you share stays confidential.' },
]
</script>

<style scoped>
.about-page {
  padding: clamp(3rem, 7vw, 5rem) 0 clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.ap-container {
  max-width: var(--container-lg);
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 5vw, 4rem);
}

.ap-title,
.ap-h2 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
}

.ap-title em,
.ap-h2 em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.ap-title {
  font-size: var(--fs-h1);
  margin: 1rem 0 1.25rem;
}

.ap-h2 {
  font-size: var(--fs-h2);
  margin: 0.75rem 0 1.5rem;
}

.ap-link {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--brand-ink);
}

/* ---- Hero ---- */
.ap-hero {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.ap-lead {
  font-size: var(--fs-md);
  margin: 0 0 1.25rem;
}

.ap-tagline {
  font-family: var(--font-display);
  font-size: clamp(1.375rem, 2.6vw, 1.75rem);
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
  margin: 0 0 1.5rem;
}

.ap-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.ap-button {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 26px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: 0.9375rem;
  font-weight: 600;
  border: 1.5px solid var(--brand);
  border-radius: var(--radius-pill);
}

.ap-button:hover {
  background: var(--brand-hover);
  border-color: var(--brand-hover);
  color: var(--text-on-brand);
}

.ap-button-outline {
  background: transparent;
  color: var(--brand-ink);
}

.ap-button-outline:hover {
  background: var(--white);
  color: var(--brand-ink);
  border-color: var(--brand);
}

.ap-portrait {
  position: relative;
  margin: 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--sage-100);
  box-shadow: var(--shadow-md);
  aspect-ratio: 4 / 5;
}

.ap-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ap-portrait-caption {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-pill);
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-strong);
}

/* ---- Credentials strip ---- */
.ap-strip {
  margin-top: clamp(2rem, 4vw, 3rem);
}

.ap-marquee {
  overflow: hidden;
  padding: 1rem 0;
  /* Soft fade at both edges */
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}

.ap-marquee-track {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: max-content;
  animation: ap-marquee 45s linear infinite;
}

.ap-marquee:hover .ap-marquee-track {
  animation-play-state: paused;
}

@keyframes ap-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.ap-strip-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  /* Spacing as margin, not gap, so both halves are equal width and the loop has no jump */
  margin-right: 1rem;
  padding: 0.75rem 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  white-space: nowrap;
}

.ap-strip-icon {
  font-size: 1.25rem;
  color: var(--accent);
}

.ap-strip-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.ap-strip-title {
  font-weight: 700;
  color: var(--text-strong);
  font-size: 0.9375rem;
}

.ap-strip-detail {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

/* ---- Blocks ---- */
.ap-block {
  margin-top: clamp(3.5rem, 7vw, 5rem);
}

/* ---- Story + card ---- */
.ap-story {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
}

.ap-prose p {
  font-size: var(--fs-md);
  margin: 0 0 1.1rem;
}

.ap-card {
  padding: clamp(1.5rem, 3vw, 2rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.ap-card-title {
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 1rem;
}

.ap-card-list {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.ap-card-list li {
  position: relative;
  padding-left: 1.6rem;
  font-size: 0.9375rem;
  color: var(--text-strong);
}

.ap-card-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0.05rem;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--brand-ink);
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ---- Highlights ---- */
.ap-highlights {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.ap-highlight {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.25rem;
  background: var(--camel-50);
  border: 1px solid var(--camel-200);
  border-radius: var(--radius-md);
}

.ap-highlight-icon {
  font-size: 1.5rem;
}

.ap-highlight-title {
  font-weight: 700;
  color: var(--text-strong);
}

.ap-highlight-detail {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

/* ---- Features ---- */
.ap-features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.ap-feature {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.ap-feature:hover {
  border-color: var(--border-brand);
}

.ap-feature-thumb {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  background: var(--stone-100);
  overflow: hidden;
}

.ap-feature-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--dur-base) var(--ease-soft);
}

.ap-feature:hover .ap-feature-thumb img {
  transform: scale(1.04);
}

.ap-feature-play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(18, 18, 16, 0.7);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
}

.ap-feature-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem 1.25rem;
}

.ap-feature-outlet {
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--accent);
}

.ap-feature-title {
  font-weight: 600;
  color: var(--text-strong);
}

.ap-feature-date {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

/* ---- Values ---- */
.ap-values {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.ap-value {
  padding: 1.4rem 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.ap-value-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
}

.ap-value p {
  font-size: 0.9375rem;
  margin: 0;
}

/* ---- Find me + CTA ---- */
.ap-cta {
  padding: clamp(2rem, 5vw, 3rem);
  background: var(--sage-100);
  border-radius: var(--radius-xl);
  text-align: center;
}

.ap-cta-line {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-style: italic;
  color: var(--text-strong);
  margin: 0 0 1.5rem;
}

.ap-cta-line strong {
  font-style: normal;
  color: var(--brand-ink);
}

.ap-places {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  max-width: 760px;
  margin: 0 auto 1.5rem;
}

.ap-place {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  cursor: pointer;
  padding: 1rem 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
}

.ap-place:hover {
  border-color: var(--brand);
}

.ap-place-area {
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--accent);
}

.ap-place-name {
  font-weight: 700;
  color: var(--text-strong);
}

.ap-cta-actions {
  justify-content: center;
}

@media (max-width: 900px) {
  .ap-hero,
  .ap-story {
    grid-template-columns: 1fr;
  }

  .ap-portrait {
    max-width: 360px;
  }

  .ap-highlights {
    grid-template-columns: 1fr 1fr;
  }

  .ap-values,
  .ap-places {
    grid-template-columns: 1fr;
  }

  .ap-marquee-track {
    animation-duration: 35s;
  }
}

/* No motion for people who ask for less: show the blocks as a still, wrapping row */
@media (prefers-reduced-motion: reduce) {
  .ap-marquee {
    -webkit-mask-image: none;
    mask-image: none;
    padding-left: clamp(1.25rem, 5vw, 4rem);
    padding-right: clamp(1.25rem, 5vw, 4rem);
  }

  .ap-marquee-track {
    animation: none;
    width: auto;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .ap-strip-item {
    margin-right: 0;
    white-space: normal;
  }

  .ap-strip-item[aria-hidden='true'] {
    display: none;
  }
}

@media (max-width: 480px) {
  .ap-highlights {
    grid-template-columns: 1fr;
  }
}
</style>
