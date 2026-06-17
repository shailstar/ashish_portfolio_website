<template>
  <section class="about" :style="{ background: 'var(--bg-subtle)' }">
    <div class="about-content">
      <div class="about-image">
        <img src="/image2.jpeg" alt="Portrait illustration" />
      </div>
      <div class="about-text">
        <div class="eyebrow">About</div>
        <h2 class="about-title">Warmth, clarity, and a little quiet.</h2>
        <p class="about-paragraph">
          For eight years I've worked at the edge of health and design — at
          startups, studios, and on my own. I care about the human on the other
          side of the screen, especially on their hardest days.
        </p>
        <p class="about-paragraph">
          My work leans soft and honest: gentle color, generous space, and
          hand-drawn illustration that makes heavy topics feel approachable.
        </p>
        <div class="about-skills">
          <Tag tone="sage">Brand Identity</Tag>
          <Tag tone="camel">Product Design</Tag>
          <Tag tone="clay">UX Research</Tag>
          <Tag tone="stone">Illustration</Tag>
          <Tag tone="sage">Design Systems</Tag>
          <Tag tone="camel">Motion</Tag>
        </div>
        <div class="about-stats">
          <div class="stat">
            <div class="stat-number">8+</div>
            <div class="stat-label">Years designing</div>
          </div>
          <div class="stat">
            <div class="stat-number">40+</div>
            <div class="stat-label">Projects shipped</div>
          </div>
          <div class="stat">
            <div class="stat-number">12</div>
            <div class="stat-label">Happy teams</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Tag from './Tag.vue'
</script>

<style scoped>
.about {
  padding: clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
}

.about-content {
  max-width: var(--container-lg);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.about-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  aspect-ratio: 4 / 5;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 78% center;
  display: block;
}

.about-text {
  display: flex;
  flex-direction: column;
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--brand);
  margin-bottom: 14px;
}

.about-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  color: var(--text-strong);
  margin: 0 0 18px;
  letter-spacing: -0.015em;
}

.about-paragraph {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--text-body);
  margin: 0 0 16px;
}

.about-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.about-stats {
  display: flex;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  color: var(--brand);
  line-height: 1;
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin-top: 6px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    order: -1;
  }

  .about-stats {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
