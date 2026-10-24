<template>
  <section class="fees">
    <div class="fees-container">
      <!-- Header -->
      <header class="fees-header">
        <div class="eyebrow">Fees · Online, In-Person &amp; Home Visits</div>
        <h1 class="fees-title">
          Transparent fees,
          <em>no surprises later.</em>
        </h1>
        <p class="fees-lead">
          Every fee is listed here before you book, so you can choose the consultation that fits you
          without any guesswork. Not sure which one you need? Send a message first and we'll help you decide.
        </p>
        <p class="fees-updated">Fees updated: {{ feesUpdated }}</p>
      </header>

      <!-- What's included -->
      <div class="included">
        <div class="included-intro">
          <div class="eyebrow">What your fee covers</div>
          <h2 class="included-title">
            What's included in
            <em>every consultation.</em>
          </h2>
          <p class="included-aim">
            Each of these is part of every consultation. The aim is simple: you leave understanding your diagnosis,
            your options, and why the plan makes sense for you.
          </p>
          <button class="mini-cta" @click="$emit('navigate', 'contact')">Book a consultation &rarr;</button>
        </div>

        <ul class="included-list">
          <li v-for="item in included" :key="item.title" class="included-item">
            <span class="included-check" aria-hidden="true">✓</span>
            <div>
              <h3 class="included-item-title">{{ item.title }}</h3>
              <p class="included-item-text">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Consultation types -->
      <div class="types-grid">
        <article v-for="type in consultationTypes" :key="type.id" class="type-card">
          <div class="type-number">{{ type.number }}</div>
          <h2 class="type-title">{{ type.title }}</h2>
          <p class="type-price">{{ type.price }}</p>
          <p class="type-description">{{ type.description }}</p>
          <ul v-if="type.includes" class="type-includes">
            <li v-for="item in type.includes" :key="item">{{ item }}</li>
          </ul>
          <button class="type-link" @click="$emit('navigate', type.target || 'contact')">{{ type.cta }} &rarr;</button>
        </article>
      </div>

      <!-- Fee list -->
      <div class="fee-list-header">
        <div class="eyebrow">Fee list</div>
        <h2 class="fee-list-title">
          Choose the duration
          <em>that suits you.</em>
        </h2>
      </div>

      <div class="fee-group">
        <ul class="fee-rows">
          <li v-for="row in feeRows" :key="row.label + row.duration" class="fee-row">
            <div class="fee-row-main">
              <span class="fee-row-label">{{ row.label }}</span>
              <span class="fee-row-mode">{{ row.mode }}</span>
            </div>
            <span class="fee-row-duration">{{ row.duration }}</span>
            <span class="fee-row-price">{{ row.price }}</span>
          </li>
        </ul>
      </div>

      <!-- Notes -->
      <ul class="fee-notes">
        <li v-for="note in feeNotes" :key="note">{{ note }}</li>
      </ul>

      <ConsultationSteps />

      <div class="mini-cta-row">
        <span class="mini-cta-text">Sounds like what you're looking for?</span>
        <button class="mini-cta" @click="$emit('navigate', 'contact')">Book a consultation &rarr;</button>
      </div>

      <!-- Why fees vary -->
      <div class="vary">
        <div class="vary-intro">
          <div class="eyebrow">Why fees vary</div>
          <h2 class="vary-title">
            Why fees differ
            <em>from one psychiatrist to another.</em>
          </h2>
        </div>

        <div class="vary-body">
          <p>
            A consultation fee largely comes down to three things: the doctor's training, how much time each patient gets, and how
            the practice is run. This is a one-doctor practice with time-based appointments and a limited number of
            sessions each day, so every consultation has room for a complete assessment and careful records, never a
            rushed visit.
          </p>
          <ul class="vary-credentials">
            <li v-for="credential in credentials" :key="credential">{{ credential }}</li>
          </ul>
          <button class="vary-link" @click="$emit('navigate', 'about')">
            Read more about Dr. Ashish Yadav &rarr;
          </button>
        </div>
      </div>

      <AppointmentFAQ />

      <!-- Cancellation summary -->
      <div class="policy-brief">
        <div class="policy-brief-head">
          <div class="eyebrow">Cancellation &amp; refunds</div>
          <h2 class="policy-brief-title">The short version</h2>
        </div>
        <ul class="policy-brief-list">
          <li>Reschedule once, free, with at least 24 hours' notice.</li>
          <li>Once an appointment is confirmed, the fee is not refunded, because that time is kept aside for you.</li>
          <li>If the clinic cancels, you can choose a new time or a full refund.</li>
        </ul>
        <button class="policy-brief-link" @click="$emit('navigate', 'cancellation')">
          Read the full cancellation &amp; refund policy &rarr;
        </button>
      </div>

      <!-- Closing CTA -->
      <div class="fees-cta">
        <h2 class="fees-cta-title">Ready to book?</h2>
        <p class="fees-cta-text">Pick online, in-person or a home visit, and choose a time that works for you.</p>
        <button class="fees-cta-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import ConsultationSteps from './ConsultationSteps.vue'
