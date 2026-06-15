<template>
  <div class="app">
    <!-- Header with Navigation -->
    <header class="header">
      <nav class="nav-container">
        <a href="#home" class="logo">Dr. Ashish Yadav</a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#approach">Approach</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#contact" class="nav-cta">Book Now</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="hero-content">
          <h1>{{ currentTagline }}</h1>
          <p class="subtitle">Consultant Neuro-Psychiatrist</p>
          <p class="tagline">{{ currentSubtitle }}</p>

          <div class="cta-buttons">
            <a href="#contact" class="btn btn-primary">Schedule a Consultation</a>
            <a href="#contact" class="btn btn-secondary">Take a 2-Min Self Assessment</a>
          </div>
        </div>
        <div class="hero-illustration">
          <img src="/illustrations/meditation-lotus.jpeg" alt="Person meditating in a calm, blooming environment" />
        </div>
      </section>

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

      <!-- About Section -->
      <section id="about" class="about">
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

      <!-- Services Section -->
      <section id="services" class="services">
        <div class="services-header">
          <h2>Services Offered</h2>
          <p class="intro">
            Comprehensive psychiatric care tailored to your individual needs. Each treatment plan integrates clinical expertise with a holistic approach to lasting healing.
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.name }}</h3>
            <p class="tagline">{{ service.tagline }}</p>
            <p class="description">{{ service.description }}</p>
            <ul class="conditions">
              <li v-for="condition in service.conditions" :key="condition">
                {{ condition }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Approach Section -->
      <section id="approach" class="approach">
        <div class="approach-header-flex">
          <div class="approach-header">
            <h2>Treatment Approach</h2>
            <p class="subtitle">Precision Psychiatry with Integrated Healing</p>
          </div>
          <div class="approach-header-illustration">
            <img src="/illustrations/brain-bloom-hands.jpeg" alt="Brain blooming with care and healing" />
          </div>
        </div>

        <div class="approach-intro">
          <p>
            Each treatment plan is tailored and may include a combination of evidence-based interventions designed specifically for your needs and goals.
          </p>
        </div>

        <div class="components-grid">
          <div class="component-card" v-for="component in components" :key="component.id">
            <div class="component-icon">{{ component.icon }}</div>
            <h3>{{ component.name }}</h3>
            <p>{{ component.description }}</p>
          </div>
        </div>

        <div class="philosophy-section">
          <h3>Core Principles</h3>
          <ul class="principles">
            <li v-for="principle in principles" :key="principle.name">
              <strong>{{ principle.name }}:</strong> {{ principle.description }}
            </li>
          </ul>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="faq">
        <div class="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about my practice and treatment approach</p>
        </div>

        <div class="faqs-container">
          <div class="faq-item" v-for="(item, index) in faqs" :key="index">
            <button
              class="faq-question"
              @click="toggleFAQ(index)"
              :class="{ active: activeFAQ === index }"
            >
              <span>{{ item.question }}</span>
              <span class="icon">{{ activeFAQ === index ? '−' : '+' }}</span>
            </button>
            <div v-if="activeFAQ === index" class="faq-answer">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact/Booking Section -->
      <section id="contact" class="contact">
        <div class="contact-header-flex">
          <div class="contact-header">
            <h2>Book an Appointment</h2>
            <p class="intro">
              Let's take the first step toward your healing. Select your preferred meeting format below.
            </p>
          </div>
          <div class="contact-illustration">
            <img src="/illustrations/gratitude-pair.jpeg" alt="Two people sharing gratitude and connection" />
          </div>
        </div>

        <div class="contact-content">

          <!-- Meeting Format Selection -->
          <div class="meeting-format-section">
            <h3>How would you like to meet?</h3>
            <div class="format-options">
              <button
                v-for="format in meetingFormats"
                :key="format.id"
                class="format-btn"
                :class="{ active: form.meetingFormat === format.id }"
                @click="form.meetingFormat = format.id"
              >
                <span class="format-icon">{{ format.icon }}</span>
                <span class="format-name">{{ format.name }}</span>
                <span class="format-desc">{{ format.description }}</span>
              </button>
            </div>
          </div>

          <div class="reassurance-box">
            <p>✓ Your information is confidential. This is a safe, judgment-free space.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="appointment-form">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                placeholder="Your full name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input
                v-model="form.phone"
                type="tel"
                id="phone"
                required
                placeholder="(123) 456-7890"
              />
            </div>

            <div class="form-group">
              <label for="reason">Reason for Visit *</label>
              <select v-model="form.reason" id="reason" required>
                <option value="">-- Select a reason --</option>
                <option value="anxiety">Anxiety & Stress Disorders</option>
                <option value="depression">Depression & Mood Disorders</option>
                <option value="overthinking">Overthinking & Behavioural Patterns</option>
                <option value="sleep">Sleep & Lifestyle Regulation</option>
                <option value="mindbody">Mind-Body Therapy</option>
                <option value="other">Other Concern</option>
                <option value="followup">Follow-up Visit</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Additional Information</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                placeholder="Any additional information you'd like to share..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">Request Appointment</button>
            <p class="form-note">* Required fields</p>
          </form>

          <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="info-item">
              <h4>📞 Phone</h4>
              <p><a href="tel:+1234567890">(123) 456-7890</a></p>
            </div>
            <div class="info-item">
              <h4>📧 Email</h4>
              <p><a href="mailto:contact@drashish.com">contact@drashish.com</a></p>
            </div>
            <div class="info-item">
              <h4>📍 Address</h4>
              <p>
                Professional Psychiatric Services<br/>
                123 Medical Plaza Drive<br/>
                City, State 12345
              </p>
            </div>
            <div class="info-item">
              <h4>🕐 Office Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 5:00 PM<br/>
                Saturday: By appointment only<br/>
                Sunday: Closed
              </p>
            </div>
          </div>

          <div class="insurance-note">
            <h3>Insurance & Payment</h3>
            <p>
              I accept most major insurance plans. Please contact our office for information
              about accepted providers and payment options.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Hero section rotating copy
const taglines = [
  "Where Neuroscience Meets Ancient Wisdom - and Your Story Shapes the Treatment",
  "Understand your mind, retrain your patterns.",
  "Precision Psychiatry. Integrated Healing."
]

const subtitles = [
  "Structured treatment integrating Clinical Psychiatry with Yogic Sciences.",
  "Structured treatment integrating Clinical Psychiatry with Yogic Sciences.",
  "Tailored care combining modern medicine and yogic frameworks."
]

const currentTaglineIndex = ref(0)
const currentTagline = ref(taglines[0])
const currentSubtitle = ref(subtitles[0])

onMounted(() => {
  setInterval(() => {
    currentTaglineIndex.value = (currentTaglineIndex.value + 1) % taglines.length
    currentTagline.value = taglines[currentTaglineIndex.value]
    currentSubtitle.value = subtitles[currentTaglineIndex.value]
  }, 5000)
})

// Services data
const services = ref([
  {
    id: 1,
    icon: '🧠',
    name: 'Personalised Psychiatric Consultation',
    tagline: 'Comprehensive evaluation with a tailored treatment plan.',
    description: 'A thorough assessment to understand your unique situation, leading to a clear, personalised treatment roadmap.',
    conditions: ['Comprehensive evaluation', 'Diagnosis + formulation', 'Medication when required', 'Clear treatment roadmap']
  },
  {
    id: 2,
    icon: '😰',
    name: 'Anxiety & Stress Disorders',
    tagline: 'Move from constant overthinking and tension to clarity and control.',
    description: 'Evidence-based treatment for anxiety disorders affecting your daily functioning and quality of life.',
    conditions: ['Generalised anxiety', 'Panic episodes', 'Work-related stress', 'Specific phobias']
  },
  {
    id: 3,
    icon: '💔',
    name: 'Depression & Mood Disorders',
    tagline: 'Address low mood, fatigue, and loss of motivation at the root.',
    description: 'Comprehensive treatment addressing the underlying patterns of depression and emotional challenges.',
    conditions: ['Major depression', 'Burnout', 'Emotional numbness', 'Persistent low mood']
  },
  {
    id: 4,
    icon: '🔄',
    name: 'Overthinking & Behavioural Patterns',
    tagline: 'Break repetitive thought loops and unhelpful habits.',
    description: 'Structured approach to address rumination, procrastination, and compulsive behaviours.',
    conditions: ['Rumination patterns', 'Procrastination', 'Binge behaviours (OTT, phone use)', 'Perfectionism']
  },
  {
    id: 5,
    icon: '😴',
    name: 'Sleep & Lifestyle Regulation',
    tagline: 'Restore natural sleep and daily rhythm.',
    description: 'Structured interventions to improve sleep quality and establish healthy daily routines.',
    conditions: ['Insomnia', 'Irregular sleep patterns', 'Bedtime procrastination', 'Circadian rhythm issues']
  },
  {
    id: 6,
    icon: '🧘',
    name: 'Integrative Mind-Body Therapy',
    tagline: 'Structured use of yogic practices alongside psychiatry.',
    description: 'Combine clinical psychiatry with yogic sciences for comprehensive nervous system healing.',
    conditions: ['Breathwork (pranayama)', 'Awareness training', 'Nervous system regulation', 'Lifestyle restructuring']
  },
  {
    id: 7,
    icon: '📈',
    name: 'Follow-up & Long-term Care',
    tagline: 'Ongoing refinement of treatment for sustained results.',
    description: 'Continuous support to track progress, refine treatment, and prevent relapse.',
    conditions: ['Progress monitoring', 'Treatment adjustments', 'Relapse prevention', 'Sustained wellness']
  },
  {
    id: 8,
    icon: '⭐',
    name: 'Executive & Specialised Programs',
    tagline: 'High-touch, personalised care for complex needs and elevated expectations.',
    description: 'Customised programs designed for individuals seeking deeper engagement and personalised attention.',
    conditions: ['High-engagement care', 'Complex presentations', 'Performance optimization', 'Custom protocols']
  }
])

// Approach components
const components = ref([
  {
    id: 1,
    icon: '🔍',
    name: 'Clinical Evaluation & Diagnosis',
    description: 'Thorough assessment of your medical history, current symptoms, and underlying patterns to establish an accurate diagnosis and formulation.'
  },
  {
    id: 2,
    icon: '💊',
    name: 'Medication Management',
    description: 'Careful prescription and monitoring of psychiatric medications when clinically indicated, with regular adjustments based on your response and tolerance.'
  },
  {
    id: 3,
    icon: '🧩',
    name: 'Behavioural Restructuring',
    description: 'Targeted interventions to address unhelpful thought patterns, compulsive behaviours, and lifestyle factors that maintain your symptoms.'
  },
  {
    id: 4,
    icon: '🧘',
    name: 'Yogic Practices',
    description: 'Integration of evidence-based yogic techniques including breathwork (pranayama), awareness training, and lifestyle correction for holistic healing.'
  },
  {
    id: 5,
    icon: '🛡️',
    name: 'Relapse Prevention',
    description: 'Long-term strategies to maintain your progress, identify early warning signs, and prevent recurrence of symptoms.'
  },
  {
    id: 6,
    icon: '📊',
    name: 'Progress Tracking',
    description: 'Regular monitoring of your improvement through structured assessments and collaborative review to ensure your treatment remains effective.'
  }
])

const principles = ref([
  {
    name: 'Precision',
    description: 'Treatment is based on thorough understanding of your unique presentation, not a one-size-fits-all approach.'
  },
  {
    name: 'Integration',
    description: 'Modern psychiatry combined with yogic sciences creates a comprehensive approach to healing.'
  },
  {
    name: 'Personalization',
    description: 'Your treatment plan evolves based on your response, preferences, and life circumstances.'
  },
  {
    name: 'Evidence-Based',
    description: 'All interventions are grounded in clinical research and proven methodologies.'
  },
  {
    name: 'Durability',
    description: 'Focus on lasting change through understanding root patterns, not just symptom suppression.'
  },
  {
    name: 'Collaboration',
    description: 'You are an active partner in your healing journey, with your voice and preferences central to treatment decisions.'
  }
])

// FAQ data
const activeFAQ = ref(0)

const toggleFAQ = (index) => {
  activeFAQ.value = activeFAQ.value === index ? -1 : index
}

const faqs = ref([
  {
    question: "How do I schedule my first appointment?",
    answer: "You can schedule through the <strong>Book an Appointment</strong> section above, where you'll select your preferred meeting format (In-Person, Online, or Home Visit) and fill out the form. You can also call or email us directly."
  },
  {
    question: "What should I expect during the first consultation?",
    answer: "The first session is a comprehensive psychiatric evaluation. We'll discuss your medical history, current symptoms, lifestyle, and treatment goals. This helps me understand your unique situation and create a personalized treatment plan. Sessions typically last 60 minutes."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes! I offer <strong>three meeting formats</strong>: In-Person, Online, and Home Visit. During your booking, you can select whichever option works best for you. Online consultations provide the same quality care with the convenience of meeting from home."
  },
  {
    question: "What makes your approach different?",
    answer: "My approach integrates <strong>modern psychiatry with yogic sciences</strong>. Rather than just treating symptoms, I focus on understanding the underlying patterns—biological, psychological, and behavioural—and addressing them in a structured way. This creates lasting change, not just quick relief."
  },
  {
    question: "Do I need to be on medication?",
    answer: "Medication is recommended when clinically appropriate and can help significantly. However, treatment is personalized. Some patients benefit from medication alone, others from therapy and lifestyle changes, and many benefit from a combination. We'll discuss what's best for you."
  },
  {
    question: "How often should I come for follow-up appointments?",
    answer: "Frequency depends on your needs and treatment plan. Initially, weekly or bi-weekly appointments are often recommended. As you improve, we can space them out. The goal is to find the right balance for your healing and maintenance."
  },
  {
    question: "What about confidentiality and privacy?",
    answer: "<strong>Your information is completely confidential.</strong> This is a safe, judgment-free space. Everything discussed is protected by professional confidentiality standards. You can speak freely about any concern."
  },
  {
    question: "How do you integrate yogic practices into treatment?",
    answer: "Yogic practices like breathwork (pranayama), awareness training, and lifestyle correction are integrated alongside clinical psychiatry. These evidence-based practices help regulate your nervous system, reduce anxiety, and support long-term healing."
  },
  {
    question: "What if I want to stop medication?",
    answer: "Any changes to medication should be made carefully under professional guidance. If you wish to reduce or discontinue, we'll do this gradually and safely, monitoring your symptoms throughout the process. This is always your choice, but it's done thoughtfully."
  },
  {
    question: "Do you work with insurance?",
    answer: "Please contact our office for information about insurance coverage. We work with many plans and can discuss payment options. We're committed to making quality care accessible."
  }
])

// Contact form
const form = ref({
  name: '',
  email: '',
  phone: '',
  meetingFormat: 'online',
  reason: '',
  message: ''
})

const meetingFormats = ref([
  {
    id: 'in-person',
    name: 'In-Person',
    description: 'Visit my clinic for a face-to-face consultation',
    icon: '🏢'
  },
  {
    id: 'online',
    name: 'Online',
    description: 'Connect via secure video call from home',
    icon: '💻'
  },
  {
    id: 'home-visit',
    name: 'Home Visit',
    description: 'I visit you at your home for personalized care',
    icon: '🏠'
  }
])

const handleSubmit = () => {
  console.log('Appointment requested:', form.value)
  alert('Thank you for requesting an appointment! We will contact you within 24 hours to confirm.')
  form.value = { name: '', email: '', phone: '', meetingFormat: 'online', reason: '', message: '' }
}
</script>

<style scoped>
.app {
  width: 100%;
}

/* Header Styles */
.header {
  background-color: var(--surface-card);
  padding: var(--space-5) 0;
  box-shadow: var(--shadow-sm);
  border-bottom: var(--border-w) solid var(--border);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(12px);
  background-color: rgba(255, 248, 243, 0.95);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: var(--fw-display);
  color: var(--brand);
  text-decoration: none;
  letter-spacing: var(--ls-tight);
  font-family: var(--font-display);
  cursor: pointer;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--space-7);
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-body);
  text-decoration: none;
  transition: color var(--dur-base) var(--ease-soft);
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--brand);
}

