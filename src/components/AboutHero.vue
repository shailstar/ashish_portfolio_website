<template>
  <section class="about-hero">
    <div class="about-hero-wrapper">
      <div class="about-hero-left">
        <p class="intro-text">Hi, I'm Dr Ashish Yadav.</p>
        <h2 class="about-headline">
          You're not a diagnosis— you're a person— <span class="italic-text">and your care should reflect that</span>
        </h2>

        <p class="body-text">
          I work at the intersection of psychiatry and yogic science, focusing on personalised, outcome-driven mental health care. Most treatments focus on symptom control. My approach focuses on understanding the underlying patterns—biological, psychological, and behavioural—and addressing them in a structured, individualised way.
        </p>

        <p class="body-text">
          With a background in psychiatry, research in behavioural patterns such as procrastination and binge behaviour, and formal training in yoga, my work focuses on bridging science with practical, real-world application.
        </p>

        <p class="body-text">
          I primarily work with individuals who are looking for a deeper, structured approach—not just quick relief, but lasting change. Mental health care should be precise, personalised, and built to last.
        </p>

        <div class="about-footer-text">
          <p class="endline">
            Tum Akele nahi ho dost, <span class="endline-accent">Healing starts here.</span>
          </p>
        </div>
      </div>

      <div class="about-hero-right">
        <div class="portrait-container">
          <img src="/profile_about.png" alt="Dr Ashish Yadav" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero {
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
  background: white;
}

.about-hero-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 4rem);
  max-width: var(--container-xl);
  margin: 0 auto;
  align-items: center;
}

.about-hero-left {
  display: flex;
  flex-direction: column;
}

.intro-text {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--text-muted);
  margin: 0 0 1rem;
  font-weight: 500;
}

.about-headline {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-strong);
  margin: 0 0 1.5rem;
}

.italic-text {
  font-style: italic;
  color: var(--text-body);
}

.body-text {
  font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
  line-height: 1.8;
  color: var(--text-body);
  margin: 0 0 1.25rem;
}

.body-text:last-of-type {
  margin-bottom: 2rem;
}

.about-footer-text {
  margin-top: 1.5rem;
}

.endline {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.375rem);
  font-weight: 600;
  color: var(--text-strong);
  margin: 0;
  line-height: 1.4;
}

.endline-accent {
  color: var(--brand);
}

.about-hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait-container {
  width: 100%;
  max-width: 400px;
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: var(--shadow-lg);
}

.portrait-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

@media (max-width: 768px) {
  .about-hero {
    padding: clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 4rem);
  }

  .about-hero-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-hero-right {
    order: -1;
  }

  .portrait-container {
    max-width: 100%;
    aspect-ratio: auto;
    max-height: 400px;
  }
}
</style>
