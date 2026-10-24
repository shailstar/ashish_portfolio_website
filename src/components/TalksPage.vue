<template>
  <section class="tk">
    <div class="tk-container">
      <!-- Header -->
      <header class="tk-hero">
        <div class="eyebrow">Talks &amp; workshops</div>
        <h1 class="tk-title">
          Mental health talks and workshops,
          <em>grounded in science and yoga.</em>
        </h1>
        <p class="tk-lead">
          Practical, engaging sessions for schools, colleges, corporates and yoga teacher trainings, by a
          neuro-psychiatrist who is also a certified yoga teacher. Every session leaves people with something they can
          use the same day.
        </p>
        <ul class="tk-chips">
          <li>📍 Jaipur, and beyond for the right opportunity</li>
          <li>💻 Online</li>
          <li>🗣️ English, Hindi &amp; Gujarati</li>
        </ul>
        <button class="tk-button" @click="scrollTo('tk-enquire')">Enquire about a session</button>
      </header>

      <!-- Past engagements -->
      <div class="tk-block">
        <div class="eyebrow">Past engagements</div>
        <h2 class="tk-h2">
          Where I have
          <em>taught and spoken.</em>
        </h2>
        <ul class="tk-engagements">
          <li v-for="item in ENGAGEMENTS" :key="item.title" class="tk-engagement">
            <component
              :is="item.url ? 'a' : 'div'"
              :href="item.url || null"
              :target="item.url ? '_blank' : null"
              :rel="item.url ? 'noopener noreferrer' : null"
              class="tk-engagement-inner"
            >
              <span class="tk-engagement-media">
                <img v-if="item.image" :src="item.image" :alt="item.title" loading="lazy" />
                <span v-else class="tk-engagement-placeholder" aria-hidden="true">Photo coming soon</span>
              </span>
              <span class="tk-engagement-body">
                <span v-if="item.date" class="tk-engagement-date">{{ item.date }}</span>
                <span class="tk-engagement-title">{{ item.title }}</span>
                <span class="tk-engagement-place">{{ item.place }}</span>
                <span class="tk-engagement-text">{{ item.text }}</span>
              </span>
            </component>
          </li>
        </ul>
      </div>

      <!-- Topics -->
      <div class="tk-block">
        <div class="eyebrow">Topics</div>
        <h2 class="tk-h2">
          What I can
          <em>speak on.</em>
        </h2>
        <ul class="tk-topics">
          <li v-for="topic in TOPICS" :key="topic.title" class="tk-topic">
            <span class="tk-topic-icon" aria-hidden="true">{{ topic.icon }}</span>
            <h3 class="tk-topic-title">{{ topic.title }}</h3>
            <p>{{ topic.text }}</p>
          </li>
        </ul>
        <p class="tk-note">Don't see your topic? Sessions can be tailored to your audience.</p>
      </div>

      <!-- Audiences + formats -->
      <div class="tk-block tk-split">
        <div>
          <div class="eyebrow">Who it's for</div>
          <h2 class="tk-h2">
            Built for
            <em>your audience.</em>
          </h2>
          <ul class="tk-audiences">
            <li v-for="a in AUDIENCES" :key="a.title" class="tk-audience">
              <span class="tk-audience-icon" aria-hidden="true">{{ a.icon }}</span>
              <span>
                <strong>{{ a.title }}</strong>
                <span class="tk-audience-text">{{ a.text }}</span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div class="eyebrow">Formats</div>
          <h2 class="tk-h2">
            Choose a
            <em>format.</em>
          </h2>
          <ul class="tk-formats">
            <li v-for="f in FORMATS" :key="f.title">
              <strong>{{ f.title }}</strong>
              <span>{{ f.detail }}</span>
            </li>
          </ul>
          <div class="tk-honorarium">
            <h3 class="tk-honorarium-title">Honorarium on request</h3>
            <p>
              Fees depend on the format, audience and travel. For the right audience and cause, sessions can also be
              offered pro bono, so please ask.
            </p>
          </div>
        </div>
      </div>

      <!-- Enquiry -->
      <div id="tk-enquire" class="tk-block tk-enquire">
        <div class="eyebrow">Enquire</div>
        <h2 class="tk-h2">
          Invite me
          <em>to speak.</em>
        </h2>
        <p class="tk-enquire-lead">
          Share a few details. They open in WhatsApp, ready to send, and you'll hear back within a couple of days.
        </p>

        <form class="tk-form" @submit.prevent="sendEnquiry">
          <label class="tk-field">
            <span class="tk-label">Your name *</span>
            <input v-model.trim="form.name" type="text" autocomplete="name" required />
          </label>
          <label class="tk-field">
            <span class="tk-label">Organisation *</span>
            <input v-model.trim="form.organisation" type="text" autocomplete="organization" required />
          </label>
          <label class="tk-field">
            <span class="tk-label">Audience *</span>
            <select v-model="form.audience" required>
              <option value="" disabled>Choose</option>
              <option v-for="a in AUDIENCES" :key="a.title">{{ a.title }}</option>
              <option>Other</option>
            </select>
          </label>
          <label class="tk-field">
            <span class="tk-label">Format</span>
            <select v-model="form.format">
              <option value="">Not sure yet</option>
              <option v-for="f in FORMATS" :key="f.title">{{ f.title }}</option>
            </select>
          </label>
          <label class="tk-field tk-field-wide">
            <span class="tk-label">Topic</span>
            <select v-model="form.topic">
              <option value="">Open to suggestions</option>
              <option v-for="t in TOPICS" :key="t.title">{{ t.title }}</option>
              <option>Something else</option>
            </select>
          </label>
          <label class="tk-field">
            <span class="tk-label">In person or online</span>
            <select v-model="form.mode">
              <option>In person, Jaipur</option>
              <option>In person, outside Jaipur</option>
              <option>Online</option>
            </select>
          </label>
          <label class="tk-field">
            <span class="tk-label">Language</span>
            <select v-model="form.language">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </select>
          </label>
          <label class="tk-field">
            <span class="tk-label">Preferred date</span>
            <input v-model="form.date" type="date" />
          </label>
          <label class="tk-field">
            <span class="tk-label">Expected audience size</span>
            <input v-model.trim="form.size" type="text" placeholder="e.g. 80 students" />
          </label>
          <label class="tk-field tk-field-wide">
            <span class="tk-label">Anything else?</span>
            <textarea v-model.trim="form.notes" rows="3"></textarea>
          </label>
          <div class="tk-form-actions">
            <button type="submit" class="tk-button tk-button-wa">Send enquiry on WhatsApp</button>
            <a :href="emailHref" target="_blank" rel="noopener noreferrer" class="tk-email">or send by email &rarr;</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { ENGAGEMENTS, TOPICS, AUDIENCES, FORMATS } from '../data/talks.js'