.nav-cta {
  background-color: var(--brand) !important;
  color: var(--text-on-brand) !important;
  padding: var(--space-3) var(--space-5) !important;
  border-radius: var(--radius-pill);
  transition: all var(--dur-base) var(--ease-soft);
}

.nav-cta:hover {
  background-color: var(--brand-hover) !important;
  color: var(--text-on-brand) !important;
  transform: translateY(-2px);
  box-shadow: var(--shadow-brand);
}

/* Main Sections */
main {
  width: 100%;
}

/* Hero Section */
.hero {
  position: relative;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--rose-50) 0%, var(--lav-100) 50%, var(--peri-50) 100%);
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  max-width: 100%;
  flex-wrap: wrap;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.3;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: var(--sage-green);
  border-radius: 50%;
}

.particle:nth-child(1) { top: 20%; left: 10%; }
.particle:nth-child(2) { top: 40%; left: 80%; }
.particle:nth-child(3) { top: 60%; left: 15%; }
.particle:nth-child(4) { top: 30%; left: 70%; }
.particle:nth-child(5) { top: 70%; left: 85%; }

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

.orb-container {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
}

.breathing-orb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(163, 177, 138, 0.6), rgba(163, 177, 138, 0.2));
  box-shadow: 0 0 40px rgba(163, 177, 138, 0.3);
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.4; }
}

