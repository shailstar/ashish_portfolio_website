<template>
  <span :class="['badge', `tone-${tone}`]">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  tone: { type: String, default: 'success' }, // success, warning, danger
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  font-size: 0.8125rem;
  font-weight: 600;
  font-family: var(--font-sans);
}

.tone-success {
  background: rgba(78, 122, 74, 0.12);
  color: var(--leaf);
}

.tone-warning {
  background: rgba(194, 146, 47, 0.12);
  color: var(--amber);
}

.tone-danger {
  background: rgba(181, 80, 60, 0.12);
  color: var(--rust);
}
</style>
