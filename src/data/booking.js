// Booking settings: prices, payment links and UPI details.

// Razorpay payment page per price. Replace each placeholder with the real link.
// In Razorpay, set every page to redirect after payment to:
//   https://drashishyadav.com/booking-confirmed?ref=<BOOKING_REF>
export const RAZORPAY_LINKS = {
  799: 'https://rzp.io/rzp/Online-Consultation-30minutes',
  1499: 'https://rzp.io/rzp/Online-Consultation-60minutes',
  499: 'https://rzp.io/rzp/followup-Consultation-drashish',
  3499: 'https://rzp.io/rzp/ADHD-Assessment-Online',
  3999: 'https://rzp.io/rzp/ADHD-Assessment-Offline',
}

// Private code in the Razorpay redirect, so the confirmation page can't be opened by typing the address
export const BOOKING_REF = 'rzp-k7m2q9'

export const UPI_ID = 'ashishyadav0210-5@okhdfcbank'
export const UPI_PAYEE = 'Dr Ashish Yadav'
// UPI QR card per price, in /public/upi. Each QR has its amount built in.
export const UPI_QR_IMAGES = {
  799: '/upi/upi-799.png',
  1499: '/upi/upi-1499.png',
  499: '/upi/upi-499.png',
  3499: '/upi/upi-3499.png',
  3999: '/upi/upi-3999.png',
}

// Cal.com booking calendar for each session, shown after payment
const CAL_BASE = 'https://cal.com/drashishyadav/'
const CAL_EVENTS = {
  'first-online-30': 'online-consultation-30min',
  'first-online-60': 'online-consultation-60-min',
  'first-jhotwara-30': 'clinic-consultation-jhotwara',
  'first-jhotwara-60': 'clinic-consultation-jhotwara-60-minutes',
  'first-vaishali-30': 'clinic-consultation-vaishali-nagar-30-minutes',
  'first-vaishali-60': 'clinic-consultation-vaishali-nagar-60-minutes',
  'follow-up-online': 'follow-up-consultation-online',
  'follow-up-jhotwara': 'follow-up-consultation-jhotwara',
  'follow-up-vaishali': 'follow-up-consultation-vaishali-nagar',
  'adhd-online': 'adult-adhd-assessment-online',
  'adhd-jhotwara': 'adult-adhd-assessment-jhotwara',
  'adhd-vaishali': 'adult-adhd-assessment-vaishali-nagar',
}

export const calUrlFor = (type, mode, duration) => {
  const key = type === 'first' ? `${type}-${mode}-${duration}` : `${type}-${mode}`
  return CAL_BASE + CAL_EVENTS[key]
}

export const CONFIRM_WINDOW = 'a few hours'

export const SESSION_TYPES = [
  { id: 'first', label: 'First consultation', hint: 'Your first visit' },
  { id: 'follow-up', label: 'Follow-up', hint: 'Already under my care' },
  { id: 'adhd', label: 'Adult ADHD assessment', hint: '60-min evaluation and report' },
]

export const MODES = [
  { id: 'online', label: 'Online', hint: 'Google Meet' },
  { id: 'jhotwara', label: 'Jhotwara clinic', hint: 'Shri Ram Hospital' },
  { id: 'vaishali', label: 'Vaishali Nagar clinic', hint: 'Asha Clinic' },
]

// Price for a choice of type, mode and duration (minutes)
export const priceFor = (type, mode, duration) => {
  if (type === 'follow-up') return 499
  if (type === 'adhd') return mode === 'online' ? 3499 : 3999
  return duration === 60 ? 1499 : 799
}

export const durationsFor = (type) => (type === 'first' ? [30, 60] : [])

// Length shown in summaries
export const minutesFor = (type, duration) => (type === 'first' ? duration : type === 'adhd' ? 60 : 30)

export const formatPrice = (amount) => `₹${amount.toLocaleString('en-IN')}`

// UPI deep link: opens the patient's UPI app with the amount filled in (works on phones)
export const upiLink = (amount, note) =>
  `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_PAYEE)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`

// Remembers the chosen session between the booking page and the confirmation page
const STORAGE_KEY = 'pendingBooking'

export const saveBooking = (booking) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(booking))
  } catch {
    // Storage blocked: the confirmation page falls back to asking again
  }
}

export const loadBooking = () => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || null
  } catch {
    return null
  }
}
