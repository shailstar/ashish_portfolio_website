<template>
  <header>
    <nav>
      <div class="nav-container">
        <RouterLink to="/" class="logo">Dr. Ashish</RouterLink>
        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/contact">Appointment</RouterLink></li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>&copy; 2024 Dr. Ashish - Psychiatrist. All rights reserved. | Privacy Policy</p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #e9ecef;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #6b8cae;
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  min-height: 60vh;
}

footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 3rem;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid #e9ecef;
}
</style>
