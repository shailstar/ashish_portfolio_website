<template>
  <section class="adhd">
    <div class="adhd-container">
      <button class="adhd-back" @click="$emit('navigate', 'fees')">&larr; Back to fees</button>

      <!-- Hero -->
      <header class="adhd-hero">
        <div class="eyebrow">Adult ADHD Assessment · Online &amp; In Jaipur</div>
        <h1 class="adhd-title">
          Adult ADHD assessment,
          <em>done properly.</em>
        </h1>
        <p class="adhd-lead">
          A structured, clinician-led assessment for adults who have long wondered whether ADHD explains their
          struggles with focus, time and follow-through. You get a consultation, a written report and a clear sense
          of what to do next.
        </p>
        <div class="adhd-prices">
          <span class="adhd-price"><strong>₹3,499</strong> online</span>
          <span class="adhd-price"><strong>₹3,999</strong> in person, Jaipur</span>
        </div>
        <div class="adhd-hero-actions">
          <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" class="adhd-button">Book the assessment</a>
          <button class="adhd-button adhd-button-outline" @click="scrollTo('adhd-steps')">See how it works &darr;</button>
        </div>
        <p class="adhd-disclaimer">
          A diagnosis is a clinical decision made after the assessment. Booking does not guarantee a particular result.
        </p>
      </header>

      <!-- At a glance -->
      <div class="adhd-glance">
        <div v-for="item in glance" :key="item.label" class="adhd-glance-item">
          <span class="adhd-glance-label">{{ item.label }}</span>
          <span class="adhd-glance-value">{{ item.value }}</span>
        </div>
      </div>

      <!-- Steps -->
      <div id="adhd-steps" class="adhd-block">
        <div class="eyebrow">Step by step</div>
        <h2 class="adhd-h2">
          How the assessment
          <em>works.</em>
        </h2>
        <ol class="adhd-steps">
          <li v-for="(step, index) in steps" :key="step.title" class="adhd-step">
            <span class="adhd-step-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="adhd-step-title">{{ step.title }}</h3>
            <p class="adhd-step-text">{{ step.text }}</p>
          </li>
        </ol>
      </div>

      <!-- What you receive -->
      <div class="adhd-block adhd-split">
        <div class="adhd-split-intro">
          <div class="eyebrow">What you receive</div>
          <h2 class="adhd-h2">
            What the fee
            <em>covers.</em>
          </h2>
          <p class="adhd-text">Everything listed here is included in both the online and the in-person package.</p>
          <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" class="adhd-mini-cta">Book the assessment &rarr;</a>
        </div>
        <div class="adhd-receive">
          <div class="adhd-receive-card">
            <h3 class="adhd-receive-title">Included</h3>
            <ul class="adhd-ticks">
              <li v-for="item in included" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="adhd-receive-card adhd-receive-card-muted">
            <h3 class="adhd-receive-title">Charged separately, if needed</h3>
            <ul class="adhd-crosses">
              <li v-for="item in notIncluded" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Why fees vary -->
      <div class="adhd-block adhd-split">
        <div class="adhd-split-intro">
          <div class="eyebrow">Why the fees vary</div>
          <h2 class="adhd-h2">
            Online or in person:
            <em>what changes.</em>
          </h2>
        </div>
        <div>
          <div class="adhd-compare">
            <div class="adhd-compare-row adhd-compare-head">
              <span></span>
              <span>Online</span>
              <span>In person</span>
            </div>
            <div v-for="row in compare" :key="row.label" class="adhd-compare-row">
              <span class="adhd-compare-label">{{ row.label }}</span>
              <span>{{ row.online }}</span>
              <span>{{ row.inPerson }}</span>
            </div>
            <div class="adhd-compare-row adhd-compare-total">
              <span class="adhd-compare-label">Total</span>
              <span>₹3,499</span>
              <span>₹3,999</span>
            </div>
          </div>
          <p class="adhd-text adhd-compare-note">
            The ASRS questionnaire and the written report are exactly the same in both, and the evaluation is just as
            thorough. The in-person package costs a little more because the evaluation happens face to face at the
            clinic in Jaipur.
          </p>
        </div>
      </div>

      <!-- Check before booking -->
      <div class="adhd-block adhd-split">
        <div class="adhd-split-intro">
          <div class="eyebrow">Before you book</div>
          <h2 class="adhd-h2">
            A few things
            <em>to check first.</em>
          </h2>
          <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" class="adhd-mini-cta">Book the assessment &rarr;</a>
        </div>
        <ul class="adhd-checklist">
          <li v-for="item in checklist" :key="item.title" class="adhd-check">
            <span class="adhd-check-box" aria-hidden="true">✓</span>
            <div>
              <h3 class="adhd-check-title">{{ item.title }}</h3>
              <p class="adhd-check-text">
                {{ item.text }}
                <button v-if="item.policyLink" class="adhd-inline-link" @click="$emit('navigate', 'cancellation')">
                  Read the cancellation policy.
                </button>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Follow-ups -->
      <div class="adhd-block adhd-split">
        <div class="adhd-split-intro">
          <div class="eyebrow">After the assessment</div>
          <h2 class="adhd-h2">
            How follow-ups
            <em>work.</em>
          </h2>
        </div>
        <div class="adhd-followup">
          <p v-for="para in followUps" :key="para" class="adhd-text">{{ para }}</p>
          <p class="adhd-followup-fee">Follow-up consultation: <strong>₹499</strong> for 30 minutes</p>
        </div>
      </div>

      <!-- Self-check -->
      <a href="/asrs.html" target="_blank" rel="noopener noreferrer" class="adhd-selfcheck">
        <span class="adhd-selfcheck-label">Not sure yet?</span>
        <span class="adhd-selfcheck-title">Try the free ASRS self-check now &rarr;</span>
        <span class="adhd-selfcheck-sub">
          The same brief screening questionnaire used at the start of the assessment. On its own it cannot diagnose
          ADHD, but it can help you decide whether a full evaluation is worth it.
        </span>
      </a>

      <!-- FAQ -->
      <AppointmentFAQ
        eyebrow="Common questions"
        title="Adult ADHD,"
        emphasis="your questions answered."
        lead="Honest answers to what people usually ask before an ADHD assessment. Still unsure?"
        :faqs="faqs"
      />

      <!-- Crisis note -->
      <p class="adhd-urgent">
        <strong>Not an emergency service.</strong> If you or someone close to you is in danger or thinking of
        self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on
        <a href="tel:14416">14416</a> (free, 24×7).
      </p>

      <!-- Closing CTA -->
      <div class="adhd-cta">
        <h2 class="adhd-cta-title">Ready for a clear answer?</h2>
        <p class="adhd-cta-text">Message on WhatsApp to begin. You'll hear back about suitability before you pay.</p>
        <div class="adhd-hero-actions adhd-cta-actions">
          <a :href="WHATSAPP" target="_blank" rel="noopener noreferrer" class="adhd-button">Book the assessment</a>
          <button class="adhd-button adhd-button-outline" @click="$emit('navigate', 'fees')">See all consultation fees</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppointmentFAQ from './AppointmentFAQ.vue'
