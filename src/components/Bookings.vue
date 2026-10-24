<template>
  <section id="booking" class="bookings">
    <div class="bookings-container">
      <div class="bookings-header">
        <h2 class="bookings-title">Consultations / Bookings</h2>
      </div>

      <div class="meeting-type-section">
        <h3 class="meeting-question">How would you like to meet?</h3>
        <div class="meeting-cards-grid">
          <button
            v-for="option in meetingOptions"
            :key="option.id"
            class="meeting-card"
            @click="choose(option)"
          >
            <div class="card-icon-wrapper">
              <img :src="option.image" :alt="option.label" class="card-icon-img" loading="lazy" />
              <div class="card-overlay">
                <h4 class="card-title">{{ option.label }}</h4>
                <p class="card-subtitle">{{ option.description }}</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- How booking works -->
      <div class="steps-card">
        <p class="reassurance-message">
          Your information is confidential. This is a safe, judgment-free space.
        </p>
        <ol class="steps">
          <li v-for="(step, index) in steps" :key="step.title" class="step">
            <span class="step-number">{{ index + 1 }}</span>
            <span class="step-title">{{ step.title }}</span>
            <span class="step-text">{{ step.text }}</span>
          </li>
        </ol>
        <div class="steps-actions">
          <button class="cta-button" @click="$emit('navigate', 'book')">Book a consultation</button>
          <button class="steps-link" @click="$emit('navigate', 'fees')">See fees &amp; what's included &rarr;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { waLink } from '../data/clinics.js'

const emit = defineEmits(['navigate'])

const HOME_MSG = "Hi Dr. Ashish, I'd like to book a home visit in Jaipur. My area is: "

const meetingOptions = [
  {
    id: 'in-person',
    label: 'In-Person',
    image: '/bookings/in-person.webp',
    description: 'Visit our clinic',
  },
  {
    id: 'online',
    label: 'Online',
    image: '/bookings/online.webp',
    description: 'Video consultation',
  },
  {
    id: 'home',
    label: 'Home Visit',
    image: '/bookings/home-visit.webp',
    description: 'At your place',
  },
]

const steps = [
  { title: 'Choose', text: 'Pick your session, online or at a Jaipur clinic.' },
  { title: 'Pay', text: 'Securely by Razorpay or directly by UPI.' },
  { title: 'Confirm', text: 'Share your details on WhatsApp. Your time is confirmed within 12–24 hours.' },
]

// Home visits are arranged on WhatsApp; everything else goes to the booking page
const choose = (option) => {
  if (option.id === 'home') {
    window.open(waLink(HOME_MSG), '_blank', 'noopener')
    return
  }
  emit('navigate', 'book')
}
</script>

<style scoped>
.bookings {
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  background: white;
}

.bookings-container {
  max-width: var(--container-xl);
  margin: 0 auto;
}

.bookings-header {
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
}

.bookings-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0;
  color: var(--text-strong);
  letter-spacing: -0.015em;
}

.meeting-type-section {
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
}

.meeting-question {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin: 0 0 clamp(2rem, 4vw, 3rem);
  color: var(--text-strong);
}

.meeting-cards-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(2rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
}

.meeting-card {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-sans);
  color: var(--text-body);
}

.meeting-card:hover {
  transform: translateY(-6px);
}

.card-icon-wrapper {
  position: relative;
  width: clamp(130px, 18vw, 168px);
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 4px solid var(--ink-900);
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.meeting-card:hover .card-icon-wrapper {
  box-shadow: 0 0 0 3px var(--brand), var(--shadow-lg);
}

.card-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.35);
  transform-origin: 50% 35%;
}

.card-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40%;
  padding: 0.5rem 0.875rem 0.75rem;
  background: linear-gradient(to top, var(--ink-900) 0%, var(--ink-900) 60%, rgba(18, 18, 16, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.15rem;
  text-align: left;
}

.card-title {
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  font-weight: 700;
  margin: 0;
  color: white;
}

.card-subtitle {
  font-size: clamp(0.6875rem, 0.9vw, 0.8125rem);
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
}

/* ---- How booking works ---- */
.steps-card {
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(1.75rem, 4vw, 2.75rem);
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

.reassurance-message {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  color: var(--text-body);
  text-align: center;
  margin: 0 0 2rem;
  padding: clamp(1rem, 2vw, 1.25rem);
  background: linear-gradient(135deg, var(--sage-100) 0%, var(--camel-100) 100%);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--brand);
  line-height: 1.6;
  font-weight: 500;
}

.steps {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.25rem;
  background: var(--bg-subtle);
  border-radius: var(--radius-lg);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--brand);
  color: white;
  font-weight: 700;
  font-size: var(--fs-sm);
  margin-bottom: 0.4rem;
}

.step-title {
  font-weight: 700;
  color: var(--text-strong);
}

.step-text {
  font-size: var(--fs-sm);
  color: var(--text-body);
}

.steps-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
}

.cta-button {
  display: inline-block;
  width: 100%;
  padding: clamp(0.875rem, 1.5vw, 1.125rem) clamp(1.5rem, 3vw, 2.5rem);
  background-color: var(--brand);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  box-shadow: var(--shadow-brand);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.steps-link {
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--brand-ink);
}

@media (max-width: 768px) {
  .meeting-cards-grid {
    gap: 1.75rem 2.5rem;
  }

  .card-icon-wrapper {
    width: clamp(110px, 30vw, 140px);
  }

  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
