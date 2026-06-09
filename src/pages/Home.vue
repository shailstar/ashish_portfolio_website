<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Dr. Ashish</h1>
      <p class="subtitle">Compassionate Psychiatry Care</p>
      <p class="description">
        Providing professional mental health support in a confidential, non-judgmental environment.
        I specialize in treating depression, anxiety, PTSD, and other mental health conditions.
      </p>
      <div class="cta-buttons">
        <RouterLink to="/services" class="btn btn-primary">Learn About Services</RouterLink>
        <RouterLink to="/contact" class="btn btn-secondary">Book an Appointment</RouterLink>
      </div>
    </div>
  </section>

  <section class="highlights">
    <div class="highlight-item">
      <div class="icon">🏥</div>
      <h3>Professional Care</h3>
      <p>Board-certified psychiatrist with 10+ years of experience</p>
    </div>
    <div class="highlight-item">
      <div class="icon">🔒</div>
      <h3>Confidential</h3>
      <p>Your privacy and trust are my top priorities</p>
    </div>
    <div class="highlight-item">
      <div class="icon">💙</div>
      <h3>Compassionate</h3>
      <p>Evidence-based treatment tailored to your needs</p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f4f8 100%);
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 700;
}

.subtitle {
  font-size: 1.4rem;
  color: #6b8cae;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.description {
  font-size: 1.05rem;
  color: #555;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.85rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  font-size: 1rem;
}

.btn-primary {
  background-color: #6b8cae;
  color: white;
  box-shadow: 0 4px 12px rgba(107, 140, 174, 0.2);
}

.btn-primary:hover {
  background-color: #5a7a9a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(107, 140, 174, 0.3);
}

.btn-secondary {
  background-color: white;
  color: #6b8cae;
  border: 2px solid #6b8cae;
}

.btn-secondary:hover {
  background-color: #f0f4f8;
  transform: translateY(-2px);
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: white;
}

.highlight-item {
  text-align: center;
  padding: 1.5rem;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.highlight-item p {
  color: #666;
  font-size: 0.95rem;
}
</style>