import { waLink } from '../data/clinics.js'

defineEmits(['navigate'])

const WHATSAPP = waLink("Hi Dr. Ashish, I'd like to take the adult ADHD assessment. Could you check if it's suitable for me?")

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const glance = [
  { label: 'What it is', value: 'A structured ADHD assessment for adults, 18 and over' },
  { label: 'Who does it', value: 'Dr. Ashish Yadav, Neuro-psychiatrist (DNB Psychiatry)' },
  { label: 'Where', value: 'Online by Google Meet, or in person in Jaipur' },
  { label: 'Fee', value: '₹3,499 online · ₹3,999 in person' },
  { label: 'You receive', value: 'A consultation and a written assessment report' },
  { label: 'What it is not', value: 'A quick online quiz, or a promise of a diagnosis or medicine' },
]

const steps = [
  {
    title: 'Check suitability',
    text: 'Send a message on WhatsApp. We first confirm that a structured ADHD assessment is the right next step for you.',
  },
  {
    title: 'Book and fill in the ASRS',
    text: 'Once you book, you receive the ASRS, a brief and widely used ADHD screening questionnaire, to complete before your consultation.',
  },
  {
    title: 'Comprehensive evaluation',
    text: 'Dr. Ashish Yadav personally carries out a detailed evaluation covering your childhood, studies, work and relationships, and checks for conditions that can look like ADHD. Online or in person.',
  },
  {
    title: 'Report and next steps',
    text: 'You receive a written report explaining the findings, along with practical strategies and the next steps that fit you.',
  },
]

