<template>
  <section class="contact" :style="{ background: 'var(--surface-ink)' }">
    <div class="contact-content">
      <div class="eyebrow" style="color: var(--sage-300)">Contact</div>
      <h2 class="contact-title">
        Let's make something <span class="italic-accent">gentle</span> together.
      </h2>
      <p class="contact-description">
        Have a project in mind, or just want to say hello? Tell me a little
        about it and I'll get back to you within a day.
      </p>

      <div v-if="sent" class="contact-success">
        <div class="success-headline">Thank you — message sent.</div>
        <p class="success-message">I'll be in touch soon. ♥</p>
      </div>

      <div v-else class="contact-form-container">
        <div class="form-fields">
          <Input
            label="Your name"
            placeholder="Maya Kapoor"
            v-model="form.name"
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@studio.com"
            v-model="form.email"
          />
        </div>
        <div class="form-textarea">
          <Textarea
            label="About your project"
            rows="5"
            placeholder="A few sentences about what you're building…"
            v-model="form.message"
          />
        </div>
        <div class="form-footer">
          <Badge tone="success">Currently booking Summer 2026</Badge>
          <Button variant="primary" size="lg" @click="handleSubmit">
            Send message
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'
import Badge from './Badge.vue'
import Input from './Input.vue'
import Textarea from './Textarea.vue'

const sent = ref(false)
const form = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  sent.value = true
}
</script>

<style scoped>
.contact {
  position: relative;
  overflow: hidden;
}

.contact-content {
  max-width: var(--container-md);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  position: relative;
  z-index: 1;
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  margin-bottom: 14px;
}

.contact-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2rem, 3.6vw, 3rem);
  color: #fff;
  margin: 0 0 14px;
  letter-spacing: -0.015em;
}

.italic-accent {
  font-style: italic;
  color: var(--camel-300);
}

.contact-description {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--stone-50);
  margin: 0 0 34px;
  max-width: 48ch;
  opacity: 0.82;
}

.contact-success {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
}

.success-headline {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 8px;
}

.success-message {
  color: var(--stone-50);
  opacity: 0.8;
  margin: 0;
}

.contact-form-container {
  background: var(--surface-card);
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow-lg);
}

.form-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 18px;
}

.form-textarea {
  margin-bottom: 22px;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
}

@media (max-width: 768px) {
  .form-fields {
    grid-template-columns: 1fr;
  }

  .form-footer {
    flex-direction: column-reverse;
  }

  .form-footer > * {
    width: 100%;
  }
}
</style>
