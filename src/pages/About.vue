<template>
  <section class="about">
    <div class="about-header">
      <h1>About Dr. Ashish</h1>
      <p class="tagline">The Approach Behind the Care</p>
    </div>

    <div class="doctor-intro">
      <div class="intro-text">
        <p class="intro-emphasis">
          You're not a diagnosis—you're a person, and your care should reflect that.
        </p>
        <p>
          I work at the intersection of psychiatry and yogic science, focusing on personalised, outcome-driven mental health care. Most treatments focus on symptom control. My approach focuses on understanding the underlying patterns—biological, psychological, and behavioural—and addressing them in a structured, individualised way.
        </p>
        <p>
          With a background in psychiatry, research in behavioural patterns such as procrastination and binge behaviour, and formal training in yoga, my work focuses on bridging science with practical, real-world application.
        </p>
        <p>
          I primarily work with individuals who are looking for a deeper, structured approach—not just quick relief, but lasting change.
        </p>
        <p class="philosophy-line">
          <strong>Mental health care should be precise, personalised, and built to last.</strong>
        </p>
      </div>
    </div>

    <div class="credentials">
      <h2>Credentials & Specializations</h2>
      <div class="credentials-grid">
        <div class="credential-card">
          <h3>Qualification</h3>
          <p>Consultant Neuro-Psychiatrist</p>
        </div>
        <div class="credential-card">
          <h3>Expertise</h3>
          <ul>
            <li>Psychiatry & Neuropsychiatry</li>
            <li>Behavioural Research</li>
            <li>Yogic Sciences</li>
          </ul>
        </div>
        <div class="credential-card">
          <h3>Focus Areas</h3>
          <ul>
            <li>Precision Medicine</li>
            <li>Integrated Healing</li>
            <li>Outcome-Driven Care</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="approach-section">
      <h2>My Commitment to You</h2>
      <ul class="commitment-list">
        <li>
          <strong>Personalized Care:</strong> Every treatment is tailored to your unique needs
        </li>
        <li>
          <strong>Evidence-Based:</strong> Built on clinical research and proven methodologies
        </li>
        <li>
          <strong>Confidential & Safe:</strong> Your privacy is sacred. A judgment-free space for healing
        </li>
        <li>
          <strong>Holistic Approach:</strong> Integrating modern psychiatry with yogic science
        </li>
        <li>
          <strong>Lasting Results:</strong> Focused on deep change, not just symptom management
        </li>
      </ul>
    </div>

    <div class="cta-section">
      <p class="ending-message">Tum Akele nahi ho dost, <strong>Healing starts here.</strong></p>
      <div class="cta-buttons">
        <RouterLink to="/contact" class="btn btn-primary">Schedule a Consultation</RouterLink>
        <RouterLink to="/approach" class="btn btn-secondary">View Treatment Approach</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 0;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.tagline {
  font-size: 1.2rem;
  color: var(--sage-green);
  font-weight: 500;
}

.doctor-intro {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border-left: 4px solid var(--sage-green);
}

.intro-text p {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1.2rem;
}

.intro-emphasis {
  font-size: 1.2rem;
  color: var(--sage-green);
  font-weight: 600;
  margin-bottom: 1.5rem !important;
}

.philosophy-line {
  color: var(--text-dark);
  font-size: 1.1rem;
  margin-top: 1.5rem !important;
}

.credentials {
  margin-bottom: 3rem;
}

.credentials h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-dark);
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.credential-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  text-align: center;
}

.credential-card h3 {
  color: var(--sage-green);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.credential-card p {
  color: var(--text-light);
  margin: 0;
}

.credential-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.credential-card li {
  color: var(--text-light);
  padding: 0.5rem 0;
}

.approach-section {
  background: white;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border-top: 4px solid var(--sage-green);
}

.approach-section h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-dark);
}

.commitment-list {
  list-style: none;
  padding: 0;
}

.commitment-list li {
  padding: 1rem 0 1rem 2rem;
  color: var(--text-light);
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}

.commitment-list li:last-child {
  border-bottom: none;
}

.commitment-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--sage-green);
  font-size: 1.5rem;
  font-weight: bold;
}

.commitment-list strong {
  color: var(--text-dark);
}

.cta-section {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 8px;
}

.ending-message {
  font-size: 1.3rem;
  color: var(--text-light);
  margin-bottom: 2rem;
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
  font-size: 0.95rem;
}

.btn-primary {
  background-color: var(--sage-green);
  color: white;
  box-shadow: 0 4px 12px rgba(163, 177, 138, 0.3);
}

.btn-primary:hover {
  background-color: #8fa876;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: white;
  color: var(--sage-green);
  border: 2px solid var(--sage-green);
}

.btn-secondary:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2rem;
  }

  .doctor-intro,
  .approach-section {
    padding: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