const included = [
  'The ASRS, a brief ADHD screening questionnaire',
  'A detailed, comprehensive evaluation done personally by the psychiatrist, not an app or AI tool',
  'Screening for conditions that can look like ADHD, such as anxiety, depression or sleep problems',
  'Discussion of your findings in the same consultation',
  'A written assessment report',
  'Practical, non-medication strategies where they help',
]

const notIncluded = [
  'Further consultations, including any needed to complete the assessment',
  'Medicines',
  'Lab tests or other investigations',
  'Ongoing therapy',
]

const compare = [
  { label: 'ASRS questionnaire & written report', online: 'Same', inPerson: 'Same' },
  { label: 'Comprehensive evaluation', online: 'Google Meet', inPerson: 'At the clinic, Jaipur' },
]

const checklist = [
  {
    title: 'You are 18 or older',
    text: 'This package is for adults. Children and teenagers are also seen, as child and adolescent psychiatry was part of my training, so please message first. They are always seen with a parent or guardian.',
  },
  {
    title: 'You need a specific date',
    text: 'If you have a date in mind, ask about availability before you pay.',
  },
  {
    title: 'You have a deadline',
    text: 'If you need the report by a certain date, for work or studies, ask about timing first.',
  },
  {
    title: 'You are already a patient',
    text: 'If you are already under my care, message before booking so we can plan the assessment alongside your treatment.',
  },
  {
    title: 'You have read the cancellation terms',
    text: 'The fee is refunded in full if the assessment is not suitable for you. Once your evaluation appointment is confirmed, it is non-refundable, like a regular consultation.',
    policyLink: true,
  },
]

const followUps = [
  'Sometimes the assessment and one consultation give a clear answer. Sometimes more history or another appointment is needed before a diagnosis can be made. If so, the reason and the next step are explained to you before anything is booked.',
  'If ADHD is diagnosed and you choose to start treatment, follow-ups are booked as regular consultations. How often depends on your plan, and this is agreed with you.',
]

const faqs = [
  {
    q: 'I have done well in my studies and career. Can I still have ADHD?',
    a: '<p>Yes. Many capable adults with ADHD manage for years through extra effort, late nights and last-minute pressure. Doing well does not rule ADHD out, especially if it has always felt harder for you than for others.</p>',
  },
  {
    q: 'Is this the same as an online ADHD test?',
    a: '<p>No. Online tests, including the free <a href="/asrs.html" target="_blank" rel="noopener noreferrer">ASRS self-check</a> on this site, can only suggest whether a closer look is worthwhile. A diagnosis needs a clinician to review your full history and rule out other causes.</p>',
  },
  {
    q: 'Will I definitely get a diagnosis?',
    a: '<p>No result is promised in advance. The report will say whether the findings support ADHD, do not support it, or need further assessment before a clear answer is possible.</p>',
  },
  {
    q: 'Will I be given medicine?',
    a: '<p>Medicine is discussed only if ADHD is diagnosed, and only if it suits you. Under India\'s telemedicine rules, some ADHD medicines, including stimulants, cannot be prescribed online, so an in-person visit may be needed for those.</p>',
  },
  {
    q: 'Can the whole assessment be done online?',
    a: '<p>Usually, yes. The ASRS is filled in online and the comprehensive evaluation happens on Google Meet. If something needs to be checked in person, you will be told.</p>',
  },
  {
    q: 'Can my child or teenager have this assessment?',
    a: '<p>This package is designed for adults. Children and teenagers are assessed differently, and Dr. Ashish Yadav has trained in child and adolescent psychiatry. They are always seen with a parent or guardian present and after proper consent. Please message first to discuss.</p>',
  },
  {
    q: 'Will my information stay private?',
    a: '<p>Yes. Your answers and report are seen only by your doctor and kept securely as per medical guidelines.</p>',
  },
]
</script>