.brain-wave {
  width: 200px;
  height: 60px;
  margin-top: 20px;
}

.wave-path {
  stroke: var(--sage-green);
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
}

@keyframes wave-flow {
  0% { stroke-dasharray: 300; stroke-dashoffset: 300; }
  100% { stroke-dasharray: 300; stroke-dashoffset: 0; }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
}

.hero-illustration {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin-top: var(--space-8);
}

.hero-illustration img {
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: var(--border-w) solid var(--border-brand);
}

.hero-content h1 {
  font-size: var(--fs-display);
  margin-bottom: var(--space-3);
  color: var(--text-strong);
  font-weight: var(--fw-display);
  line-height: var(--lh-tight);
  min-height: 3.5em;
  transition: all var(--dur-slow) var(--ease-soft);
}

.hero-content .subtitle {
  font-size: var(--fs-lg);
  color: var(--brand);
  margin-bottom: var(--space-4);
  font-weight: var(--fw-semibold);
}

.hero-content .tagline {
  font-size: var(--fs-md);
  color: var(--text-muted);
  margin-bottom: var(--space-8);
  line-height: var(--lh-relaxed);
  min-height: 2.1em;
  transition: all var(--dur-slow) var(--ease-soft);
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-pill);
  text-decoration: none;
  font-weight: var(--fw-semibold);
  transition: all var(--dur-base) var(--ease-soft);
  display: inline-block;
  font-size: var(--fs-sm);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--brand);
  color: var(--text-on-brand);
  box-shadow: var(--shadow-brand);
  scale: 0.97;
}