import AppointmentFAQ from './AppointmentFAQ.vue'

defineEmits(['navigate'])

const feesUpdated = '24 October 2026'

const consultationTypes = [
  {
    id: 'first',
    number: '01',
    title: 'First consultation',
    price: 'From ₹799',
    description: 'Your first visit, for any mental health concern. We take time to understand what you are going through and plan the way forward together. Online, in person or at home.',
    cta: 'Book a consultation',
  },
  {
    id: 'follow-up',
    number: '02',
    title: 'Follow-up consultation',
    price: 'From ₹499',
    description: 'For patients already under my care. A focused session to review your progress, fine-tune treatment and decide the next steps.',
    cta: 'Book a follow-up',
  },
  {
    id: 'adhd',
    number: '03',
    title: 'Adult ADHD assessment',
    price: '₹3,499 online · ₹3,999 in person',
    description: 'A structured, step-by-step assessment for adults who want a clear answer about ADHD.',
    includes: [
      'ASRS screening questionnaire',
      'Assessment done by a psychiatrist',
      'One consultation to discuss findings',
      'Written assessment report',
    ],
    cta: 'About the ADHD assessment',
    target: 'adhd',
  },
]

const included = [
  {
    title: 'Seen personally by a specialist',
    text: 'Your assessment is done by a neuro-psychiatrist (DNB Psychiatry) trained in modern medicine and in classical yogic science. Never a trainee, and never an automated AI tool.',
  },
  {
    title: 'A thorough assessment',
    text: 'A detailed history and diagnostic evaluation, including checks for physical causes, such as thyroid problems or vitamin deficiencies, that can mimic or worsen mental health symptoms.',
  },
  {
    title: 'An open conversation about options',
    text: 'A clear explanation of your diagnosis and every sensible treatment option, including therapy and lifestyle changes. Medication is one option, not the default.',
  },
  {
    title: 'A written plan',
    text: 'Your treatment plan in writing, with a prescription only when it is clinically needed.',
  },
  {
    title: 'Privacy, online and offline',
    text: 'For online visits, a private one-to-one video call. Your records are kept securely, as per medical guidelines.',
  },
]

const credentials = [
  'Neuro-psychiatrist (DNB Psychiatry)',
  'Part of a Guinness World Record',
  'Internationally certified yoga teacher',
]

const feeRows = [
  { label: 'Online consultation', mode: 'Video call', duration: '30 min', price: '₹799' },
  { label: 'Online consultation', mode: 'Video call', duration: '60 min', price: '₹1,499' },
  { label: 'In-person consultation', mode: 'In Jaipur', duration: '30 min', price: '₹799' },
  { label: 'In-person consultation', mode: 'In Jaipur', duration: '60 min', price: '₹1,499' },
  { label: 'Follow-up consultation', mode: 'Online or in Jaipur', duration: '30 min', price: '₹499' },
  { label: 'Home visit', mode: 'Within Jaipur', duration: '60 min', price: '₹4,499' },
  { label: 'Session extension', mode: 'Subject to availability', duration: '15 min', price: '₹399' },
]

const feeNotes = [
  'The fee is for the time booked. If we cover everything sooner, the session may end early.',
  'No registration or hidden charges on top of the consultation fee.',
  'Medicines, lab tests and therapy sessions are charged separately, if needed.',
]
</script>

<style scoped>
.fees {
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  background: var(--bg-page);
}

.fees-container {
  max-width: var(--container-lg);
  margin: 0 auto;
}

/* ---- Header ---- */
.fees-header {
  max-width: 760px;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.fees-header .eyebrow {
  margin-bottom: 1rem;
}

.fees-title,
.fee-list-title {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-strong);
  letter-spacing: var(--ls-tight);
}

.fees-title {
  font-size: var(--fs-h1);
  margin: 0 0 1.25rem;
}

.fees-title em,
.fee-list-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.fees-lead {
  font-size: var(--fs-md);
  color: var(--text-body);
  margin: 0 0 1rem;
}

.fees-updated {
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-100);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  margin: 0;
}

/* ---- Consultation types ---- */
.types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: clamp(3.5rem, 7vw, 5rem);
}

.type-card {
  display: flex;
  flex-direction: column;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2rem);
  box-shadow: var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft);
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.type-number {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.type-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.type-price {
  font-weight: 700;
  color: var(--brand-ink);
  margin: 0 0 0.75rem;
}

.type-description {
  font-size: 0.9375rem;
  margin: 0 0 1rem;
}

.type-includes {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.type-includes li {
  position: relative;
  padding-left: 1.4rem;
  font-size: 0.875rem;
}

.type-includes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: 700;
}

.type-link {
  margin-top: auto;
  align-self: flex-start;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--brand-ink);
}

