<template>
  <section class="bc">
    <div class="bc-container">
      <!-- Opened directly, without booking -->
      <div v-if="!booking" class="bc-card bc-empty">
        <h1 class="bc-title">No booking found</h1>
        <p>This page opens after you book and pay for a consultation. To book, start here:</p>
        <button class="bc-button" @click="$emit('navigate', 'book')">Book a consultation</button>
      </div>

      <template v-else>
        <header class="bc-header">
          <div class="eyebrow">{{ state === 'confirmed' ? 'Booking confirmed' : 'Booking received' }}</div>
          <h1 class="bc-title">
            <template v-if="state === 'confirmed'">Thank you. <em>Your appointment is confirmed.</em></template>
            <template v-else-if="state === 'confirming'">Payment received. <em>Confirming your slot.</em></template>
            <template v-else>Thank you. <em>Your slot is held.</em></template>
          </h1>
          <p class="bc-lead">
            <template v-if="state === 'confirmed'">
              A confirmation email with all the details is on its way to you.
            </template>
            <template v-else-if="state === 'confirming'">
              Your payment went through. You'll get a confirmation email in a few minutes. If it doesn't arrive, send
              your payment ID on WhatsApp.
            </template>
            <template v-else>
              Your appointment is confirmed by email once your UPI payment is checked, usually within
              {{ CONFIRM_WINDOW }}. Send your UTR number on WhatsApp to speed this up. Slots left unpaid for
              {{ HOLD_HOURS }} hours are released.
            </template>
          </p>
        </header>

        <div class="bc-booked">
          <span class="bc-booked-icon" aria-hidden="true">✓</span>
          <dl class="bc-details">
            <div><dt>Session</dt><dd>{{ booking.summary }}</dd></div>
            <div v-if="when"><dt>Time</dt><dd>{{ when }}</dd></div>
            <div><dt>Fee</dt><dd>{{ formatPrice(booking.price) }}</dd></div>
            <div><dt>Paid via</dt><dd>{{ paidVia }}</dd></div>
            <div v-if="booking.paymentId"><dt>Payment ID</dt><dd>{{ booking.paymentId }}</dd></div>
          </dl>
        </div>

        <ul class="bc-tips">
          <li v-if="state === 'upi'">Keep your UTR or transaction number until the appointment is confirmed.</li>
          <li>For anyone under 18, a parent or guardian must attend the consultation.</li>
          <li>
            Need to reschedule? See the
            <a href="/cancellation-policy" target="_blank" rel="noopener noreferrer">cancellation policy</a>.
          </li>
        </ul>

        <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="bc-wa-button">
          {{ state === 'upi' ? 'Send UTR on WhatsApp' : 'Message the clinic on WhatsApp' }}
        </a>

        <p class="bc-small">
          Have a question? Call or WhatsApp <a :href="PHONE_TEL">{{ PHONE_DISPLAY }}</a>.
        </p>
      </template>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { CONFIRM_WINDOW, HOLD_HOURS, formatPrice, formatSlot, loadBooking } from '../data/booking.js'
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/clinics.js'

defineEmits(['navigate'])

// Saved by the booking page once the patient has paid or chosen direct UPI
const stored = loadBooking()
const booking = stored?.uid && stored.method ? stored : null

const state = !booking ? '' : booking.method === 'upi' ? 'upi' : booking.confirmed ? 'confirmed' : 'confirming'
const paidVia = booking?.method === 'upi' ? 'Direct UPI' : 'Razorpay'
const when = formatSlot(booking?.start)

const whatsappHref = computed(() => {
  if (!booking) return ''
  const lines = state === 'upi'
    ? ["Hi Dr. Ashish, I've booked a consultation and paid by UPI. Please confirm it.", '']
    : ["Hi Dr. Ashish, I've booked and paid for a consultation.", '']
  lines.push(`Session: ${booking.summary} (${formatPrice(booking.price)})`, `Slot: ${when || '(as booked on Cal.com)'}`)
  lines.push(state === 'upi' ? 'UTR: ' : `Payment ID: ${booking.paymentId || ''}`)
  return waLink(lines.join('\n'))
})
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

.bc-booked {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--sage-100);
  border: 1.5px solid var(--brand);
  border-radius: var(--radius-lg);
}

.bc-booked-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--brand);
  color: var(--white);
  font-weight: 700;
  font-size: 1.25rem;
}

.bc-details {
  margin: 0;
  display: grid;
  gap: 0.4rem;
}

.bc-details div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bc-details dt {
  min-width: 6.5rem;
  font-weight: 700;
  color: var(--brand-ink);
}

.bc-details dd {
  margin: 0;
  color: var(--text-strong);
  word-break: break-word;
}

.bc-wa-button {
  display: inline-flex;
  padding: 12px 24px;
  background: #1fa855;
  color: var(--white);
  font-weight: 700;
  border-radius: var(--radius-pill);
}

.bc-wa-button:hover {
  background: #188a45;
  color: var(--white);
}

.bc-small {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  margin: 1rem 0 0;
}

.bc-small a {
  font-weight: 600;
}

</style>
