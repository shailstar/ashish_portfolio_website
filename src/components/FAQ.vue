<template>
  <section class="faq" id="faq">
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
</template>

<script setup>
import { ref } from 'vue'

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
</script>

<style scoped>
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
</style>
