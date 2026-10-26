// Structured data (schema.org JSON-LD) for search engines and AI assistants.
// scripts/prerender.mjs writes it into the <head> of each page at build time.
// Check changes at https://validator.schema.org and https://search.google.com/test/rich-results

import { SITE_URL } from './routes.js'
import { LINKEDIN_URL, REGISTRATION, PROFILE_LINKS, SOCIAL_LINKS } from './about.js'
import { PHONE_TEL } from './clinics.js'

const PHYSICIAN_ID = `${SITE_URL}/#physician`
const WEBSITE_ID = `${SITE_URL}/#website`

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
  telephone: PHONE_TEL.replace('tel:', ''),
  email: 'contact@drashishyadav.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
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
}

export const schemaFor = (route) =>
  BY_ROUTE[route] ? { '@context': 'https://schema.org', '@graph': BY_ROUTE[route] } : null
