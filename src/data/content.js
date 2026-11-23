// All site text and lists live here so components only handle layout.

// shortcut: placeholder number (same as the reference site's), swap for a real one before any real use.
const whatsappMessage = "Hi TeddyPups! I'd love to know more about your puppies."

export const site = {
  name: 'TeddyPups',
  phoneDisplay: '+971 50 000 0000',
  phoneHref: 'tel:+971500000000',
  whatsappHref: `https://wa.me/971500000000?text=${encodeURIComponent(whatsappMessage)}`,
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Puppies', to: '/puppies' },
  { label: 'Happy families', to: '/happy-families' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Visit & contact', to: '/contact' },
]
