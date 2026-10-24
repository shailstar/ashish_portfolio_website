<template>
  <section class="bc">
    <div class="bc-container">
      <!-- Opened directly, without paying -->
      <div v-if="!allowed" class="bc-card bc-empty">
        <h1 class="bc-title">No booking found</h1>
        <p>This page opens after you pay for a consultation. To book, start here:</p>
        <button class="bc-button" @click="$emit('navigate', 'book')">Book a consultation</button>
      </div>

      <template v-else>
        <header class="bc-header">
          <div class="eyebrow">Step 3 of 3</div>
          <h1 class="bc-title">
            Thank you for paying.
            <em>Now pick your time.</em>
          </h1>
          <p class="bc-lead">
            Choose a slot below and fill in the short booking form. Your appointment is confirmed by email once your
            payment is verified, usually within {{ CONFIRM_WINDOW }}.
          </p>
        </header>

        <!-- Session: prefilled from the booking page, editable if it didn't carry over -->
        <div class="bc-session">
          <span class="bc-session-label">Calendar for</span>
          <select v-model="session.type" aria-label="Session type">
            <option v-for="t in SESSION_TYPES" :key="t.id" :value="t.id">{{ t.label }}</option>
          </select>
          <select v-model="session.mode" aria-label="Where">
            <option v-for="m in MODES" :key="m.id" :value="m.id">{{ m.label }}</option>
          </select>
          <select v-if="session.type === 'first'" v-model.number="session.duration" aria-label="Duration">
            <option :value="30">30 minutes</option>
            <option :value="60">60 minutes</option>
          </select>
        </div>

        <ul class="bc-tips">
          <li><strong>Paid via: {{ paidVia }}</strong> is already filled in for you in the booking form.</li>
          <li>For anyone under 18, a parent or guardian must attend the consultation.</li>
        </ul>

        <div class="bc-cal">
          <iframe
            :key="calUrl"
            :src="calEmbedSrc"
            :title="`Pick a time: ${sessionLabel}`"
            loading="lazy"
          ></iframe>
        </div>

        <p class="bc-small">
          Calendar not loading?
          <a :href="calUrl" target="_blank" rel="noopener noreferrer">Open it in a new tab</a>.
          Need a same-day appointment, or have a question? Call or WhatsApp
          <a :href="PHONE_TEL">{{ PHONE_DISPLAY }}</a>
          or <a :href="whatsappHref" target="_blank" rel="noopener noreferrer">message on WhatsApp</a>.
        </p>
      </template>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import {
  BOOKING_REF, CONFIRM_WINDOW, SESSION_TYPES, MODES, priceFor, minutesFor, formatPrice, calUrlFor, loadBooking,
} from '../data/booking.js'
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/clinics.js'

defineEmits(['navigate'])

const stored = loadBooking()
const refParam = new URLSearchParams(window.location.search).get('ref')

// Razorpay redirects here with the private ref; direct UPI arrives from the booking page in the same visit
const allowed = refParam === BOOKING_REF || stored?.method === 'upi'

const session = reactive({
  type: stored?.type || 'first',
  mode: stored?.mode || 'online',
  duration: stored?.duration || 30,
})

const paidVia = refParam === BOOKING_REF ? 'Razorpay' : stored?.method === 'upi' ? 'Direct UPI' : 'Razorpay'

const calUrl = computed(() => calUrlFor(session.type, session.mode, session.duration))

const sessionLabel = computed(() => {
  const t = SESSION_TYPES.find((x) => x.id === session.type).label
  const m = MODES.find((x) => x.id === session.mode).label
  return `${t} · ${m} · ${minutesFor(session.type, session.duration)} min`
})

// Cal.com fills booking questions from matching URL parameters (by question identifier)
const params = new URLSearchParams(window.location.search)
const paymentRef = params.get('razorpay_payment_id') || params.get('payment_id') || ''

const calEmbedSrc = computed(() => {
  const query = new URLSearchParams({ embed: 'true', theme: 'light', layout: 'month_view', 'Paid-Via': paidVia })
  // Used once a "Payment ID / UTR" question with identifier payment-ref exists in Cal.com
  if (paymentRef) query.set('payment-ref', paymentRef)
  return `${calUrl.value}?${query}`
})

const whatsappHref = computed(() =>
  waLink(
    `Hi Dr. Ashish, I've paid for a ${sessionLabel.value} (${formatPrice(
      priceFor(session.type, session.mode, session.duration),
    )}) via ${paidVia}. Payment ref: `,
  ),
)
</script>

<style scoped>
.bc {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.bc-container {
  max-width: var(--container-md);
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
  max-width: 640px;
}

.bc-card {
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.bc-empty {
  max-width: var(--container-sm);
  margin: 0 auto;
  text-align: center;
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

.bc-session {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1rem;
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  border-radius: var(--radius-md);
}

.bc-session-label {
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--brand-ink);
}

.bc-session select {
  padding: 8px 10px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--white);
  font-size: 0.9375rem;
  font-family: var(--font-sans);
  color: var(--text-strong);
}

.bc-tips {
  margin: 1rem 0;
  padding: 0.9rem 1.25rem 0.9rem 2.25rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.bc-cal {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.bc-cal iframe {
  display: block;
  width: 100%;
  height: 820px;
  border: 0;
}

.bc-small {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  margin: 1rem 0 0;
}

.bc-small a {
  font-weight: 600;
}

@media (max-width: 640px) {
  .bc-cal iframe {
    height: 1000px;
  }
}
</style>
