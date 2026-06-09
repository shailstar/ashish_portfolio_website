<template>
  <section class="services">
    <div class="services-header">
      <h1>Services Offered</h1>
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

    <div class="cta-section">
      <h2>Ready to Begin Your Journey?</h2>
      <p>Start with a personalized consultation</p>
      <div class="cta-buttons">
        <RouterLink to="/contact" class="btn btn-primary">Schedule a Consultation</RouterLink>
        <RouterLink to="/contact?type=assessment" class="btn btn-secondary">Begin Assessment</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
  padding: 3rem 0;
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.services-header h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.intro {
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 0;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background-color: white;
}

.service-card:hover {
  box-shadow: 0 8px 20px rgba(163, 177, 138, 0.15);
  transform: translateY(-4px);
  border-color: var(--sage-green);
}

.service-icon {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.service-card .tagline {
  font-size: 0.95rem;
  color: var(--sage-green);
  font-weight: 500;
  margin-bottom: 1rem !important;
}

.service-card .description {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.conditions {
  list-style: none;
  padding: 0;
}

.conditions li {
  padding: 0.4rem 0 0.4rem 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  position: relative;
}

.conditions li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--sage-green);
  font-weight: bold;
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-top: 3rem;
}

.cta-section h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.cta-section p {
  color: var(--text-light);
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.85rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  font-size: 0.95rem;
}

.btn-primary {
  background-color: var(--sage-green);
  color: white;
  box-shadow: 0 4px 12px rgba(163, 177, 138, 0.3);
}

.btn-primary:hover {
  background-color: #8fa876;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: white;
  color: var(--sage-green);
  border: 2px solid var(--sage-green);
}

.btn-secondary:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .services-header h1 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