.btn-primary:hover {
  background-color: var(--brand-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  scale: 1;
}

.btn-secondary {
  background-color: var(--surface-card);
  color: var(--brand);
  border: var(--border-w) solid var(--border-brand);
}

.btn-secondary:hover {
  background-color: var(--surface-tint);
  transform: translateY(-2px);
  scale: 1.02;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--peri-50) 0%, var(--lav-100) 100%);
  max-width: var(--container-xl);
  margin: 0 auto;
  color: var(--text-on-dark);
}

.feature-item {
  text-align: center;
  padding: var(--space-6);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
}

.feature-item h3 {
  color: var(--text-strong);
  margin-bottom: var(--space-3);
  font-size: var(--fs-h4);
  font-family: var(--font-display);
}

.feature-item p {
  color: var(--text-muted);
  font-size: var(--fs-sm);
  line-height: var(--lh-relaxed);
}

/* About Section */
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

/* Services Section */
.services {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--rose-50) 0%, var(--coral-200) 100%);
}

.services-header {
  text-align: center;
  margin-bottom: var(--space-9);
}

.services-header h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-4);
  color: var(--text-strong);
}

.services-header .intro {
  font-size: var(--fs-md);
  color: var(--text-muted);
  margin-bottom: 0;
  line-height: var(--lh-relaxed);
  max-width: var(--container-md);
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-9);
}

