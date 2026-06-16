<template>
  <section class="services" id="services">
    <div class="services-header">
      <h2>Services Offered</h2>
      <p class="intro">
        Comprehensive psychiatric care tailored to your individual needs. Each treatment plan integrates clinical expertise with a holistic approach to lasting healing.
      </p>
    </div>

    <div class="services-grid">
      <div class="service-card" v-for="service in services" :key="service.id">
        <div class="service-icon">{{ service.icon }}</div>
        <h3>{{ service.name }}</h3>
        <p class="tagline">{{ service.tagline }}</p>
        <p class="description">{{ service.description }}</p>
        <ul class="conditions">
          <li v-for="condition in service.conditions" :key="condition">
            {{ condition }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    icon: '🧠',
    name: 'Personalised Psychiatric Consultation',
    tagline: 'Comprehensive evaluation with a tailored treatment plan.',
    description: 'A thorough assessment to understand your unique situation, leading to a clear, personalised treatment roadmap.',
    conditions: ['Comprehensive evaluation', 'Diagnosis + formulation', 'Medication when required', 'Clear treatment roadmap']
  },
  {
    id: 2,
    icon: '😰',
    name: 'Anxiety & Stress Disorders',
    tagline: 'Move from constant overthinking and tension to clarity and control.',
    description: 'Evidence-based treatment for anxiety disorders affecting your daily functioning and quality of life.',
    conditions: ['Generalised anxiety', 'Panic episodes', 'Work-related stress', 'Specific phobias']
  },
  {
    id: 3,
    icon: '💔',
    name: 'Depression & Mood Disorders',
    tagline: 'Address low mood, fatigue, and loss of motivation at the root.',
    description: 'Comprehensive treatment addressing the underlying patterns of depression and emotional challenges.',
    conditions: ['Major depression', 'Burnout', 'Emotional numbness', 'Persistent low mood']
  },
  {
    id: 4,
    icon: '🔄',
    name: 'Overthinking & Behavioural Patterns',
    tagline: 'Break repetitive thought loops and unhelpful habits.',
    description: 'Structured approach to address rumination, procrastination, and compulsive behaviours.',
    conditions: ['Rumination patterns', 'Procrastination', 'Binge behaviours (OTT, phone use)', 'Perfectionism']
  },
  {
    id: 5,
    icon: '😴',
    name: 'Sleep & Lifestyle Regulation',
    tagline: 'Restore natural sleep and daily rhythm.',
    description: 'Structured interventions to improve sleep quality and establish healthy daily routines.',
    conditions: ['Insomnia', 'Irregular sleep patterns', 'Bedtime procrastination', 'Circadian rhythm issues']
  },
  {
    id: 6,
    icon: '🧘',
    name: 'Integrative Mind-Body Therapy',
    tagline: 'Structured use of yogic practices alongside psychiatry.',
    description: 'Combine clinical psychiatry with yogic sciences for comprehensive nervous system healing.',
    conditions: ['Breathwork (pranayama)', 'Awareness training', 'Nervous system regulation', 'Lifestyle restructuring']
  },
  {
    id: 7,
    icon: '📈',
    name: 'Follow-up & Long-term Care',
    tagline: 'Ongoing refinement of treatment for sustained results.',
    description: 'Continuous support to track progress, refine treatment, and prevent relapse.',
    conditions: ['Progress monitoring', 'Treatment adjustments', 'Relapse prevention', 'Sustained wellness']
  },
  {
    id: 8,
    icon: '⭐',
    name: 'Executive & Specialised Programs',
    tagline: 'High-touch, personalised care for complex needs and elevated expectations.',
    description: 'Customised programs designed for individuals seeking deeper engagement and personalised attention.',
    conditions: ['High-engagement care', 'Complex presentations', 'Performance optimization', 'Custom protocols']
  }
])
</script>

<style scoped>
.services {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--rose-50) 0%, var(--coral-200) 100%);
}

.services-header {
  text-align: center;
  margin-bottom: var(--space-9);
}

.services-header h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-4);
  color: var(--text-strong);
}

.services-header .intro {
  font-size: var(--fs-md);
  color: var(--text-muted);
  margin-bottom: 0;
  line-height: var(--lh-relaxed);
  max-width: var(--container-md);
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-9);
}

.service-card {
  border: var(--border-w) solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--dur-base) var(--ease-soft);
  box-shadow: var(--shadow-sm);
  background-color: var(--surface-card);
  color: var(--text-body);
}

.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-6px);
  border-color: var(--brand);
}

.service-icon {
  font-size: 2.8rem;
  margin-bottom: var(--space-4);
}

.service-card h3 {
  font-size: var(--fs-h4);
  margin-bottom: var(--space-2);
  color: var(--text-strong);
}

.service-card .tagline {
  font-size: var(--fs-sm);
  color: var(--brand);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-4) !important;
}

.service-card .description {
  color: var(--text-muted);
  margin-bottom: var(--space-5);
  line-height: var(--lh-relaxed);
  font-size: var(--fs-sm);
}

.conditions {
  list-style: none;
  padding: 0;
}

.conditions li {
  padding: var(--space-2) 0 var(--space-2) var(--space-5);
  color: var(--text-muted);
  font-size: var(--fs-sm);
  position: relative;
}

.conditions li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: bold;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
