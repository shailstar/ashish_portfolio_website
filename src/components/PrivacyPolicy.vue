<template>
  <section class="privacy">
    <div class="privacy-container">
      <button class="privacy-back" @click="$emit('navigate', 'home')">&larr; Back to home</button>

      <header class="privacy-header">
        <div class="eyebrow">Policy</div>
        <h1 class="privacy-title">
          Privacy
          <em>policy.</em>
        </h1>
        <p class="privacy-lead">
          Mental health care depends on trust. This page explains, in plain language, what information this website
          and practice collect, why, and how it is protected.
        </p>
        <p class="privacy-updated">Effective from: {{ effectiveDate }}</p>
      </header>

      <div class="privacy-summary">
        <h2 class="privacy-summary-title">In short</h2>
        <ul>
          <li v-for="point in summary" :key="point">{{ point }}</li>
        </ul>
      </div>

      <ol class="privacy-sections">
        <li v-for="(section, index) in sections" :key="section.title" class="privacy-section">
          <h2 class="privacy-section-title">
            <span class="privacy-section-number">{{ index + 1 }}</span>
            {{ section.title }}
          </h2>
          <p v-for="para in section.paras || []" :key="para" class="privacy-para">{{ para }}</p>
          <ul v-if="section.points" class="privacy-points">
            <li v-for="point in section.points" :key="point">{{ point }}</li>
          </ul>
        </li>
      </ol>

      <div class="privacy-contact">
        <h2 class="privacy-contact-title">Questions or requests about your data</h2>
        <p>
          To ask what information is held about you, or to have it corrected or deleted, write to
          <strong>contact@drashishyadav.com</strong> or send a message on WhatsApp. Every request is answered personally.
        </p>
        <div class="privacy-contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@drashishyadav.com"
            target="_blank"
            rel="noopener noreferrer"
            class="privacy-button"
          >
            Send an email
          </a>
          <a
            :href="waLink(PRIVACY_MSG)"
            target="_blank"
            rel="noopener noreferrer"
            class="privacy-button privacy-button-outline"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      <p class="privacy-urgent">
        <strong>Not an emergency service.</strong> If you or someone close to you is in danger or thinking of
        self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on
        <a href="tel:14416">14416</a> (free, 24×7).
      </p>
    </div>
  </section>
</template>

<script setup>
import { waLink } from '../data/clinics.js'

defineEmits(['navigate'])

const PRIVACY_MSG = 'Hi Dr. Ashish, I have a question about my personal data.'

const effectiveDate = '24 October 2026'

const summary = [
  'What you share in a consultation stays confidential between you and your doctor.',
  'Consultations are never recorded.',
  'Your information is never sold or used for advertising.',
  'Answers to the self-checks on this site stay in your browser and are not sent to us.',
  'You can ask to see, correct or delete your information at any time.',
]

