<template>
  <section class="contact">
    <h1>Get In Touch</h1>

    <div class="contact-content">
      <p class="intro">
        I'd love to hear from you! Feel free to reach out for any inquiries or
        opportunities.
      </p>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            required
            placeholder="Your name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            placeholder="your@email.com"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            required
            rows="6"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>

      <div class="contact-info">
        <h2>Other Ways to Connect</h2>
        <ul>
          <li>Email: ashish@example.com</li>
          <li>
            <a href="https://github.com" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! I will get back to you soon.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 0 auto;
}

.contact h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.intro {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contact-form {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0052a3;
}

.contact-info {
  text-align: center;
}

.contact-info h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 0.5rem;
  color: #666;
}

.contact-info a {
  color: #0066cc;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>
