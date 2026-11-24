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
  loaderText: 'every puppy is family',
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
  peek: 'hm?', // the hero pup's speech bubble on hover
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

// The home page shows the first three; the FAQ page shows them all.
export const faqs = [
  { q: 'Are your puppies vaccinated and vet checked?', a: 'Yes. Every puppy comes with a health certificate from a licensed vet, plus up-to-date vaccines and deworming, before going home.' },
  { q: 'Can I meet a puppy before choosing?', a: 'Of course. Visit our Downtown Dubai showroom and spend time with the local puppies before you make up your mind.' },
  { q: 'Can my puppy come home the same day?', a: 'Yes. Local puppies are ready right away, so you can take yours home on the day you visit.' },
  { q: 'Do you bring puppies in from abroad?', a: 'Yes. We work with trusted breeders in Korea and reserve rare teacup breeds for you, then handle the whole trip to Dubai.' },
  { q: 'How does an imported puppy travel?', a: 'With all health papers ready, in an airline-approved carrier and with a caring handler, on the shortest route we can book.' },
  { q: 'Will I see photos and health records first?', a: 'Always. We send real photos, videos and the health records on WhatsApp before you commit to anything.' },
  { q: 'Do you deliver?', a: 'Yes. We deliver across Dubai and the UAE, and we can arrange worldwide delivery for imported puppies.' },
  { q: 'Which breeds do you usually have?', a: 'Mostly Maltipoo, Pomeranian, Toy and Teacup Poodle, Cavapoo and Shih Tzu. Ask us if you are looking for something else.' },
  { q: 'Is there help after my puppy comes home?', a: 'Yes. We stay a message away for advice on food, training, grooming and settling in, for as long as you need us.' },
]

// Filter chips on the Puppies page. Each sets one URL query value (?origin=, ?breed=, ?sex=).
export const puppyFilters = [
  { key: 'origin', label: 'where', options: [{ value: 'local', label: 'In Dubai' }, { value: 'imported', label: 'Imported' }] },
  { key: 'breed', label: 'breed', options: [{ value: 'maltipoo', label: 'Maltipoo' }, { value: 'pomeranian', label: 'Pomeranian' }, { value: 'poodle', label: 'Poodle' }, { value: 'cavapoo', label: 'Cavapoo' }, { value: 'shih-tzu', label: 'Shih Tzu' }] },
  { key: 'sex', label: 'boy or girl', options: [{ value: 'boy', label: 'Boys' }, { value: 'girl', label: 'Girls' }] },
]

export const puppiesPage = {
  kicker: "from Teddy's sketchbook",
  title: 'Available puppies',
  lede: 'Every listing shows real photos of the actual puppy. Open a profile to see more, then ask us about them on WhatsApp.',
  goneTitle: 'Already gone home',
  goneCta: 'See them all',
}

export const puppyDetail = {
  checklist: ['Vaccinated', 'Dewormed', 'Health certificate from a licensed vet', 'Fully checked before joining your family'],
  steps: {
    local: { title: 'Coming home from Dubai', steps: [
      { title: 'Say hello', text: 'Visit the showroom or ask for a video call to meet your puppy.' },
      { title: 'Ask anything', text: 'We go through health records, food and routine with you.' },
      { title: 'Get ready', text: 'We help you prepare a bed, food and toys for day one.' },
      { title: 'Welcome home', text: 'Take your puppy home the same day or have them delivered.' },
    ] },
    imported: { title: 'Coming home from abroad', steps: [
      { title: 'Reserve your puppy', text: 'Tell us which puppy has stolen your heart.' },
      { title: 'Personal updates', text: 'We confirm the details and send news of your puppy as the trip gets closer.' },
      { title: 'Travel and arrival', text: 'We handle health checks, flights and every document.' },
      { title: 'Welcome home', text: 'We help your new puppy settle in calmly at home.' },
    ] },
  },
}

