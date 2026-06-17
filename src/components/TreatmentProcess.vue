<template>
  <section class="treatment-process">
    <div class="process-container">
      <div class="process-left">
        <div class="process-illustration">
          <img src="/image4.jpeg" alt="Mind blooming with healing flowers and butterflies" class="illustration-image" />
        </div>
      </div>

      <div class="process-right">
        <h2 class="process-title">Treatment Approach</h2>
        <p class="process-subtitle">Each treatment plan is tailored and may include:</p>

        <div class="process-timeline">
          <div v-for="(step, index) in steps" :key="index" class="timeline-item">
            <div class="timeline-marker">
              <span class="step-icon">{{ step.icon }}</span>
            </div>
            <div class="timeline-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p v-if="step.description" class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <div class="process-cta">
          <button class="cta-button">Start Your Journey</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: '🔍',
    title: 'Clinical Evaluation & Diagnosis',
    description: 'Comprehensive assessment to understand your condition and establish an accurate diagnosis.'
  },
  {
    icon: '💊',
    title: 'Medication When Required',
    description: 'Carefully prescribed and monitored psychiatric medications tailored to your needs.'
  },
  {
    icon: '🔄',
    title: 'Behavioural Restructuring',
    description: 'Targeted interventions to address unhelpful patterns and build resilience.'
  },
  {
    icon: '🧘',
    title: 'Yogic Practices',
    description: 'Breathwork (pranayama), awareness training, and lifestyle correction for holistic healing.'
  },
  {
    icon: '🛡️',
    title: 'Long-term Relapse Prevention',
    description: 'Ongoing strategies and support to maintain progress and ensure lasting change.'
  }
]
</script>

<style scoped>
.treatment-process {
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  background: linear-gradient(120deg, var(--sage-100) 0%, var(--camel-100) 55%, var(--stone-100) 100%);
}

.process-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.process-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.process-illustration {
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  filter: drop-shadow(var(--shadow-md));
}

.process-right {
  display: flex;
  flex-direction: column;
}

.process-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--text-strong);
  letter-spacing: -0.015em;
}

.process-subtitle {
  font-size: clamp(0.9375rem, 1.3vw, 1.125rem);
  color: var(--text-body);
  margin: 0 0 2rem;
  font-weight: 500;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1.5rem;
  padding: 1.25rem 0;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 24px;
  top: 50px;
  width: 2px;
  height: calc(100% + 0px);
  background: linear-gradient(180deg, var(--brand) 0%, transparent 100%);
}

.timeline-marker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-md);
}

.step-icon {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.step-title {
  font-family: var(--font-sans);
  font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
  font-weight: var(--fw-semibold);
  margin: 0 0 0.375rem;
  color: var(--text-strong);
  text-transform: uppercase;
  letter-spacing: var(--ls-wider);
}

.step-description {
  font-size: clamp(0.8125rem, 1vw, 0.9375rem);
  color: var(--text-body);
  margin: 0;
  line-height: 1.6;
}

.process-cta {
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
}

.cta-button {
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

@media (max-width: 768px) {
  .process-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .process-left {
    max-width: 200px;
    margin: 0 auto;
  }

  .timeline-marker {
    width: 40px;
    height: 40px;
  }

  .timeline-item {
    grid-template-columns: 40px 1fr;
    gap: 1rem;
  }

  .timeline-item:not(:last-child)::after {
    left: 19px;
  }
}
</style>
