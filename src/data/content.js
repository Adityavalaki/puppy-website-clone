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

// Stamps in the "puppy passport". shape picks the stamp outline; ink and tilt make each one look hand-stamped.
export const trust = {
  kicker: 'puppy passport',
  title: 'Why families choose TeddyPups',
  stamps: [
    { title: 'Vet checked & well', text: 'Each puppy is vaccinated, dewormed and leaves with a signed health certificate.', shape: 'round', icon: 'heart', ink: '#a24a1a', tilt: '-8deg' },
    { title: 'Safe flights from Korea', text: 'Careful breeders, calm travel and premium care at every step of the way.', shape: 'ticket', icon: 'plane', ink: '#1f6b45', tilt: '5deg' },
    { title: 'Help, day and night', text: 'Always here for you, from picking your puppy to life after delivery.', shape: 'oval', icon: 'chat', ink: '#5a3a28', tilt: '-4deg' },
    { title: 'Loved around the world', text: 'Our puppies have settled into happy homes in many countries.', shape: 'scallop', icon: 'globe', ink: '#c2622b', tilt: '7deg' },
  ],
}

// Placeholder testimonial and captions written for this demo (the reference site's real ones are not reused).
export const families = {
  title: 'Happy homes & happy pups',
  lede: 'Nothing makes us prouder than seeing our puppies settle into loving homes. These sweet moments come from families who welcomed a TeddyPups puppy into their lives and their hearts.',
  quote: 'TeddyPups made the whole thing easy. They answered every question during the import and kept us updated every day. Our Maltipoo arrived happy, healthy and full of energy, and knowing help was there day and night meant we never worried once.',
  quoteBy: 'Aisha K., Dubai, UAE',
  cta: 'See every happy family',
  photos: [
    { src: '/images/gallery/family-1.jpg', caption: 'First cuddle at home 🧸' },
    { src: '/images/gallery/family-2.jpg', caption: 'Bella and her new best friend' },
    { src: '/images/gallery/family-3.jpg', caption: 'Off on our first walk ☀️' },
    { src: '/images/gallery/family-4.jpg', caption: 'Our little teddy ❤️' },
    { src: '/images/gallery/family-5.jpg', caption: 'Snuggle time 🥰' },
    { src: '/images/gallery/family-6.jpg', caption: 'Welcome home, Coco' },
    { src: '/images/gallery/family-7.jpg', caption: 'Best day ever 🐾' },
    { src: '/images/gallery/family-8.jpg', caption: 'Family of three now' },
  ],
}

export const faqs = [
  { q: 'Are your puppies vaccinated and vet checked?', a: 'Yes. Every puppy comes with a health certificate from a licensed vet, plus up-to-date vaccines and deworming, before going home.' },
  { q: 'Can I meet a puppy before choosing?', a: 'Of course. Visit our Downtown Dubai showroom and spend time with the local puppies before you make up your mind.' },
  { q: 'Can my puppy come home the same day?', a: 'Yes. Local puppies are ready right away, so you can take yours home on the day you visit.' },
]

export const questions = {
  title: 'Your questions, answered',
  cta: 'See all questions',
}

export const homeCta = {
  title: 'Ready for your new best friend?',
  lede: 'Welcome a healthy, happy teacup or designer puppy with friendly guidance from start to finish. We help you find the right match and deliver safely anywhere in the UAE.',
  whatsappCta: 'Chat on WhatsApp',
  contactCta: 'Visit & contact',
  mat: 'welcome home',
  image: '/images/puppies/maltipoo.jpg',
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
