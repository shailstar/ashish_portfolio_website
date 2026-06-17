<template>
  <section class="about-hero">
    <div class="about-hero-header">
      <h1 class="hero-name">Dr Ashish Yadav</h1>
      <p class="hero-title">Consultant Neuro-Psychiatrist</p>
    </div>

    <div class="about-hero-image">
      <img src="/ashish-portrait.jpeg" alt="Dr Ashish Yadav" />
    </div>

    <div class="about-hero-content">
      <div class="about-hero-left">
        <p class="tagline">
          You're not a diagnosis— you're a person— and your care should reflect that
        </p>
        <p class="body-text">
          I work at the intersection of psychiatry and yogic science, focusing on personalised, outcome-driven mental health care. Most treatments focus on symptom control. My approach focuses on understanding the underlying patterns—biological, psychological, and behavioural—and addressing them in a structured, individualised way. With a background in psychiatry, research in behavioural patterns such as procrastination and binge behaviour, and formal training in yoga, my work focuses on bridging science with practical, real-world application.
        </p>
        <p class="body-text">
          I primarily work with individuals who are looking for a deeper, structured approach—not just quick relief, but lasting change. Mental health care should be precise, personalised, and built to last.
        </p>
      </div>

      <div class="about-hero-right">
        <div class="about-section-header">
          <h3>About Dr. Ashish</h3>
          <p class="about-subtitle">The Approach Behind the Care</p>
        </div>
        <div class="about-highlights">
          <div class="highlight-item">
            <span class="highlight-label">Precision</span>
            <p>Structured, outcome-driven care</p>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">Integration</span>
            <p>Psychiatry + Yogic Science</p>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">Personalization</span>
            <p>Tailored to your patterns</p>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">Lasting Change</span>
            <p>Beyond symptom control</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-hero-footer">
      <p class="endline">
        Tum Akele nahi ho dost, <span class="endline-accent">Healing starts here.</span>
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero {
  background: white;
  border-top: 2px solid var(--text-strong);
  border-bottom: 2px solid var(--text-strong);
}

.about-hero-header {
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 4rem);
  max-width: var(--container-xl);
  margin: 0 auto;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin: 0;
  color: var(--text-strong);
  line-height: 1.1;
}

.hero-title {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  margin: 0.5rem 0 0;
  color: var(--text-body);
  font-weight: 500;
}

.about-hero-image {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--sage-100) 0%, var(--camel-100) 100%);
}

.about-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.about-hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 4rem);
  border-top: 1px solid var(--border);
}

.about-hero-left {
  padding-right: clamp(1.5rem, 3vw, 2.5rem);
  border-right: 2px solid var(--text-strong);
}

.tagline {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.125rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-strong);
  margin: 0 0 1.5rem;
}

.body-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-body);
  margin: 0 0 1.25rem;
}

.body-text:last-of-type {
  margin-bottom: 0;
}

.about-hero-right {
  padding-left: clamp(1.5rem, 3vw, 2.5rem);
}

.about-section-header {
  margin-bottom: 2rem;
}

.about-section-header h3 {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-body);
  margin: 0 0 0.5rem;
}

.about-subtitle {
  font-size: 0.9375rem;
  color: var(--text-muted);
  margin: 0;
  font-weight: 500;
}

.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.highlight-item {
  display: flex;
  flex-direction: column;
}

.highlight-label {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: var(--fw-semibold);
  color: var(--brand);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  margin-bottom: 0.5rem;
}

.highlight-item p {
  font-size: 0.875rem;
  color: var(--text-body);
  margin: 0;
  line-height: 1.5;
}

.about-hero-footer {
  background: var(--bg-subtle);
  padding: clamp(2rem, 5vw, 3rem) clamp(1.25rem, 5vw, 4rem);
  text-align: center;
  max-width: var(--container-xl);
  margin: 0 auto;
}

.endline {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: var(--text-strong);
  margin: 0;
  line-height: 1.4;
}

.endline-accent {
  color: var(--brand);
}

@media (max-width: 768px) {
  .about-hero-content {
    grid-template-columns: 1fr;
  }

  .about-hero-left {
    padding-right: 0;
    padding-bottom: 2rem;
    border-right: none;
    border-bottom: 2px solid var(--text-strong);
  }

  .about-hero-right {
    padding-left: 0;
    padding-top: 2rem;
  }

  .about-highlights {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .about-section-header {
    margin-bottom: 1.5rem;
  }
}
</style>
