<template>
  <section class="treatment-process">
    <div class="process-container">
      <div class="process-left">
        <div class="process-illustration">
          <div class="illustration-placeholder">
            <svg viewBox="0 0 200 300" class="illustration-icon">
              <rect x="30" y="20" width="140" height="220" rx="15" fill="#f0e6ff" stroke="#6b46c1" stroke-width="2"/>
              <circle cx="100" cy="45" r="5" fill="#6b46c1"/>
              <rect x="50" y="70" width="100" height="15" rx="3" fill="#d1d5db"/>
              <rect x="50" y="95" width="100" height="60" rx="3" fill="#e9d5ff"/>
              <rect x="50" y="165" width="80" height="15" rx="3" fill="#d1d5db"/>
              <circle cx="100" cy="255" r="25" fill="#6b46c1"/>
              <text x="100" y="263" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Start</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="process-right">
        <h2 class="process-title">Treatment Approach</h2>
        <p class="process-subtitle">Each treatment plan is tailored and may include:</p>

        <div class="process-timeline">
          <div v-for="(step, index) in steps" :key="index" class="timeline-item">
            <div class="timeline-marker" :style="{ '--step-color': step.color }">
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
    description: 'Comprehensive assessment to understand your condition and establish an accurate diagnosis.',
    color: '#6b46c1'
  },
  {
    icon: '💊',
    title: 'Medication When Required',
    description: 'Carefully prescribed and monitored psychiatric medications tailored to your needs.',
    color: '#7c3aed'
  },
  {
    icon: '🔄',
    title: 'Behavioural Restructuring',
    description: 'Targeted interventions to address unhelpful patterns and build resilience.',
    color: '#a78bfa'
  },
  {
    icon: '🧘',
    title: 'Yogic Practices',
    description: 'Breathwork (pranayama), awareness training, and lifestyle correction for holistic healing.',
    color: '#c4b5fd'
  },
  {
    icon: '🛡️',
    title: 'Long-term Relapse Prevention',
    description: 'Ongoing strategies and support to maintain progress and ensure lasting change.',
    color: '#e9d5ff'
  }
]
</script>

<style scoped>
.treatment-process {
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  background: linear-gradient(135deg, #f3f0ff 0%, #faf5ff 100%);
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

.illustration-placeholder {
  width: 100%;
  height: 100%;
}

.illustration-icon {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 10px 25px rgba(107, 70, 193, 0.15));
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
  background: linear-gradient(180deg, var(--step-color) 0%, transparent 100%);
}

.timeline-marker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--step-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.2);
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
  font-weight: 700;
  margin: 0 0 0.375rem;
  color: var(--text-strong);
  text-transform: uppercase;
  letter-spacing: var(--ls-wider);
}

.step-description {
  font-size: clamp(0.8125rem, 1vw, 0.9375rem);
  color: var(--text-body);
  margin: 0;
  line-height: 1.5;
}

.process-cta {
  display: flex;
  gap: 1rem;
}

.cta-button {
  padding: clamp(0.875rem, 1.5vw, 1.125rem) clamp(1.5rem, 3vw, 2.5rem);
  background-color: #6b46c1;
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  box-shadow: 0 4px 15px rgba(107, 70, 193, 0.3);
}

.cta-button:hover {
  background-color: #5a3a9a;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(107, 70, 193, 0.4);
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
