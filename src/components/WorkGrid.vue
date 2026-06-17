<template>
  <section class="work-grid">
    <div class="work-header">
      <div class="eyebrow">Clinical Work</div>
      <h2 class="work-title">{{ heading }}</h2>
      <p v-if="blurb" class="work-blurb">{{ blurb }}</p>
    </div>
    <div class="work-projects">
      <ProjectCard
        v-for="project in displayedProjects"
        :key="project.title"
        :image="project.image"
        :category="project.category"
        :year="project.year"
        :title="project.title"
        :tags="project.tags"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  heading: { type: String, default: 'Clinical Work' },
  blurb: String,
  limit: Number,
})

const PROJECTS = [
  {
    image: '/image2.jpeg',
    category: 'Anxiety Disorders',
    year: '2025',
    title: 'Generalized Anxiety & Work Stress Management',
    tags: ['Medication', 'Therapy', 'Lifestyle'],
  },
  {
    image: '/image3.jpeg',
    category: 'Depression & Mood',
    year: '2025',
    title: 'Major Depression with Burnout Recovery',
    tags: ['Assessment', 'Treatment', 'Follow-up'],
  },
  {
    image: '/image4.jpeg',
    category: 'Behavioral Patterns',
    year: '2024',
    title: 'Procrastination & Binge Behavior Protocol',
    tags: ['Restructuring', 'Mindfulness', 'Prevention'],
  },
  {
    image: '/image1.jpeg',
    category: 'Sleep & Wellness',
    year: '2024',
    title: 'Chronic Insomnia with Lifestyle Integration',
    tags: ['Sleep Science', 'Yogic Practices', 'Recovery'],
  },
  {
    image: '/image2.jpeg',
    category: 'Mental Health',
    year: '2023',
    title: 'Emotional Resilience & Wellness Building',
    tags: ['Integrated Care', 'Support', 'Healing'],
  },
  {
    image: '/image3.jpeg',
    category: 'Research',
    year: '2023',
    title: 'Behavioral Patterns & Treatment Outcomes',
    tags: ['Evidence-Based', 'Research', 'Outcomes'],
  },
]

const displayedProjects = computed(() => {
  return props.limit ? PROJECTS.slice(0, props.limit) : PROJECTS
})
</script>

<style scoped>
.work-grid {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
}

.work-header {
  margin-bottom: 36px;
  max-width: 52ch;
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--brand);
  margin-bottom: 12px;
}

.work-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  color: var(--text-strong);
  margin: 0 0 12px;
  letter-spacing: -0.015em;
}

.work-blurb {
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--text-body);
  margin: 0;
}

.work-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .work-projects {
    grid-template-columns: 1fr;
  }
}
</style>
