<template>
  <span :class="['tag', `tone-${tone}`]">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  tone: { type: String, default: 'sage' }, // sage, camel, clay, stone
})
</script>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--font-sans);
  border: 1px solid transparent;
}

.tone-sage {
  background: var(--sage-100);
  color: var(--sage-700);
  border-color: var(--sage-200);
}

.tone-camel {
  background: var(--camel-100);
  color: var(--camel-700);
  border-color: var(--camel-200);
}

.tone-clay {
  background: var(--clay-200);
  color: var(--clay-600);
  border-color: var(--clay-300);
}

.tone-stone {
  background: var(--stone-100);
  color: var(--stone-700);
  border-color: var(--stone-200);
}
</style>
