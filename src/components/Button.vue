<template>
  <component
    :is="tag"
    :class="['button', `variant-${variant}`, `size-${size}`, { full }]"
    v-bind="{ ...attrs, href: href }"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary, secondary, outline, ghost, ink
  size: { type: String, default: 'md' }, // sm, md, lg
  full: { type: Boolean, default: false },
  as: { type: String, default: 'button' },
  href: String,
})

const attrs = computed(() => {
  if (props.as === 'a') {
    return { href: props.href }
  }
  return { type: 'button' }
})

const tag = computed(() => {
  if (props.as === 'a') return 'a'
  return 'button'
})
</script>

<style scoped>
.button {
  font-family: var(--font-sans);
  font-weight: 600;
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease-soft);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.button:active {
  transform: scale(0.97);
}

/* Sizes */
.size-sm {
  font-size: 0.875rem;
  padding: 8px 16px;
}

.size-md {
  font-size: 1rem;
  padding: 12px 24px;
}

.size-lg {
  font-size: 1.0625rem;
  padding: 14px 32px;
}

.button.full {
  width: 100%;
}

/* Variants */
.variant-primary {
  background: var(--brand);
  color: var(--text-on-brand);
}

.variant-primary:hover {
  background: var(--brand-hover);
  box-shadow: var(--shadow-brand);
}

.variant-secondary {
  background: var(--secondary);
  color: var(--text-on-brand);
}

.variant-secondary:hover {
  background: var(--secondary-hover);
  box-shadow: var(--shadow-secondary);
}

.variant-outline {
  background: transparent;
  color: var(--brand);
  border: 1.5px solid var(--border-brand);
}

.variant-outline:hover {
  background: var(--sage-100);
  border-color: var(--brand);
}

.variant-ghost {
  background: transparent;
  color: var(--brand);
}

.variant-ghost:hover {
  background: var(--sage-50);
}

.variant-ink {
  background: var(--ink-900);
  color: var(--white);
}

.variant-ink:hover {
  background: var(--ink-800);
}
</style>
