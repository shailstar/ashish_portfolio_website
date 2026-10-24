<template>
  <section class="loc">
    <div class="loc-container">
      <button class="clinic-back" @click="$emit('navigate', 'jaipur')">&larr; All Jaipur locations</button>

      <!-- Hero -->
      <header class="loc-hero">
        <div class="eyebrow">Psychiatrist · {{ clinic.area }}, Jaipur · In person &amp; online</div>
        <h1 class="loc-title">
          Psychiatrist in {{ clinic.area }},
          <em>Jaipur.</em>
        </h1>
        <p class="loc-lead">
          Dr. Ashish Yadav, Neuro-psychiatrist (DNB Psychiatry), sees patients at {{ clinic.name }}, {{ clinic.area }}.
          {{ clinic.days }}, {{ clinic.hours }}. Online consultations are also available if you cannot come in.
          Consultations are in {{ LANGUAGES }}.
          <template v-if="clinic.heroNote">{{ clinic.heroNote }}</template>
        </p>
        <div class="loc-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a clinic visit</button>
          <a :href="clinic.mapUrl" target="_blank" rel="noopener noreferrer" class="loc-button loc-button-outline">
            Get directions
          </a>
        </div>
      </header>

      <!-- Plan your visit -->
      <div class="loc-block">
        <div class="eyebrow">Plan your visit</div>
        <h2 class="loc-h2">
          Before you come
          <em>to {{ clinic.area }}.</em>
        </h2>
        <div class="clinic-plan">
          <div class="clinic-plan-card">
            <span class="clinic-plan-icon" aria-hidden="true">🕐</span>
            <h3 class="clinic-plan-title">Clinic timings</h3>
            <p>{{ clinic.days }}<br />{{ clinic.hours }}</p>
          </div>
          <div class="clinic-plan-card">
            <span class="clinic-plan-icon" aria-hidden="true">📍</span>
            <h3 class="clinic-plan-title">Finding the clinic</h3>
            <p>{{ clinic.landmark }}.</p>
          </div>
          <div class="clinic-plan-card">
            <span class="clinic-plan-icon" aria-hidden="true">₹</span>
            <h3 class="clinic-plan-title">Clinic fees</h3>
            <p>₹799 for 30 min · ₹1,499 for 60 min<br />Follow-up ₹499 for 30 min</p>
          </div>
          <div class="clinic-plan-card">
            <span class="clinic-plan-icon" aria-hidden="true">💻</span>
            <h3 class="clinic-plan-title">Can't make it?</h3>
            <p>Consult online on Google Meet, with the same doctor and the same records.</p>
          </div>
        </div>
      </div>

      <!-- Where to find the clinic -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">The clinic</div>
          <h2 class="loc-h2">
            Where to find
            <em>the clinic.</em>
          </h2>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book a clinic visit &rarr;</button>
        </div>
        <div>
          <dl class="loc-info clinic-info">
            <div class="loc-info-row">
              <dt>Clinic</dt>
              <dd>{{ clinic.name }}</dd>
            </div>
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
            <div class="loc-info-row">
              <dt>Booking</dt>
              <dd>
                <button class="loc-link" @click="$emit('navigate', 'contact')">On this website</button>
                or
                <a :href="clinicWhatsApp" target="_blank" rel="noopener noreferrer" class="loc-link">on WhatsApp</a>
              </dd>
            </div>
          </dl>

          <!-- Map loads only on click -->
          <div class="clinic-map">
            <iframe
              v-if="showMap"
              :src="mapEmbedUrl(clinic.mapQuery)"
              :title="`Map showing ${clinic.name}, ${clinic.area}`"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
            <button v-else class="clinic-map-placeholder" @click="showMap = true">
              <span class="clinic-map-pin" aria-hidden="true">📍</span>
              <span class="clinic-map-label">Show map</span>
              <span class="clinic-map-note">Loads Google Maps</span>
            </button>
          </div>

          <div v-if="clinic.alsoNearby" class="clinic-also">
            <h3 class="clinic-also-title">Also nearby: {{ clinic.alsoNearby.title }}</h3>
            <p>{{ clinic.alsoNearby.text }}</p>
            <a :href="waLink(SHALBY_MSG)" target="_blank" rel="noopener noreferrer" class="loc-link">Arrange on WhatsApp &rarr;</a>
          </div>

          <p class="loc-text clinic-nearby-intro">
            Patients visit this clinic from across {{ clinic.area }} and nearby areas, including:
          </p>
          <ul class="loc-pills">
            <li v-for="area in clinic.nearby" :key="area">{{ area }}</li>
          </ul>
        </div>
      </div>

      <!-- What a visit is like -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">Your first visit</div>
          <h2 class="loc-h2">
            What a clinic consultation
            <em>is like.</em>
          </h2>
        </div>
        <div>
          <p class="loc-text">
            Your first consultation is an unhurried, private conversation. You talk about what you are going through,
            since when, and how it is affecting your sleep, work and relationships. Your health history and any
            medicines you take are reviewed too.
          </p>
          <p class="loc-text">
            By the end, you understand what may be going on and leave with a clear plan. That may include lifestyle and
            sleep changes, yogic breathing practices, therapy guidance, and medicines only where they are needed.
          </p>
          <p class="loc-text clinic-tip">
            <strong>Bring along, if you have them:</strong> previous prescriptions, a list of current medicines and any
            recent reports.
          </p>
        </div>
      </div>

      <!-- In person or online -->
      <div class="loc-block loc-duo">
        <div class="loc-duo-card">
          <div class="eyebrow">In person</div>
          <h2 class="loc-h3">Come to the clinic</h2>
          <p>
            Best if you live nearby, prefer meeting face to face, or need a physical check-up. Some medicines, such as
            certain ADHD medicines, can only be started after an in-person visit.
          </p>
        </div>
        <div class="loc-duo-card">
          <div class="eyebrow">Online</div>
          <h2 class="loc-h3">Consult from home</h2>
          <p>
            Best if travel is hard or your schedule is tight. Many patients start at the clinic and continue online,
            or the other way round. It is the same doctor either way.
          </p>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book an online consultation &rarr;</button>
        </div>
      </div>

      <!-- Areas of care -->
      <div class="loc-block loc-split">
        <div class="loc-split-intro">
          <div class="eyebrow">Areas of care</div>
          <h2 class="loc-h2">
            What patients in {{ clinic.area }}
            <em>come in for.</em>
          </h2>
          <button class="loc-mini-cta" @click="$emit('navigate', 'contact')">Book a consultation &rarr;</button>
        </div>
        <ul class="loc-care">
          <li v-for="item in CARE_AREAS" :key="item.title" class="loc-care-item">
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

      <!-- FAQ -->
      <AppointmentFAQ
        eyebrow="Visiting the clinic"
        :title="`The ${clinic.area} clinic,`"
        emphasis="answered simply."
        lead="Practical answers before your visit. Still unsure?"
        :faqs="faqs"
      />

      <p class="loc-urgent">
        <strong>Not an emergency service.</strong> If you or someone close to you is in danger or thinking of
        self-harm, go to the nearest hospital emergency, call <a href="tel:112">112</a>, or call Tele-MANAS on
        <a href="tel:14416">14416</a> (free, 24×7).
      </p>

      <div class="loc-cta">
        <h2 class="loc-cta-title">See you in {{ clinic.area }}.</h2>
        <p class="loc-cta-text">Book a clinic visit, or ask a question on WhatsApp first.</p>
        <div class="loc-actions loc-cta-actions">
          <button class="loc-button" @click="$emit('navigate', 'contact')">Book a clinic visit</button>
          <a :href="clinicWhatsApp" target="_blank" rel="noopener noreferrer" class="loc-button loc-button-outline">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import AppointmentFAQ from './AppointmentFAQ.vue'
