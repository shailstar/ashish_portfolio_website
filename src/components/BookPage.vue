<template>
  <section class="bk">
    <div class="bk-container">
      <header class="bk-hero">
        <div class="eyebrow">Book a consultation</div>
        <h1 class="bk-title">
          Book your consultation,
          <em>in three simple steps.</em>
        </h1>
        <p class="bk-lead">
          Choose your session, pay securely, then pick your exact time on the calendar. Your appointment is confirmed
          once your payment is verified.
        </p>
        <p class="bk-sameday">
          Need to be seen today? Please call or WhatsApp
          <a :href="PHONE_TEL">{{ PHONE_DISPLAY }}</a> instead.
        </p>
      </header>

      <!-- Step 1 -->
      <div class="bk-step">
        <div class="bk-step-head">
          <span class="bk-step-number">1</span>
          <h2 class="bk-step-title">Choose your session</h2>
        </div>

        <fieldset class="bk-group">
          <legend class="bk-legend">What do you need?</legend>
          <div class="bk-options bk-options-3">
            <label v-for="t in SESSION_TYPES" :key="t.id" :class="['bk-option', { selected: type === t.id }]">
              <input v-model="type" type="radio" name="type" :value="t.id" />
              <span class="bk-option-label">{{ t.label }}</span>
              <span class="bk-option-hint">{{ t.hint }}</span>
            </label>
          </div>
        </fieldset>

        <fieldset class="bk-group">
          <legend class="bk-legend">Where?</legend>
          <div class="bk-options bk-options-3">
            <label v-for="m in MODES" :key="m.id" :class="['bk-option', { selected: mode === m.id }]">
              <input v-model="mode" type="radio" name="mode" :value="m.id" />
              <span class="bk-option-label">{{ m.label }}</span>
              <span class="bk-option-hint">{{ m.hint }}</span>
            </label>
          </div>
        </fieldset>

        <fieldset v-if="durations.length" class="bk-group">
          <legend class="bk-legend">How long?</legend>
          <div class="bk-options bk-options-2">
            <label v-for="d in durations" :key="d" :class="['bk-option', { selected: duration === d }]">
              <input v-model="duration" type="radio" name="duration" :value="d" />
              <span v-if="d === 60" class="bk-option-tag">Recommended</span>
              <span class="bk-option-label">{{ d }} minutes</span>
              <span class="bk-option-hint">{{ formatPrice(priceFor(type, mode, d)) }}</span>
            </label>
          </div>
        </fieldset>

        <div class="bk-summary" aria-live="polite">
          <div>
            <span class="bk-summary-label">Your session</span>
            <span class="bk-summary-text">{{ summary }}</span>
          </div>
          <span class="bk-summary-price">{{ formatPrice(price) }}</span>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="bk-step">
        <div class="bk-step-head">
          <span class="bk-step-number">2</span>
          <h2 class="bk-step-title">Choose how to pay</h2>
        </div>

        <div class="bk-pay">
          <!-- Razorpay -->
          <div class="bk-pay-card">
            <div class="bk-pay-tag">Cards, UPI &amp; net banking</div>
            <h3 class="bk-pay-title">Pay with Razorpay</h3>
            <ul class="bk-pay-points">
              <li>Pay by card, UPI, wallet or net banking</li>
              <li>A small convenience fee and taxes are added, shown before you pay</li>
              <li>Receipt emailed to you automatically</li>
            </ul>
            <button v-if="razorpayLink" class="bk-button" @click="payWithRazorpay">
              Pay {{ formatPrice(price) }} + fee &rarr;
            </button>
            <p v-else class="bk-placeholder">Razorpay link coming soon. Please use direct UPI for now.</p>
          </div>

          <!-- Direct UPI -->
          <div class="bk-pay-card">
            <div class="bk-pay-tag bk-pay-tag-green">No extra fee</div>
            <h3 class="bk-pay-title">Pay directly by UPI</h3>
            <div class="bk-upi">
              <a v-if="qrImage" :href="qrImage" target="_blank" rel="noopener noreferrer" class="bk-qr" title="Open larger">
                <img :src="qrImage" :alt="`UPI QR code to pay ${formatPrice(price)} to Dr. Ashish Yadav`" />
              </a>
              <div v-else class="bk-qr">
                <span class="bk-qr-placeholder">QR code<br />coming soon</span>
              </div>
              <div class="bk-upi-info">
                <span class="bk-upi-amount">Pay {{ formatPrice(price) }}</span>
                <span class="bk-upi-label">UPI ID</span>
                <span class="bk-upi-id">{{ UPI_ID }}</span>
                <button class="bk-copy" @click="copyUpi">{{ copied ? 'Copied ✓' : 'Copy UPI ID' }}</button>
                <a :href="upiLink(price, summary)" class="bk-upi-app">Open UPI app (on phone) &rarr;</a>
              </div>
            </div>
            <p class="bk-pay-note">Keep the UTR or transaction number. No automatic receipt for direct UPI.</p>
            <button class="bk-button" @click="continueAfterUpi">I've paid, continue &rarr;</button>
          </div>
        </div>

        <p class="bk-policy-note">
          After paying, you pick your time on the calendar, and the booking is confirmed once your payment is verified.
          If no suitable time can be offered, you get a full refund.
          <a href="/cancellation-policy" target="_blank" rel="noopener noreferrer">Cancellation &amp; extra time policy</a>
        </p>
      </div>

      <!-- Step 3 preview -->
      <div class="bk-step bk-step-muted">
        <div class="bk-step-head">
          <span class="bk-step-number">3</span>
          <h2 class="bk-step-title">Pick your time</h2>
        </div>
        <p class="bk-step-text">
          After paying, the calendar for your session opens. Pick a free slot and fill in a short form with your
          contact details and payment reference.
        </p>
      </div>

      <!-- WhatsApp-only options -->
      <div class="bk-other">
        <h2 class="bk-other-title">Looking for something else?</h2>
        <div class="bk-other-grid">
          <a :href="waLink(HOME_VISIT_MSG)" target="_blank" rel="noopener noreferrer" class="bk-other-card">
            <span class="bk-other-label">Home visit</span>
            <span class="bk-other-text">Within Jaipur, in selected cases. ₹4,499 for 45–50 min.</span>
            <span class="bk-other-link">Request on WhatsApp &rarr;</span>
          </a>
          <a :href="waLink(SHALBY_MSG)" target="_blank" rel="noopener noreferrer" class="bk-other-card">
            <span class="bk-other-label">Shalby Hospital</span>
            <span class="bk-other-text">Evenings, by prior appointment only.</span>
            <span class="bk-other-link">Request on WhatsApp &rarr;</span>
          </a>
          <a :href="waLink(QUESTION_MSG)" target="_blank" rel="noopener noreferrer" class="bk-other-card">
            <span class="bk-other-label">Not sure what to book?</span>
            <span class="bk-other-text">Ask first. You'll get a reply before you pay anything.</span>
            <span class="bk-other-link">Ask on WhatsApp &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import {
  RAZORPAY_LINKS, UPI_ID, UPI_QR_IMAGES, SESSION_TYPES, MODES,
  priceFor, durationsFor, minutesFor, formatPrice, upiLink, saveBooking,
} from '../data/booking.js'
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/clinics.js'

