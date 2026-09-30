<template>
  <section class="resources">
    <div class="resources-header">
      <div class="eyebrow">Free Resources</div>
      <h2 class="resources-title">Resources</h2>
      <p class="resources-blurb">Guides, self-help forms, articles, and videos to support your mental health, at no cost.</p>
    </div>

    <div class="tabs" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :class="['tab', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-panel">
      <div v-if="activeTab === 'videos' && activeItems.length" class="video-grid">
        <div v-for="item in activeItems" :key="item.embedId" class="video-card">
          <div class="video-embed">
            <iframe
              :src="`https://www.youtube-nocookie.com/embed/${item.embedId}`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div v-else-if="activeItems.length" class="resource-grid">
        <a
          v-for="item in activeItems"
          :key="item.title"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card"
        >
          <div class="resource-icon">{{ item.icon }}</div>
          <h3 class="resource-title">{{ item.title }}</h3>
          <p class="resource-description">{{ item.description }}</p>
          <span class="resource-cta">{{ item.ctaLabel || 'View' }} &rarr;</span>
        </a>
      </div>
      <div v-else class="empty-state">
        <p>More {{ activeTabLabel.toLowerCase() }} coming soon.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = [
  { id: 'downloads', label: 'Free Downloadable Resources' },
  { id: 'forms', label: 'Self-Help Forms' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'videos', label: 'Videos' },
]

const activeTab = ref('downloads')

const RESOURCES = {
  downloads: [
    {
      icon: '\u{1F634}',
      title: 'How to Sleep Better',
      description: 'A psychiatrist’s guide to why sleep drives mental health, and five evidence-based strategies to fix it.',
      href: '/resources/how-to-sleep-better.pdf',
      ctaLabel: 'Download PDF',
    },
    {
      icon: '\u{1F4C5}',
      title: 'PMDD: A Non-Pharmacological Action Plan',
      description: 'Lifestyle and behavioural strategies to manage Premenstrual Dysphoric Disorder, starting this cycle.',
      href: '/resources/pmdd-non-pharmacological-guide.pdf',
      ctaLabel: 'Download PDF',
    },
    {
      icon: '\u{1F37D}\u{FE0F}',
      title: 'Living Well with IBS-D',
      description: 'A practical, non-medication guide to irritable bowel syndrome with diarrhoea.',
      href: '/resources/ibs-d-patient-guide.pdf',
      ctaLabel: 'Download PDF',
    },
    {
      icon: '\u{1F37D}\u{FE0F}',
      title: 'Living Well with IBS-C',
      description: 'A practical, non-medication guide to irritable bowel syndrome with constipation.',
      href: '/resources/ibs-c-patient-guide.pdf',
      ctaLabel: 'Download PDF',
    },
  ],
  forms: [
    {
      icon: '\u{1F4DD}',
      title: '2-Minute Self Assessment',
      description: 'A quick check-in to understand where you stand and what to do next.',
      href: '/assessment.html',
      ctaLabel: 'Take the assessment',
    },
    {
      icon: '\u{1F9E0}',
      title: 'PHQ-9 Depression Screening',
      description: 'A validated 9-question screener used to gauge depressive symptoms.',
      href: '/phq9.html',
      ctaLabel: 'Take the screening',
    },
    {
      icon: '\u{26A1}',
      title: 'Adult ADHD Self-Report Scale (ASRS)',
      description: 'A symptom checklist to screen for adult ADHD traits and patterns.',
      href: '/asrs.html',
      ctaLabel: 'Take the checklist',
    },
  ],
  blogs: [],
  videos: [
    { embedId: 'F0eNhCV0ehY' },
    { embedId: '8-nwMi0J2Is' },
  ],
}

const activeItems = computed(() => RESOURCES[activeTab.value] || [])
const activeTabLabel = computed(() => tabs.find(t => t.id === activeTab.value)?.label || '')
</script>

<style scoped>
.resources {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
}

.resources-header {
  margin-bottom: 36px;
  max-width: 52ch;
}

.resources-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  color: var(--text-strong);
  margin: 0 0 12px;
  letter-spacing: -0.015em;
}

.resources-blurb {
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--text-body);
  margin: 0;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  border-bottom: 1px solid var(--border);
  padding-bottom: clamp(1rem, 2vw, 1.5rem);
}

.tab {
  border: none;
  background: var(--bg-subtle);
  color: var(--text-body);
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}

.tab:hover {
  background: var(--sage-100);
  color: var(--sage-700);
}

.tab.active {
  background: var(--brand);
  color: var(--text-on-brand);
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.resource-card {
  display: flex;
  flex-direction: column;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  transition: transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft);
}

.resource-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-brand);
}

.resource-icon {
  font-size: 1.75rem;
  margin-bottom: 12px;
}

.resource-title {
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-strong);
  margin: 0 0 8px;
}

.resource-description {
  font-size: 0.9375rem;
  color: var(--text-body);
  line-height: 1.6;
  margin: 0 0 16px;
  flex: 1;
}

.resource-cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-ink);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.video-card {
  overflow: hidden;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
}

.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.empty-state {
  padding: clamp(2.5rem, 5vw, 4rem) clamp(1rem, 2vw, 2rem);
  text-align: center;
  color: var(--text-muted);
  background: var(--bg-subtle);
  border-radius: var(--radius-lg);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .resource-grid {
    grid-template-columns: 1fr;
  }

  .tabs {
    gap: 6px;
  }

  .tab {
    padding: 8px 14px;
    font-size: 0.8125rem;
  }
}
</style>