import { waLink } from '../data/clinics.js'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const form = reactive({
  name: '',
  organisation: '',
  audience: '',
  format: '',
  topic: '',
  mode: 'In person, Jaipur',
  language: 'English',
  date: '',
  size: '',
  notes: '',
})

const message = computed(() =>
  [
    "Hi Dr. Ashish, I'd like to invite you for a talk or workshop.",
    '',
    `Name: ${form.name}`,
    `Organisation: ${form.organisation}`,
    `Audience: ${form.audience}`,
    `Format: ${form.format || 'Not sure yet'}`,
    `Topic: ${form.topic || 'Open to suggestions'}`,
    `Mode: ${form.mode}`,
    `Language: ${form.language}`,
    form.date ? `Preferred date: ${form.date}` : null,
    form.size ? `Audience size: ${form.size}` : null,
    form.notes ? `Notes: ${form.notes}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n'),
)

const emailHref = computed(
  () =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=contact@drashishyadav.com&su=${encodeURIComponent(
      'Talk / workshop enquiry',
    )}&body=${encodeURIComponent(message.value)}`,
)

const sendEnquiry = () => {
  window.open(waLink(message.value), '_blank', 'noopener')
}
</script>

<style scoped>
.tk {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.tk-container {
  max-width: var(--container-lg);
  margin: 0 auto;
}

.tk-title,
.tk-h2 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
}

.tk-title em,
.tk-h2 em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.tk-title {
  font-size: var(--fs-h1);
  margin: 1rem 0 1.25rem;
}

.tk-h2 {
  font-size: var(--fs-h2);
  margin: 0.75rem 0 1.5rem;
}

.tk-block {
  margin-top: clamp(3.5rem, 7vw, 5rem);
}

.tk-button {
  border: none;
  cursor: pointer;
  padding: 13px 26px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: 0.9375rem;
  font-weight: 700;
  border-radius: var(--radius-pill);
}

.tk-button:hover {
  background: var(--brand-hover);
}

/* ---- Hero ---- */
.tk-hero {
  max-width: 820px;
}

.tk-lead {
  font-size: var(--fs-md);
  margin: 0 0 1.25rem;
}

.tk-chips {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tk-chips li {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
}

/* ---- Engagements ---- */
.tk-engagements {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.tk-engagement-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: inherit;
}

a.tk-engagement-inner:hover {
  border-color: var(--border-brand);
}

.tk-engagement-media {
  display: block;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--sage-100), var(--camel-100));
}

