// All site text and lists live here so components only handle layout.
// Wording is copied word for word from the reference site (puppy.instabizweb.com), as Aditya asked for a
// same-text clone; photos stay our own free Unsplash ones (docs/IMAGE-CREDITS.md).

// shortcut: placeholder number (same as the reference site's), swap for a real one before any real use.
export const whatsappMessage = "Hi TeddyPups! I'd love to know more about your puppies."

export const site = {
  name: 'TeddyPups',
  fullName: 'TeddyPups U.A.E.',
  tagline: 'every puppy is family',
  phoneDisplay: '+971 50 000 0000',
  phoneHref: 'tel:+971500000000',
  whatsappHref: `https://wa.me/971500000000?text=${encodeURIComponent(whatsappMessage)}`,
  email: 'info@instabizweb.com',
  address: 'Downtown Dubai, United Arab Emirates',
  loaderText: 'every puppy is family',
}

export const pageTitles = {
  home: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  brand: 'TeddyPups U.A.E.',
  pages: {
    '/puppies': 'Available puppies',
    '/gone-home': 'Gone home',
    '/happy-families': 'Happy families',
    '/how-it-works': 'How it works',
    '/faq': 'Questions & answers',
    '/contact': 'Visit & contact',
  },
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Puppies', to: '/puppies' },
  { label: 'Happy families', to: '/happy-families' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Visit & contact', to: '/contact' },
]

// Puppies for sale, as listed on the reference site. Many are listed by breed only, so `name` equals `breed`
// for those and the components then leave the breed out of the details line.
// `collection: 'korean-teacup'` is the "Korean Teacup" filter; `video` adds the "▶ video" badge.
export const puppies = [
  { slug: 'maltipoo-max-male', name: 'Max', breed: 'Maltipoo', sex: 'boy', age: '3 months', video: true, image: '/images/puppies/maltipoo.jpg' },
  { slug: 'korean-teacup-maltipoo-female', name: 'Korean Teacup Maltipoo', breed: 'Korean Teacup Maltipoo', sex: 'girl', age: '2 months', video: true, collection: 'korean-teacup', image: '/images/puppies/maltipoo-3.jpg' },
  { slug: 'korean-teacup-poodle-female', name: 'Korean Teacup Poodle', breed: 'Korean Teacup Poodle', sex: 'girl', age: '2 months', collection: 'korean-teacup', image: '/images/puppies/poodle.jpg' },
  { slug: 'maltipoo-cavapoo-male', name: 'Maltipoo & Cavapoo', breed: 'Maltipoo & Cavapoo', sex: 'boy', age: '3 months Maltipoo & 2 months Cavapoo', video: true, image: '/images/puppies/cavapoo.jpg' },
  { slug: 'toy-poodle-male-female', name: 'Toy Poodle', breed: 'Toy Poodle', sex: 'boy & girl', age: '2 months', image: '/images/puppies/toy-poodle.jpg' },
  { slug: 'maltipoo-female-2', name: 'Maltipoo', breed: 'Maltipoo', sex: 'girl', age: '3 months', video: true, image: '/images/puppies/maltipoo-2.jpg' },
  { slug: 'pomeranian-female', name: 'Pomeranian', breed: 'Pomeranian', sex: 'girl', age: '3 months', image: '/images/puppies/pomeranian-2.jpg' },
  { slug: 'copper-male', name: 'Copper', breed: 'Cavapoo', sex: 'boy', age: '2 months', image: '/images/puppies/cavapoo-2.jpg' },
  { slug: 'shitzu-female', name: 'Shih Tzu', breed: 'Shih Tzu', sex: 'girl', age: '2 months', image: '/images/puppies/shih-tzu.jpg' },
  { slug: 'shitzu-male', name: 'Shih Tzu', breed: 'Shih Tzu', sex: 'boy', age: '2 months', image: '/images/puppies/shih-tzu-2.jpg' },
  { slug: 'maltipoo-female-1', name: 'Maltipoo', breed: 'Maltipoo', sex: 'girl', age: '2.5 months', image: '/images/puppies/toy-poodle-2.jpg' },
  { slug: 'maltipoo-female', name: 'Maltipoo', breed: 'Maltipoo', sex: 'girl', age: '2 months', image: '/images/puppies/shih-tzu-3.jpg' },
  { slug: 'korean-teacup-pomeranian-1', name: 'Korean Teacup Pomeranian', breed: 'Korean Teacup Pomeranian', sex: 'girl', age: '2 months', collection: 'korean-teacup', image: '/images/puppies/pomeranian.jpg' },
  { slug: 'korean-teacup-pomeranian', name: 'Korean Teacup Pomeranian', breed: 'Korean Teacup Pomeranian', sex: 'girl', age: '2 months', collection: 'korean-teacup', image: '/images/puppies/pomeranian-3.jpg' },
  { slug: 'korean-teacup-pomeranian-male', name: 'Korean Teacup Pomeranian', breed: 'Korean Teacup Pomeranian', sex: 'boy', age: '2 months', collection: 'korean-teacup', image: '/images/puppies/pomeranian-4.jpg' },
]

export const meet = {
  title: 'Meet the pups',
  lede: 'Real puppies, real photos, looking for their families right now.',
  cta: 'See all available puppies',
  allLabel: 'Meet them all',
}

export const hero = {
  title: ['Premium teacup', 'puppies in Dubai'],
  lede: 'Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.',
  primaryCta: 'View available puppies',
  whatsappCta: 'Enquire on WhatsApp',
  lineupLabel: 'A few of the puppies in our showroom',
  // The six photos along the cushion, in the reference site's order (slugs from `puppies`).
  lineup: ['maltipoo-female-2', 'korean-teacup-pomeranian-male', 'maltipoo-female', 'maltipoo-cavapoo-male', 'korean-teacup-pomeranian-1', 'copper-male'],
  peek: 'hm?', // the hero pup's speech bubble on hover
  follow: 'coming?', // the walking dog asks this when you stop scrolling partway
}

export const paths = {
  title: 'Two ways to meet your puppy',
  local: {
    sign: 'Puppies in Dubai',
    caption: 'In our showroom',
    image: '/images/puppies/pomeranian-3.jpg',
    text: 'See them, love them, take them home. Come meet our locally available puppies before you decide.',
    cta: 'Meet local puppies',
  },
  imported: {
    sign: 'Imported for you',
    image: '/images/puppies/maltipoo-3.jpg',
    text: "Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.",
    cta: 'See imported puppies',
  },
  planeLabel: 'A plane flying a puppy from Korea to Dubai',
}

export const journey = {
  title: 'Your puppy journey',
  lede: 'A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.',
  online: 'online',
  typing: 'typing…', // shown with the ••• bubble while you scroll
  steps: [
    { title: 'Choose your breed', text: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle." },
    { title: 'Get photos & details', text: 'Our team will share real photos, health details, and all necessary information directly on WhatsApp.' },
    { title: 'Secure & safe delivery', text: 'Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.' },
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
  compose: 'Say hello on WhatsApp',
}

// Stamps in the "puppy passport". shape picks the stamp outline; ink and tilt make each one look hand-stamped.
export const trust = {
  kicker: 'puppy passport',
  title: 'Why families trust TeddyPups',
  stamps: [
    { title: 'Vet-checked & healthy', text: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate.', shape: 'round', icon: 'heart', ink: '#a24a1a', tilt: '-8deg' },
    { title: 'Korea to Dubai, safely', text: 'Trusted breeders, safe travel, and premium care from start to finish.', shape: 'ticket', icon: 'plane', ink: '#1f6b45', tilt: '5deg' },
    { title: 'Support 24/7', text: 'Always here to help, from choosing your puppy to post-delivery support.', shape: 'oval', icon: 'chat', ink: '#5a3a28', tilt: '-4deg' },
    { title: 'Trusted by families worldwide', text: 'Puppies delivered to loving homes all around the world.', shape: 'scallop', icon: 'globe', ink: '#c2622b', tilt: '7deg' },
  ],
}

export const families = {
  title: 'Happy families & puppies',
  lede: 'We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.',
  quote: 'TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.',
  quoteBy: 'Sarah M., Dubai, UAE',
  cta: 'See every happy family',
  photos: [
    { src: '/images/gallery/family-1.jpg', caption: 'Lulu 🧸 with her new mummy ❤️' },
    { src: '/images/gallery/family-2.jpg', caption: 'Adorable Maltipoo baby 🧸❤️' },
    { src: '/images/gallery/family-3.jpg', caption: 'My new teddy puppy 🥰🧸' },
    { src: '/images/gallery/family-4.jpg', caption: 'Our new puppies 🧸🥰🤗' },
    { src: '/images/gallery/family-5.jpg', caption: 'New puppy 🧸😍' },
    { src: '/images/gallery/family-6.jpg', caption: 'Gang of 3 😍🧸' },
    { src: '/images/gallery/family-7.jpg', caption: 'So happy 😍😍' },
    { src: '/images/gallery/family-8.jpg', caption: 'New pup 🤗💫' },
  ],
}

// The home page shows the first three; the FAQ page shows them all.
export const faqs = [
  { q: 'Are your puppies vaccinated and health-checked?', a: 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.' },
  { q: 'Can I meet a puppy before I decide?', a: 'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.' },
  { q: 'Can I take my puppy home the same day?', a: 'Local puppies are available immediately, so you can take your puppy home the same day.' },
  { q: 'Do you import puppies from abroad?', a: 'Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.' },
  { q: 'How does an imported puppy travel to Dubai?', a: 'We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.' },
  { q: 'Will I see photos and health details first?', a: 'Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.' },
  { q: 'Do you deliver?', a: 'Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.' },
  { q: 'Which breeds do you usually have?', a: 'Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.' },
  { q: 'Is there help after my puppy comes home?', a: 'Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.' },
]

// Filter chips on the Puppies page. Each option sets one URL query value; "where" mixes two keys (?origin=,
// ?collection=) and its options replace each other, like the reference site.
export const puppyFilters = [
  { label: 'where', options: [{ key: 'origin', value: 'imported', label: 'Imported' }, { key: 'collection', value: 'korean-teacup', label: 'Korean Teacup' }] },
  { label: 'breed', options: [{ key: 'breed', value: 'maltipoo', label: 'Maltipoo' }, { key: 'breed', value: 'pomeranian', label: 'Pomeranian' }, { key: 'breed', value: 'poodle', label: 'Poodle' }, { key: 'breed', value: 'cavapoo', label: 'Cavapoo' }, { key: 'breed', value: 'shih-tzu', label: 'Shih Tzu' }] },
  { label: 'boy or girl', options: [{ key: 'sex', value: 'boy', label: 'Boys' }, { key: 'sex', value: 'girl', label: 'Girls' }] },
]

export const puppiesPage = {
  kicker: "from Teddy's sketchbook",
  title: 'Available puppies',
  portraitSays: 'hm?',
  lede: 'Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.',
  goneTitle: 'Already gone home',
  goneLede: 'These puppies have found their families.',
  goneCta: "See the puppies who've gone home",
  goneTag: 'gone home ♥',
}

// Every puppy on the reference site is imported, so the detail page always shows the trip from abroad.
export const puppyDetail = {
  checklistTitle: 'Every Teddy Pup comes',
  checklist: ['Vaccinated', 'Dewormed', 'Verified health certificate from licensed vets', 'Thoroughly checked before joining your family'],
  where: 'Imported for you',
  wayHome: { title: 'Coming home from abroad', steps: [
    { title: 'Reserve your puppy', text: 'Tell us which puppy has captured your heart.' },
    { title: 'Personalized consultation', text: "We finalize details with you and share updates on your puppy's journey." },
    { title: 'Import and arrival', text: 'We manage health checks, travel arrangements, and documentation.' },
    { title: 'Welcome home', text: 'We help your new puppy settle in and ensure a smooth transition into your home.' },
  ] },
  enquiryText: 'Leave your details and our team will get back to you promptly — or',
  enquiryLink: 'message us on WhatsApp',
  enquiryEnd: 'for the quickest reply.',
}

// Puppies that already found families, as on the reference site's Gone home page (photos reused from our set).
export const goneHome = [
  { name: 'Ace', breed: 'Pomeranian', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian.jpg' },
  { name: 'Leo', breed: 'Poodle', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/poodle.jpg' },
  { name: 'Mia', breed: 'Maltipoo', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/maltipoo-2.jpg' },
  { name: 'Sadie', breed: 'Maltipoo', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/maltipoo.jpg' },
  { name: 'Pomeranian', breed: 'Pomeranian', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian-4.jpg' },
  { name: 'Ollie', breed: 'Pomsky', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian-2.jpg' },
  { name: 'Bruno', breed: 'Maltipoo', sex: 'boy', from: 'Dubai showroom', image: '/images/puppies/maltipoo-3.jpg' },
  { name: 'Buddy', breed: 'Maltese', sex: 'boy', from: 'Dubai showroom', image: '/images/puppies/shih-tzu.jpg' },
  { name: 'Charlie', breed: 'Maltese', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/shih-tzu-2.jpg' },
  { name: 'Daisy', breed: 'Pomeranian', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/pomeranian-3.jpg' },
  { name: 'Bella', breed: 'Pomeranian', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/pomeranian.jpg' },
  { name: 'Teddy', breed: 'Poodle', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/toy-poodle.jpg' },
  { name: 'Molly', breed: 'Poodle', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/toy-poodle-2.jpg' },
  { name: 'Coco', breed: 'Pomsky', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/pomeranian-4.jpg' },
  { name: 'Rosie', breed: 'Pomsky', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/pomeranian-2.jpg' },
  { name: 'Leo', breed: 'Pomeranian', sex: 'boy', from: 'Dubai showroom', image: '/images/puppies/pomeranian-3.jpg' },
  { name: 'Molly', breed: 'Poodle', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/poodle.jpg' },
  { name: 'Rocky', breed: 'Poodle', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/toy-poodle.jpg' },
  { name: 'Sophie', breed: 'Maltipoo', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/maltipoo-2.jpg' },
  { name: 'Lola', breed: 'Maltipoo', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/maltipoo-3.jpg' },
  { name: 'Rex', breed: 'Pomeranian', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian.jpg' },
  { name: 'Finn', breed: 'Pomsky', sex: 'boy', from: 'TeddyPups', image: '/images/puppies/pomeranian-4.jpg' },
  { name: 'Zoe', breed: 'Maltipoo', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/maltipoo.jpg' },
  { name: 'Mimi', breed: 'Pomeranian', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/pomeranian-2.jpg' },
  { name: 'Bailey', breed: 'Bichon', sex: 'boy', from: 'Dubai showroom', image: '/images/puppies/shih-tzu-3.jpg' },
  { name: 'Maltipoo', breed: 'Maltipoo', sex: 'girl', from: 'TeddyPups', image: '/images/puppies/toy-poodle-2.jpg' },
  { name: 'Poodle', breed: 'Poodle', sex: 'girl', from: 'Dubai showroom', image: '/images/puppies/poodle.jpg' },
]

export const goneHomePage = {
  title: 'Gone home',
  lede: "Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.",
  cta: 'See available puppies',
  booth: 'tickets home',
}

export const familiesPage = {
  kicker: 'our wall of happy endings',
  title: 'Happy families',
  lede: 'Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.',
  counted: 'moments and counting',
  ending: 'every one of them was a Teddy Pup once',
}

export const howItWorks = {
  title: 'How it works',
  lede: 'Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.',
  chapters: [
    { id: 'two-ways', label: 'Two ways home' },
    { id: 'promise', label: 'Our premium puppy promise' },
    { id: 'delivery', label: 'Delivery & collection' },
    { id: 'why-us', label: 'Why choose us' },
  ],
  ways: {
    kicker: 'choose your way',
    title: 'Two ways home',
    // Each tab: an intro beside a picture, then four step cards (icon names from ui/Stamp.jsx).
    local: {
      tab: 'In Dubai',
      sub: 'meet in person',
      title: 'Meet your puppy in person',
      text: "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.",
      scene: 'Downtown Dubai',
      steps: [
        { title: 'Explore our puppies', text: 'Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.', icon: 'search' },
        { title: 'Choose your puppy', text: 'Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.', icon: 'heart' },
        { title: 'Meet before you choose', text: 'Spend time bonding before making your decision.', icon: 'chat' },
        { title: 'Pick-up or delivery', text: 'Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.', icon: 'house' },
      ],
    },
    imported: {
      tab: 'Imported',
      sub: 'order upon request',
      title: 'Order upon request',
      text: "Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.",
      note: "From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.",
      from: 'Europe · Korea',
      steps: [
        { title: 'Reserve your puppy', text: 'Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.', icon: 'calendar' },
        { title: 'Personalized consultation', text: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.", icon: 'chat' },
        { title: 'Import and arrival', text: 'We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.', icon: 'plane' },
        { title: 'Welcome home', text: 'Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.', icon: 'house' },
      ],
    },
  },
  promise: {
    kicker: 'puppy passport',
    title: 'Our premium puppy promise',
    stamps: [
      { title: 'Hand-selected breeders', text: 'We work only with breeders who uphold the highest ethical and health standards.', shape: 'round', icon: 'heart', ink: '#a24a1a', tilt: '-6deg' },
      { title: 'Full transparency', text: 'Photos, videos, and health certificates are shared before your puppy travels.', shape: 'ticket', icon: 'plane', ink: '#1f6b45', tilt: '4deg' },
      { title: 'Safe, stress-free delivery', text: 'We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.', shape: 'oval', icon: 'chat', ink: '#5a3a28', tilt: '-3deg' },
    ],
  },
  delivery: {
    title: 'Delivery & collection',
    lede: 'From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.',
    items: [
      { title: 'Take your puppy home the same day', text: 'Local puppies are available immediately — visit, fall in love, and go home together.' },
      { title: 'Delivery within Dubai', text: 'Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.' },
      { title: 'Safe international cargo', text: 'We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.' },
      { title: 'Worldwide delivery', text: 'We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.' },
    ],
  },
  why: {
    title: 'Why choose us',
    text: "We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.",
    items: [
      { title: 'International cargo', text: 'We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.', icon: 'plane' },
      { title: 'Support 24/7', text: "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away.", icon: 'chat' },
      { title: 'Health guarantee', text: 'All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.', icon: 'heart' },
    ],
  },
  cta: {
    title: 'Unique and high quality puppies',
    text: "When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.",
    whatsapp: 'Ask us on WhatsApp',
    puppies: 'See available puppies',
  },
}

export const faqPage = {
  title: 'Questions & answers',
  lede: "Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.",
  searchLabel: 'sniff out a question',
  searchPlaceholder: 'delivery, Korea, vaccinated…',
  counted: 'notes on the board',
  ask: 'Ask your own question',
  empty: 'No notes match that yet. Try another word, or ask us directly.',
}

export const contactPage = {
  title: 'Get in touch with us',
  lede: "Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!",
  visitTitle: 'Visit us in Downtown Dubai',
  visitText: 'Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Downtown+Dubai',
  mapsCta: 'Open in Google Maps',
  visitImage: '/images/puppies/pomeranian-3.jpg',
  buddySays: ['hm?', 'coming?'], // the sitting pup under the letter
}

export const notFoundPage = {
  kicker: 'have you seen this page?',
  title: 'Lost',
  text: "One page, last seen wandering off. It answers to the address you typed, but it isn't here any more. Teddy is on the case.",
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
  title: 'Questions, answered',
  cta: 'Read all questions',
}

export const homeCta = {
  title: 'Ready to meet your new best friend?',
  lede: 'Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.',
  whatsappCta: 'Enquire on WhatsApp',
  contactCta: 'Visit & contact',
  mat: 'welcome home',
  image: '/images/puppies/maltipoo.jpg',
}

export const footer = {
  title: 'Home, at last.',
  blurb: 'TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.',
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
