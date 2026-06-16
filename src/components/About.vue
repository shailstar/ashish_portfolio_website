<template>
  <section class="about" id="about">
    <div class="about-header">
      <h2>About Dr. Ashish</h2>
      <p class="tagline">The Approach Behind the Care</p>
    </div>

    <div class="doctor-intro">
      <div class="doctor-intro-flex">
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
        <div class="doctor-illustration">
          <img src="/illustrations/profile-brain-heart.jpeg" alt="Dr. Ashish - mind and heart integration" />
        </div>
      </div>
    </div>

    <div class="credentials">
      <h3>Credentials & Specializations</h3>
      <div class="credentials-grid">
        <div class="credential-card">
          <h4>Qualification</h4>
          <p>Consultant Neuro-Psychiatrist</p>
        </div>
        <div class="credential-card">
          <h4>Expertise</h4>
          <ul>
            <li>Psychiatry & Neuropsychiatry</li>
            <li>Behavioural Research</li>
            <li>Yogic Sciences</li>
          </ul>
        </div>
        <div class="credential-card">
          <h4>Focus Areas</h4>
          <ul>
            <li>Precision Medicine</li>
            <li>Integrated Healing</li>
            <li>Outcome-Driven Care</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="approach-section">
      <h3>My Commitment to You</h3>
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
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
}

.about-header {
  text-align: center;
  margin-bottom: var(--space-9);
}

.about-header h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-3);
  color: var(--text-strong);
}

.about-header .tagline {
  font-size: var(--fs-md);
  color: var(--brand);
  font-weight: var(--fw-semibold);
}

.doctor-intro {
  background: var(--surface-tint);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-9);
  border-left: var(--border-w-ink) solid var(--brand);
}

.doctor-intro-flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.doctor-illustration {
  width: 100%;
  max-width: 300px;
  justify-self: end;
}

.doctor-illustration img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.intro-text p {
  font-size: var(--fs-md);
  color: var(--text-body);
  line-height: var(--lh-relaxed);
  margin-bottom: var(--space-5);
}

.intro-emphasis {
  font-size: var(--fs-lg);
  color: var(--brand);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-5) !important;
}

.philosophy-line {
  color: var(--text-strong);
  font-size: var(--fs-md);
  margin-top: var(--space-5) !important;
}

.credentials {
  margin-bottom: var(--space-9);
}

.credentials h3 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-8);
  text-align: center;
  color: var(--text-strong);
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}

.credential-card {
  background: var(--surface-card);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: var(--border-w) solid var(--border);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--dur-base) var(--ease-soft);
}

.credential-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.credential-card h4 {
  color: var(--brand);
  margin-bottom: var(--space-4);
  font-size: var(--fs-h4);
}

.credential-card p {
  color: var(--text-muted);
  margin: 0;
  font-size: var(--fs-sm);
}

.credential-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.credential-card li {
  color: var(--text-muted);
  padding: var(--space-2) 0;
  font-size: var(--fs-sm);
}

.approach-section {
  background: var(--surface-card);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-9);
  border-top: var(--border-w-ink) solid var(--brand);
  box-shadow: var(--shadow-sm);
}

.approach-section h3 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-8);
  color: var(--text-strong);
}

.commitment-list {
  list-style: none;
  padding: 0;
}

.commitment-list li {
  padding: var(--space-4) 0 var(--space-4) var(--space-6);
  color: var(--text-body);
  border-bottom: var(--border-w) solid var(--border);
  position: relative;
  font-size: var(--fs-sm);
}

.commitment-list li:last-child {
  border-bottom: none;
}

.commitment-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--brand);
  font-size: 1.5rem;
  font-weight: bold;
}

.commitment-list strong {
  color: var(--text-strong);
}

.cta-section {
  text-align: center;
  padding: var(--space-6);
  background: var(--surface-tint);
  border-radius: var(--radius-lg);
}

.ending-message {
  font-size: var(--fs-md);
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .doctor-intro-flex,
  .credentials-grid {
    grid-template-columns: 1fr;
  }

  .doctor-illustration {
    max-width: 100%;
    justify-self: auto;
  }

  .approach-header {
    text-align: center;
  }
}
</style>
