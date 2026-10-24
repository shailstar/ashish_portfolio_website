<template>
  <section class="policy">
    <div class="policy-container">
      <button class="policy-back" @click="$emit('navigate', 'fees')">&larr; Back to fees</button>

      <header class="policy-header">
        <div class="eyebrow">Policy</div>
        <h1 class="policy-title">
          Cancellation &amp;
          <em>refund policy.</em>
        </h1>
        <p class="policy-lead">
          This policy covers online, in-person and home-visit consultations, follow-ups and the adult ADHD
          assessment. Please read it before you pay. If anything is unclear, ask on WhatsApp first.
        </p>
        <p class="policy-updated">Effective from: {{ effectiveDate }}</p>
      </header>

      <!-- Summary -->
      <div class="policy-summary">
        <h2 class="policy-summary-title">In short</h2>
        <ul>
          <li v-for="point in summary" :key="point">{{ point }}</li>
        </ul>
      </div>

      <!-- Full sections -->
      <ol class="policy-sections">
        <li v-for="(section, index) in sections" :key="section.title" class="policy-section">
          <h2 class="policy-section-title">
            <span class="policy-section-number">{{ index + 1 }}</span>
            {{ section.title }}
          </h2>
          <ul class="policy-rules">
            <li v-for="rule in section.rules" :key="rule">{{ rule }}</li>
          </ul>
        </li>
      </ol>

      <!-- How to request -->
      <div class="policy-contact">
        <h2 class="policy-contact-title">How to reschedule, cancel or ask for a refund</h2>
        <p>
          Send a message with your name, appointment date and payment reference. Every request is reviewed
          personally.
        </p>
        <div class="policy-contact-links">
          <a href="https://wa.me/message/75HLOF6Q7MV4A1" target="_blank" rel="noopener noreferrer" class="policy-button">
            Message on WhatsApp
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@drashishyadav.com"
            target="_blank"
            rel="noopener noreferrer"
            class="policy-button policy-button-outline"
          >
            Send an email
          </a>
        </div>
      </div>

      <p class="policy-urgent">
        <strong>Not an emergency service.</strong> If you or someone close to you is in danger or thinking of
        self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on
        <a href="tel:14416">14416</a> (free, 24×7). Nothing in this policy limits your rights under applicable law.
      </p>
    </div>
  </section>
</template>

<script setup>
defineEmits(['navigate'])

const effectiveDate = '24 October 2026'

const summary = [
  'You can reschedule once, free, with at least 24 hours\' notice.',
  'Once an appointment is confirmed, the fee is not refunded, because that time is kept aside for you.',
  'If the clinic cancels, or the ADHD assessment turns out not to be suitable for you, you get a full refund.',
]

const sections = [
  {
    title: 'Rescheduling',
    rules: [
      'Each appointment can be rescheduled once, free of charge, if you let us know at least 24 hours before it starts.',
      'Your payment moves to the new date and time. Rescheduling does not lead to a refund.',
      'Requests made with less than 24 hours\' notice, or a second reschedule, are accepted only at the doctor\'s discretion.',
    ],
  },
  {
    title: 'Cancellations and missed appointments',
    rules: [
      'Consultation fees are non-refundable once your appointment is confirmed, because that slot is held only for you.',
      'Cancelling within 24 hours of the appointment, or not joining at all, is treated as a completed consultation. The fee is not refunded or carried forward.',
      'If you join late, the session still ends at the scheduled time and the full fee applies.',
    ],
  },
  {
    title: 'Home visits',
    rules: [
      'Home visits are confirmed on WhatsApp. The rescheduling and cancellation rules above apply from the moment a visit is confirmed.',
      'Please make sure someone is at the address at the confirmed time. A visit where no one is available is treated as a completed consultation.',
    ],
  },
  {
    title: 'Adult ADHD assessment',
    rules: [
      'Before your evaluation appointment is confirmed, we check that a structured ADHD assessment is right for you.',
      'If it is not suitable, or we are unable to offer it, your fee is refunded in full.',
      'Once your comprehensive evaluation appointment is confirmed, the fee is non-refundable, just like a regular consultation.',
      'The evaluation appointment follows the same rescheduling and missed-appointment rules as any other consultation.',
      'The assessment does not guarantee a particular diagnosis, prescription or certificate.',
    ],
  },
  {
    title: 'If the clinic cancels',
    rules: [
      'If your appointment has to be cancelled from our side, you can choose a new time or a full refund.',
    ],
  },
  {
    title: 'Refunds',
    rules: [
      'Payments are refunded only in the situations described in this policy.',
      'Duplicate or failed payments are refunded in full once checked against payment records.',
      'If a genuine, documented emergency stopped you from attending and from giving notice, a one-time reschedule may be offered at the doctor\'s discretion. This is a reschedule, not a refund.',
      'Refunds are made to the original payment method, usually within 7 to 10 working days.',
    ],
  },
]
</script>

<style scoped>
.policy {
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.policy-container {
  max-width: var(--container-md);
  margin: 0 auto;
}

.policy-back {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--brand-ink);
  margin-bottom: 2rem;
}

.policy-back:hover {
  color: var(--brand-hover);
}

.policy-header {
  margin-bottom: 2rem;
}

.policy-header .eyebrow {
  margin-bottom: 1rem;
}

.policy-title {
  font-family: var(--font-display);
  font-size: var(--fs-h1);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0 0 1.25rem;
}

.policy-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.policy-lead {
  font-size: var(--fs-md);
  margin: 0 0 1rem;
}

.policy-updated {
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-100);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  margin: 0;
}

.policy-summary {
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
}

.policy-summary-title {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--camel-700);
  margin: 0 0 0.75rem;
}

.policy-summary ul {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.policy-sections {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.policy-section {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 3vw, 1.75rem);
}

.policy-section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
}

.policy-section-number {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--brand);
  color: var(--text-on-brand);
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
}

.policy-rules {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9375rem;
}

.policy-contact {
  margin-top: 2.5rem;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: var(--sage-100);
  border-radius: var(--radius-xl);
  text-align: center;
}

.policy-contact-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.policy-contact p {
  margin: 0 auto 1.25rem;
  max-width: 520px;
}

.policy-contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.policy-button {
  padding: 12px 24px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: var(--fs-sm);
  font-weight: 600;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--brand);
}

.policy-button:hover {
  background: var(--brand-hover);
  border-color: var(--brand-hover);
  color: var(--text-on-brand);
}

.policy-button-outline {
  background: transparent;
  color: var(--brand-ink);
}

.policy-button-outline:hover {
  background: var(--white);
  color: var(--brand-ink);
  border-color: var(--brand);
}

.policy-urgent {
  margin: 2rem 0 0;
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.policy-urgent a {
  font-weight: 600;
}
</style>