<style scoped>
.adhd {
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.adhd-container {
  max-width: var(--container-lg);
  margin: 0 auto;
}

.adhd-back {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--brand-ink);
  margin-bottom: 2rem;
}

.adhd-back:hover {
  color: var(--brand-hover);
}

/* ---- Shared headings ---- */
.adhd-title,
.adhd-h2 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
}

.adhd-title em,
.adhd-h2 em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.adhd-title {
  font-size: var(--fs-h1);
  margin: 1rem 0 1.25rem;
}

.adhd-h2 {
  font-size: var(--fs-h2);
  margin: 0.75rem 0 1rem;
}

.adhd-text {
  font-size: var(--fs-md);
  margin: 0 0 1rem;
}

/* ---- Hero ---- */
.adhd-hero {
  max-width: 780px;
}

.adhd-lead {
  font-size: var(--fs-md);
  margin: 0 0 1.25rem;
}

.adhd-prices {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.adhd-price {
  font-size: var(--fs-sm);
  color: var(--brand-ink);
  background: var(--sage-100);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
}

.adhd-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.adhd-button {
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

.adhd-button:hover {
  background: var(--brand-hover);
  border-color: var(--brand-hover);
  color: var(--text-on-brand);
}

.adhd-button-outline {
  background: transparent;
  color: var(--brand-ink);
}

.adhd-button-outline:hover {
  background: var(--sage-100);
  color: var(--brand-ink);
  border-color: var(--brand);
}

.adhd-disclaimer {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  margin: 0;
}

/* ---- At a glance ---- */
.adhd-glance {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.adhd-glance-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.25rem 1.5rem;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.adhd-glance-item:nth-child(3n) {
  border-right: none;
}

.adhd-glance-item:nth-last-child(-n + 3) {
  border-bottom: none;
}

.adhd-glance-label {
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-muted);
}

.adhd-glance-value {
  font-weight: 600;
  color: var(--text-strong);
}

/* ---- Blocks ---- */
.adhd-block {
  margin-top: clamp(3.5rem, 7vw, 5rem);
}

.adhd-split {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
  padding-top: clamp(2.5rem, 5vw, 3.5rem);
  border-top: 1px solid var(--border);
}

.adhd-split-intro {
  position: sticky;
  top: 100px;
}

/* ---- Steps ---- */
.adhd-steps {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.adhd-step {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.25rem;
}

.adhd-step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--brand);
  color: var(--text-on-brand);
  font-weight: 700;
  font-size: var(--fs-sm);
  margin-bottom: 0.9rem;
}

.adhd-step-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
}

.adhd-step-text {
  font-size: 0.875rem;
  margin: 0;
}

/* ---- What you receive ---- */
.adhd-receive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.adhd-receive-card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 3vw, 1.75rem);
}

.adhd-receive-card-muted {
  background: var(--stone-50);
}

.adhd-receive-title {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 0.9rem;
}

.adhd-ticks,
.adhd-crosses {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.adhd-ticks li,
.adhd-crosses li {
  position: relative;
  padding-left: 1.75rem;
  font-size: 0.9375rem;
}

.adhd-ticks li::before,
.adhd-crosses li::before {
  position: absolute;
  left: 0;
  top: 0.1rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
}

.adhd-ticks li::before {
  content: '✓';
  background: var(--sage-100);
  color: var(--brand-ink);
}

.adhd-crosses li::before {
  content: '+';
  background: var(--stone-100);
  color: var(--text-muted);
}

/* ---- Fee comparison ---- */
.adhd-compare {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.adhd-compare-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid var(--border);
  font-size: 0.9375rem;
  font-variant-numeric: tabular-nums;
}

.adhd-compare-head {
  background: var(--sage-50);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--brand-ink);
}

