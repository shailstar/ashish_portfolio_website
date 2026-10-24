// Single source for clinic details, shared by the location pages.

const mapsSearch = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const CLINICS = {
  jhotwara: {
    id: 'jhotwara',
    page: 'jhotwara',
    area: 'Jhotwara',
    name: 'Shri Ram Hospital',
    address: 'A-261, Shri Ram Hospital, Hanuman Road, Tara Nagar-A, Jhotwara, Jaipur 302012',
    days: 'Every day except Wednesday',
    hours: '1 – 2 PM and 5 – 7 PM',
    landmark: 'Near Ganesh Mandir, opposite Reliance Mart and Devbhog Restaurant',
    mapUrl: 'https://maps.app.goo.gl/CDCSPwMR3seGBLSo6',
    mapQuery: 'Shri Ram Hospital, Hanuman Road, Tara Nagar, Jhotwara, Jaipur 302012',
    nearby: [
      'Tara Nagar', 'Murlipura', 'Vidhyadhar Nagar', 'Shastri Nagar', 'Kalwar Road', 'Niwaru Road',
      'Sikar Road', 'Khatipura', 'Govindpura', 'Benad Road', 'Harmada',
    ],
  },
  vaishali: {
    id: 'vaishali',
    page: 'vaishali',
    // Shown on the clinic page only
    heroNote: 'Evening appointments are also available at Shalby Hospital, Vaishali Nagar, by prior booking.',
    alsoNearby: {
      title: 'Shalby Hospital, Vaishali Nagar',
      text: 'Dr. Ashish Yadav is a visiting consultant at Shalby Hospital. Consultations there are in the evenings, by prior appointment only. Message on WhatsApp to arrange one.',
    },
    extraFaqs: [
      {
        q: 'Can I see Dr. Ashish Yadav at Shalby Hospital?',
        a: '<p>Yes, as a visiting consultant. Appointments at Shalby Hospital, Vaishali Nagar, are in the evenings and by prior booking only. Message on WhatsApp to arrange a time.</p>',
      },
    ],
    area: 'Vaishali Nagar',
    name: 'Asha Clinic',
    address: 'Asha Clinic, 69, Sirsi Road, Officers Campus Extension, Khatipura, Vaishali Nagar, Jaipur 302012',
    days: 'Every day except Wednesday',
    hours: '10 AM – 1 PM',
    landmark: 'Near the petrol pump, opposite DMart',
    mapUrl: mapsSearch('Asha Clinic, 69, Sirsi Road, Khatipura, Vaishali Nagar, Jaipur 302012'),
    mapQuery: 'Asha Clinic, 69, Sirsi Road, Khatipura, Vaishali Nagar, Jaipur 302012',
    nearby: [
      'Khatipura', 'Chitrakoot', 'Nirman Nagar', 'Gandhi Path', 'Queens Road', 'Sirsi Road', 'Hathoj',
      'Panchyawala', 'Ajmer Road', 'Shyam Nagar',
    ],
  },
}

export const SHALBY = {
  name: 'Shalby Hospital, Vaishali Nagar',
  note: 'Visiting consultant. Evening appointments, by prior booking only.',
}

export const HOME_VISIT_AREAS = ['Vaishali Nagar', 'Mansarovar', 'Raja Park', 'Jhotwara', 'Shastri Nagar']

// Map shown only after the visitor clicks, so Google is not contacted on page load
export const mapEmbedUrl = (query) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

export const CARE_AREAS = [
  { title: 'Anxiety and stress', text: 'Constant worry, panic episodes and work-related stress.' },
  { title: 'Depression and mood', text: 'Low mood, burnout, loss of motivation and emotional numbness.' },
  { title: 'Adult ADHD', text: 'Trouble with focus, time and follow-through, with a structured assessment.', target: 'adhd' },
  {
    title: 'Overthinking, habits and behavioural addictions',
    text: "Rumination, procrastination, and compulsive phone, OTT, gaming or porn use. The focus of Dr. Ashish Yadav's NBEMS-commended research.",
  },
  { title: 'Addiction and de-addiction', text: 'Help to cut down or quit alcohol, tobacco and other substances, with relapse prevention.' },
  { title: 'Sexual health', text: 'Low desire, performance anxiety, and erection or ejaculation concerns, discussed privately and without judgement.' },
  { title: 'Sleep problems', text: 'Insomnia, irregular routines and late-night scrolling.' },
  { title: 'Mind-body care', text: 'Breathwork, awareness training and yogic practices alongside psychiatry.' },
]

export const LANGUAGES = 'English, Hindi and Gujarati'

export const GOOGLE_REVIEWS_URL = 'https://g.page/r/Ce-0WPbw-7VYEBI/review'

export const WHATSAPP_URL = 'https://wa.me/message/75HLOF6Q7MV4A1'