// Puppies that already found families (photos reused from the free Unsplash set).
export const goneHome = [
  { name: 'Ace', breed: 'Pomeranian', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian.jpg' },
  { name: 'Leo', breed: 'Poodle', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/poodle.jpg' },
  { name: 'Mia', breed: 'Maltipoo', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/maltipoo-2.jpg' },
  { name: 'Sadie', breed: 'Maltipoo', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/maltipoo.jpg' },
  { name: 'Ollie', breed: 'Pomeranian', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian-4.jpg' },
  { name: 'Bruno', breed: 'Cavapoo', sex: 'boy', from: 'Dubai showroom', image: '/images/puppies/cavapoo.jpg' },
  { name: 'Luna', breed: 'Shih Tzu', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/shih-tzu-2.jpg' },
  { name: 'Teddy', breed: 'Toy Poodle', sex: 'boy', from: 'Dubai showroom', image: '/images/puppies/toy-poodle.jpg' },
  { name: 'Daisy', breed: 'Cavapoo', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/cavapoo-2.jpg' },
]

export const goneHomePage = {
  title: 'Gone home',
  lede: 'Every puppy here already lives with a loving family. Looking for one just like them? Tell us and we will help you find your match.',
  cta: 'See available puppies',
  booth: 'tickets home',
}

export const familiesPage = {
  kicker: 'our wall of happy endings',
  title: 'Happy families',
  lede: 'Nothing makes us happier than seeing our puppies in loving homes. Here are some sweet moments our families shared after welcoming their new friend.',
}

export const howItWorks = {
  title: 'How it works',
  lede: 'Whether you visit us here in Dubai or reserve a rare breed from abroad, we make bringing your puppy home simple and memorable.',
  chapters: [
    { id: 'two-ways', label: 'Two ways home' },
    { id: 'promise', label: 'Our puppy promise' },
    { id: 'delivery', label: 'Delivery & collection' },
    { id: 'why-us', label: 'Why choose us' },
  ],
  ways: {
    kicker: 'choose your way',
    title: 'Two ways home',
    local: { tab: 'In Dubai', sub: 'meet in person', title: 'Meet your puppy in person', text: 'Visit our Downtown Dubai showroom and choose your puppy face to face. Our local puppies come from trusted breeders, raised with care, good food and regular vet checks.', scene: 'Downtown Dubai' },
    imported: { tab: 'Imported', sub: 'reserved for you', title: 'Reserve a rare breed', text: 'Pick a Korean teacup breed from breeders we know well. We share photos and health records, then handle the flight, the papers and a gentle arrival.', scene: 'Korea to Dubai' },
  },
  promise: {
    title: 'Our puppy promise',
    stamps: [
      { title: 'Caring breeders', text: 'We only work with breeders who keep high standards of health and kindness.', shape: 'round', icon: 'heart', ink: '#a24a1a', tilt: '-6deg' },
      { title: 'Nothing hidden', text: 'Photos, videos and health papers are shared before your puppy travels.', shape: 'ticket', icon: 'plane', ink: '#1f6b45', tilt: '4deg' },
      { title: 'Calm delivery', text: 'We take care of every step so your puppy arrives happy and healthy.', shape: 'oval', icon: 'chat', ink: '#5a3a28', tilt: '-3deg' },
    ],
  },
  delivery: {
    title: 'Delivery & collection',
    lede: 'From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels in comfort and arrives safely.',
    items: [
      { title: 'Same-day collection', text: 'Choose a local puppy at the showroom and take them home today.' },
      { title: 'Delivery in Dubai', text: 'We bring your puppy to your door anywhere in Dubai.' },
      { title: 'Safe air travel', text: 'Imported puppies fly with approved carriers and full paperwork.' },
      { title: 'Worldwide delivery', text: 'Living outside the UAE? Ask us about delivery to your country.' },
    ],
  },
  why: {
    title: 'Why choose us',
    text: 'We are here to help you find a new family member. From your first message to the day your puppy arrives, we are with you at every step, and we keep things clear, honest and full of love.',
    items: [
      { title: 'International travel', text: 'Years of experience bringing puppies safely from Korea to Dubai.', icon: 'plane' },
      { title: 'Help 24/7', text: 'Questions at midnight? We are only a message away, before and after delivery.', icon: 'chat' },
      { title: 'Health guarantee', text: 'Every puppy is vaccinated, dewormed and checked by a licensed vet before going home.', icon: 'heart' },
    ],
  },
  cta: {
    title: 'Healthy, happy, one of a kind',
    text: 'When you choose TeddyPups you get a healthy, well-raised puppy and friendly advice on training, food and care, so you and your new friend get off to the best start.',
    whatsapp: 'Ask us on WhatsApp',
    puppies: 'See available puppies',
  },
}

export const faqPage = {
  title: 'Questions & answers',
  lede: "Can't find your answer? Message us on WhatsApp, our team is around day and night.",
  searchLabel: 'sniff out a question',
  searchPlaceholder: 'delivery, Korea, vaccines…',
  ask: 'Ask your own question',
  empty: 'No notes match that yet. Try another word, or ask us directly.',
}

export const contactPage = {
  title: 'Get in touch with us',
  lede: 'Questions about our puppies or how adoption works? Send us a letter below and our team will reply soon. Ready to adopt or just curious, we would love to hear from you.',
  visitTitle: 'Visit us in Downtown Dubai',
  visitText: 'Come to our Downtown Dubai showroom and meet the puppies face to face.',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Downtown+Dubai',
  mapsCta: 'Open in Google Maps',
  visitImage: '/images/puppies/pomeranian-3.jpg',
}

export const notFoundPage = {
  kicker: 'have you seen this page?',
  title: 'Lost',
  text: 'One page, last seen wandering off. It answers to the address you typed, but it is not here any more. Teddy is on the case.',
  tabsLabel: 'if found, take a tab:',
  tabs: [
    { label: 'Home', to: '/' },
    { label: 'Puppies', to: '/puppies' },
    { label: 'How it works', to: '/how-it-works' },
    { label: 'Questions', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ],
}

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
