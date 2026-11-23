// All site text and lists live here so components only handle layout.

// shortcut: placeholder number (same as the reference site's), swap for a real one before any real use.
const whatsappMessage = "Hi TeddyPups! I'd love to know more about your puppies."

export const site = {
  name: 'TeddyPups',
  tagline: 'a family for every pup',
  phoneDisplay: '+971 50 000 0000',
  phoneHref: 'tel:+971500000000',
  whatsappHref: `https://wa.me/971500000000?text=${encodeURIComponent(whatsappMessage)}`,
  // shortcut: .example is a reserved domain so no real inbox gets demo mail; use the real address before launch.
  email: 'hello@teddypups.example',
  address: 'Downtown Dubai, United Arab Emirates',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Puppies', to: '/puppies' },
  { label: 'Happy families', to: '/happy-families' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Visit & contact', to: '/contact' },
]

export const footer = {
  title: 'Welcome home.',
  blurb: 'TeddyPups is a Dubai home for miniature puppies, with caring guidance, full health checks and safe delivery to families everywhere.',
  exploreLinks: [
    { label: 'Available puppies', to: '/puppies' },
    { label: 'Gone home', to: '/gone-home' },
    { label: 'Happy families', to: '/happy-families' },
    { label: 'How it works', to: '/how-it-works' },
    { label: 'Delivery & collection', to: '/how-it-works#delivery' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Visit & contact', to: '/contact' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
}
