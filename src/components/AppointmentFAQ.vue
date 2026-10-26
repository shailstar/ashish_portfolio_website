<template>
  <section class="appt-faq">
    <div class="appt-faq-intro">
      <div class="eyebrow">{{ eyebrow }}</div>
      <h2 class="appt-faq-title">
        {{ title }}
        <em>{{ emphasis }}</em>
      </h2>
      <p class="appt-faq-lead">{{ lead }}</p>
      <a
        :href="waLink('Hi Dr. Ashish, I have a question before booking.')"
        target="_blank"
        rel="noopener noreferrer"
        class="appt-faq-ask"
      >
        Ask on WhatsApp &rarr;
      </a>
    </div>

    <div class="appt-faq-list">
      <details v-for="(item, index) in items" :key="item.q" class="appt-faq-item" :open="openIndex === index">
        <summary class="appt-faq-q" @click.prevent="toggle(index)">
          <span>{{ item.q }}</span>
          <span class="appt-faq-icon" aria-hidden="true"></span>
        </summary>
        <!-- Answers are fixed site copy, not user input -->
        <div class="appt-faq-a" v-html="item.a"></div>
      </details>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFaqSchema } from '../composables/useFaqSchema.js'
import { waLink } from '../data/clinics.js'

// Only one answer is open at a time
const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const props = defineProps({
  eyebrow: { type: String, default: 'Before your appointment' },
  title: { type: String, default: 'Questions people ask' },
  emphasis: { type: String, default: 'before booking.' },
  lead: { type: String, default: "Quick answers to the things most people want to know first. Can't find yours?" },
  // Each item: { q, a } where a is fixed site HTML
  faqs: { type: Array, default: null },
})

const defaultFaqs = [
  {
    q: 'Can I ask a question before I book?',
    a: '<p>Of course. Send a message on WhatsApp and you will get a reply about which consultation suits you, before you pay or commit to anything.</p>',
  },
  {
    q: 'How does an online consultation work?',
    a: '<p>Once your slot is booked, you receive a Google Meet link. Join from a quiet, private place with a steady internet connection, using a phone or laptop. The consultation is one-to-one, just like an in-person visit.</p>',
  },
  {
    q: 'What should I keep ready for the consultation?',
    a: '<p>If you have them, keep these handy:</p><ul><li>Previous prescriptions and a list of medicines you take now</li><li>Recent blood test or other medical reports</li><li>A few notes on what you have been feeling and since when</li></ul><p>None of this is required. Come as you are.</p>',
  },
  {
    q: 'Can I consult without being put on medication?',
    a: '<p>Yes. Medicines are suggested only when they are truly needed, and the decision is always made together with you. Many people are helped with lifestyle changes, yogic breathing practices and therapy guidance alone.</p>',
  },
  {
    q: 'How does a home visit work?',
    a: '<p>Home visits are offered within Jaipur in selected cases only, for a 45–50 minute consultation. They are booked and confirmed through WhatsApp, where the date, time and address are arranged with you.</p>',
  },
  {
    q: 'Is the follow-up included in the first consultation fee?',
    a: '<p>No, follow-ups are booked separately. A 30-minute follow-up consultation is ₹499. How often you need one depends on your treatment plan, and this is discussed at the end of each session.</p>',
  },
  {
    q: 'Can a family member join the consultation?',
    a: '<p>Yes, one family member can join, with your consent. They can often add helpful details. You can also ask for part of the session to be one-to-one.</p>',
  },
  {
    q: 'Do you see children and teenagers?',
    a: '<p>Yes. Child and adolescent psychiatry was part of my specialist training. Children and teenagers are always seen together with a parent or guardian, after proper consent, and never alone.</p>',
  },
  {
    q: 'Will what I share stay confidential?',
    a: '<p>Yes. What you share stays between you and your doctor, and records are kept securely as per medical guidelines.</p>',
  },
  {
    q: 'What if I need urgent help?',
    a: '<p>Consultations here are not an emergency service. If you or someone close to you is in danger or thinking of self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on <a href="tel:14416">14416</a> (free, 24×7).</p>',
  },
]

const items = computed(() => props.faqs || defaultFaqs)

useFaqSchema(items.value)
</script>

<style scoped>
.appt-faq {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
  margin-top: clamp(3.5rem, 7vw, 5rem);
  padding-top: clamp(2.5rem, 5vw, 3.5rem);
  border-top: 1px solid var(--border);
}

.appt-faq-intro {
  position: sticky;
  top: 100px;
}

.appt-faq-intro .eyebrow {
  margin-bottom: 0.75rem;
}

.appt-faq-title {
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0 0 1rem;
}

.appt-faq-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.appt-faq-lead {
  font-size: var(--fs-md);
  margin: 0 0 0.5rem;
}

.appt-faq-ask {
  font-weight: 600;
  color: var(--brand-ink);
}

.appt-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.appt-faq-item {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}

.appt-faq-item[open] {
  border-color: var(--border-brand);
  box-shadow: var(--shadow-sm);
}

.appt-faq-q {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--text-strong);
}

.appt-faq-q::-webkit-details-marker {
  display: none;
}

/* Plus that turns into a minus when open */
.appt-faq-icon {
  position: relative;
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--sage-100);
}

.appt-faq-icon::before,
.appt-faq-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.7rem;
  height: 2px;
  background: var(--brand-ink);
  transform: translate(-50%, -50%);
  transition: transform var(--dur-base) var(--ease-soft);
}

.appt-faq-icon::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.appt-faq-item[open] .appt-faq-icon::after {
  transform: translate(-50%, -50%) rotate(0deg);
}

.appt-faq-a {
  padding: 0 1.25rem 1.25rem;
  font-size: 0.9375rem;
}

.appt-faq-a :deep(p) {
  margin: 0 0 0.75rem;
}

.appt-faq-a :deep(p:last-child) {
  margin-bottom: 0;
}

.appt-faq-a :deep(ul) {
  margin: 0 0 0.75rem;
  padding-left: 1.25rem;
}

.appt-faq-a :deep(li) {
  margin-bottom: 0.25rem;
}

.appt-faq-a :deep(a) {
  font-weight: 600;
}

@media (max-width: 900px) {
  .appt-faq {
    grid-template-columns: 1fr;
  }

  .appt-faq-intro {
    position: static;
  }
}
</style>
