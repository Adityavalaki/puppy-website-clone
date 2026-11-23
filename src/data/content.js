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

// Puppies for sale. `slug` is the URL (/puppies/:slug); photos are free Unsplash images (docs/IMAGE-CREDITS.md).
export const puppies = [
  { slug: 'biscuit-maltipoo', name: 'Biscuit', breed: 'Maltipoo', sex: 'boy', age: '3 months', origin: 'local', image: '/images/puppies/maltipoo.jpg' },
  { slug: 'snow-pomeranian', name: 'Snow', breed: 'Korean Teacup Pomeranian', sex: 'girl', age: '2 months', origin: 'imported', image: '/images/puppies/pomeranian.jpg' },
  { slug: 'ginger-poodle', name: 'Ginger', breed: 'Korean Teacup Poodle', sex: 'girl', age: '2 months', origin: 'imported', image: '/images/puppies/poodle.jpg' },
  { slug: 'cocoa-cavapoo', name: 'Cocoa', breed: 'Cavapoo', sex: 'boy', age: '3 months', origin: 'local', image: '/images/puppies/cavapoo.jpg' },
  { slug: 'pepper-toy-poodle', name: 'Pepper', breed: 'Toy Poodle', sex: 'boy', age: '2 months', origin: 'local', image: '/images/puppies/toy-poodle.jpg' },
  { slug: 'mochi-shih-tzu', name: 'Mochi', breed: 'Shih Tzu', sex: 'girl', age: '2 months', origin: 'local', image: '/images/puppies/shih-tzu.jpg' },
]

export const hero = {
  title: ['Teacup puppies,', 'loved in Dubai'],
  lede: 'Visit our Downtown Dubai showroom to meet them in person, or reserve a rare miniature breed from breeders we trust abroad.',
  primaryCta: 'See available puppies',
  whatsappCta: 'Ask us on WhatsApp',
  lineupLabel: 'A few of the puppies in our showroom',
}

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
