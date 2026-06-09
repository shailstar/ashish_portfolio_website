<template>
  <section class="approach">
    <div class="approach-header">
      <h1>Treatment Approach</h1>
      <p class="subtitle">Precision Psychiatry with Integrated Healing</p>
    </div>

    <div class="approach-intro">
      <p>
        Each treatment plan is tailored and may include a combination of evidence-based interventions designed specifically for your needs and goals.
      </p>
    </div>

    <div class="components-grid">
      <div class="component-card">
        <div class="component-icon">🔍</div>
        <h3>Clinical Evaluation & Diagnosis</h3>
        <p>Thorough assessment of your medical history, current symptoms, and underlying patterns to establish an accurate diagnosis and formulation.</p>
      </div>

      <div class="component-card">
        <div class="component-icon">💊</div>
        <h3>Medication Management</h3>
        <p>Careful prescription and monitoring of psychiatric medications when clinically indicated, with regular adjustments based on your response and tolerance.</p>
      </div>

      <div class="component-card">
        <div class="component-icon">🧩</div>
        <h3>Behavioural Restructuring</h3>
        <p>Targeted interventions to address unhelpful thought patterns, compulsive behaviours, and lifestyle factors that maintain your symptoms.</p>
      </div>

      <div class="component-card">
        <div class="component-icon">🧘</div>
        <h3>Yogic Practices</h3>
        <p>Integration of evidence-based yogic techniques including breathwork (pranayama), awareness training, and lifestyle correction for holistic healing.</p>
      </div>

      <div class="component-card">
        <div class="component-icon">🛡️</div>
        <h3>Relapse Prevention</h3>
        <p>Long-term strategies to maintain your progress, identify early warning signs, and prevent recurrence of symptoms.</p>
      </div>

      <div class="component-card">
        <div class="component-icon">📊</div>
        <h3>Progress Tracking</h3>
        <p>Regular monitoring of your improvement through structured assessments and collaborative review to ensure your treatment remains effective.</p>
      </div>
    </div>

    <div class="philosophy-section">
      <h2>Core Principles</h2>
      <ul class="principles">
        <li>
          <strong>Precision:</strong> Treatment is based on thorough understanding of your unique presentation, not a one-size-fits-all approach.
        </li>
        <li>
          <strong>Integration:</strong> Modern psychiatry combined with yogic sciences creates a comprehensive approach to healing.
        </li>
        <li>
          <strong>Personalization:</strong> Your treatment plan evolves based on your response, preferences, and life circumstances.
        </li>
        <li>
          <strong>Evidence-Based:</strong> All interventions are grounded in clinical research and proven methodologies.
        </li>
        <li>
          <strong>Durability:</strong> Focus on lasting change through understanding root patterns, not just symptom suppression.
        </li>
        <li>
          <strong>Collaboration:</strong> You are an active partner in your healing journey, with your voice and preferences central to treatment decisions.
        </li>
      </ul>
    </div>

    <div class="cta-section">
      <h2>Ready to Begin Your Healing Journey?</h2>
      <p>Let's work together to create a personalized treatment plan that works for you.</p>
      <RouterLink to="/contact" class="btn btn-primary">Schedule a Consultation</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.approach {
  padding: 3rem 0;
}

.approach-header {
  text-align: center;
  margin-bottom: 2rem;
}

.approach-header h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--sage-green);
  font-weight: 500;
}

.approach-intro {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  text-align: center;
  border-left: 4px solid var(--sage-green);
}

.approach-intro p {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.7;
  margin: 0;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.component-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  text-align: center;
  transition: all 0.3s ease;
}

.component-card:hover {
  box-shadow: 0 8px 20px rgba(163, 177, 138, 0.15);
  transform: translateY(-4px);
  border-color: var(--sage-green);
}

.component-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.component-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.component-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.philosophy-section {
  background: white;
  padding: 3rem;
  border-radius: 8px;
  border-top: 4px solid var(--sage-green);
  margin-bottom: 3rem;
}

.philosophy-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-dark);
}

.principles {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.5rem;
}

.principles li {
  padding-left: 2rem;
  position: relative;
  color: var(--text-light);
  line-height: 1.6;
}

.principles li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--sage-green);
  font-weight: bold;
  font-size: 1.2rem;
}

.principles strong {
  color: var(--text-dark);
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  padding: 3rem 2rem;
  border-radius: 8px;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.cta-section p {
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.9rem 2.5rem;
  background-color: var(--sage-green);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(163, 177, 138, 0.3);
}

.btn:hover {
  background-color: #8fa876;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .approach-header h1 {
    font-size: 2rem;
  }

  .philosophy-section {
    padding: 1.5rem;
  }

  .principles {
    gap: 1rem;
  }
}
</style>
