<template>
  <section class="contact">
    <h1>Book an Appointment</h1>

    <div class="contact-content">
      <p class="intro">
        I'm committed to providing you with quality psychiatric care. Use the form below
        to request an appointment, or contact me directly using the information provided.
      </p>

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
  reason: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Appointment requested:', form.value)
  alert('Thank you for requesting an appointment! We will contact you within 24 hours to confirm.')
  form.value = { name: '', email: '', phone: '', reason: '', message: '' }
}
</script>

<style scoped>
.contact {
  max-width: 900px;
  margin: 0 auto;
}

.contact h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 700;
}

.intro {
  color: #555;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
  line-height: 1.7;
}

.appointment-form {
  background-color: #f8f9fa;
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border: 1px solid #e9ecef;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.6rem;
  color: #2c3e50;
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
  border-color: #6b8cae;
  box-shadow: 0 0 0 3px rgba(107, 140, 174, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  background-color: #6b8cae;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(107, 140, 174, 0.2);
}

.submit-btn:hover {
  background-color: #5a7a9a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(107, 140, 174, 0.3);
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
  border: 1px solid #e9ecef;
}

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: 600;
}

.info-item {
  margin-bottom: 2rem;
}

.info-item h3 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-item p {
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.info-item a {
  color: #6b8cae;
  text-decoration: none;
  font-weight: 500;
}

.info-item a:hover {
  text-decoration: underline;
}

.insurance-note {
  background-color: #e8f0f8;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #6b8cae;
}

.insurance-note h3 {
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.insurance-note p {
  color: #555;
  margin: 0;
  line-height: 1.6;
}
</style>