import { CLINICS, CARE_AREAS, HOME_VISIT_AREAS, LANGUAGES, waLink, mapEmbedUrl } from '../data/clinics.js'

const props = defineProps({
  clinicId: { type: String, required: true },
})

defineEmits(['navigate'])

const clinic = computed(() => CLINICS[props.clinicId])

const clinicWhatsApp = computed(() =>
  waLink(`Hi Dr. Ashish, I'd like to book a consultation at the ${clinic.value.area} clinic.`),
)
const SHALBY_MSG = "Hi Dr. Ashish, I'd like an evening appointment at Shalby Hospital, Vaishali Nagar."

const showMap = ref(false)
watch(() => props.clinicId, () => { showMap.value = false })

const faqs = computed(() => {
  const c = clinic.value
  return [
    {
      q: `Where exactly is the ${c.area} clinic?`,
      a: `<p>${c.address}. ${c.landmark}. Use the map above or <a href="${c.mapUrl}" target="_blank" rel="noopener noreferrer">open it in Google Maps</a> for directions.</p>`,
    },
    {
      q: 'What are the consultation days and timings?',
      a: `<p>${c.days}, ${c.hours}. Please book before you come, so your slot is kept ready.</p>`,
    },
    {
      q: 'What is the fee for a clinic consultation?',
      a: '<p>₹799 for 30 minutes and ₹1,499 for 60 minutes. Follow-ups are ₹499 for 30 minutes. The full list is on the fees page.</p>',
    },
    {
      q: `I live near ${c.nearby[0]} or ${c.nearby[1]}. Is this the closest clinic?`,
      a: `<p>This clinic is convenient for ${c.nearby.slice(0, 6).join(', ')} and nearby areas. If another location suits you better, there is also a clinic in ${c.id === 'jhotwara' ? 'Vaishali Nagar' : 'Jhotwara'}, or you can consult online.</p>`,
    },
    {
      q: 'Can I start at the clinic and continue online?',
      a: '<p>Yes. It is the same doctor and the same records either way, so you can switch whenever it suits you.</p>',
    },
    {
      q: 'Which languages can I consult in?',
      a: `<p>${LANGUAGES}. Speak in whichever language you are most comfortable with.</p>`,
    },
    {
      q: 'Is a home visit possible instead?',
      a: `<p>In selected cases, around ${HOME_VISIT_AREAS.join(', ')} and nearby areas. Home visits are booked and confirmed on WhatsApp.</p>`,
    },
    ...(c.extraFaqs || []),
    {
      q: 'Is the consultation private?',
      a: '<p>Yes. What you share stays between you and your doctor, consultations are never recorded, and records are kept securely as per medical guidelines.</p>',
    },
  ]
})
</script>