const sections = [
  {
    title: 'Who this policy covers',
    paras: [
      'This policy applies to this website and to the private psychiatry practice of Dr. Ashish Yadav in Jaipur, including online, in-person and home-visit consultations and the adult ADHD assessment.',
    ],
  },
  {
    title: 'Information we collect',
    points: [
      'Contact details you give us when you message, email or book, such as your name, phone number and email address.',
      'Health information you choose to share before or during a consultation, such as your symptoms, history, medicines and reports.',
      'Booking and payment details needed to confirm and manage your appointments, such as your Razorpay payment ID or UPI transaction reference.',
      'Basic website usage data collected by Google Analytics, such as the pages visited, device type, browser and approximate location. This does not include your name.',
    ],
  },
  {
    title: 'Self-check tools',
    paras: [
      'The PHQ-9, ASRS and 2-minute self assessment work entirely in your browser. Your answers are not sent to us or stored by us.',
      'Google Analytics counts visits to the self-check pages, but it never sees your answers or your results. The PHQ-9 results pages are not tracked at all.',
    ],
  },
  {
    title: 'How your information is used',
    points: [
      'To reply to your questions and arrange your appointments.',
      'To assess you, plan your care and keep your medical records.',
      'To send you appointment details, such as your Google Meet link, reports and prescriptions.',
      'To understand, in general terms, how the website is used so it can be improved.',
    ],
  },
  {
    title: 'Who your information is shared with',
    paras: [
      'Your information is never sold, rented or used for advertising. It is shared only in these limited situations:',
    ],
    points: [
      'Service providers that make the practice work: Google (Calendar, Meet, Gmail and Analytics), WhatsApp, and Netlify, which hosts this website. They handle data under their own privacy policies.',
      'Booking details you enter on this website are not stored here. They are sent to the clinic through WhatsApp when you tap the send button.',
      'Payments are made through Razorpay or directly by UPI. Razorpay, your UPI app and your bank process the payment under their own terms. Only the payment reference is kept to confirm your booking. Card or bank details are never collected by this website.',
      'Other healthcare professionals, such as a lab or a therapist, only with your consent and only when it helps your care.',
      'When the law requires it, or when there is a serious and immediate risk to your life or someone else\'s.',
    ],
  },
  {
    title: 'Consultations and medical records',
    points: [
      'Online consultations are one-to-one video calls on Google Meet.',
      'Consultations, online or in person, are never recorded.',
      'Medical records are kept confidential and stored securely, for as long as medical regulations require.',
      'Only your doctor has access to your clinical notes.',
    ],
  },
  {
    title: 'Cookies and analytics',
    paras: [
      'This website uses Google Analytics, which places cookies in your browser to count visits and understand how pages are used. No other tracking or advertising cookies are used.',
      'You can block or delete cookies in your browser settings, or install Google\'s Analytics opt-out browser add-on. The website will still work normally.',
    ],
  },
  {
    title: 'Your rights',
    paras: [
      'Under India\'s Digital Personal Data Protection Act, 2023, you have the right to:',
    ],
    points: [
      'Know what personal information is held about you and how it is used.',
      'Ask for it to be corrected, completed or updated.',
      'Ask for it to be deleted, except where medical regulations require records to be kept.',
      'Withdraw your consent for future use of your information.',
      'Raise a concern and have it addressed.',
    ],
  },
  {
    title: 'Children and teenagers',
    paras: [
      'Information about anyone under 18 is collected only with the consent of a parent or guardian, who is present for their consultations.',
    ],
  },
  {
    title: 'Keeping your information safe',
    paras: [
      'Reasonable technical and practical steps are taken to protect your information from loss, misuse or unauthorised access. No method of sending or storing data online is completely secure, so please avoid sharing sensitive details in public comments or social media messages.',
    ],
  },
  {
    title: 'Changes to this policy',
    paras: [
      'This policy may be updated from time to time. The date at the top of this page shows when it last changed.',
    ],
  },
]
</script>

<style scoped>
.privacy {
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.privacy-container {
  max-width: var(--container-md);
  margin: 0 auto;
}

.privacy-back {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--brand-ink);
  margin-bottom: 2rem;
}

.privacy-back:hover {
  color: var(--brand-hover);
}

.privacy-header {
  margin-bottom: 2rem;
}

.privacy-header .eyebrow {
  margin-bottom: 1rem;
}

.privacy-title {
  font-family: var(--font-display);
  font-size: var(--fs-h1);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0 0 1.25rem;
}

.privacy-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.privacy-lead {
  font-size: var(--fs-md);
  margin: 0 0 1rem;
}

.privacy-updated {
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
  background: var(--sage-100);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  margin: 0;
}

.privacy-summary {
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
}

.privacy-summary-title {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--camel-700);
  margin: 0 0 0.75rem;
}

.privacy-summary ul {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.privacy-sections {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.privacy-section {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 3vw, 1.75rem);
}

.privacy-section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
}

.privacy-section-number {
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

.privacy-para {
  font-size: 0.9375rem;
  margin: 0 0 0.75rem;
}

.privacy-para:last-child {
  margin-bottom: 0;
}

.privacy-points {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9375rem;
}

.privacy-contact {
  margin-top: 2.5rem;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: var(--sage-100);
  border-radius: var(--radius-xl);
  text-align: center;
}

.privacy-contact-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.privacy-contact p {
  margin: 0 auto 1.25rem;
  max-width: 560px;
}

.privacy-contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.privacy-button {
  padding: 12px 24px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: var(--fs-sm);
  font-weight: 600;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--brand);
}

.privacy-button:hover {
  background: var(--brand-hover);
  border-color: var(--brand-hover);
  color: var(--text-on-brand);
}

.privacy-button-outline {
  background: transparent;
  color: var(--brand-ink);
}

.privacy-button-outline:hover {
  background: var(--white);
  color: var(--brand-ink);
  border-color: var(--brand);
}

.privacy-urgent {
  margin: 2rem 0 0;
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.privacy-urgent a {
  font-weight: 600;
}
</style>
