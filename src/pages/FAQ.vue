<template>
  <section class="faq">
    <div class="faq-header">
      <h1>Frequently Asked Questions</h1>
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

    <div class="contact-cta">
      <h3>Still have questions?</h3>
      <p>Feel free to reach out. I'm here to help.</p>
      <RouterLink to="/contact" class="btn btn-primary">Get In Touch</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeFAQ = ref(0)

const toggleFAQ = (index) => {
  activeFAQ.value = activeFAQ.value === index ? -1 : index
}

const faqs = ref([
  {
    question: "How do I schedule my first appointment?",
    answer: "You can schedule through our <strong>Book Now</strong> page, where you'll select your preferred meeting format (In-Person, Online, or Home Visit) and choose an available time slot. You can also call or email us directly."
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
</script>

<style scoped>
.faq {
  padding: 3rem 0;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-header h1 {
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

.contact-cta {
  text-align: center;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  padding: 3rem 2rem;
  border-radius: 8px;
}

.contact-cta h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.contact-cta p {
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 2rem;
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
  .faq-header h1 {
    font-size: 2rem;
  }

  .faq-question {
    padding: 1rem;
    font-size: 0.95rem;
  }

  .faq-answer {
    padding: 1rem;
  }
}
</style>
