<template>
  <footer class="footer">
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

<style scoped>
.footer {
  background-color: var(--surface-tint);
  margin-top: var(--space-9);
  padding: var(--space-8) var(--gutter);
  border-top: var(--border-w) solid var(--border);
}

.footer-content {
  max-width: var(--container-xl);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  text-align: center;
}

.footer-section h4 {
  margin-bottom: var(--space-4);
  font-size: var(--fs-h4);
  color: var(--text-strong);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: var(--space-2);
}

.footer-section a {
  color: var(--text-muted);
  transition: color var(--dur-base) var(--ease-soft);
  cursor: pointer;
  font-size: var(--fs-sm);
}

.footer-section a:hover {
  color: var(--brand);
}

.footer-section p {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.confidential {
  font-size: var(--fs-xs);
  color: var(--brand);
  font-style: italic;
  margin-top: var(--space-2) !important;
}
</style>
