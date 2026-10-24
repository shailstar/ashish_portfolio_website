<template>
  <section class="bc">
    <div class="bc-container">
      <!-- Opened directly, without paying -->
      <div v-if="!allowed" class="bc-card bc-empty">
        <h1 class="bc-title">No booking found</h1>
        <p>This page opens after you pay for a consultation. To book, start here:</p>
        <button class="bc-button" @click="$emit('navigate', 'book')">Book a consultation</button>
      </div>

      <!-- Details sent -->
      <div v-else-if="sent" class="bc-card bc-done">
        <span class="bc-done-icon" aria-hidden="true">✓</span>
        <h1 class="bc-title">
          Thank you, {{ firstName }}.
          <em>Your request is in.</em>
        </h1>
        <p>
          Your appointment time will be confirmed on WhatsApp within {{ CONFIRM_WINDOW }}. After confirmation, you will
          also receive a short consent form to fill in before your consultation.
        </p>
        <p class="bc-small">
          WhatsApp didn't open?
          <a :href="whatsappHref" target="_blank" rel="noopener noreferrer">Send your details again</a>.
          For a same-day appointment, call <a :href="PHONE_TEL">{{ PHONE_DISPLAY }}</a>.
        </p>
        <a :href="CALENDAR_URL" target="_blank" rel="noopener noreferrer" class="bc-calendar">
          Prefer an exact time? Pick a slot on my calendar &rarr;
        </a>
      </div>

      <!-- Details form -->
      <template v-else>
        <header class="bc-header">
          <div class="eyebrow">Step 3 of 3</div>
          <h1 class="bc-title">
            Thank you for paying.
            <em>One last step.</em>
          </h1>
          <p class="bc-lead">
            Share your details below. They open in WhatsApp, ready to send to the clinic, and your time is confirmed
            within {{ CONFIRM_WINDOW }}.
          </p>
        </header>

        <form class="bc-card bc-form" @submit.prevent="send">
          <!-- Session: prefilled from the booking page, editable if it didn't carry over -->
          <div class="bc-session">
            <label class="bc-field">
              <span class="bc-label">Session booked</span>
              <select v-model="session.type" required>
                <option v-for="t in SESSION_TYPES" :key="t.id" :value="t.id">{{ t.label }}</option>
              </select>
            </label>
            <label class="bc-field">
              <span class="bc-label">Where</span>
              <select v-model="session.mode" required>
                <option v-for="m in MODES" :key="m.id" :value="m.id">{{ m.label }}</option>
              </select>
            </label>
            <label v-if="session.type === 'first'" class="bc-field">
              <span class="bc-label">Duration</span>
              <select v-model.number="session.duration" required>
                <option :value="30">30 minutes</option>
                <option :value="60">60 minutes</option>
              </select>
            </label>
            <label class="bc-field">
              <span class="bc-label">Paid by</span>
              <select v-model="session.method" required>
                <option value="razorpay">Razorpay</option>
                <option value="upi">Direct UPI</option>
              </select>
            </label>
          </div>
          <p class="bc-price">Amount: <strong>{{ formatPrice(price) }}</strong><span v-if="session.method === 'razorpay'"> + convenience fee</span></p>

          <div class="bc-grid">
            <label class="bc-field">
              <span class="bc-label">Full name *</span>
              <input v-model.trim="form.name" type="text" autocomplete="name" required />
            </label>
            <label class="bc-field">
              <span class="bc-label">Phone / WhatsApp number *</span>
              <input v-model.trim="form.phone" type="tel" autocomplete="tel" inputmode="tel" required />
            </label>
            <label class="bc-field">
              <span class="bc-label">Age *</span>
              <input v-model.number="form.age" type="number" min="1" max="110" required />
            </label>
            <label class="bc-field">
              <span class="bc-label">{{ session.method === 'upi' ? 'UPI UTR / transaction number *' : 'Razorpay payment ID *' }}</span>
              <input v-model.trim="form.paymentRef" type="text" required />
            </label>
            <label class="bc-field">
              <span class="bc-label">Preferred date *</span>
              <input v-model="form.date" type="date" :min="today" required />
            </label>
            <label class="bc-field">
              <span class="bc-label">Preferred time *</span>
              <select v-model="form.time" required>
                <option value="" disabled>Choose</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Any time</option>
              </select>
            </label>
            <label class="bc-field bc-field-wide">
              <span class="bc-label">What would you like help with? (optional)</span>
              <select v-model="form.concern">
                <option value="">Prefer to discuss in the consultation</option>
                <option v-for="area in CARE_AREAS" :key="area.title">{{ area.title }}</option>
                <option>Something else</option>
              </select>
            </label>
          </div>

          <p v-if="form.age && form.age < 18" class="bc-minor">
            For anyone under 18, a parent or guardian must attend the consultation.
          </p>

          <label class="bc-check">
            <input v-model="form.agreed" type="checkbox" required />
            <span>
              I have read the
              <a href="/cancellation-policy" target="_blank" rel="noopener noreferrer">cancellation policy and the extra time policy</a>.
            </span>
          </label>

          <button type="submit" class="bc-button bc-submit">Send booking details on WhatsApp</button>
          <p class="bc-small">Your details are sent only through WhatsApp. They are not stored on this website.</p>
        </form>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import {
  BOOKING_REF, CALENDAR_URL, CONFIRM_WINDOW, SESSION_TYPES, MODES, priceFor, formatPrice, loadBooking,
} from '../data/booking.js'
import { CARE_AREAS, PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/clinics.js'

defineEmits(['navigate'])

const stored = loadBooking()
const refParam = new URLSearchParams(window.location.search).get('ref')

// Razorpay redirects here with the private ref; direct UPI arrives from the booking page in the same visit
const allowed = refParam === BOOKING_REF || stored?.method === 'upi'

const session = reactive({
  type: stored?.type || 'first',
  mode: stored?.mode || 'online',
  duration: stored?.duration || 30,
  method: refParam === BOOKING_REF ? 'razorpay' : stored?.method || 'upi',
})

const price = computed(() => priceFor(session.type, session.mode, session.duration))

const form = reactive({
  name: '',
  phone: '',
  age: null,
  paymentRef: '',
  date: '',
  time: '',
  concern: '',
  agreed: false,
})

const pad = (n) => String(n).padStart(2, '0')
const now = new Date()
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

const sent = ref(false)
const firstName = computed(() => form.name.split(' ')[0])

const sessionLabel = computed(() => {
  const t = SESSION_TYPES.find((x) => x.id === session.type).label
  const m = MODES.find((x) => x.id === session.mode).label
  const mins = session.type === 'first' ? `${session.duration} min` : session.type === 'follow-up' ? '30 min' : null
  return [t, m, mins].filter(Boolean).join(' · ')
})

const prettyDate = computed(() => {
  if (!form.date) return ''
  const [y, m, d] = form.date.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
})

const message = computed(() =>
  [
    "Hi Dr. Ashish, I've paid for a consultation. Please confirm my time.",
    '',
    `Session: ${sessionLabel.value} (${formatPrice(price.value)})`,
    `Paid via: ${session.method === 'upi' ? 'Direct UPI' : 'Razorpay'}`,
    `Payment ref: ${form.paymentRef}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Age: ${form.age}`,
    `Preferred: ${prettyDate.value}, ${form.time}`,
    form.concern ? `Help with: ${form.concern}` : null,
    'I have read the cancellation and extra time policy.',
  ]
    .filter((line) => line !== null)
    .join('\n'),
)

const whatsappHref = computed(() => waLink(message.value))

const send = () => {
  window.open(whatsappHref.value, '_blank', 'noopener')
  sent.value = true
  try {
    sessionStorage.removeItem('pendingBooking')
  } catch {
    // ignore
  }
  window.scrollTo(0, 0)
}
</script>

<style scoped>
.bc {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.bc-container {
  max-width: var(--container-sm);
  margin: 0 auto;
}

.bc-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0.75rem 0 1rem;
}

.bc-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.bc-lead {
  font-size: var(--fs-md);
  margin: 0 0 1.5rem;
}

.bc-card {
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.bc-empty,
.bc-done {
  text-align: center;
}

.bc-done-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--brand-ink);
  font-size: 1.75rem;
  font-weight: 700;
}

