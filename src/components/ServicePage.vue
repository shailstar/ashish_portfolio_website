<template>
  <section class="loc">
    <div class="loc-container">
      <!-- Hero -->
      <header class="loc-hero">
        <div class="eyebrow">{{ service.eyebrow }}</div>
        <h1 class="loc-title">
          {{ service.title }}
          <em>{{ service.emphasis }}</em>
        </h1>
        <p class="loc-lead">{{ service.lead }}</p>
        <div class="loc-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="loc-button loc-button-outline">
            Ask on WhatsApp
          </a>
        </div>
        <p class="svc-byline">
          Written and medically reviewed by
          <a href="/about" @click.prevent="$emit('navigate', 'about')">Dr. Ashish Yadav</a>, Neuro-psychiatrist (DNB
          Psychiatry), {{ REGISTRATION.council }} Reg. No. {{ REGISTRATION.number }}. Last reviewed {{ reviewedOn }}.
        </p>
      </header>

      <!-- Conditions -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">What this covers</div>
          <h2 class="loc-h2">
            {{ service.conditionsTitle }}
            <em>{{ service.conditionsEmphasis }}</em>
          </h2>
        </div>
        <ul class="loc-care">
          <li v-for="item in service.conditions" :key="item.title" class="loc-care-item">
            <h3 class="loc-care-title">{{ item.title }}</h3>
            <p class="loc-care-text">{{ item.text }}</p>
          </li>
        </ul>
      </div>

      <!-- When to seek help -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">Signs to watch for</div>
          <h2 class="loc-h2">
            {{ service.signsTitle }}
            <em>{{ service.signsEmphasis }}</em>
          </h2>
        </div>
        <div>
          <p class="loc-text">{{ service.signsLead }}</p>
          <ul class="loc-guide svc-signs">
            <li v-for="item in service.signs" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Treatment steps -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">Your treatment</div>
          <h2 class="loc-h2">
            {{ service.stepsTitle }}
            <em>{{ service.stepsEmphasis }}</em>
          </h2>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book a consultation &rarr;</button>
        </div>
        <ol class="loc-guide">
          <li v-for="item in service.steps" :key="item.title">
            <strong>{{ item.title }}</strong> {{ item.text }}
          </li>
        </ol>
      </div>

      <!-- Direct answers, kept open so readers and crawlers see them in full -->
      <div class="loc-block">
        <div class="eyebrow">Straight answers</div>
        <h2 class="loc-h2">
          {{ service.answersTitle }}
          <em>{{ service.answersEmphasis }}</em>
        </h2>
        <div class="svc-answers">
          <article v-for="item in service.answers" :key="item.q" class="svc-answer">
            <h3 class="svc-answer-q">{{ item.q }}</h3>
            <!-- Answers are fixed site copy, not user input -->
            <div class="svc-answer-a" v-html="item.a"></div>
          </article>
        </div>
      </div>

      <!-- Free guides -->
      <div v-if="service.resources?.length" class="loc-block">
        <div class="eyebrow">Free resources</div>
        <h2 class="loc-h3">Start with these, at your own pace.</h2>
        <ul class="svc-resources">
          <li v-for="item in service.resources" :key="item.url">
            <a :href="item.url" target="_blank" rel="noopener noreferrer" class="svc-resource">
              <span class="svc-resource-title">{{ item.title }} &rarr;</span>
              <span class="svc-resource-text">{{ item.text }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Where + fees -->
      <div class="loc-block loc-duo">
        <div class="loc-duo-card">
          <div class="eyebrow">Where to consult</div>
          <h2 class="loc-h3">In Jaipur, or online anywhere in India.</h2>
          <p>
            Clinics in <a href="/psychiatrist-in-jhotwara" @click.prevent="$emit('navigate', 'jhotwara')">Jhotwara</a>
            and <a href="/psychiatrist-in-vaishali-nagar" @click.prevent="$emit('navigate', 'vaishali')">Vaishali Nagar</a>,
            evenings at Shalby Hospital by appointment, and one-to-one video consultations on Google Meet. Consultations
            are in {{ LANGUAGES }}.
          </p>
          <button class="loc-link" @click="$emit('navigate', 'jaipur')">All locations &rarr;</button>
        </div>
        <div class="loc-duo-card">
          <div class="eyebrow">Fees</div>
          <h2 class="loc-h3">Clear fees, online or in person.</h2>
          <ul class="loc-fees">
            <li><span>Consultation, 30 min</span><strong>₹799</strong></li>
            <li><span>Consultation, 60 min</span><strong>₹1,499</strong></li>
            <li><span>Follow-up, 30 min</span><strong>₹499</strong></li>
          </ul>
          <button class="loc-link" @click="$emit('navigate', 'fees')">Full fee list &rarr;</button>
        </div>
      </div>

      <!-- Practical FAQ -->
      <AppointmentFAQ
        eyebrow="Before you book"
        title="Practical questions,"
        emphasis="answered simply."
        lead="What people usually ask before their first appointment. Still unsure?"
        :faqs="service.faqs"
      />

      <p class="loc-urgent">
        <strong>Not an emergency service.</strong> If you or someone close to you is in danger or thinking of
        self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on
        <a href="tel:14416">14416</a> (free, 24×7).
      </p>

      <div class="loc-cta">
        <h2 class="loc-cta-title">Ready to feel better?</h2>
        <p class="loc-cta-text">Book a consultation at a clinic near you, or start online today.</p>
        <div class="loc-actions loc-cta-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="loc-button loc-button-outline">
            Ask on WhatsApp
          </a>
        </div>
      </div>

      <p class="svc-disclaimer">
        This page is for general education only and is not medical advice. It does not replace a consultation,
        diagnosis or treatment by a qualified doctor. Do not start, stop or change any medicine without speaking to
        your doctor.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppointmentFAQ from './AppointmentFAQ.vue'
import { SERVICES } from '../data/services.js'
import { REGISTRATION } from '../data/about.js'
import { LANGUAGES, WHATSAPP_URL } from '../data/clinics.js'
import { useFaqSchema } from '../composables/useFaqSchema.js'

const props = defineProps({ serviceId: { type: String, required: true } })
defineEmits(['navigate'])

const service = computed(() => SERVICES[props.serviceId])

// e.g. "October 2026"
const reviewedOn = computed(() =>
  new Date(service.value.lastReviewed).toLocaleDateString('en-IN', { month: 'long', year: 'numeric', timeZone: 'UTC' }),
)

// The open answers join the accordion questions in the page's FAQ schema
useFaqSchema(service.value.answers)
</script>

<style scoped src="../styles/location.css"></style>

<style scoped>
.svc-byline {
  margin: 1.5rem 0 0;
  max-width: 46rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.svc-byline a {
  color: var(--brand-ink);
  font-weight: 600;
}

.svc-signs {
  margin-top: 1rem;
}

.svc-answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}

.svc-answer {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: clamp(1.1rem, 2.5vw, 1.5rem);
}

.svc-answer-q {
  margin: 0 0 0.6rem;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-strong);
}

.svc-answer-a {
  font-size: 0.9375rem;
  color: var(--text-body);
}

.svc-answer-a :deep(p) {
  margin: 0;
}

.svc-resources {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.svc-resource {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  height: 100%;
  padding: 1rem 1.1rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
}

.svc-resource-title {
  font-weight: 600;
  color: var(--brand-ink);
}

.svc-resource-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.svc-disclaimer {
  margin: 2rem auto 0;
  max-width: 46rem;
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: center;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .svc-answers {
    grid-template-columns: 1fr;
  }

  .svc-resources {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .svc-resources {
    grid-template-columns: 1fr;
  }
}
</style>
