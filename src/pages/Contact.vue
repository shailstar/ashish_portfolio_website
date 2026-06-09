<template>
  <section class="contact">
    <h1>Book an Appointment</h1>

    <div class="contact-content">
      <p class="intro">
        Let's take the first step toward your healing. Select your preferred meeting format below.
      </p>

      <!-- Meeting Format Selection -->
      <div class="meeting-format-section">
        <h2>How would you like to meet?</h2>
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
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="ptsd">PTSD/Trauma</option>
            <option value="bipolar">Bipolar Disorder</option>
            <option value="other">Other Mental Health Concern</option>
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
        <h2>Contact Information</h2>
        <div class="info-item">
          <h3>📞 Phone</h3>
          <p><a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>
        <div class="info-item">
          <h3>📧 Email</h3>
          <p><a href="mailto:contact@drashish.com">contact@drashish.com</a></p>
        </div>
        <div class="info-item">
          <h3>📍 Address</h3>
          <p>
            Professional Psychiatric Services<br/>
            123 Medical Plaza Drive<br/>
            City, State 12345
          </p>
        </div>
        <div class="info-item">
          <h3>🕐 Office Hours</h3>
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
  padding: 3rem 0;
}

.contact h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
  font-weight: 700;
}

.intro {
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

.meeting-format-section h2 {
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

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-dark);
  font-weight: 600;
}

.info-item {
  margin-bottom: 2rem;
}

.info-item h3 {
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

@media (max-width: 768px) {
  .contact h1 {
    font-size: 2rem;
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
}
</style>
