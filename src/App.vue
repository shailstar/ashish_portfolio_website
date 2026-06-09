<template>
  <header>
    <nav>
      <div class="nav-container">
        <RouterLink to="/" class="logo">Ashish</RouterLink>
        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>&copy; 2024 Ashish. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #0066cc;
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  min-height: 60vh;
}

footer {
  background-color: #f0f0f0;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 3rem;
  color: #666;
}
</style>