const emit = defineEmits(['navigate'])

const HOME_VISIT_MSG = "Hi Dr. Ashish, I'd like to book a home visit in Jaipur. My area is: "
const SHALBY_MSG = "Hi Dr. Ashish, I'd like an evening appointment at Shalby Hospital, Vaishali Nagar."
const QUESTION_MSG = "Hi Dr. Ashish, I'd like to book a consultation but I'm not sure which one I need."

const type = ref('first')
const mode = ref('online')
const duration = ref(60)

const durations = computed(() => durationsFor(type.value))
const price = computed(() => priceFor(type.value, mode.value, duration.value))

watch(type, (t) => {
  if (!durationsFor(t).includes(duration.value)) duration.value = 60
})

const summary = computed(() => {
  const t = SESSION_TYPES.find((x) => x.id === type.value).label
  const m = MODES.find((x) => x.id === mode.value).label
  return [t, m, `${minutesFor(type.value, duration.value)} min`].join(' · ')
})

const razorpayLink = computed(() => RAZORPAY_LINKS[price.value])
const qrImage = computed(() => UPI_QR_IMAGES[price.value])

const booking = (method) => ({
  type: type.value,
  mode: mode.value,
  duration: duration.value,
  price: price.value,
  summary: summary.value,
  method,
  at: Date.now(),
})

const payWithRazorpay = () => {
  saveBooking(booking('razorpay'))
  // Same tab, so Razorpay's redirect brings the patient back to the confirmation page
  window.location.href = razorpayLink.value
}

const continueAfterUpi = () => {
  saveBooking(booking('upi'))
  emit('navigate', 'confirmed')
}

const copied = ref(false)
const copyUpi = async () => {
  try {
    await navigator.clipboard.writeText(UPI_ID)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    copied.value = false
  }
}
</script>

<style scoped>
.bk {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5.5rem);
  background: var(--bg-page);
}

.bk-container {
  max-width: var(--container-md);
  margin: 0 auto;
}

.bk-title {
  font-family: var(--font-display);
  font-size: var(--fs-h1);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 1rem 0 1.25rem;
}

.bk-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.bk-lead {
  font-size: var(--fs-md);
  margin: 0 0 0.75rem;
}

.bk-sameday {
  display: inline-block;
  margin: 0;
  padding: 8px 16px;
  background: var(--camel-50);
  border: 1px solid var(--camel-200);
  border-radius: var(--radius-pill);
  font-size: var(--fs-sm);
}

