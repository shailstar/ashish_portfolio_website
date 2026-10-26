// Structured data (schema.org JSON-LD) for search engines and AI assistants.
// scripts/prerender.mjs writes it into the <head> of each page at build time.
// Check changes at https://validator.schema.org and https://search.google.com/test/rich-results

import { SITE_URL, PATHS } from './routes.js'
import { LINKEDIN_URL, REGISTRATION, PROFILE_LINKS, SOCIAL_LINKS } from './about.js'
import { PHONE_TEL, CLINICS, OPEN_DAYS } from './clinics.js'

const PHYSICIAN_ID = `${SITE_URL}/#physician`
const WEBSITE_ID = `${SITE_URL}/#website`
const TELEPHONE = PHONE_TEL.replace('tel:', '')

// Consultation fees at the clinics, from ₹499 follow-ups to ₹1,499 for 60 minutes (see the fees page)
const CLINIC_PRICE_RANGE = '₹499–₹1,499'

const clinicId = (clinic) => `${SITE_URL}${PATHS[clinic.page]}#clinic`

const jaipurAddress = (streetAddress, postalCode) => ({
  '@type': 'PostalAddress',
  ...(streetAddress && { streetAddress }),
  addressLocality: 'Jaipur',
  addressRegion: 'Rajasthan',
  ...(postalCode && { postalCode }),
  addressCountry: 'IN',
})

const clinicSchema = (clinic) => ({
  '@type': 'MedicalClinic',
  '@id': clinicId(clinic),
  name: clinic.listingName,
  url: `${SITE_URL}${PATHS[clinic.page]}`,
  image: `${SITE_URL}/profile_about.png`,
  telephone: TELEPHONE,
  priceRange: CLINIC_PRICE_RANGE,
  medicalSpecialty: 'https://schema.org/Psychiatric',
  isAcceptingNewPatients: true,
  address: jaipurAddress(clinic.street, clinic.postalCode),
  geo: { '@type': 'GeoCoordinates', ...clinic.geo },
  hasMap: clinic.mapUrl,
  openingHoursSpecification: clinic.openTimes.map(([opens, closes]) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: OPEN_DAYS,
    opens,
    closes,
  })),
  ...(clinic.listingUrl && { sameAs: [clinic.listingUrl] }),
})

const organization = (name, url) => ({ '@type': 'EducationalOrganization', name, ...(url && { url }) })

const credential = (name, credentialCategory, recognizedBy) => ({
  '@type': 'EducationalOccupationalCredential',
  name,
  credentialCategory,
  recognizedBy: organization(recognizedBy),
})

// Keep in step with the credentials in about.js
const physician = {
  '@type': ['Physician', 'Person'],
  '@id': PHYSICIAN_ID,
  name: 'Dr. Ashish Yadav',
  honorificPrefix: 'Dr.',
  jobTitle: 'Neuro-psychiatrist',
  description:
    'Neuro-psychiatrist (DNB Psychiatry) in Jaipur who combines modern psychiatry with yogic science, for anxiety, depression, adult ADHD, addiction, sleep problems and sexual health.',
  medicalSpecialty: 'https://schema.org/Psychiatric',
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/profile_about.png`,
  telephone: TELEPHONE,
  email: 'contact@drashishyadav.com',
  address: jaipurAddress(),
  workLocation: Object.values(CLINICS).map((clinic) => ({ '@id': clinicId(clinic) })),
  // Visiting consultant, evenings by appointment only
  hospitalAffiliation: {
    '@type': 'Hospital',
    name: 'Shalby Hospital, Vaishali Nagar',
    address: jaipurAddress(),
  },
  areaServed: [{ '@type': 'City', name: 'Jaipur' }, { '@type': 'Country', name: 'India' }],
  knowsLanguage: ['English', 'Hindi', 'Gujarati'],
  isAcceptingNewPatients: true,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: `${REGISTRATION.council} Registration Number`,
    value: REGISTRATION.number,
  },
  hasCredential: [
    credential('MBBS', 'degree', 'Rajasthan University of Health Sciences'),
    credential('DNB Psychiatry', 'degree', 'National Board of Examinations in Medical Sciences'),
    credential('Certification of Psychotherapy', 'certificate', 'World Psychiatric Association'),
    credential('RYT-200 Yoga Teacher', 'certificate', 'Yoga Alliance'),
  ],
  alumniOf: [
    organization('RUHS College of Medical Sciences, Jaipur'),
    organization('Gujarat Institute of Mental Health, Ahmedabad'),
  ],
  memberOf: [
    { '@type': 'Organization', name: 'Indian Psychiatric Society' },
    { '@type': 'Organization', name: 'Indian Medical Association' },
  ],
  sameAs: [LINKEDIN_URL, SOCIAL_LINKS.instagram, SOCIAL_LINKS.youtube, ...PROFILE_LINKS.map((p) => p.url)],
}

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Dr. Ashish Yadav',
  url: `${SITE_URL}/`,
  inLanguage: 'en-IN',
  publisher: { '@id': PHYSICIAN_ID },
}

// The schema blocks for one page, keyed by route id
const BY_ROUTE = {
  home: [website, physician],
  about: [
    {
      '@type': 'ProfilePage',
      url: `${SITE_URL}/about`,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PHYSICIAN_ID },
    },
    physician,
  ],
  jaipur: [...Object.values(CLINICS).map(clinicSchema), physician],
  jhotwara: [clinicSchema(CLINICS.jhotwara), physician],
  vaishali: [clinicSchema(CLINICS.vaishali), physician],
}

// faqs: the { q, a } items the page shows, collected while prerendering
const faqPage = (route, faqs) => ({
  '@type': 'FAQPage',
  '@id': `${SITE_URL}${PATHS[route]}#faq`,
  url: `${SITE_URL}${PATHS[route]}`,
  isPartOf: { '@id': WEBSITE_ID },
  author: { '@id': PHYSICIAN_ID },
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

export const schemaFor = (route, faqs = []) => {
  const graph = [...(BY_ROUTE[route] || []), ...(faqs.length ? [faqPage(route, faqs)] : [])]
  return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null
}