.tk-engagement-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tk-engagement-placeholder {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: var(--ls-wide);
  color: var(--text-muted);
}

.tk-engagement-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.1rem 1.25rem 1.35rem;
}

.tk-engagement-date {
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--accent);
}

.tk-engagement-title {
  font-weight: 700;
  color: var(--text-strong);
}

.tk-engagement-place {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-body);
}

.tk-engagement-text {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* ---- Topics ---- */
.tk-topics {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.tk-topic {
  padding: 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.tk-topic-icon {
  font-size: 1.5rem;
}

.tk-topic-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0 0.35rem;
}

.tk-topic p {
  font-size: var(--fs-sm);
  margin: 0;
}

.tk-note {
  margin: 1rem 0 0;
  font-size: 0.9375rem;
  color: var(--text-muted);
}

/* ---- Audiences + formats ---- */
.tk-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
}

.tk-audiences,
.tk-formats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tk-audience {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.tk-audience-icon {
  font-size: 1.5rem;
}

.tk-audience strong {
  display: block;
  color: var(--text-strong);
}

.tk-audience-text {
  font-size: var(--fs-sm);
}

.tk-formats li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
}

.tk-formats strong {
  color: var(--text-strong);
}

.tk-formats span {
  color: var(--text-muted);
  text-align: right;
}

.tk-honorarium {
  margin-top: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
}

.tk-honorarium-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}

.tk-honorarium p {
  font-size: 0.9375rem;
  margin: 0;
}

/* ---- Enquiry ---- */
.tk-enquire {
  padding: clamp(1.75rem, 4vw, 2.75rem);
  background: var(--sage-100);
  border-radius: var(--radius-xl);
}

.tk-enquire-lead {
  margin: -0.5rem 0 1.5rem;
  max-width: 620px;
}

.tk-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.tk-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tk-field-wide {
  grid-column: 1 / -1;
}

.tk-label {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-strong);
}

.tk-field input,
.tk-field select,
.tk-field textarea {
  width: 100%;
  padding: 11px 12px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--white);
  font-size: 1rem;
  font-family: var(--font-sans);
  color: var(--text-strong);
}

.tk-field input:focus,
.tk-field select:focus,
.tk-field textarea:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--focus-ring-soft);
}

.tk-form-actions {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: 0.5rem;
}

.tk-button-wa {
  background: #1fa855;
}

.tk-button-wa:hover {
  background: #188a45;
}

.tk-email {
  font-weight: 600;
}

@media (max-width: 1024px) {
  .tk-topics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .tk-split,
  .tk-form {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .tk-topics {
    grid-template-columns: 1fr;
  }
}
</style>
