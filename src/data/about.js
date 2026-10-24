// Content for the About page. Kept short on purpose: the full CV lives on LinkedIn.
// Lists can grow; FEATURES and HIGHLIGHTS sections hide themselves when empty.

export const LINKEDIN_URL = 'https://www.linkedin.com/in/drashishyadav'

// Short trust points shown in the strip under the header
export const CREDENTIALS = [
  { title: 'DNB Psychiatry', detail: 'Gujarat Institute of Mental Health, Ahmedabad' },
  { title: 'MBBS', detail: 'RUHS College of Medical Sciences, Jaipur' },
  { title: 'Certified in Psychotherapy', detail: 'World Psychiatric Association' },
  { title: 'Yoga Alliance RYT-200', detail: 'Internationally certified yoga teacher' },
  { title: 'English, Hindi & Gujarati', detail: 'Consultation languages' },
]

// The small credentials card next to the story (keep to about 5)
export const CARD_CREDENTIALS = [
  'MBBS, RUHS College of Medical Sciences, Jaipur',
  'DNB Psychiatry, Gujarat Institute of Mental Health, Ahmedabad',
  'Certification of Psychotherapy, World Psychiatric Association',
  'Yoga Alliance RYT-200, A Himalayan Yogi Institute, Rishikesh',
  'Member, Indian Psychiatric Society and Indian Medical Association',
]

// One row of small recognition tiles (keep to about 4). Each: { icon, title, detail }
export const HIGHLIGHTS = [
  { icon: '🎖️', title: 'Merit holder, CEREBRA 2025', detail: 'National PG psychiatry quiz, MGM Medical College, Indore' },
  { icon: '🏅', title: 'Commended for research', detail: 'NBEMS, for DNB thesis on OTT binge watching and procrastination' },
  { icon: '🎓', title: 'Trainer, Government of Gujarat', detail: 'Mental health training for medical officers' },
  { icon: '🏆', title: 'Part of a Guinness World Record', detail: 'NBEMS AI in Healthcare livestream, 2026' },
]

// Podcasts, interviews, articles. Each: { outlet, title, url, date, youtubeId }
export const FEATURES = [
  {
    outlet: 'Raising Consciousness with Sumit',
    title: 'Understanding the Human Psyche: A Journey Within',
    url: 'https://www.youtube.com/watch?v=ZItS-J7i_UA',
    youtubeId: 'ZItS-J7i_UA',
  },
  {
    outlet: 'Dr. Ashish Yadav on YouTube',
    title: 'How much sleep do you really need? A psychiatrist explains',
    url: 'https://www.youtube.com/watch?v=SvK3N1W81LQ',
    youtubeId: 'SvK3N1W81LQ',
  },
]
