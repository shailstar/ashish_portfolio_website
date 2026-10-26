<template>
  <section class="loc">
    <div class="loc-container guide">
      <!-- Header -->
      <header class="guide-hero">
        <div class="guide-topbar">
          <div class="eyebrow">{{ guide.eyebrow }}</div>
          <a :href="guide.pdf" download class="guide-download">
            <span aria-hidden="true">⬇</span> Download PDF
          </a>
        </div>
        <h1 class="loc-title">
          {{ guide.title }}
          <em>{{ guide.emphasis }}</em>
        </h1>
        <p class="guide-subtitle">{{ guide.subtitle }}</p>
        <p class="loc-lead">{{ guide.lead }}</p>
        <p class="guide-byline">
          By <a href="/about" @click.prevent="$emit('navigate', 'about')">Dr. Ashish Yadav</a>, Neuro-psychiatrist (MBBS,
          DNB Psychiatry), {{ REGISTRATION.council }} Reg. No. {{ REGISTRATION.number }}. Last reviewed {{ reviewedOn }}.
        </p>
      </header>

      <!-- The guide itself -->
      <article class="guide-body">
        <section v-for="(section, index) in guide.sections" :key="section.title" class="guide-section">
          <h2 class="guide-h2">
            <span v-if="!section.plain" class="guide-num" aria-hidden="true">{{ numbers[index] }}</span>
            {{ section.title }}
          </h2>
          <p v-if="section.tag" class="guide-tag">{{ section.tag }}</p>

          <template v-for="(block, b) in section.blocks" :key="b">
            <!-- Block text is fixed site copy, not user input -->
            <p v-if="block.type === 'p'" class="guide-p" v-html="block.html"></p>

            <h3 v-else-if="block.type === 'h3'" class="guide-h3">{{ block.text }}</h3>

            <component :is="block.ordered ? 'ol' : 'ul'" v-else-if="block.type === 'list'" class="guide-list">
              <li v-for="item in block.items" :key="item" v-html="item"></li>
            </component>

            <div v-else-if="block.type === 'cards'" class="guide-cards">
              <div v-for="card in block.cards" :key="card.title" class="guide-card">
                <h3 class="guide-card-title">{{ card.title }}</h3>
                <p v-if="card.text">{{ card.text }}</p>
                <ul v-if="card.items">
                  <li v-for="item in card.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div v-else-if="block.type === 'table'" class="guide-table-wrap">
              <table class="guide-table">
                <thead>
                  <tr>
                    <th v-for="cell in block.head" :key="cell" scope="col">{{ cell }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in block.rows" :key="row[0]">
                    <td v-for="cell in row" :key="cell">{{ cell }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-else-if="block.type === 'stats'" class="guide-stats">
              <div v-for="stat in block.stats" :key="stat.value + stat.label" class="guide-stat">
                <span class="guide-stat-value">{{ stat.value }}</span>
                <span class="guide-stat-label">{{ stat.label }}</span>
              </div>
            </div>

            <aside v-else-if="block.type === 'callout'" class="guide-callout">
              <h3 class="guide-callout-title">{{ block.title }}</h3>
              <ul v-if="block.items" class="guide-list">
                <li v-for="item in block.items" :key="item" v-html="item"></li>
              </ul>
              <p v-if="block.html" v-html="block.html"></p>
            </aside>
          </template>
        </section>

        <!-- Reminder card -->
        <section v-if="guide.reminder" class="guide-section guide-reminder">
          <h2 class="guide-h2">{{ guide.reminder.title }}</h2>
          <div class="guide-cards">
            <div v-for="card in guide.reminder.cards" :key="card.title" class="guide-card">
              <h3 class="guide-card-title">{{ card.title }}</h3>
              <ul>
                <li v-for="item in card.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      <!-- Questions answered from the guide -->
      <AppointmentFAQ
        v-if="guide.answers?.length"
        eyebrow="From this guide"
        title="Quick answers,"
        emphasis="in plain words."
        lead="The questions this guide answers, in short. Have one it doesn't cover?"
        :faqs="guide.answers"
      />

      <!-- Next step -->
      <div class="loc-cta">
        <h2 class="loc-cta-title">Want help putting this into practice?</h2>
        <p class="loc-cta-text">
          Self-help works best alongside the right support. Book a consultation in Jaipur or online.
        </p>
        <div class="loc-actions loc-cta-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
          <a
            v-if="guide.next"
            :href="PATHS[guide.next.route]"
            class="loc-button loc-button-outline"
            @click.prevent="$emit('navigate', guide.next.route)"
          >
            {{ guide.next.label }}
          </a>
          <a :href="guide.pdf" download class="loc-button loc-button-outline">Download PDF</a>
        </div>
      </div>

      <EducationNote />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppointmentFAQ from './AppointmentFAQ.vue'
import EducationNote from './EducationNote.vue'
import { GUIDES } from '../data/guides.js'
import { PATHS } from '../data/routes.js'
import { REGISTRATION } from '../data/about.js'

const props = defineProps({ guideId: { type: String, required: true } })
defineEmits(['navigate'])

const guide = computed(() => GUIDES[props.guideId])

// Section numbers, skipping unnumbered ("plain") sections
const numbers = computed(() => {
  let n = 0
  return guide.value.sections.map((section) => (section.plain ? null : ++n))
})

// e.g. "October 2026"
const reviewedOn = computed(() =>
  new Date(guide.value.lastReviewed).toLocaleDateString('en-IN', { month: 'long', year: 'numeric', timeZone: 'UTC' }),
)
</script>

<style scoped src="../styles/location.css"></style>

<style scoped>
.guide-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.guide-download {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  white-space: nowrap;
}

.guide-download:hover {
  filter: brightness(0.95);
}

.guide-subtitle {
  margin: 0.5rem 0 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-strong);
}

.guide-byline {
  margin: 1.25rem 0 0;
  max-width: 46rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.guide-byline a {
  color: var(--brand-ink);
  font-weight: 600;
}

.guide-body {
  max-width: 50rem;
  margin-top: clamp(2rem, 5vw, 3rem);
}

.guide-section {
  padding: clamp(1.75rem, 4vw, 2.5rem) 0;
  border-top: 1px solid var(--border);
}

.guide-h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1rem;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 700;
  color: var(--text-strong);
}

.guide-num {
  flex: none;
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--brand-ink);
  font-size: 1rem;
}

