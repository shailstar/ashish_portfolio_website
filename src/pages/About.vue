<template>
  <section class="about">
    <h1>About Dr. Ashish</h1>

    <div class="about-content">
      <div class="about-text">
        <p>
          I am a board-certified psychiatrist dedicated to providing compassionate,
          evidence-based mental health care. With over 10 years of clinical experience,
          I have helped countless patients navigate their mental health challenges and
          achieve meaningful recovery.
        </p>
        <p>
          My approach combines medication management with therapeutic support, ensuring
          each patient receives personalized treatment tailored to their unique needs.
          I believe in creating a safe, non-judgmental space where you can openly discuss
          your concerns and work toward better mental health.
        </p>
      </div>

      <div class="qualifications">
        <h2>Qualifications & Credentials</h2>
        <ul>
          <li><strong>MD</strong> - Medical School, [University Name]</li>
          <li><strong>Board Certified</strong> - American Board of Psychiatry and Neurology</li>
          <li><strong>Residency</strong> - Psychiatry, [Hospital Name]</li>
          <li><strong>License</strong> - Psychiatry License #12345</li>
          <li><strong>Specializations</strong> - Depression, Anxiety Disorders, PTSD, Bipolar Disorder</li>
          <li><strong>Memberships</strong> - APA, NAMI, Local Medical Society</li>
        </ul>
      </div>

      <div class="philosophy">
        <h2>My Philosophy</h2>
        <p>
          Mental health is just as important as physical health. I'm committed to:
        </p>
        <ul>
          <li>Treating each patient with dignity and respect</li>
          <li>Using evidence-based treatment approaches</li>
          <li>Maintaining complete confidentiality</li>
          <li>Fostering open communication and collaboration</li>
          <li>Supporting your journey toward recovery and wellness</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.about h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: 700;
}

.about-content {
  display: grid;
  gap: 2.5rem;
}

.about-text p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
}

.qualifications h2,
.philosophy h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.qualifications ul,
.philosophy ul {
  list-style: none;
  padding: 0;
}

.qualifications li {
  padding: 0.75rem 0;
  color: #555;
  border-bottom: 1px solid #eee;
  line-height: 1.6;
}

.qualifications li:last-child {
  border-bottom: none;
}

.philosophy li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: #555;
  position: relative;
}

.philosophy li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #6b8cae;
  font-weight: bold;
}

.philosophy p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
}
</style>
