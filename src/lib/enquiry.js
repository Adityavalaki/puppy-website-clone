// Shared by the puppy enquiry form and the contact letter form.

// Checks the visitor's input before anything is sent. Returns { fieldName: message } for every problem.
export function validateEnquiry({ name, phone, email }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please tell us your name.'
  // Digits, spaces, dashes, brackets and a leading +; at least 7 digits so a real number is likely.
  if (!/^\+?[\d\s()-]+$/.test(phone.trim()) || phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please add a phone or WhatsApp number, with country code.'
  }
  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'That email address does not look right.'
  return errors
}

// Sends the enquiry to Formspree. The endpoint comes from the VITE_FORMSPREE_ENDPOINT environment variable
// (set it in .env.local and in Vercel); without it nothing is sent and the form says so instead of pretending.
export async function sendEnquiry(values) {
  // Spam bots fill every field, people never see this one: quietly accept and drop.
  if (values.website) return { ok: true }
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  if (!endpoint) return { ok: false, message: 'Sending is not connected yet. Please message us on WhatsApp instead.' }
  try {
    const { website: _honeypot, ...fields } = values
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(fields),
    })
    if (!response.ok) throw new Error(`Formspree replied ${response.status}`)
    return { ok: true }
  } catch {
    return { ok: false, message: 'Something went wrong while sending. Please try again or message us on WhatsApp.' }
  }
}
