// All site text and lists live here so components only handle layout.

// shortcut: placeholder number (same as the reference site's), swap for a real one before any real use.
export const whatsappMessage = "Hi TeddyPups! I'd love to know more about your puppies."

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
  { slug: 'honey-maltipoo', name: 'Honey', breed: 'Maltipoo', sex: 'girl', age: '3 months', origin: 'local', image: '/images/puppies/maltipoo-2.jpg' },
  { slug: 'pearl-maltipoo', name: 'Pearl', breed: 'Korean Teacup Maltipoo', sex: 'girl', age: '2.5 months', origin: 'imported', image: '/images/puppies/maltipoo-3.jpg' },
  { slug: 'peanut-pomeranian', name: 'Peanut', breed: 'Pomeranian', sex: 'boy', age: '2 months', origin: 'local', image: '/images/puppies/pomeranian-2.jpg' },
  { slug: 'fudge-pomeranian', name: 'Fudge', breed: 'Korean Teacup Pomeranian', sex: 'girl', age: '2 months', origin: 'imported', image: '/images/puppies/pomeranian-3.jpg' },
  { slug: 'shadow-pomeranian', name: 'Shadow', breed: 'Korean Teacup Pomeranian', sex: 'boy', age: '2 months', origin: 'imported', image: '/images/puppies/pomeranian-4.jpg' },
  { slug: 'caramel-cavapoo', name: 'Caramel', breed: 'Cavapoo', sex: 'girl', age: '3 months', origin: 'local', image: '/images/puppies/cavapoo-2.jpg' },
  { slug: 'oreo-shih-tzu', name: 'Oreo', breed: 'Shih Tzu', sex: 'girl', age: '2 months', origin: 'local', image: '/images/puppies/shih-tzu-2.jpg' },
  { slug: 'bruno-shih-tzu', name: 'Bruno', breed: 'Shih Tzu', sex: 'boy', age: '2 months', origin: 'local', image: '/images/puppies/shih-tzu-3.jpg' },
  { slug: 'toffee-toy-poodle', name: 'Toffee', breed: 'Toy Poodle', sex: 'girl', age: '2 months', origin: 'local', image: '/images/puppies/toy-poodle-2.jpg' },
]

export const meet = {
  title: 'Meet our pups',
  lede: 'Real puppies and real photos, each one ready to meet their family.',
  cta: 'Browse all puppies',
  allLabel: 'See them all',
}

export const hero = {
  title: ['Teacup puppies,', 'loved in Dubai'],
  lede: 'Visit our Downtown Dubai showroom to meet them in person, or reserve a rare miniature breed from breeders we trust abroad.',
  primaryCta: 'See available puppies',
  whatsappCta: 'Ask us on WhatsApp',
  lineupLabel: 'A few of the puppies in our showroom',
}

export const paths = {
  title: 'Two paths to your new puppy',
  local: {
    sign: 'Here in Dubai',
    caption: 'At our showroom',
    image: '/images/puppies/pomeranian-3.jpg',
    text: 'Cuddle them first, then decide. Our Dubai puppies are ready to visit in the showroom and can go home the same day.',
    cta: 'See Dubai puppies',
  },
  imported: {
    sign: 'Flown in for you',
    image: '/images/puppies/maltipoo-3.jpg',
    text: 'Rare Korean teacup breeds, brought to your door. Pick from trusted breeders abroad and we take care of the whole journey.',
    cta: 'See imported puppies',
  },
  planeLabel: 'A plane flying a puppy from Korea to Dubai',
}

export const journey = {
  title: 'Your road to a puppy',
  lede: 'A friendly, step-by-step service that keeps bringing your puppy home simple, safe and fun.',
  steps: [
    { title: 'Pick your breed', text: 'Tell us the breed you love or what you need in a dog. We will suggest puppies that suit your home and routine.' },
    { title: 'See photos & details', text: 'We send real photos, health records and every detail you need, straight to your WhatsApp.' },
    { title: 'Safe, happy delivery', text: 'Once you say yes, we arrange everything and bring your puppy to you calmly and safely.' },
  ],
  cta: 'How it works',
  phoneLabel: 'A WhatsApp chat with TeddyPups',
  breeds: [
    { label: 'Maltipoo', slug: 'maltipoo' },
    { label: 'Pomeranian', slug: 'pomeranian' },
    { label: 'Poodle', slug: 'poodle' },
    { label: 'Cavapoo', slug: 'cavapoo' },
    { label: 'Shih Tzu', slug: 'shih-tzu' },
  ],
  snaps: ['/images/puppies/maltipoo.jpg', '/images/puppies/cavapoo.jpg', '/images/puppies/toy-poodle.jpg', '/images/puppies/maltipoo-2.jpg'],
  compose: 'Message us on WhatsApp',
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
