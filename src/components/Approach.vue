<template>
  <section class="approach" id="approach">
    <div class="approach-header-flex">
      <div class="approach-header">
        <h2>Treatment Approach</h2>
        <p class="subtitle">Precision Psychiatry with Integrated Healing</p>
      </div>
      <div class="approach-header-illustration">
        <img src="/image4.jpeg" alt="Brain blooming with care and healing" />
      </div>
    </div>

    <div class="approach-intro">
      <p>
        Each treatment plan is tailored and may include a combination of evidence-based interventions designed specifically for your needs and goals.
      </p>
    </div>

    <div class="components-grid">
      <div class="component-card" v-for="component in components" :key="component.id">
        <div class="component-icon">{{ component.icon }}</div>
        <h3>{{ component.name }}</h3>
        <p>{{ component.description }}</p>
      </div>
    </div>

    <div class="philosophy-section">
      <h3>Core Principles</h3>
      <ul class="principles">
        <li v-for="principle in principles" :key="principle.name">
          <strong>{{ principle.name }}:</strong> {{ principle.description }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const components = ref([
  {
    id: 1,
    icon: '🔍',
    name: 'Clinical Evaluation & Diagnosis',
    description: 'Thorough assessment of your medical history, current symptoms, and underlying patterns to establish an accurate diagnosis and formulation.'
  },
  {
    id: 2,
    icon: '💊',
    name: 'Medication Management',
    description: 'Careful prescription and monitoring of psychiatric medications when clinically indicated, with regular adjustments based on your response and tolerance.'
  },
  {
    id: 3,
    icon: '🧩',
    name: 'Behavioural Restructuring',
    description: 'Targeted interventions to address unhelpful thought patterns, compulsive behaviours, and lifestyle factors that maintain your symptoms.'
  },
  {
    id: 4,
    icon: '🧘',
    name: 'Yogic Practices',
    description: 'Integration of evidence-based yogic techniques including breathwork (pranayama), awareness training, and lifestyle correction for holistic healing.'
  },
  {
    id: 5,
    icon: '🛡️',
    name: 'Relapse Prevention',
    description: 'Long-term strategies to maintain your progress, identify early warning signs, and prevent recurrence of symptoms.'
  },
  {
    id: 6,
    icon: '📊',
    name: 'Progress Tracking',
    description: 'Regular monitoring of your improvement through structured assessments and collaborative review to ensure your treatment remains effective.'
  }
])

const principles = ref([
  {
    name: 'Precision',
    description: 'Treatment is based on thorough understanding of your unique presentation, not a one-size-fits-all approach.'
  },
  {
    name: 'Integration',
    description: 'Modern psychiatry combined with yogic sciences creates a comprehensive approach to healing.'
  },
  {
    name: 'Personalization',
    description: 'Your treatment plan evolves based on your response, preferences, and life circumstances.'
  },
  {
    name: 'Evidence-Based',
    description: 'All interventions are grounded in clinical research and proven methodologies.'
  },
  {
    name: 'Durability',
    description: 'Focus on lasting change through understanding root patterns, not just symptom suppression.'
  },
  {
    name: 'Collaboration',
    description: 'You are an active partner in your healing journey, with your voice and preferences central to treatment decisions.'
  }
])
</script>

<style scoped>
.approach {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--peri-50) 0%, var(--lav-100) 100%);
}

.approach-header-flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
  margin-bottom: var(--space-9);
}

.approach-header {
  text-align: left;
}

.approach-header h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-3);
  color: var(--text-strong);
}

.approach-header .subtitle {
  font-size: var(--fs-md);
  color: var(--text-muted);
  font-weight: var(--fw-medium);
}

.approach-header-illustration {
  width: 100%;
  max-width: 350px;
}

.approach-header-illustration img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: var(--border-w) solid var(--border-brand);
}

.approach-intro {
  background: var(--surface-card);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-9);
  text-align: center;
  border-left: var(--border-w-ink) solid var(--brand);
  color: var(--text-body);
  box-shadow: var(--shadow-sm);
}

.approach-intro p {
  font-size: var(--fs-md);
  color: var(--text-muted);
  line-height: var(--lh-relaxed);
  margin: 0;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-9);
}

.component-card {
  background: var(--surface-card);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: var(--border-w) solid var(--border);
  text-align: center;
  transition: all var(--dur-base) var(--ease-soft);
  color: var(--text-body);
  box-shadow: var(--shadow-sm);
}

.component-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-6px);
  border-color: var(--brand);
}

.component-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.component-card h3 {
  font-size: var(--fs-h4);
  margin-bottom: var(--space-4);
  color: var(--text-strong);
}

.component-card p {
  color: var(--text-muted);
  font-size: var(--fs-sm);
  line-height: var(--lh-relaxed);
  margin: 0;
}

.philosophy-section {
  background: var(--surface-card);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  border-top: var(--border-w-ink) solid var(--brand);
  margin-bottom: var(--space-9);
  color: var(--text-body);
  box-shadow: var(--shadow-sm);
}

.philosophy-section h3 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-8);
  text-align: center;
  color: var(--text-strong);
}

.principles {
  list-style: none;
  padding: 0;
  display: grid;
  gap: var(--space-5);
}

.principles li {
  padding-left: var(--space-6);
  position: relative;
  color: var(--text-muted);
  line-height: var(--lh-relaxed);
  font-size: var(--fs-sm);
}

.principles li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: bold;
  font-size: 1.2rem;
}

.principles strong {
  color: var(--text-strong);
}

@media (max-width: 768px) {
  .approach-header-flex,
  .components-grid {
    grid-template-columns: 1fr;
  }

  .approach-header-illustration {
    max-width: 100%;
  }

  .approach-header {
    text-align: center;
  }
}
</style>
