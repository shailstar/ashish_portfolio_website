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
            :class="{ active: selectedOption === option.id }"
            @click="selectedOption = option.id"
          >
            <div class="card-icon-wrapper">
              <img :src="option.image" :alt="option.label" class="card-icon-img" loading="lazy" />
            </div>
            <h4 class="card-title">{{ option.label }}</h4>
            <p class="card-subtitle">{{ option.description }}</p>
          </button>
        </div>
      </div>

      <div v-if="selectedOption" class="bookings-card">
        <div class="card-inner">

          <transition name="fade">
            <div v-if="selectedOption" class="calendar-wrapper">
              <p class="reassurance-message">
                Your information is confidential. This is a safe, judgment-free space.
              </p>

              <div class="calendar-box">
                <div class="calendar-header">
                  <button class="calendar-nav">‹</button>
                  <h4 class="calendar-month">{{ currentMonth }}</h4>
                  <button class="calendar-nav">›</button>
                </div>
                <div class="calendar-grid">
                  <div v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</div>
                  <div v-for="(day, index) in calendarDays" :key="index" class="calendar-day" :class="{ available: day !== 0 }">
                    {{ day !== 0 ? day : '' }}
                  </div>
                </div>
              </div>

              <a
                v-if="selectedOption === 'online'"
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-button"
              >
                Schedule Consultation
              </a>
              <a
                v-else-if="selectedOption === 'in-person' || selectedOption === 'home'"
                href="https://wa.me/message/75HLOF6Q7MV4A1"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-button"
              >
                Schedule Consultation
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedOption = ref(null)

const meetingOptions = [
  {
    id: 'in-person',
    label: 'In-Person',
    image: '/bookings/in-person.webp',
    description: 'Visit our clinic'
  },
  {
    id: 'online',
    label: 'Online',
    image: '/bookings/online.webp',
    description: 'Video consultation'
  },
  {
    id: 'home',
    label: 'Home Visit',
    image: '/bookings/home-visit.webp',
    description: 'At your place'
  }
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const currentMonth = ref('June 2026')

const calendarDays = ref(Array.from({ length: 35 }, (_, i) => {
  const startDay = 4
  if (i < startDay || i >= startDay + 30) return 0
  return i - startDay + 1
}))
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
  gap: 0.875rem;
  font-family: var(--font-sans);
  color: var(--text-body);
}

.meeting-card:hover {
  transform: translateY(-6px);
}

.meeting-card.active {
  transform: translateY(-6px);
}

.card-icon-wrapper {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 0 0 3px var(--sage-200), var(--shadow-md);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.meeting-card:hover .card-icon-wrapper {
  box-shadow: 0 0 0 3px var(--sage-400), var(--shadow-lg);
}

.meeting-card.active .card-icon-wrapper {
  box-shadow: 0 0 0 3px var(--brand), var(--shadow-lg);
}

.card-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-title {
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  font-weight: 700;
  margin: 0;
  color: var(--text-strong);
  transition: color 0.3s ease;
}

.meeting-card.active .card-title {
  color: var(--brand-ink);
}

.card-subtitle {
  font-size: clamp(0.75rem, 1vw, 0.875rem);
  margin: 0;
  color: var(--text-muted);
  font-weight: 500;
}

.bookings-card {
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid var(--border);
}

.card-inner {
  padding: clamp(2rem, 5vw, 3.5rem);
}

.calendar-wrapper {
  animation: fadeSlide 0.4s ease;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
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

.calendar-box {
  background: var(--bg-subtle);
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 2rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.calendar-month {
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 700;
  color: var(--text-strong);
  margin: 0;
}

.calendar-nav {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--text-strong);
}

.calendar-nav:hover {
  background: var(--brand);
  border-color: var(--brand);
  color: white;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.75rem;
}

.day-header {
  text-align: center;
  font-weight: 700;
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  color: var(--text-muted);
  padding: 0.5rem;
  text-transform: uppercase;
  letter-spacing: var(--ls-wider);
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  font-weight: 500;
  color: var(--text-muted);
  background: transparent;
  cursor: default;
}

.calendar-day.available {
  color: var(--text-strong);
  background: white;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.calendar-day.available:hover {
  border-color: var(--brand);
  background: var(--brand);
  color: white;
  transform: scale(1.05);
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
  text-decoration: none;
  text-align: center;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .meeting-cards-grid {
    gap: 1.75rem 2.5rem;
  }

  .card-icon-wrapper {
    width: 84px;
    height: 84px;
  }

  .bookings-card {
    border-radius: var(--radius-xl);
  }

  .card-inner {
    padding: clamp(1.5rem, 4vw, 2rem);
  }
}
</style>