.adhd-compare-label {
  font-weight: 600;
  color: var(--text-strong);
}

.adhd-compare-total {
  border-bottom: none;
  font-weight: 700;
  font-size: 1.0625rem;
  color: var(--text-strong);
}

.adhd-compare-note {
  margin-top: 1rem;
  font-size: 0.9375rem;
}

/* ---- Checklist ---- */
.adhd-mini-cta {
  display: inline-flex;
  margin-top: 0.5rem;
  padding: 10px 20px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: var(--fs-sm);
  font-weight: 600;
  border-radius: var(--radius-pill);
}

.adhd-mini-cta:hover {
  background: var(--brand-hover);
  color: var(--text-on-brand);
}

.adhd-checklist {
  list-style: none;
  margin: 0;
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1.25rem, 3vw, 2rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.adhd-check {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px dashed var(--border);
}

.adhd-check:last-child {
  border-bottom: none;
}

.adhd-check-box {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--radius-xs);
  border: 1.5px solid var(--border-brand);
  background: var(--sage-50);
  color: var(--brand-ink);
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;
}

.adhd-check-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.adhd-check-text {
  font-size: 0.9375rem;
  margin: 0;
}

.adhd-inline-link {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  color: var(--brand-ink);
  text-decoration: underline;
}

/* ---- Follow-ups ---- */
.adhd-followup-fee {
  display: inline-block;
  margin: 0.5rem 0 0;
  padding: 10px 18px;
  background: var(--sage-100);
  color: var(--brand-ink);
  border-radius: var(--radius-pill);
  font-size: 0.9375rem;
}

/* ---- Self-check ---- */
.adhd-selfcheck {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: clamp(3rem, 6vw, 4rem);
  padding: 1.5rem 1.75rem;
  border: 1.5px dashed var(--border-brand);
  border-radius: var(--radius-lg);
  background: var(--sage-50);
  text-decoration: none;
  transition: background var(--dur-fast) var(--ease-soft);
}

.adhd-selfcheck:hover {
  background: var(--sage-100);
}

.adhd-selfcheck-label {
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-muted);
}

.adhd-selfcheck-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--brand-ink);
}

.adhd-selfcheck-sub {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

/* ---- Crisis + CTA ---- */
.adhd-urgent {
  margin: 2.5rem 0 0;
  padding: 1rem 1.25rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
  font-size: var(--fs-sm);
}

.adhd-urgent a {
  font-weight: 600;
}

.adhd-cta {
  margin-top: clamp(3rem, 6vw, 4.5rem);
  padding: clamp(2rem, 5vw, 3rem);
  background: var(--sage-100);
  border-radius: var(--radius-xl);
  text-align: center;
}

.adhd-cta-title {
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.adhd-cta-text {
  margin: 0 auto 1.5rem;
  max-width: 520px;
}

.adhd-cta-actions {
  justify-content: center;
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .adhd-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .adhd-split {
    grid-template-columns: 1fr;
  }

  .adhd-split-intro {
    position: static;
  }

  .adhd-glance {
    grid-template-columns: 1fr 1fr;
  }

  .adhd-glance-item:nth-child(n) {
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .adhd-glance-item:nth-child(2n) {
    border-right: none;
  }

  .adhd-glance-item:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 560px) {
  .adhd-steps,
  .adhd-glance {
    grid-template-columns: 1fr;
  }

  .adhd-glance-item:nth-child(n) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .adhd-glance-item:last-child {
    border-bottom: none;
  }

  .adhd-compare-row {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    padding: 0.8rem 1rem;
    font-size: var(--fs-sm);
  }
}
</style>
