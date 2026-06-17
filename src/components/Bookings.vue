<template>
  <section class="bookings">
    <div class="bookings-container">
      <div class="bookings-header">
        <h2 class="bookings-title">Consultations / Bookings</h2>
      </div>

      <div class="bookings-content">
        <div class="meeting-type-section">
          <h3 class="meeting-question">How would you like to meet?</h3>
          <div class="meeting-options">
            <button
              v-for="option in meetingOptions"
              :key="option.id"
              class="meeting-option"
              :class="{ active: selectedOption === option.id }"
              @click="selectedOption = option.id"
            >
              <span class="option-icon">{{ option.icon }}</span>
              <span class="option-label">{{ option.label }}</span>
            </button>
          </div>
        </div>

        <div v-if="selectedOption" class="calendar-section">
          <p class="reassurance-message">
            Your information is confidential. This is a safe, judgment-free space.
          </p>
          
          <div class="calendar-placeholder">
            <div class="calendar-header">
              <button class="calendar-nav">‹</button>
              <h4 class="calendar-month">{{ currentMonth }}</h4>
              <button class="calendar-nav">›</button>
            </div>
            <div class="calendar-grid">
              <div v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</div>
              <div v-for="day in calendarDays" :key="day" class="calendar-day" :class="{ available: day !== 0 }">
                {{ day !== 0 ? day : '' }}
              </div>
            </div>
          </div>

          <div class="booking-cta">
            <button class="cta-button">Schedule Consultation</button>
          </div>
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
    icon: '🏢'
  },
  {
    id: 'online',
    label: 'Online',
    icon: '💻'
  },
  {
    id: 'home',
    label: 'Home Visit',
    icon: '🏠'
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
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

.bookings-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0;
  color: var(--text-strong);
  letter-spacing: -0.015em;
}

.bookings-content {
  max-width: 700px;
}

.meeting-type-section {
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.meeting-question {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  margin: 0 0 1.5rem;
  color: var(--text-strong);
}

.meeting-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.meeting-option {
  padding: 1.25rem 1rem;
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-body);
}

.meeting-option:hover {
  border-color: var(--brand);
  background-color: var(--bg-subtle);
}

.meeting-option.active {
  border-color: var(--brand);
  background-color: var(--brand);
  color: white;
}

.option-icon {
  font-size: 1.75rem;
}

.option-label {
  display: block;
}

.calendar-section {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reassurance-message {
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  color: var(--text-body);
  text-align: center;
  margin: 0 0 2rem;
  padding: 1rem;
  background: var(--bg-subtle);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--brand);
  line-height: 1.6;
}

.calendar-placeholder {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.calendar-month {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-strong);
  margin: 0;
}

.calendar-nav {
  background: var(--bg-subtle);
  border: none;
  border-radius: var(--radius-lg);
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar-nav:hover {
  background: var(--brand);
  color: white;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.day-header {
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--text-muted);
  padding: 0.5rem;
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  color: var(--text-muted);
  background: var(--bg-subtle);
  cursor: default;
}

.calendar-day.available {
  color: var(--text-strong);
  background: white;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.calendar-day.available:hover {
  border-color: var(--brand);
  background: var(--brand);
  color: white;
}

.booking-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  padding: clamp(0.875rem, 1.5vw, 1.125rem) clamp(2rem, 3vw, 3rem);
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

@media (max-width: 768px) {
  .meeting-options {
    grid-template-columns: 1fr;
  }
}
</style>
