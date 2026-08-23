<template>
  <section class="services">
    <div class="services-container">
      <div class="services-header">
        <h2 class="services-title">Services</h2>
        <p class="services-subtitle">Comprehensive mental health care tailored to your needs</p>
      </div>

      <ServicesFeatured :services="featuredServices" />

      <div class="services-cta">
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button primary"
        >
          Schedule a Consultation
        </a>
        <a href="/assessment.html" target="_blank" rel="noopener noreferrer" class="cta-button secondary">Begin Assessment</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServicesFeatured from './ServicesFeatured.vue'

const featuredServices = [
  {
    id: 1,
    image: '/services/personalised-consultation.webp',
    imageAlt: 'Dr Ashish Yadav in consultation with a patient',
    title: 'Personalised Psychiatric Consultation',
    subtitle: 'Comprehensive evaluation with a tailored treatment plan.',
    points: [
      { icon: 'search', title: 'Diagnosis + formulation' },
      { icon: 'pill', title: 'Medication when required' },
      { icon: 'pin', title: 'Clear roadmap' }
    ]
  },
  {
    id: 2,
    image: '/services/anxiety-stress-disorders.webp',
    imageAlt: 'Woman finding calm while looking out at a mountain lake',
    title: 'Anxiety <span class="amp">&amp;</span> Stress Disorders',
    subtitle: 'Move from constant overthinking and tension to <span class="hl">clarity and control</span>.',
    points: [
      { icon: 'anxiety', title: 'Generalised anxiety', description: 'Reducing excessive worry and persistent unease.' },
      { icon: 'activity', title: 'Panic episodes', description: 'Managing sudden panic and physical symptoms.' },
      { icon: 'briefcase', title: 'Work-related stress', description: 'Building resilience and restoring work-life balance.' }
    ]
  },
  {
    id: 3,
    image: '/services/depression-mood-disorders.webp',
    imageAlt: 'Woman looking out at a sunset, finding a moment of calm',
    title: 'Depression <span class="amp">&amp;</span> Mood Disorders',
    subtitle: 'Address low mood, fatigue, and loss of motivation <span class="hl">at the root</span>.',
    points: [
      { icon: 'cloud-sun', title: 'Major depression', description: 'Evidence-based treatment to lift low mood and restore hope.' },
      { icon: 'battery', title: 'Burnout', description: 'Recover energy, manage exhaustion, and rebuild inner balance.' },
      { icon: 'numbness', title: 'Emotional numbness', description: 'Reconnect with emotions and find meaning again.' }
    ]
  },
  {
    id: 4,
    image: '/services/overthinking-behavioural-patterns.webp',
    imageAlt: 'Man deep in thought at his desk, surrounded by tangled thoughts',
    title: 'Overthinking <span class="amp">&amp;</span> Behavioural Patterns',
    subtitle: 'Break repetitive thought loops and <span class="hl">unhelpful habits</span>.',
    points: [
      { icon: 'anxiety', title: 'Rumination', description: 'Stop getting stuck in the same thoughts.' },
      { icon: 'clipboard-clock', title: 'Procrastination', description: 'Build action, focus, and follow-through.' },
      { icon: 'phone-play', title: 'Binge behaviours (OTT, phone use)', description: 'Regain control and create healthier daily patterns.' }
    ]
  },
  {
    id: 5,
    image: '/services/sleep-lifestyle-regulation.webp',
    imageAlt: 'Woman sleeping peacefully with a moonlit mountain view',
    title: 'Sleep <span class="amp">&amp;</span> Lifestyle Regulation',
    subtitle: 'Restore natural sleep and <span class="hl">daily rhythm</span>.',
    points: [
      { icon: 'moon-stars', title: 'Insomnia', description: 'Evidence-based strategies to fall asleep and stay asleep.' },
      { icon: 'cycle-clock', title: 'Irregular routines', description: 'Build a consistent rhythm that supports your mind and body.' },
      { icon: 'phone-moon', title: 'Bedtime procrastination', description: 'Break delaying habits and create a healthier wind-down routine.' }
    ]
  },
  {
    id: 6,
    image: '/services/integrative-mind-body-therapy.webp',
    imageAlt: 'Woman meditating with a hand on her chest, facing a sunrise',
    title: 'Integrative <span class="hl">Mind-Body</span> Therapy',
    subtitle: 'Structured use of <span class="hl">yogic practices</span> alongside psychiatry.',
    points: [
      { icon: 'breathwork', title: 'Breathwork (pranayama)', description: 'Regulate breath to calm the mind and reduce stress.' },
      { icon: 'awareness', title: 'Awareness training', description: 'Build present-moment awareness and break automatic patterns.' },
      { icon: 'nervous', title: 'Nervous system regulation', description: 'Restore balance, build resilience, and improve overall well-being.' }
    ]
  },
  {
    id: 7,
    image: '/services/followup-long-term-care.webp',
    imageAlt: 'Follow-up consultation looking out at a river valley view',
    title: 'Follow-up <span class="amp">&amp;</span> Long-term Care',
    subtitle: 'Ongoing refinement of treatment for <span class="hl">sustained results</span>.',
    points: [
      { icon: 'clipboard-check', title: 'Progress tracking', description: 'Regular check-ins to monitor improvements and celebrate milestones.' },
      { icon: 'sliders', title: 'Adjustments in plan', description: 'Tailoring treatment as your needs evolve for better outcomes.' },
      { icon: 'shield-leaf', title: 'Relapse prevention', description: 'Building resilience and strategies to maintain long-term well-being.' }
    ]
  },
  {
    id: 8,
    image: '/services/executive-specialised-programs.webp',
    imageAlt: 'Executive consultation in a refined, discreet office setting',
    title: 'Executive <span class="amp">&amp;</span> Specialised Programs',
    subtitle: 'High-touch, personalised care designed for <span class="hl">complex needs</span> and <span class="hl">elevated expectations</span>.',
    points: [
      { icon: 'chat', title: 'Personalised engagement', description: 'One-on-one attention and customised plans tailored to your unique goals and lifestyle.' },
      { icon: 'puzzle', title: 'Complex case management', description: 'Expert handling of complex conditions with an integrative and multidisciplinary approach.' },
      { icon: 'diamond-star', title: 'Premium support', description: 'Priority access, continuous support, and a seamless experience at every step.' }
    ]
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
  .services-cta {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
  }
}
</style>