.service-card {
  border: var(--border-w) solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--dur-base) var(--ease-soft);
  box-shadow: var(--shadow-sm);
  background-color: var(--surface-card);
  color: var(--text-body);
}

.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-6px);
  border-color: var(--brand);
}

.service-icon {
  font-size: 2.8rem;
  margin-bottom: var(--space-4);
}

.service-card h3 {
  font-size: var(--fs-h4);
  margin-bottom: var(--space-2);
  color: var(--text-strong);
}

.service-card .tagline {
  font-size: var(--fs-sm);
  color: var(--brand);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-4) !important;
}

.service-card .description {
  color: var(--text-muted);
  margin-bottom: var(--space-5);
  line-height: var(--lh-relaxed);
  font-size: var(--fs-sm);
}

.conditions {
  list-style: none;
  padding: 0;
}

.conditions li {
  padding: var(--space-2) 0 var(--space-2) var(--space-5);
  color: var(--text-muted);
  font-size: var(--fs-sm);
  position: relative;
}

.conditions li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: bold;
}

/* Approach Section */
.approach {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--peri-50) 0%, var(--lav-100) 100%);
}

.approach-header-flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
  margin-bottom: var(--space-9);
}

.approach-header {
  text-align: left;
}

.approach-header h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-3);
  color: var(--text-strong);
}