.bk-sameday a {
  font-weight: 700;
}

/* ---- Steps ---- */
.bk-step {
  margin-top: 2rem;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.bk-step-muted {
  background: var(--stone-50);
  box-shadow: none;
}

.bk-step-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.bk-step-muted .bk-step-head {
  margin-bottom: 0.75rem;
}

.bk-step-number {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--brand);
  color: var(--text-on-brand);
  font-weight: 700;
}

.bk-step-title {
  font-family: var(--font-display);
  font-size: 1.625rem;
  font-weight: 700;
  margin: 0;
}

.bk-step-text {
  margin: 0;
  font-size: 0.9375rem;
}

/* ---- Options ---- */
.bk-group {
  border: none;
  margin: 0 0 1.5rem;
  padding: 0;
}

.bk-legend {
  font-weight: 700;
  color: var(--text-strong);
  margin-bottom: 0.75rem;
  padding: 0;
}

.bk-options {
  display: grid;
  gap: 0.75rem;
}

.bk-options-3 {
  grid-template-columns: repeat(3, 1fr);
}

.bk-options-2 {
  grid-template-columns: repeat(2, 1fr);
}

.bk-option {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.9rem 1rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-soft), background var(--dur-fast) var(--ease-soft);
}

.bk-option:hover {
  border-color: var(--border-brand);
}

.bk-option.selected {
  border-color: var(--brand);
  background: var(--sage-50);
}

.bk-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.bk-option:focus-within {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.bk-option-label {
  font-weight: 700;
  color: var(--text-strong);
}

.bk-option-hint {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.bk-option-tag {
  position: absolute;
  top: -0.6rem;
  right: 0.75rem;
  padding: 2px 10px;
  background: var(--accent);
  color: var(--white);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wide);
  border-radius: var(--radius-pill);
}

.bk-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--sage-100);
  border-radius: var(--radius-md);
}

.bk-summary-label {
  display: block;
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--brand-ink);
}

.bk-summary-text {
  font-weight: 600;
  color: var(--text-strong);
}

.bk-summary-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-strong);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

/* ---- Payment ---- */
.bk-pay {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.bk-pay-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
}

.bk-pay-tag {
  align-self: flex-start;
  font-size: var(--fs-xs);
  font-weight: 700;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  background: var(--stone-100);
  color: var(--text-body);
}

.bk-pay-tag-green {
  background: var(--sage-100);
  color: var(--brand-ink);
}

.bk-pay-title {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0.6rem 0 0.75rem;
}

.bk-pay-points {
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9375rem;
}

.bk-button {
  margin-top: auto;
  border: none;
  cursor: pointer;
  padding: 13px 22px;
  background: var(--brand);
  color: var(--text-on-brand);
  font-size: 0.9375rem;
  font-weight: 700;
  border-radius: var(--radius-pill);
}

.bk-button:hover {
  background: var(--brand-hover);
}

.bk-placeholder {
  margin: auto 0 0;
  padding: 0.9rem 1rem;
  background: var(--stone-50);
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-md);
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.bk-upi {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.bk-qr {
  flex-shrink: 0;
  width: 150px;
  aspect-ratio: 1440 / 2000;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--stone-50);
}

.bk-qr img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bk-qr-placeholder {
  font-size: var(--fs-xs);
  text-align: center;
  color: var(--text-muted);
}

.bk-upi-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  min-width: 0;
}

.bk-upi-amount {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-strong);
}

.bk-upi-label {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.bk-upi-id {
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--text-strong);
  word-break: break-all;
}

.bk-copy {
  margin-top: 0.3rem;
  border: 1px solid var(--border-brand);
  background: var(--sage-50);
  color: var(--brand-ink);
  font-size: var(--fs-xs);
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  cursor: pointer;
}

.bk-upi-app {
  margin-top: 0.3rem;
  font-size: var(--fs-sm);
  font-weight: 600;
}

.bk-pay-note {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  margin: 0 0 1.25rem;
}

.bk-policy-note {
  margin: 1.25rem 0 0;
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.bk-policy-note a {
  font-weight: 600;
}

/* ---- Other options ---- */
.bk-other {
  margin-top: 3rem;
}

.bk-other-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
}

.bk-other-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.bk-other-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.25rem;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.bk-other-card:hover {
  border-color: var(--border-brand);
}

.bk-other-label {
  font-weight: 700;
  color: var(--text-strong);
}

.bk-other-text {
  font-size: var(--fs-sm);
  color: var(--text-body);
}

.bk-other-link {
  margin-top: auto;
  padding-top: 0.4rem;
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--brand-ink);
}

@media (max-width: 720px) {
  .bk-options-3,
  .bk-pay,
  .bk-other-grid {
    grid-template-columns: 1fr;
  }
}
</style>
