import { SERVICES } from './services.js'
import { GUIDES } from './guides.js'

// Pages that have their own URL. Other routes live at "/".
// Each one is prerendered to dist/<path>.html at build time (scripts/prerender.mjs)
// and needs a matching rewrite in public/_redirects and an entry in public/sitemap.xml.

export const SITE_URL = 'https://drashishyadav.com'

export const PATHS = {
  home: '/',
  fees: '/fees',
  cancellation: '/cancellation-policy',
  adhd: '/adult-adhd-assessment',
  privacy: '/privacy',
  jaipur: '/psychiatrist-in-jaipur',
  jhotwara: '/psychiatrist-in-jhotwara',
  vaishali: '/psychiatrist-in-vaishali-nagar',
  about: '/about',
  book: '/book',
  confirmed: '/booking-confirmed',
  talks: '/talks-and-workshops',
  ...Object.fromEntries(Object.entries(SERVICES).map(([id, service]) => [id, service.path])),
  ...Object.fromEntries(Object.entries(GUIDES).map(([id, guide]) => [id, guide.path])),
}

// Browser tab title and search-result description per page
export const DEFAULT_TITLE = 'Dr. Ashish - Psychiatrist'
export const META = {
  home: {
    title: 'Dr. Ashish Yadav | Neuro-psychiatrist in Jaipur & Online',
    description: 'Neuro-psychiatrist (DNB Psychiatry) in Jaipur for anxiety, depression, adult ADHD, addiction and sleep problems. Clinics in Jhotwara and Vaishali Nagar, and online.',
  },
  talks: {
    title: 'Mental Health Talks & Workshops in Jaipur | Dr. Ashish Yadav',
    description: 'Mental health talks, workshops and breathwork sessions for schools, colleges, corporates and yoga teacher trainings. In Jaipur, beyond and online.',
  },
  book: {
    title: 'Book a Consultation | Dr. Ashish Yadav, Psychiatrist in Jaipur',
    description: 'Book an online or in-clinic psychiatry consultation, follow-up or adult ADHD assessment in Jaipur. Pay by Razorpay or UPI.',
  },
  confirmed: {
    title: 'Booking | Dr. Ashish Yadav',
    description: '',
    noindex: true,
  },
  about: {
    title: 'About Dr. Ashish Yadav | Neuro-psychiatrist in Jaipur',
    description: 'Neuro-psychiatrist in Jaipur trained at the Gujarat Institute of Mental Health, certified in psychotherapy by the WPA and a Yoga Alliance RYT-200 yoga teacher.',
  },
  fees: {
    title: 'Psychiatrist Consultation Fees | Dr. Ashish Yadav',
    description: 'Clear consultation fees for online, in-person and home-visit psychiatry consultations in Jaipur, with what every consultation includes.',
  },
  adhd: {
    title: 'Adult ADHD Assessment in Jaipur & Online | Dr. Ashish Yadav',
    description: 'A structured adult ADHD assessment by a neuro-psychiatrist (DNB Psychiatry), online across India or in person in Jaipur, with a written report.',
    // Shown in the page's author line and the schema markup. Update when the page content is reviewed.
    lastReviewed: '2026-10-26',
  },
  cancellation: {
    title: 'Cancellation & Refund Policy | Dr. Ashish Yadav',
    description: 'Rescheduling, cancellation and refund terms for consultations and the adult ADHD assessment.',
  },
  privacy: {
    title: 'Privacy Policy | Dr. Ashish Yadav',
    description: "How Dr. Ashish Yadav's practice collects, uses and protects your information.",
  },
  jaipur: {
    title: 'Psychiatrist in Jaipur | Dr. Ashish Yadav, Jhotwara & Vaishali Nagar',
    description: 'Neuro-psychiatrist (DNB Psychiatry) in Jaipur with clinics in Jhotwara and Vaishali Nagar, home visits and online consultations. English, Hindi and Gujarati.',
  },
  jhotwara: {
    title: 'Psychiatrist in Jhotwara, Jaipur | Dr. Ashish Yadav',
    description: 'Psychiatrist at Shri Ram Hospital, Hanuman Road, Tara Nagar, Jhotwara. Open every day except Wednesday, 1–2 PM and 5–7 PM. Also online.',
  },
  vaishali: {
    title: 'Psychiatrist in Vaishali Nagar, Jaipur | Dr. Ashish Yadav',
    description: 'Psychiatrist at Asha Clinic, Sirsi Road, Vaishali Nagar, opposite DMart. Every day except Wednesday, 10 AM–1 PM. Evenings at Shalby Hospital.',
  },
}

Object.entries({ ...SERVICES, ...GUIDES }).forEach(([id, page]) => {
  META[id] = page.meta
})

export const routeFromPath = (pathname) =>
  Object.keys(PATHS).find((id) => PATHS[id] === (pathname.replace(/\/$/, '') || '/')) || 'home'
