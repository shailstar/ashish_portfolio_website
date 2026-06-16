<template>
  <section class="features">
    <div class="feature-item">
      <div class="feature-icon">🧠</div>
      <h3>Precision Psychiatry</h3>
      <p>Modern medicine meets ancient wisdom for comprehensive care</p>
    </div>
    <div class="feature-item">
      <div class="feature-icon">🔒</div>
      <h3>Confidential & Safe</h3>
      <p>Your privacy is sacred. A judgment-free space for healing</p>
    </div>
    <div class="feature-item">
      <div class="feature-icon">🎯</div>
      <h3>Outcome-Driven</h3>
      <p>Personalized treatment focused on lasting change, not quick fixes</p>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--peri-50) 0%, var(--lav-100) 100%);
  max-width: var(--container-xl);
  margin: 0 auto;
  width: 100%;
}

.feature-item {
  background: var(--surface-card);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  transition: all var(--dur-base) var(--ease-soft);
  box-shadow: var(--shadow-sm);
  border: var(--border-w) solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
}

.feature-item:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
  border-color: var(--brand);
}

.feature-icon {
  font-size: 3.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(226, 92, 132, 0.1) 0%, rgba(226, 92, 132, 0.05) 100%);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.feature-item h3 {
  color: var(--text-strong);
  margin: 0;
  font-size: var(--fs-h4);
  font-family: var(--font-display);
  font-weight: var(--fw-display);
}

.feature-item p {
  color: var(--text-muted);
  font-size: var(--fs-sm);
  line-height: var(--lh-relaxed);
  margin: 0;
}

@media (max-width: 768px) {
  .features {
    gap: var(--space-6);
  }

  .feature-item {
    padding: var(--space-6);
  }

  .feature-icon {
    font-size: 3rem;
    width: 70px;
    height: 70px;
  }

  .feature-item h3 {
    font-size: var(--fs-h5);
  }
}
</style>