<style scoped src="../styles/location.css"></style>

<style scoped>
.clinic-back {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--brand-ink);
  margin-bottom: 1.5rem;
}

.clinic-back:hover {
  color: var(--brand-hover);
}

/* ---- Plan your visit ---- */
.clinic-plan {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.clinic-plan-card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.25rem;
}

.clinic-plan-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--brand-ink);
  font-weight: 700;
  margin-bottom: 0.9rem;
}

.clinic-plan-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}

.clinic-plan-card p {
  font-size: 0.9375rem;
  margin: 0;
}

/* ---- Clinic info + map ---- */
.clinic-info {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 0.5rem 1.5rem;
}

.clinic-map {
  margin: 1.25rem 0 1.5rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 16 / 9;
  background: var(--sage-50);
}

.clinic-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.clinic-map-placeholder {
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  background:
    radial-gradient(circle at 30% 40%, var(--sage-100) 0, transparent 40%),
    radial-gradient(circle at 70% 65%, var(--camel-100) 0, transparent 45%),
    var(--sage-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.clinic-map-placeholder:hover {
  background-color: var(--sage-100);
}

.clinic-map-pin {
  font-size: 2rem;
}

.clinic-map-label {
  font-weight: 700;
  color: var(--brand-ink);
}

.clinic-map-note {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

.clinic-also {
  margin: 0 0 1.5rem;
  padding: 1.25rem 1.5rem;
  background: var(--sage-50);
  border: 1px solid var(--border-brand);
  border-radius: var(--radius-md);
}

.clinic-also-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}

.clinic-also p {
  font-size: 0.9375rem;
  margin: 0 0 0.5rem;
}

.clinic-nearby-intro {
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
}

.clinic-tip {
  font-size: 0.9375rem;
  padding: 1rem 1.25rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
}

@media (max-width: 1024px) {
  .clinic-plan {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .clinic-plan {
    grid-template-columns: 1fr;
  }
}
</style>
