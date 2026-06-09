<template>
  <section class="services">
    <h1>Services Offered</h1>
    <p class="intro">
      I provide comprehensive psychiatric care tailored to your individual needs.
      All consultations are confidential and conducted in a supportive environment.
    </p>

    <div class="services-grid">
      <div class="service-card" v-for="service in services" :key="service.id">
        <div class="service-icon">{{ service.icon }}</div>
        <h3>{{ service.name }}</h3>
        <p class="description">{{ service.description }}</p>
        <ul class="conditions">
          <li v-for="condition in service.conditions" :key="condition">
            {{ condition }}
          </li>
        </ul>
      </div>
    </div>

    <div class="cta-section">
      <h2>Ready to Take the First Step?</h2>
      <p>Schedule your initial consultation today</p>
      <RouterLink to="/contact" class="cta-btn">Book Appointment</RouterLink>
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
    name: 'Psychiatric Evaluation',
    description: 'Comprehensive assessment including medical history, symptoms, and diagnostic evaluation.',
    conditions: ['Initial consultation', 'Differential diagnosis', 'Risk assessment', 'Treatment planning']
  },
  {
    id: 2,
    icon: '💊',
    name: 'Medication Management',
    description: 'Professional pharmacological treatment with ongoing monitoring and adjustment as needed.',
    conditions: ['Prescription management', 'Side effect monitoring', 'Drug interactions review', 'Follow-up care']
  },
  {
    id: 3,
    icon: '😟',
    name: 'Depression & Anxiety',
    description: 'Specialized treatment for mood and anxiety disorders using evidence-based approaches.',
    conditions: ['Major Depression', 'Generalized Anxiety', 'Panic Disorder', 'Social Anxiety']
  },
  {
    id: 4,
    icon: '🛡️',
    name: 'Trauma & PTSD',
    description: 'Compassionate care for trauma survivors with focus on healing and recovery.',
    conditions: ['Post-Traumatic Stress', 'Acute Trauma', 'Complex Trauma', 'Trauma-related anxiety']
  },
  {
    id: 5,
    icon: '🌗',
    name: 'Mood Disorders',
    description: 'Treatment for bipolar disorder, cyclothymia, and other mood regulation challenges.',
    conditions: ['Bipolar Disorder', 'Cyclothymia', 'Mood swings', 'Emotional regulation']
  },
  {
    id: 6,
    icon: '💙',
    name: 'Counseling & Support',
    description: 'Therapeutic support to help you understand and manage your mental health.',
    conditions: ['Psychoeducation', 'Coping strategies', 'Life transitions', 'Crisis support']
  }
])
</script>

<style scoped>
.services {
  max-width: 1100px;
  margin: 0 auto;
}

.services h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 700;
}

.intro {
  font-size: 1.05rem;
  color: #555;
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 700px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background-color: white;
}

.service-card:hover {
  box-shadow: 0 8px 20px rgba(107, 140, 174, 0.15);
  transform: translateY(-4px);
  border-color: #6b8cae;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #2c3e50;
  font-weight: 600;
}

.service-card .description {
  color: #666;
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
  color: #666;
  font-size: 0.9rem;
  position: relative;
}

.conditions li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #6b8cae;
  font-weight: bold;
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f0f8 100%);
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.cta-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.cta-section p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.cta-btn {
  display: inline-block;
  padding: 0.9rem 2.5rem;
  background-color: #6b8cae;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(107, 140, 174, 0.2);
}

.cta-btn:hover {
  background-color: #5a7a9a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(107, 140, 174, 0.3);
}
</style>
