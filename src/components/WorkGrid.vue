<template>
  <section class="work-grid">
    <div class="work-header">
      <div class="eyebrow">Portfolio</div>
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
  heading: { type: String, default: 'Selected work' },
  blurb: String,
  limit: Number,
})

const PROJECTS = [
  {
    image: '/image2.jpeg',
    category: 'Brand Identity',
    year: '2025',
    title: 'Bloom — a calmer mental-health app',
    tags: ['Branding', 'UX', 'Illustration'],
  },
  {
    image: '/image3.jpeg',
    category: 'Product Design',
    year: '2025',
    title: 'Stillness — guided meditation, redesigned',
    tags: ['Mobile', 'Motion'],
  },
  {
    image: '/image4.jpeg',
    category: 'Illustration',
    year: '2024',
    title: 'Gratitude — an illustration system',
    tags: ['Illustration', 'System'],
  },
  {
    image: '/image1.jpeg',
    category: 'Web Design',
    year: '2024',
    title: 'Mindful Co. — marketing site',
    tags: ['Web', 'Branding'],
  },
  {
    image: '/image2.jpeg',
    category: 'Campaign',
    year: '2023',
    title: 'It\'s okay to not be okay',
    tags: ['Campaign', 'Social'],
  },
  {
    image: '/image3.jpeg',
    category: 'Research',
    year: '2023',
    title: 'Heart & Mind — a wellbeing study',
    tags: ['Research', 'Strategy'],
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
