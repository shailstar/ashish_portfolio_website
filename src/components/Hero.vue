<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <h1>{{ currentTagline }}</h1>
      <p class="subtitle">Consultant Neuro-Psychiatrist</p>
      <p class="tagline">{{ currentSubtitle }}</p>

      <div class="cta-buttons">
        <a href="#contact" class="btn btn-primary">Schedule a Consultation</a>
        <a href="#contact" class="btn btn-secondary">Take a 2-Min Self Assessment</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentTagline = "Precision Psychiatry. Integrated Healing."
const currentSubtitle = "Structured treatment integrating Clinical Psychiatry with Yogic Sciences."
</script>

<style scoped>
.hero {
  position: relative;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background-image: url('/illustrations/brain-bloom-hands.jpeg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  aspect-ratio: 1934 / 1111;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-8);
  max-width: 100%;
}


.hero-content {
  position: relative;
  z-index: 10;
  text-align: left;
  max-width: 600px;
  margin-left: 0;
}

.hero-content h1 {
  font-size: var(--fs-display);
  margin-bottom: var(--space-3);
  color: var(--text-strong);
  font-weight: var(--fw-display);
  line-height: var(--lh-tight);
  min-height: 3.5em;
  transition: all var(--dur-slow) var(--ease-soft);
}

.hero-content .subtitle {
  font-size: var(--fs-lg);
  color: var(--brand);
  margin-bottom: var(--space-4);
  font-weight: var(--fw-semibold);
}

.hero-content .tagline {
  font-size: var(--fs-md);
  color: var(--text-muted);
  margin-bottom: var(--space-8);
  line-height: var(--lh-relaxed);
  min-height: 2.1em;
  transition: all var(--dur-slow) var(--ease-soft);
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.btn {
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-pill);
  text-decoration: none;
  font-weight: var(--fw-semibold);
  transition: all var(--dur-base) var(--ease-soft);
  display: inline-block;
  font-size: var(--fs-sm);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--brand);
  color: var(--text-on-brand);
  box-shadow: var(--shadow-brand);
  scale: 0.97;
}

.btn-primary:hover {
  background-color: var(--brand-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  scale: 1;
}

.btn-secondary {
  background-color: var(--surface-card);
  color: var(--brand);
  border: var(--border-w) solid var(--border-brand);
}

.btn-secondary:hover {
  background-color: var(--surface-tint);
  transform: translateY(-2px);
  scale: 1.02;
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    justify-content: center;
  }

  .hero::before {
    background: linear-gradient(180deg, rgba(255, 248, 243, 0.95) 0%, rgba(255, 248, 243, 0.85) 50%, rgba(255, 248, 243, 0.7) 100%);
  }

  .hero-content {
    text-align: center;
    max-width: 100%;
  }

  .hero-content h1 {
    font-size: var(--fs-h2);
  }

  .cta-buttons {
    justify-content: center;
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
