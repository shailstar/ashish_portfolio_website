<template>
  <section class="loc">
    <div class="loc-container">
      <!-- Hero -->
      <header class="loc-hero">
        <div class="eyebrow">Psychiatrist · Jaipur · In person, home visits &amp; online</div>
        <h1 class="loc-title">
          Psychiatrist in Jaipur,
          <em>close to home.</em>
        </h1>
        <p class="loc-lead">
          Dr. Ashish Yadav is a DNB Neuro-psychiatrist who sees patients at two clinics in Jaipur, in Jhotwara and
          Vaishali Nagar, and as a visiting consultant at Shalby Hospital. Home visits are available in selected cases,
          and online consultations are open to anyone across India. Consultations are in {{ LANGUAGES }}.
        </p>
        <div class="loc-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
          <button class="loc-button loc-button-outline" @click="$emit('navigate', 'fees')">See fees</button>
        </div>
      </header>

      <!-- Clinics -->
      <div class="loc-block">
        <div class="eyebrow">Where to consult</div>
        <h2 class="loc-h2">
          Two clinics in Jaipur,
          <em>one doctor.</em>
        </h2>

        <div class="loc-clinics">
          <article v-for="clinic in clinics" :key="clinic.id" class="loc-clinic">
            <div class="loc-clinic-area">{{ clinic.area }}</div>
            <h3 class="loc-clinic-name">{{ clinic.name }}</h3>
            <dl class="loc-info">
              <div class="loc-info-row">
                <dt>Address</dt>
                <dd>{{ clinic.address }}</dd>
              </div>
              <div class="loc-info-row">
                <dt>Landmark</dt>
                <dd>{{ clinic.landmark }}</dd>
              </div>
              <div class="loc-info-row">
                <dt>Days</dt>
                <dd>{{ clinic.days }}</dd>
              </div>
              <div class="loc-info-row">
                <dt>Timings</dt>
                <dd>{{ clinic.hours }}</dd>
              </div>
            </dl>
            <div class="loc-clinic-links">
              <button v-if="clinic.page" class="loc-clinic-link" @click="$emit('navigate', clinic.page)">
                Clinic details &rarr;
              </button>
              <a :href="clinic.mapUrl" target="_blank" rel="noopener noreferrer" class="loc-clinic-link">
                Get directions &rarr;
              </a>
            </div>
          </article>
        </div>

        <div class="loc-extras">
          <div class="loc-extra">
            <h3 class="loc-extra-title">{{ SHALBY.name }}</h3>
            <p>{{ SHALBY.note }}</p>
          </div>
          <div class="loc-extra">
            <h3 class="loc-extra-title">Home visits</h3>
            <p>In selected cases, around {{ HOME_VISIT_AREAS.join(', ') }} and nearby areas. Booked and confirmed on WhatsApp.</p>
          </div>
          <div class="loc-extra">
            <h3 class="loc-extra-title">Online, across India</h3>
            <p>One-to-one video consultations on Google Meet, wherever you are.</p>
          </div>
        </div>
      </div>

      <!-- Who you'd be consulting -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">Who you will see</div>
          <h2 class="loc-h2">
            The same doctor,
            <em>every visit.</em>
          </h2>
        </div>
        <div>
          <p class="loc-text">
            Every consultation, at either clinic, at home or online, is with Dr. Ashish Yadav himself. He combines
            modern psychiatry with classical yogic science, so treatment looks at sleep, routine, breath and lifestyle
            alongside medicines, which are used only when needed.
          </p>
          <ul class="loc-pills">
            <li>DNB Neuro-psychiatrist</li>
            <li>Guinness World Record holder</li>
            <li>Internationally certified yoga teacher</li>
          </ul>
          <div class="loc-links">
            <button class="loc-link" @click="$emit('navigate', 'about')">About Dr. Ashish Yadav &rarr;</button>
            <a :href="GOOGLE_REVIEWS_URL" target="_blank" rel="noopener noreferrer" class="loc-link">Google reviews &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Areas of care -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">Areas of care</div>
          <h2 class="loc-h2">
            What people in Jaipur
            <em>come in for.</em>
          </h2>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book a consultation &rarr;</button>
        </div>
        <ul class="loc-care">
          <li v-for="item in care" :key="item.title" class="loc-care-item">
            <h3 class="loc-care-title">
              <button v-if="item.target" class="loc-care-link" @click="$emit('navigate', item.target)">
                {{ item.title }} &rarr;
              </button>
              <template v-else>{{ item.title }}</template>
            </h3>
            <p class="loc-care-text">{{ item.text }}</p>
          </li>
        </ul>
      </div>

      <!-- Choosing a psychiatrist -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">A quick guide</div>
          <h2 class="loc-h2">
            Choosing a psychiatrist
            <em>in Jaipur.</em>
          </h2>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book a consultation &rarr;</button>
        </div>
        <ul class="loc-guide">
          <li v-for="item in guide" :key="item.title">
            <strong>{{ item.title }}</strong> {{ item.text }}
          </li>
        </ul>
      </div>

      <!-- Beyond Jaipur + fees -->
      <div class="loc-block loc-duo">
        <div class="loc-duo-card">
          <div class="eyebrow">Beyond Jaipur</div>
          <h2 class="loc-h3">Not in Jaipur? Consult online.</h2>
          <p>
            Online consultations on Google Meet are open to patients anywhere in India. Most concerns can be assessed
            well by video. If something needs an in-person review, such as certain ADHD medicines that cannot be
            prescribed online, you will be told clearly.
          </p>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book an online consultation &rarr;</button>
        </div>
        <div class="loc-duo-card">
          <div class="eyebrow">Fees</div>
          <h2 class="loc-h3">Clear fees, online or in person.</h2>
          <ul class="loc-fees">
            <li><span>Consultation, 30 min</span><strong>₹799</strong></li>
            <li><span>Consultation, 60 min</span><strong>₹1,499</strong></li>
            <li><span>Follow-up, 30 min</span><strong>₹499</strong></li>
            <li><span>Home visit, 60 min</span><strong>₹4,499</strong></li>
          </ul>
          <button class="loc-link" @click="$emit('navigate', 'fees')">Full fee list &rarr;</button>
        </div>
      </div>

      <!-- FAQ -->
      <AppointmentFAQ
        eyebrow="Common questions"
        title="Seeing a psychiatrist in Jaipur,"
        emphasis="answered simply."
        lead="The things people in Jaipur usually ask before their first visit. Still unsure?"
        :faqs="faqs"
      />

      <p class="loc-urgent">
        <strong>Not an emergency service.</strong> If you or someone close to you is in danger or thinking of
        self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on
        <a href="tel:14416">14416</a> (free, 24×7).
      </p>

      <div class="loc-cta">
        <h2 class="loc-cta-title">Ready to talk?</h2>
        <p class="loc-cta-text">Book at the clinic closest to you, or start online today.</p>
        <div class="loc-actions loc-cta-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a consultation</button>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="loc-button loc-button-outline">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppointmentFAQ from './AppointmentFAQ.vue'