.approach-header .subtitle {
  font-size: var(--fs-md);
  color: var(--text-muted);
  font-weight: var(--fw-medium);
}

.approach-header-illustration {
  width: 100%;
  max-width: 350px;
}

.approach-header-illustration img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: var(--border-w) solid var(--border-brand);
}

.approach-intro {
  background: var(--surface-card);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-9);
  text-align: center;
  border-left: var(--border-w-ink) solid var(--brand);
  color: var(--text-body);
  box-shadow: var(--shadow-sm);
}

.approach-intro p {
  font-size: var(--fs-md);
  color: var(--text-muted);
  line-height: var(--lh-relaxed);
  margin: 0;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-9);
}

.component-card {
  background: var(--surface-card);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: var(--border-w) solid var(--border);
  text-align: center;
  transition: all var(--dur-base) var(--ease-soft);
  color: var(--text-body);
  box-shadow: var(--shadow-sm);
}

.component-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-6px);
  border-color: var(--brand);
}

.component-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.component-card h3 {
  font-size: var(--fs-h4);
  margin-bottom: var(--space-4);
  color: var(--text-strong);
}

.component-card p {
  color: var(--text-muted);
  font-size: var(--fs-sm);
  line-height: var(--lh-relaxed);
  margin: 0;
}

.philosophy-section {
  background: var(--surface-card);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  border-top: var(--border-w-ink) solid var(--brand);
  margin-bottom: var(--space-9);
  color: var(--text-body);
  box-shadow: var(--shadow-sm);
}

.philosophy-section h3 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-8);
  text-align: center;
  color: var(--text-strong);
}

.principles {
  list-style: none;
  padding: 0;
  display: grid;
  gap: var(--space-5);
}

.principles li {
  padding-left: var(--space-6);
  position: relative;
  color: var(--text-muted);
  line-height: var(--lh-relaxed);
  font-size: var(--fs-sm);
}

