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
        <div class="hero-background">
          <div class="floating-particles">
            <div class="particle" v-for="i in 5" :key="i" :style="{ '--delay': `${i * 0.3}s` }"></div>
          </div>
          <div class="orb-container">
            <div class="breathing-orb"></div>
            <svg class="brain-wave" viewBox="0 0 300 60" preserveAspectRatio="none">
              <path class="wave-path" d="M0,30 Q7.5,20 15,30 T30,30 T45,30 T60,30 T75,30 T90,30 T105,30 T120,30 T135,30 T150,30 T165,30 T180,30 T195,30 T210,30 T225,30 T240,30 T255,30 T270,30 T285,30 T300,30" />
            </svg>
          </div>
        </div>

        <div class="hero-content">
          <h1>{{ currentTagline }}</h1>
          <p class="subtitle">Consultant Neuro-Psychiatrist</p>
          <p class="tagline">{{ currentSubtitle }}</p>

          <div class="cta-buttons">
            <a href="#contact" class="btn btn-primary">Schedule a Consultation</a>
            <a href="#contact" class="btn btn-secondary">Take a 2-Min Self Assessment</a>
          </div>
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
        <div class="approach-header">
          <h2>Treatment Approach</h2>
          <p class="subtitle">Precision Psychiatry with Integrated Healing</p>
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
        <h2>Book an Appointment</h2>

        <div class="contact-content">
          <p class="intro">
            Let's take the first step toward your healing. Select your preferred meeting format below.
          </p>

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
  cursor: pointer;
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
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--sage-green);
}

.nav-cta {
  background-color: var(--sage-green) !important;
  color: white !important;
  padding: 0.6rem 1.5rem !important;
  border-radius: 6px;
  transition: all 0.3s;
}

.nav-cta:hover {
  background-color: #8fa876 !important;
  color: white !important;
  transform: translateY(-2px);
}

/* Main Sections */
main {
  width: 100%;
}

/* Hero Section */
.hero {
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
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
  animation: float 8s infinite ease-in-out;
  animation-delay: var(--delay);
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
  animation: breathe 4s infinite ease-in-out;
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
  animation: wave-flow 3s linear infinite;
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
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-weight: 700;
  line-height: 1.3;
  min-height: 3.5em;
  transition: all 0.5s ease-in-out;
}

.hero-content .subtitle {
  font-size: 1.3rem;
  color: var(--sage-green);
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-content .tagline {
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  min-height: 2.1em;
  transition: all 0.5s ease-in-out;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  font-size: 0.95rem;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--sage-green);
  color: white;
  box-shadow: 0 4px 12px rgba(163, 177, 138, 0.3);
}

.btn-primary:hover {
  background-color: #8fa876;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(163, 177, 138, 0.4);
}

.btn-secondary {
  background-color: white;
  color: var(--sage-green);
  border: 2px solid var(--sage-green);
}

.btn-secondary:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background-color: white;
  max-width: 1400px;
  margin: 0 auto;
}

.feature-item {
  text-align: center;
  padding: 2rem 1.5rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.feature-item p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* About Section */
.about {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h2 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.about-header .tagline {
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

.credentials h3 {
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

.credential-card h4 {
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

.approach-section h3 {
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
}

/* Services Section */
.services {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: white;
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.services-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.services-header .intro {
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 0;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background-color: white;
}

.service-card:hover {
  box-shadow: 0 8px 20px rgba(163, 177, 138, 0.15);
  transform: translateY(-4px);
  border-color: var(--sage-green);
}

.service-icon {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.service-card .tagline {
  font-size: 0.95rem;
  color: var(--sage-green);
  font-weight: 500;
  margin-bottom: 1rem !important;
}

.service-card .description {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.conditions {
  list-style: none;
  padding: 0;
}

.conditions li {
  padding: 0.4rem 0 0.4rem 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  position: relative;
}

.conditions li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--sage-green);
  font-weight: bold;
}

/* Approach Section */
.approach {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.approach-header {
  text-align: center;
  margin-bottom: 2rem;
}

.approach-header h2 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.approach-header .subtitle {
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

.philosophy-section h3 {
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

/* FAQ Section */
.faq {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: white;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.faq-header p {
  font-size: 1.1rem;
  color: var(--text-light);
}

.faqs-container {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #E8E8E8;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 12px rgba(163, 177, 138, 0.1);
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-dark);
  transition: all 0.3s ease;
  text-align: left;
  font-family: 'Inter', sans-serif;
}

.faq-question:hover {
  background-color: #f9f9f9;
}

.faq-question.active {
  background-color: var(--sage-green);
  color: white;
}

.faq-question .icon {
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 1rem;
  flex-shrink: 0;
}

.faq-answer {
  padding: 1.5rem;
  background-color: #fafafa;
  border-top: 1px solid #E8E8E8;
  animation: slideDown 0.3s ease;
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
  color: var(--text-light);
  line-height: 1.7;
  margin: 0;
}

/* Contact Section */
.contact {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.contact h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
  font-weight: 700;
}

.contact .intro {
  color: var(--text-light);
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
  line-height: 1.7;
}

.meeting-format-section {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid #E8E8E8;
}

.meeting-format-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
  text-align: center;
}

.format-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.format-btn {
  padding: 1.5rem;
  border: 2px solid #E8E8E8;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}

.format-btn:hover {
  border-color: var(--sage-green);
  background-color: #f9f9f9;
}

.format-btn.active {
  border-color: var(--sage-green);
  background-color: var(--sage-green);
  color: white;
}

.format-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: block;
}

.format-name {
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  display: block;
}

.format-desc {
  font-size: 0.85rem;
  opacity: 0.7;
  display: block;
  line-height: 1.4;
}

.format-btn.active .format-desc {
  opacity: 0.9;
}

.reassurance-box {
  background: linear-gradient(135deg, #f0f8f4 0%, #f5f5f5 100%);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid var(--sage-green);
  text-align: center;
}

.reassurance-box p {
  color: var(--sage-green);
  font-weight: 500;
  margin: 0;
  font-size: 0.95rem;
}

.appointment-form {
  background-color: #f9f9f9;
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border: 1px solid #E8E8E8;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.6rem;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  background-color: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--sage-green);
  box-shadow: 0 0 0 3px rgba(163, 177, 138, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  background-color: var(--sage-green);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(163, 177, 138, 0.3);
}

.submit-btn:hover {
  background-color: #8fa876;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(163, 177, 138, 0.4);
}

.form-note {
  font-size: 0.85rem;
  color: #999;
  margin-top: 1rem;
  text-align: center;
}

.contact-info {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid #E8E8E8;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-dark);
  font-weight: 600;
}

.info-item {
  margin-bottom: 2rem;
}

.info-item h4 {
  font-size: 1.1rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-item p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.6;
}

.info-item a {
  color: var(--sage-green);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}

.info-item a:hover {
  text-decoration: underline;
}

.insurance-note {
  background: linear-gradient(135deg, #f0f8f4 0%, #f5f5f5 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--sage-green);
}

.insurance-note h3 {
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.insurance-note p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.6;
}

/* Footer */
.footer {
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
  cursor: pointer;
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
  margin-top: 0.5rem !important;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    gap: 1.5rem;
    font-size: 0.85rem;
  }

  .hero-content h1 {
    font-size: 2rem;
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
    padding: 1rem;
  }

  .format-icon {
    font-size: 2rem;
  }

  section {
    padding: 2rem 1rem !important;
  }

  .hero {
    padding: 3rem 1rem !important;
  }
}
</style>
