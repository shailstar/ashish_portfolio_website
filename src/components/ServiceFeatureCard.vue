<template>
  <article class="feature-card">
    <div class="feature-image">
      <img :src="service.image" :alt="service.imageAlt" loading="lazy" />
    </div>

    <div class="feature-content">
      <h3 class="feature-title" v-html="service.title"></h3>

      <div class="feature-divider">
        <span class="divider-line"></span>
        <svg class="divider-leaf" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M12 3c-4 2-6 6-6 10 0 3 2 5 6 5s6-2 6-5c0-4-2-8-6-10z" />
          <path d="M12 4v14" />
        </svg>
        <span class="divider-line"></span>
      </div>

      <p class="feature-subtitle" v-html="service.subtitle"></p>

      <ul class="feature-points">
        <li v-for="(point, pi) in service.points" :key="pi">
          <span class="point-icon" :class="pi % 2 === 1 ? 'gold' : 'sage'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="point.icon === 'search'">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <line x1="20" y1="20" x2="15.8" y2="15.8" />
              </template>
              <template v-else-if="point.icon === 'pill'">
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                <path d="m8.5 8.5 7 7" />
              </template>
              <template v-else-if="point.icon === 'pin'">
                <path d="M12 21c-4.2-4.6-7-8.3-7-11.5A7 7 0 0 1 19 9.5C19 12.7 16.2 16.4 12 21z" />
                <circle cx="12" cy="9.5" r="2.3" />
              </template>
              <template v-else-if="point.icon === 'anxiety'">
                <circle cx="12" cy="12" r="8.5" />
                <polyline points="7,15 9,9 11,14 13,8 15,13 17,9" />
              </template>
              <template v-else-if="point.icon === 'activity'">
                <polyline points="3,12 8,12 10,6 14,18 16,12 21,12" />
              </template>
              <template v-else-if="point.icon === 'briefcase'">
                <rect x="3" y="8" width="18" height="12" rx="2" />
                <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="3" y1="13" x2="21" y2="13" />
              </template>
              <template v-else-if="point.icon === 'cloud-sun'">
                <circle cx="8" cy="7" r="2.2" />
                <path d="M7 16a3.5 3.5 0 1 1 .3-6.98A4.5 4.5 0 0 1 16 10.5a3 3 0 0 1-.5 5.5H7z" />
                <line x1="9" y1="19" x2="9" y2="21" />
                <line x1="13" y1="19" x2="13" y2="21" />
              </template>
              <template v-else-if="point.icon === 'battery'">
                <rect x="2" y="8" width="16" height="8" rx="2" />
                <line x1="20" y1="10" x2="20" y2="14" />
                <rect x="4" y="10" width="3" height="4" fill="currentColor" stroke="none" />
              </template>
              <template v-else-if="point.icon === 'numbness'">
                <circle cx="12" cy="6.5" r="2.3" />
                <path d="M7 19v-1.5a5 5 0 0 1 10 0V19" />
                <path d="M15 8c1-.8 2.1-.4 2.2.7s-1.1 1.3-1.9.6" />
              </template>
              <template v-else-if="point.icon === 'clipboard-clock'">
                <rect x="4" y="3" width="12" height="17" rx="2" />
                <path d="M8 3V2.4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V3" />
                <line x1="7.5" y1="9.5" x2="12.5" y2="9.5" />
                <line x1="7.5" y1="13" x2="10.5" y2="13" />
                <circle cx="17" cy="16" r="3.6" />
                <path d="M17 14.3V16l1.2 1" />
              </template>
              <template v-else-if="point.icon === 'phone-play'">
                <rect x="7" y="2" width="10" height="19" rx="2" />
                <line x1="10" y1="18.5" x2="14" y2="18.5" />
                <path d="M10.5 8l4 2.5-4 2.5z" />
              </template>
              <template v-else-if="point.icon === 'moon-stars'">
                <path d="M16 4a6.5 6.5 0 1 0 4.5 10.9A6.5 6.5 0 0 1 16 4z" />
                <path d="M6 6l.6 1.4L8 8l-1.4.6L6 10l-.6-1.4L4 8l1.4-.6z" />
              </template>
              <template v-else-if="point.icon === 'cycle-clock'">
                <path d="M4 12a8 8 0 0 1 14-5.3" />
                <polyline points="18,3.5 18,6.7 14.8,6.7" />
                <path d="M20 12a8 8 0 0 1-14 5.3" />
                <polyline points="6,20.5 6,17.3 9.2,17.3" />
              </template>
              <template v-else-if="point.icon === 'phone-moon'">
                <rect x="7" y="2" width="10" height="19" rx="2" />
                <line x1="10" y1="18.5" x2="14" y2="18.5" />
                <path d="M14.5 7a2.6 2.6 0 1 0 1.8 4.4A2.6 2.6 0 0 1 14.5 7z" />
              </template>
              <template v-else-if="point.icon === 'breathwork'">
                <circle cx="12" cy="6.5" r="2.2" />
                <path d="M6.8 19c.3-3.5 2.5-6 5.2-6s4.9 2.5 5.2 6" />
                <path d="M16.5 7.2c1 .2 1.6 1 1.3 1.9M7.5 7.2c-1 .2-1.6 1-1.3 1.9" />
              </template>
              <template v-else-if="point.icon === 'awareness'">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 15.2c-1.5 0-2.6-1-2.6-2.3 0-.9.6-1.3 1.2-1 .3-1 1-1.7 1.4-1.7s1.1.7 1.4 1.7c.6-.3 1.2.1 1.2 1 0 1.3-1.1 2.3-2.6 2.3z" />
              </template>
              <template v-else-if="point.icon === 'nervous'">
                <circle cx="12" cy="6.5" r="2.2" />
                <path d="M6.8 19c.3-3.5 2.5-6 5.2-6s4.9 2.5 5.2 6" />
                <path d="M12 14.3l-1.1-1.1c-.45-.45-.45-1.15 0-1.55.45-.4 1.05-.3 1.1.3.05-.6.65-.7 1.1-.3.45.4.45 1.1 0 1.55z" />
              </template>
              <template v-else-if="point.icon === 'clipboard-check'">
                <rect x="4" y="3" width="13" height="17" rx="2" />
                <path d="M8 3V2.3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V3" />
                <line x1="7.5" y1="9" x2="13.5" y2="9" />
                <line x1="7.5" y1="12.5" x2="13.5" y2="12.5" />
                <circle cx="17.3" cy="16.3" r="3.4" />
                <polyline points="15.8,16.3 16.9,17.4 18.8,15.3" />
              </template>
              <template v-else-if="point.icon === 'sliders'">
                <line x1="4" y1="6" x2="20" y2="6" />
                <circle cx="9" cy="6" r="1.8" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <circle cx="15" cy="12" r="1.8" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <circle cx="11" cy="18" r="1.8" />
              </template>
              <template v-else-if="point.icon === 'shield-leaf'">
                <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" />
                <path d="M12 8.2c1.8 1 2.5 3 1.8 5-2 .3-3.6-1-3.8-2.8-.2-1.4.7-2.2 2-2.2z" />
              </template>
              <template v-else-if="point.icon === 'chat'">
                <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2z" />
                <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="12" cy="10" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
              </template>
              <template v-else-if="point.icon === 'puzzle'">
                <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
                <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
                <path d="M10.5 6.8h3a2.7 2.7 0 0 1 2.7 2.7v3" />
              </template>
              <template v-else-if="point.icon === 'diamond-star'">
                <path d="M6 9l6-5 6 5-6 11z" />
                <path d="M6 9h12" />
                <path d="M12 4l-2.2 5M12 4l2.2 5" />
              </template>
            </svg>
          </span>
          <span class="point-text">
            <strong>{{ point.title }}</strong>
            <span v-if="point.description">{{ point.description }}</span>
          </span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.feature-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--brand);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.feature-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  aspect-ratio: 4 / 5;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.feature-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.25;
  color: var(--text-strong);
  margin: 0;
}

.feature-title :deep(.amp) {
  color: var(--camel-400);
  font-style: italic;
}

.feature-title :deep(.hl) {
  color: var(--sage-600);
}

.feature-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.25rem 0 1.25rem;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--camel-300);
  max-width: 64px;
}

.divider-leaf {
  color: var(--camel-400);
  flex-shrink: 0;
}

.feature-subtitle {
  font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
  line-height: 1.7;
  color: var(--text-body);
  margin: 0 0 1.75rem;
}

.feature-subtitle :deep(.hl) {
  color: var(--sage-600);
  font-weight: 600;
}

.feature-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-points li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--border);
}

.feature-points li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.feature-points li:first-child {
  padding-top: 0;
}

.point-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.point-icon svg {
  width: 20px;
  height: 20px;
}

.point-icon.sage {
  background: var(--sage-100);
  color: var(--sage-700);
}

.point-icon.gold {
  background: var(--camel-100);
  color: var(--camel-600);
}

.point-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-top: 0.5rem;
}

.point-text strong {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-strong);
}

.point-text span {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-image {
    aspect-ratio: 16 / 10;
  }
}
</style>