.guide-tag {
  margin: -0.5rem 0 0.85rem;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-ink);
}

.guide-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.85rem;
  margin: 0.5rem 0 1rem;
}

.guide-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.1rem;
  background: var(--sage-100);
  border-radius: var(--radius-md);
}

.guide-stat-value {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--brand-ink);
}

.guide-stat-label {
  font-size: 0.875rem;
  color: var(--text-body);
}

.guide-h3 {
  margin: 1.5rem 0 0.6rem;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-strong);
}

.guide-p {
  margin: 0 0 0.85rem;
  color: var(--text-body);
}

.guide-list {
  margin: 0 0 0.85rem;
  padding-left: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-body);
}

.guide-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 0.85rem;
  margin: 0.5rem 0 1rem;
}

.guide-card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem 1.1rem;
  font-size: 0.9375rem;
  color: var(--text-body);
}

.guide-card p,
.guide-card ul {
  margin: 0;
}

.guide-card ul {
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.guide-card-title {
  margin: 0 0 0.4rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-strong);
}

.guide-table-wrap {
  overflow-x: auto;
  margin: 0.5rem 0 1rem;
}

.guide-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.guide-table th,
.guide-table td {
  padding: 0.7rem 0.9rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--border);
}

.guide-table th {
  font-weight: 700;
  color: var(--text-strong);
  background: var(--sage-100);
}

.guide-table tr:last-child td {
  border-bottom: none;
}

.guide-callout {
  margin: 0.75rem 0 1rem;
  padding: 1rem 1.2rem;
  border-left: 4px solid var(--brand);
  background: var(--sage-100);
  border-radius: var(--radius-md);
  color: var(--text-body);
}

.guide-callout p {
  margin: 0;
}

.guide-callout .guide-list {
  margin-bottom: 0.5rem;
}

.guide-callout-title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-strong);
}

.guide-reminder .guide-h2 {
  margin-bottom: 0.5rem;
}
</style>
