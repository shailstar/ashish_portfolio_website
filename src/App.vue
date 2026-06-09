<template>
  <header>
    <nav>
      <div class="nav-container">
        <RouterLink to="/" class="logo">Dr. Ashish Yadav</RouterLink>
        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/approach">Approach</RouterLink></li>
          <li><RouterLink to="/faq">FAQs</RouterLink></li>
          <li><RouterLink to="/contact">Book Now</RouterLink></li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms & Services</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <p>&copy; 2024 Dr. Ashish Yadav. All rights reserved.</p>
        <p class="confidential">Your information is confidential. This is a safe, judgment-free space.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  background-color: #ffffff;
  padding: 1.2rem 0;
  box-shadow: 0 2px 8px rgba(163, 177, 138, 0.1);
  border-bottom: 1px solid #E8E8E8;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--sage-green);
  text-decoration: none;
  letter-spacing: -0.5px;
  font-family: 'Playfair Display', serif;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-dark);
  text-decoration: none;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--sage-green);
}

main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 60vh;
}

footer {
  background-color: #fafafa;
  margin-top: 5rem;
  padding: 3rem 2rem;
  border-top: 1px solid #E8E8E8;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--text-light);
  transition: color 0.3s;
}

.footer-section a:hover {
  color: var(--sage-green);
}

.footer-section p {
  font-size: 0.9rem;
}

.confidential {
  font-size: 0.85rem;
  color: var(--sage-green);
  font-style: italic;
  margin-top: 0.5rem;
}
</style>
