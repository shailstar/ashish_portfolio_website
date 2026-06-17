<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <div class="eyebrow">Consultant Neuro-Psychiatrist</div>
        <h1 class="hero-headline">
          Precision Psychiatry. <span class="italic-accent">Integrated</span> Healing.
        </h1>
        <p class="hero-subheading">
          Tailored care combining modern medicine and yogic frameworks.
        </p>
        <div class="hero-buttons">
          <Button variant="primary" size="lg" @click="$emit('navigate', 'work')">
            View selected work
          </Button>
          <Button variant="outline" size="lg" @click="$emit('navigate', 'contact')">
            Get in touch
          </Button>
        </div>
        <div class="hero-badge">
          <Badge tone="success">Available for projects · Summer 2026</Badge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue'
import Button from './Button.vue'
import Badge from './Badge.vue'

defineEmits(['navigate'])
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(120deg, var(--sage-100) 0%, var(--camel-100) 55%, var(--stone-100) 100%);
  background-image: url('/image1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
}

.hero-content {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  grid-column: 1;
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--brand);
  margin-bottom: 18px;
}

.hero-headline {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.75rem, 5.5vw, 4.75rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  margin: 0 0 22px;
}

.italic-accent {
  font-style: italic;
  color: var(--brand);
}

.hero-subheading {
  font-size: 1.1875rem;
  line-height: 1.7;
  color: var(--text-body);
  max-width: 44ch;
  margin: 0 0 32px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  margin-bottom: 30px;
}

.hero-badge {
  display: flex;
  align-items: center;
}


@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
    background-position: right bottom;
  }

  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-text {
    grid-column: auto;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style>