.bc-button {
  border: none;
  cursor: pointer;
  padding: 13px 26px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: 0.9375rem;
  font-weight: 700;
  border-radius: var(--radius-pill);
}

.bc-button:hover {
  background: var(--brand-hover);
}

.bc-calendar {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
}

.bc-small {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  margin: 0.75rem 0 0;
}

.bc-small a {
  font-weight: 600;
}

/* ---- Form ---- */
.bc-session {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  padding: 1rem;
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  border-radius: var(--radius-md);
}

.bc-price {
  margin: 0.75rem 0 1.5rem;
  font-size: 0.9375rem;
}

.bc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.bc-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.bc-field-wide {
  grid-column: 1 / -1;
}

.bc-label {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-strong);
}

.bc-field input,
.bc-field select {
  width: 100%;
  padding: 11px 12px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--white);
  font-size: 1rem;
  color: var(--text-strong);
}

.bc-field input:focus,
.bc-field select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--focus-ring-soft);
}

.bc-minor {
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-sm);
  font-size: var(--fs-sm);
}

.bc-check {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  margin: 1.5rem 0;
  font-size: 0.9375rem;
  cursor: pointer;
}

.bc-check input {
  margin-top: 0.25rem;
  width: 1.1rem;
  height: 1.1rem;
  accent-color: var(--brand);
}

.bc-check a {
  font-weight: 600;
}

.bc-submit {
  width: 100%;
  background: #1fa855;
}

.bc-submit:hover {
  background: #188a45;
}

@media (max-width: 560px) {
  .bc-grid {
    grid-template-columns: 1fr;
  }
}
</style>
