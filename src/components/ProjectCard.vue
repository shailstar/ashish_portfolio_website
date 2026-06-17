<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="project-content">
      <div class="project-meta">
        <span class="category">{{ category }}</span>
        <span class="year">{{ year }}</span>
      </div>
      <h3 class="project-title">{{ title }}</h3>
      <div class="project-tags">
        <Tag v-for="(tag, i) in tags" :key="tag" :tone="['sage', 'camel', 'clay', 'stone'][i % 4]">
          {{ tag }}
        </Tag>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  category: String,
  year: String,
  title: String,
  tags: Array,
})

import Tag from './Tag.vue'
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--dur-base) var(--ease-soft);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

.project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--bg-subtle);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-base) var(--ease-soft);
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--ls-wider);
}

.category {
  color: var(--brand);
}

.year {
  color: var(--text-muted);
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-strong);
  margin-bottom: 12px;
  line-height: 1.3;
  letter-spacing: var(--ls-tight);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}
</style>
