<template>
  <section class="projects">
    <h1>My Projects</h1>

    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p class="description">{{ project.description }}</p>
        <div class="tags">
          <span v-for="tech in project.technologies" :key="tech" class="tag">
            {{ tech }}
          </span>
        </div>
        <a :href="project.link" target="_blank" class="project-link">
          View Project →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'A responsive portfolio website built with Vue.js and Vite.',
    technologies: ['Vue.js', 'Vite', 'CSS'],
    link: '#'
  },
  {
    id: 2,
    name: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with payment integration.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 4,
    name: 'Weather App',
    description: 'A beautiful weather application using OpenWeather API.',
    technologies: ['Vue.js', 'API Integration', 'JavaScript'],
    link: '#'
  }
])
</script>

<style scoped>
.projects {
  max-width: 1000px;
  margin: 0 auto;
}

.projects h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.project-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.project-card .description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: #e8f0ff;
  color: #0066cc;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.project-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.project-link:hover {
  color: #0052a3;
}
</style>