.principles li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: bold;
  font-size: 1.2rem;
}

.principles strong {
  color: var(--text-strong);
}

/* FAQ Section */
.faq {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
  background: linear-gradient(135deg, var(--rose-50) 0%, var(--coral-200) 100%);
}

.faq-header {
  text-align: center;
  margin-bottom: var(--space-9);
}

.faq-header h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-4);
  color: var(--text-strong);
}

.faq-header p {
  font-size: var(--fs-md);
  color: var(--text-muted);
}

.faqs-container {
  max-width: var(--container-md);
  margin: 0 auto var(--space-9);
}

.faq-item {
  margin-bottom: var(--space-4);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: var(--border-w) solid var(--border);
  transition: all var(--dur-base) var(--ease-soft);
  box-shadow: var(--shadow-sm);
}

.faq-item:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--brand);
}

.faq-question {
  width: 100%;
  padding: var(--space-6);
  background: var(--surface-card);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  color: var(--text-strong);
  transition: all var(--dur-base) var(--ease-soft);
  text-align: left;
  font-family: var(--font-sans);
}

.faq-question:hover {
  background-color: var(--surface-tint);
}

.faq-question.active {
  background-color: var(--bg-sunken);
  color: var(--text-strong);
}

.faq-question .icon {
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: var(--space-4);
  flex-shrink: 0;
}

.faq-answer {
  padding: var(--space-6);
  background-color: var(--surface-card);
  border-top: var(--border-w) solid var(--border);
  animation: slideDown var(--dur-base) var(--ease-soft);
  color: var(--text-body);
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

.faq-answer p {
  color: var(--text-muted);
  line-height: var(--lh-relaxed);
  margin: 0;
  font-size: var(--fs-sm);
}

/* Contact Section */
.contact {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter);
}

.contact-header-flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
  margin-bottom: var(--space-9);
}

.contact-header {
  flex: 1;
}

.contact h2 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-4);
  color: var(--text-strong);
  font-weight: var(--fw-display);
}

.contact .intro {
  color: var(--text-muted);
  margin-bottom: 0;
  font-size: var(--fs-md);
  line-height: var(--lh-relaxed);
}

.contact-illustration {
  width: 100%;
  max-width: 350px;
}

.contact-illustration img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: var(--border-w) solid var(--border-brand);
}

.meeting-format-section {
  background: var(--surface-card);
  padding: var(--space-7);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-6);
  border: var(--border-w) solid var(--border);
  box-shadow: var(--shadow-sm);
}

.meeting-format-section h3 {
  font-size: var(--fs-h4);
  margin-bottom: var(--space-5);
  color: var(--text-strong);
  text-align: center;
}

.format-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-5);
}

.format-btn {
  padding: var(--space-5);
  border: var(--border-w-ink) solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface-card);
  cursor: pointer;
  transition: all var(--dur-base) var(--ease-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  color: var(--text-body);
}

.format-btn:hover {
  border-color: var(--brand);
  background-color: var(--surface-tint);
}

.format-btn.active {
  border-color: var(--brand);
  background-color: var(--brand);
  color: var(--text-on-brand);
  box-shadow: var(--shadow-brand);
}

.format-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-2);
  display: block;
}

.format-name {
  font-weight: var(--fw-semibold);
  font-size: var(--fs-md);
  margin-bottom: var(--space-1);
  display: block;
}

.format-desc {
  font-size: var(--fs-xs);
  opacity: 0.7;
  display: block;
  line-height: var(--lh-snug);
}

.format-btn.active .format-desc {
  opacity: 0.95;
}

.reassurance-box {
  background: var(--surface-tint);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-6);
  border-left: var(--border-w-ink) solid var(--brand);
  text-align: center;
}

.reassurance-box p {
  color: var(--brand);
  font-weight: var(--fw-medium);
  margin: 0;
  font-size: var(--fs-sm);
}

