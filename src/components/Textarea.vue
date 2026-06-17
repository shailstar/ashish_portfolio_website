<template>
  <div class="textarea-group">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <textarea
      :id="id"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="textarea"
    ></textarea>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  placeholder: String,
  rows: { type: Number, default: 3 },
  modelValue: String,
})

defineEmits(['update:modelValue'])

const id = computed(() => `textarea-${Math.random().toString(36).substr(2, 9)}`)
</script>

<style scoped>
.textarea-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-strong);
  margin-bottom: 8px;
}

.textarea {
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--text-body);
  background: var(--white);
  resize: vertical;
  transition: border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}

.textarea:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--focus-ring-soft);
}

.textarea::placeholder {
  color: var(--text-muted);
}
</style>