import { CLINICS, CARE_AREAS, SHALBY, HOME_VISIT_AREAS, LANGUAGES, GOOGLE_REVIEWS_URL, WHATSAPP_URL } from '../data/clinics.js'

defineEmits(['navigate'])

const clinics = [CLINICS.jhotwara, CLINICS.vaishali]

const care = CARE_AREAS

const guide = [
  { title: 'Check the qualification.', text: 'A psychiatrist is a medical doctor with a postgraduate degree such as MD or DNB in psychiatry, which means they can diagnose, rule out physical causes and prescribe when needed.' },
  { title: 'Ask how much time you will get.', text: 'A first consultation needs enough time to understand your history properly. Rushed visits often lead to rushed prescriptions.' },
  { title: 'Look for clear fees.', text: 'You should know the consultation, follow-up and any extra charges before you book.' },
  { title: 'Notice the approach.', text: 'Good care explains the diagnosis and every sensible option, including therapy and lifestyle changes, not just medicines.' },
  { title: 'Think about convenience.', text: 'Treatment usually needs a few follow-ups, so a clinic near you, or online follow-ups, makes it easier to stay on track.' },
]

const faqs = [
  {
    q: 'How do I book a psychiatrist appointment in Jaipur?',
    a: '<p>Use the booking section on this website, or send a message on WhatsApp. Tell us which clinic suits you, Jhotwara or Vaishali Nagar, or whether you would prefer an online consultation or a home visit.</p>',
  },
  {
    q: 'Where are the clinics in Jaipur?',
    a: `<p><strong>Jhotwara:</strong> ${CLINICS.jhotwara.address}. ${CLINICS.jhotwara.landmark}.</p><p><strong>Vaishali Nagar:</strong> ${CLINICS.vaishali.address}. ${CLINICS.vaishali.landmark}.</p><p>Dr. Ashish Yadav also sees patients at Shalby Hospital, Vaishali Nagar, in the evenings by prior appointment.</p>`,
  },
  {
    q: 'What are the clinic timings?',
    a: `<p><strong>Jhotwara:</strong> ${CLINICS.jhotwara.days}, ${CLINICS.jhotwara.hours}.</p><p><strong>Vaishali Nagar:</strong> ${CLINICS.vaishali.days}, ${CLINICS.vaishali.hours}.</p><p><strong>Shalby Hospital:</strong> evenings, by prior appointment only.</p>`,
  },
  {
    q: 'Which languages can I consult in?',
    a: `<p>Consultations are available in ${LANGUAGES}. Speak in whichever language you are most comfortable with.</p>`,
  },
  {
    q: 'Do I need a referral to see a psychiatrist?',
    a: '<p>No. You can book directly. If you have seen another doctor before, bring any prescriptions or reports you have.</p>',
  },
  {
    q: 'Do you offer home visits in Jaipur?',
    a: `<p>Yes, in selected cases, around ${HOME_VISIT_AREAS.join(', ')} and nearby areas. Home visits are booked and confirmed on WhatsApp.</p>`,
  },
  {
    q: 'Can I start at the clinic and continue online?',
    a: '<p>Yes. Many patients have their first consultation in person and follow up online, or the other way round. It is the same doctor and the same records either way.</p>',
  },
  {
    q: 'How much does a psychiatrist consultation cost in Jaipur?',
    a: '<p>A 30-minute consultation is ₹799 and a 60-minute consultation is ₹1,499, online or in person. Follow-ups are ₹499 for 30 minutes. The full list is on the fees page.</p>',
  },
]
</script>

<style scoped src="../styles/location.css"></style>
