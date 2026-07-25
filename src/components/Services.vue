<template>
  <section class="services">
    <div class="services-container">
      <div class="services-header">
        <h2 class="services-title">Services</h2>
        <p class="services-subtitle">Comprehensive mental health care tailored to your needs</p>
      </div>

      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul v-if="service.points" class="service-points">
            <li v-for="(point, index) in service.points" :key="index">{{ point }}</li>
          </ul>
        </div>
      </div>

      <div class="services-cta">
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button primary"
        >
          Schedule a Consultation
        </a>
        <button class="cta-button secondary">Begin Assessment</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    icon: '🔍',
    title: 'Personalised Psychiatric Consultation',
    description: 'Comprehensive evaluation with a tailored treatment plan.',
    points: ['Diagnosis + formulation', 'Medication when required', 'Clear roadmap']
  },
  {
    id: 2,
    icon: '😰',
    title: 'Anxiety & Stress Disorders',
    description: 'Move from constant overthinking and tension to clarity and control.',
    points: ['Generalised anxiety', 'Panic episodes', 'Work-related stress']
  },
  {
    id: 3,
    icon: '😔',
    title: 'Depression & Mood Disorders',
    description: 'Address low mood, fatigue, and loss of motivation at the root.',
    points: ['Major depression', 'Burnout', 'Emotional numbness']
  },
  {
    id: 4,
    icon: '🔄',
    title: 'Overthinking & Behavioural Patterns',
    description: 'Break repetitive thought loops and unhelpful habits.',
    points: ['Rumination', 'Procrastination', 'Binge behaviours (OTT, phone use)']
  },
  {
    id: 5,
    icon: '😴',
    title: 'Sleep & Lifestyle Regulation',
    description: 'Restore natural sleep and daily rhythm.',
    points: ['Insomnia', 'Irregular routines', 'Bedtime procrastination']
  },
  {
    id: 6,
    icon: '🧘',
    title: 'Integrative Mind-Body Therapy',
    description: 'Structured use of yogic practices alongside psychiatry.',
    points: ['Breathwork (pranayama)', 'Awareness training', 'Nervous system regulation']
  },
  {
    id: 7,
    icon: '🛡️',
    title: 'Follow-up & Long-term Care',
    description: 'Ongoing refinement of treatment for sustained results.',
    points: ['Progress tracking', 'Adjustments in plan', 'Relapse prevention']
  },
  {
    id: 8,
    icon: '⭐',
    title: 'Executive & Specialised Programs',
    description: 'High-touch, personalised care designed for complex needs and elevated expectations.',
    points: ['Personalised engagement', 'Complex case management', 'Premium support']
  }
]
</script>

<style scoped>
.services {
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  background: white;
}

.services-container {
  max-width: var(--container-xl);
  margin: 0 auto;
}

.services-header {
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  max-width: 600px;
}

.services-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: var(--text-strong);
  letter-spacing: -0.015em;
}

.services-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  color: var(--text-body);
  margin: 0;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: clamp(3rem, 6vw, 4rem);
}

.service-card {
  padding: clamp(1.5rem, 3vw, 2rem);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  border-color: var(--brand);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.service-icon {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  line-height: 1;
}

.service-title {
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--text-strong);
  line-height: 1.3;
}

.service-description {
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  color: var(--text-body);
  margin: 0 0 1rem;
  line-height: 1.6;
}

.service-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.service-points li {
  font-size: clamp(0.8125rem, 1vw, 0.9375rem);
  color: var(--text-muted);
  padding-left: 1.25rem;
  position: relative;
}

.service-points li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: bold;
}

.services-cta {
  display: flex;
  gap: clamp(1rem, 3vw, 1.5rem);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: clamp(2rem, 4vw, 3rem);
}

.cta-button {
  display: inline-block;
  padding: clamp(0.875rem, 1.5vw, 1.125rem) clamp(1.5rem, 3vw, 2.5rem);
  border-radius: var(--radius-lg);
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  text-decoration: none;
}

.cta-button.primary {
  background-color: var(--brand);
  color: white;
  box-shadow: var(--shadow-brand);
}

.cta-button.primary:hover {
  background-color: var(--brand-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.cta-button.secondary {
  background-color: white;
  color: var(--brand);
  border: 2px solid var(--brand);
}

.cta-button.secondary:hover {
  background-color: var(--surface-tint);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-cta {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
  }
}
</style>
