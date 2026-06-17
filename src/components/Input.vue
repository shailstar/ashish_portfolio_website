<template>
  <div class="input-group">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  modelValue: String,
})

defineEmits(['update:modelValue'])

const id = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`)
</script>

<style scoped>
.input-group {
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

.input {
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--text-body);
  background: var(--white);
  transition: border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}

.input:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--focus-ring-soft);
}

.input::placeholder {
  color: var(--text-muted);
}
</style>
