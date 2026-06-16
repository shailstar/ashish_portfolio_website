<template>
  <section class="hero">
    <div class="hero-background">
      <div class="floating-particles">
        <div class="particle" v-for="i in 5" :key="i" :style="{ '--delay': `${i * 0.3}s` }"></div>
      </div>
      <div class="orb-container">
        <div class="breathing-orb"></div>
        <svg class="brain-wave" viewBox="0 0 300 60" preserveAspectRatio="none">
          <path class="wave-path" d="M0,30 Q7.5,20 15,30 T30,30 T45,30 T60,30 T75,30 T90,30 T105,30 T120,30 T135,30 T150,30 T165,30 T180,30 T195,30 T210,30 T225,30 T240,30 T255,30 T270,30 T285,30 T300,30" />
        </svg>
      </div>
    </div>

    <div class="hero-content">
      <h1>{{ currentTagline }}</h1>
      <p class="subtitle">Consultant Neuro-Psychiatrist</p>
      <p class="tagline">{{ currentSubtitle }}</p>

      <div class="cta-buttons">
        <RouterLink to="/contact" class="btn btn-primary">Schedule a Consultation</RouterLink>
        <RouterLink to="/contact?type=assessment" class="btn btn-secondary">Take a 2-Min Self Assessment</RouterLink>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="feature-item">
      <div class="feature-icon">🧠</div>
      <h3>Precision Psychiatry</h3>
      <p>Modern medicine meets ancient wisdom for comprehensive care</p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const taglines = [
  "Where Neuroscience Meets Ancient Wisdom - and Your Story Shapes the Treatment",
  "Understand your mind, retrain your patterns.",
  "Precision Psychiatry. Integrated Healing."
]

const subtitles = [
  "Structured treatment integrating Clinical Psychiatry with Yogic Sciences.",
  "Structured treatment integrating Clinical Psychiatry with Yogic Sciences.",
  "Tailored care combining modern medicine and yogic frameworks."
]

const currentTaglineIndex = ref(0)

const currentTagline = ref(taglines[0])
const currentSubtitle = ref(subtitles[0])

onMounted(() => {
  setInterval(() => {
    currentTaglineIndex.value = (currentTaglineIndex.value + 1) % taglines.length
    currentTagline.value = taglines[currentTaglineIndex.value]
    currentSubtitle.value = subtitles[currentTaglineIndex.value]
  }, 5000)
})
</script>

<style scoped>
.hero {
  position: relative;
  padding: 5rem 2rem;
  background-image: url('/brain-bloom-hands.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: none;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: var(--sage-green);
  border-radius: 50%;
  animation: float 8s infinite ease-in-out;
  animation-delay: var(--delay);
}

.particle:nth-child(1) { top: 20%; left: 10%; }
.particle:nth-child(2) { top: 40%; left: 80%; }
.particle:nth-child(3) { top: 60%; left: 15%; }
.particle:nth-child(4) { top: 30%; left: 70%; }
.particle:nth-child(5) { top: 70%; left: 85%; }

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

.orb-container {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
}

.breathing-orb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(163, 177, 138, 0.6), rgba(163, 177, 138, 0.2));
  animation: breathe 4s infinite ease-in-out;
  box-shadow: 0 0 40px rgba(163, 177, 138, 0.3);
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.4; }
}

.brain-wave {
  width: 200px;
  height: 60px;
  margin-top: 20px;
}

.wave-path {
  stroke: var(--sage-green);
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  animation: wave-flow 3s linear infinite;
}

@keyframes wave-flow {
  0% { stroke-dasharray: 300; stroke-dashoffset: 300; }
  100% { stroke-dasharray: 300; stroke-dashoffset: 0; }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 600px;
  margin-left: 0;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-strong);
  font-weight: 700;
  line-height: 1.3;
  min-height: 3.5em;
  transition: all 0.5s ease-in-out;
}

.subtitle {
  font-size: 1.3rem;
  color: var(--brand);
  margin-bottom: 1rem;
  font-weight: 600;
}

.tagline {
  font-size: 1.05rem;
  color: var(--text-body);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  min-height: 2.1em;
  transition: all 0.5s ease-in-out;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  font-size: 0.95rem;
}

.btn-primary {
  background-color: var(--brand);
  color: var(--text-on-brand);
  box-shadow: var(--shadow-brand);
}

.btn-primary:hover {
  background-color: var(--brand-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: var(--white);
  color: var(--brand);
  border: 2px solid var(--brand-ink);
}

.btn-secondary:hover {
  background-color: var(--surface-tint);
  transform: translateY(-2px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 0;
  background-color: white;
}

.feature-item {
  text-align: center;
  padding: 2rem 1.5rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.feature-item p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .orb-container {
    display: none;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