.appointment-form {
  background-color: var(--surface-card);
  padding: var(--space-7);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-9);
  border: var(--border-w) solid var(--border);
  box-shadow: var(--shadow-sm);
}

.form-group {
  margin-bottom: var(--space-5);
}

.form-group label {
  display: block;
  margin-bottom: var(--space-2);
  color: var(--text-strong);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-sm);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: var(--space-3);
  border: var(--border-w) solid var(--border);
  border-radius: var(--radius-md);
  font-size: var(--fs-sm);
  font-family: inherit;
  background-color: var(--white);
  color: var(--text-body);
  transition: all var(--dur-base) var(--ease-soft);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px rgba(226, 92, 132, 0.1);
}

.submit-btn {
  width: 100%;
  padding: var(--space-4);
  background-color: var(--brand);
  color: var(--text-on-brand);
  border: none;
  border-radius: var(--radius-pill);
  font-size: var(--fs-base);
  font-weight: var(--fw-semibold);
  cursor: pointer;
  transition: all var(--dur-base) var(--ease-soft);
  box-shadow: var(--shadow-brand);
}

.submit-btn:hover {
  background-color: var(--brand-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  scale: 1.02;
}

.form-note {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  margin-top: var(--space-4);
  text-align: center;
}

.contact-info {
  background-color: var(--surface-card);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-6);
  border: var(--border-w) solid var(--border);
  box-shadow: var(--shadow-sm);
}

.contact-info h3 {
  font-size: var(--fs-h3);
  margin-bottom: var(--space-8);
  color: var(--text-strong);
  font-weight: var(--fw-display);
}

.info-item {
  margin-bottom: var(--space-6);
}

.info-item h4 {
  font-size: var(--fs-h4);
  color: var(--text-strong);
  margin-bottom: var(--space-2);
  font-weight: var(--fw-semibold);
}

.info-item p {
  color: var(--text-muted);
  margin: 0;
  line-height: var(--lh-relaxed);
  font-size: var(--fs-sm);
}

.info-item a {
  color: var(--brand);
  text-decoration: none;
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: color var(--dur-base) var(--ease-soft);
}

.info-item a:hover {
  color: var(--brand-hover);
  text-decoration: underline;
}

.insurance-note {
  background: var(--surface-tint);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  border-left: var(--border-w-ink) solid var(--brand);
}

.insurance-note h3 {
  color: var(--text-strong);
  margin-bottom: var(--space-3);
  font-weight: var(--fw-semibold);
}

.insurance-note p {
  color: var(--text-muted);
  margin: 0;
  line-height: var(--lh-relaxed);
  font-size: var(--fs-sm);
}

/* Footer */
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

/* Responsive */
@media (max-width: 768px) {
  :root {
    --gutter: var(--space-4);
  }

  .nav-links {
    gap: var(--space-5);
    font-size: var(--fs-sm);
  }

  .logo {
    font-size: 1.25rem;
  }

  .hero-content h1 {
    font-size: var(--fs-h2);
  }

  .hero {
    flex-direction: column;
    gap: var(--space-6);
  }

  .hero-illustration {
    max-width: 100%;
    margin-top: var(--space-6);
  }

  .orb-container {
    display: none;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .format-options {
    grid-template-columns: 1fr;
  }

  .format-btn {
    padding: var(--space-4);
  }

  .format-icon {
    font-size: 2rem;
  }

  section {
    padding: var(--space-6) var(--gutter) !important;
  }

  .hero {
    padding: var(--space-7) var(--gutter) !important;
  }

  .credentials-grid,
  .services-grid,
  .components-grid {
    grid-template-columns: 1fr;
  }

  .doctor-intro-flex,
  .approach-header-flex,
  .contact-header-flex {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .doctor-illustration,
  .approach-header-illustration,
  .contact-illustration {
    max-width: 100%;
    justify-self: auto;
  }

  .approach-header {
    text-align: center;
  }

  .contact-header {
    text-align: center;
  }

  .contact .intro {
    margin-bottom: var(--space-6);
  }
}
</style>
