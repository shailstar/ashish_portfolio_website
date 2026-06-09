<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Hi, I'm Ashish</h1>
      <p class="subtitle">Full Stack Developer | Creative Problem Solver</p>
      <p class="description">
        I build beautiful and functional web applications that make a difference.
      </p>
      <div class="cta-buttons">
        <RouterLink to="/projects" class="btn btn-primary">View My Work</RouterLink>
        <RouterLink to="/contact" class="btn btn-secondary">Get In Touch</RouterLink>
      </div>
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
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.subtitle {
  font-size: 1.5rem;
  color: #0066cc;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background-color: #0066cc;
  color: white;
}

.btn-primary:hover {
  background-color: #0052a3;
}

.btn-secondary {
  background-color: white;
  color: #0066cc;
  border: 2px solid #0066cc;
}

.btn-secondary:hover {
  background-color: #f0f0f0;
}
</style>
