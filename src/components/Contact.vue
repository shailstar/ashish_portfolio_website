<template>
  <section class="contact" id="contact">
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
</template>

<script setup>
import { ref } from 'vue'

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

@media (max-width: 768px) {
  .contact-header-flex {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .contact-illustration {
    max-width: 100%;
  }

  .contact-header {
    text-align: center;
  }

  .contact .intro {
    margin-bottom: var(--space-6);
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
}
</style>