.type-link:hover {
  color: var(--brand-hover);
}

/* ---- What's included ---- */
.included {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
  margin-bottom: clamp(3.5rem, 7vw, 5rem);
}

.included-intro {
  position: sticky;
  top: 100px;
}

.included-intro .eyebrow {
  margin-bottom: 0.75rem;
}

.included-title {
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0 0 1rem;
}

.included-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.included-aim {
  font-size: var(--fs-md);
  margin: 0;
}

.included-list {
  list-style: none;
  margin: 0;
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1.25rem, 3vw, 2rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.included-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px dashed var(--border);
}

.included-item:last-child {
  border-bottom: none;
}

.included-check {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--brand-ink);
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;
}

.included-item-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.included-item-text {
  font-size: 0.9375rem;
  margin: 0;
}

/* ---- Fee list ---- */
.fee-list-header {
  margin-bottom: 2rem;
}

.fee-list-header .eyebrow {
  margin-bottom: 0.75rem;
}

.fee-list-title {
  font-size: var(--fs-h2);
  margin: 0;
}

.fee-group {
  max-width: var(--container-md);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 0.5rem clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 1.75rem);
}

.fee-rows {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fee-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px dashed var(--border);
}

.fee-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.fee-row-main {
  display: flex;
  flex-direction: column;
}

.fee-row-label {
  font-weight: 600;
  color: var(--text-strong);
}

.fee-row-mode {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.fee-row-duration {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

.fee-row-price {
  font-family: var(--font-sans);
  font-variant-numeric: tabular-nums;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-strong);
  min-width: 5.5rem;
  text-align: right;
}

.fee-notes {
  max-width: var(--container-md);
  margin: 1.5rem 0 0;
  padding: 1.25rem 1.5rem 1.25rem 2.5rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9375rem;
}

/* ---- Small inline CTAs ---- */
.mini-cta {
  display: inline-flex;
  align-items: center;
  margin-top: 1.25rem;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: var(--fs-sm);
  font-weight: 600;
  border-radius: var(--radius-pill);
}

.mini-cta:hover {
  background: var(--brand-hover);
}

.mini-cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1rem;
  margin-top: 1.75rem;
}

.mini-cta-row .mini-cta {
  margin-top: 0;
}

.mini-cta-text {
  font-weight: 600;
  color: var(--text-strong);
}

/* ---- Why fees vary ---- */
.vary {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
  margin-top: clamp(3.5rem, 7vw, 5rem);
  padding-top: clamp(2.5rem, 5vw, 3.5rem);
  border-top: 1px solid var(--border);
}

.vary-intro .eyebrow {
  margin-bottom: 0.75rem;
}

.vary-title {
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0;
}

.vary-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.vary-body p {
  font-size: var(--fs-md);
  margin: 0 0 1.25rem;
}

.vary-credentials {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.vary-credentials li {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
}

.vary-link {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--brand-ink);
}

.vary-link:hover {
  color: var(--brand-hover);
}

/* ---- Cancellation summary ---- */
.policy-brief {
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
  padding: clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 2rem);
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
}

.policy-brief-head .eyebrow {
  color: var(--camel-700);
  margin-bottom: 0.25rem;
}

.policy-brief-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
}

.policy-brief-list {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9375rem;
}

.policy-brief-link {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--brand-ink);
  text-align: left;
}

.policy-brief-link:hover {
  color: var(--brand-hover);
}

/* ---- Closing CTA ---- */
.fees-cta {
  margin-top: clamp(3rem, 6vw, 4.5rem);
  padding: clamp(2rem, 5vw, 3rem);
  background: var(--sage-100);
  border-radius: var(--radius-xl);
  text-align: center;
}

.fees-cta-title {
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.fees-cta-text {
  margin: 0 auto 1.5rem;
  max-width: 520px;
}

.fees-cta-button {
  border: none;
  cursor: pointer;
  padding: 14px 32px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
}

.fees-cta-button:hover {
  background: var(--brand-hover);
}

@media (max-width: 900px) {
  .types-grid,
  .included,
  .vary {
    grid-template-columns: 1fr;
  }

  .included-intro {
    position: static;
  }
}

@media (max-width: 480px) {
  .fee-row {
    grid-template-columns: 1fr auto;
  }

  .fee-row-duration {
    grid-column: 1;
    justify-self: start;
  }

  .fee-row-price {
    grid-column: 2;
    grid-row: 1 / span 2;
    min-width: 0;
  }
}
</style>
