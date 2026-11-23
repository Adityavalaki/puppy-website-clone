# HANDOVER
Lane: A (graded demo, no real users or data) — agreed with Aditya 2026-11-23. Promote to B if it ever gets real users.
Read first: CLAUDE.md, docs/DECISIONS.md, docs/blutec-assignment-plan.md

<!-- Newest entry on top. Five lines, every session. -->
## 2026-11-23 (6) — model: Claude Opus 5.5
- Done: Home page complete, morning to night: Journey (sticky phone chat revealing per step, pushed 09bc4ca), Trust (passport book, 4 ink stamps, sunset skyline), Happy homes (testimonial bubble, polaroid wall 6/8 photos, reusable Lightbox: native dialog, arrows, Esc), Questions (3 FAQs, twinkling stars, floating ?), closing CTA (house with door opening on scroll, WhatsApp + contact). 8 Unsplash family photos in public/images/gallery (credited). Meet doors now show open in browsers without scroll-linked CSS.
- In progress: nothing.
- Broken or risky: Testimonial and family captions are placeholder text written for the demo. The reference's chat video message was skipped (no free video asset). All other pages (/puppies, detail, gone-home, happy-families, how-it-works, faq, contact) still show the 404 page.
- Next: Puppies page (filters by origin/breed/sex via URL query, round photo cards), then puppy detail page.
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-23 (5) — model: Claude Opus 5.5
- Done: Home "Two paths to your new puppy": wooden signpost (two arrow signs, post, pup at its foot), Dubai side (skyline SVG, shop window with striped awning + photo, CTA to /puppies?origin=local), imported side (dotted Korea to Dubai route, plane with a puppy in the porthole that bobs; CTA to /puppies?origin=imported). Geometry matches the reference at 1440px; phones stack Dubai side, pup, imported side.
- In progress: nothing.
- Broken or risky: Plane stays mid-route with a gentle bob; the reference moves it along the route as you scroll (skipped per D-001). CTAs land on /puppies, which is the 404 page until the Puppies page exists.
- Next: Home "Your puppy journey" (3 steps + WhatsApp-style phone chat mockup).
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-23 (4) — model: Claude Opus 5.5
- Done: Home "Meet our pups": 15 puppy doors (9 more Unsplash photos, credited). >=1024px with motion allowed: section pins (sticky stage), scroll slides the row sideways (wrapper = 100vh + 0.8 x slide distance, as the reference), doors open once they pass the standing pup, floor planks move with the row. Otherwise: 2+ column grid, doors open on scroll via CSS view() timeline (Chrome/Edge), all open under reduced motion. Fraunces SOFT/WONK axes now loaded so headings match the reference.
- In progress: nothing.
- Broken or risky: Browsers without CSS scroll-linked animations (Firefox, older Safari) show closed doors in the grid layout until hover/tap; tapping still navigates. Door links go to /puppies/:slug (404 until detail page).
- Next: Home "Two ways to meet your puppy" (signpost, skyline, plane path).
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-23 (3) — model: Claude Opus 5.5
- Done: Vercel live at https://puppy-website-clone-f8vo.vercel.app (Aditya imported it; sub-page refresh, fonts, images verified). Home Hero: tagline + squiggle, 2-line H1, lede, primary + WhatsApp buttons, 6 arched puppy photos on CSS seat variables (positions measured from the reference at 1440px; phone/tablet overrides), peeking pup SVG, scalloped quilt cushion, rotating name tag (also follows hover/focus), peek-up entrance. 6 Unsplash photos in public/images/puppies (credits in docs/IMAGE-CREDITS.md); first 6 puppies in content.js.
- In progress: nothing.
- Broken or risky: Hero photos link to /puppies/:slug, which shows the 404 page until the detail page exists. The reference's "duck and pop" photo swap was skipped (decorative, D-001).
- Next: Home "Meet the pups" (pinned horizontal door row, needs 15 puppies + 9 more photos).
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-23 (2) — model: Claude Opus 5.5
- Done: Navbar (fixed header, hides on scroll down, milk bar + scalloped edge once scrolled or off Home, active paw), mobile menu (native <dialog>, circle reveal, Escape/Close/link all close it), MobileBar (WhatsApp + Call, <768px only), scroll-to-top on route change, skip link. docs/blutec-assignment-plan.md gitignored (private contact details).
- In progress: nothing.
  Footer (night sky: wavy hill, 9 twinkling stars, CSS crescent moon; Explore + Say hello columns; basket pup; phone bottom padding clears the WhatsApp bar). Pushed setup + navbar to GitHub (main @ d6d019d).
- Broken or risky: Nav links to pages not built yet show the 404 page. WhatsApp number is the reference site's placeholder; email is a reserved .example address. Vercel project not created: the Vercel connector returned 403, Aditya to import the repo at vercel.com/new.
- Next: Home sections top to bottom (Hero first).
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-23 — model: Claude Opus 5.5
- Done: Audited puppy.instabizweb.com (8 pages + 404); 361 reference screenshots at 375/768/1024/1440 in reference/ (gitignored). Scaffolded Vite + React + Tailwind v4 + React Router; design tokens in src/index.css; fonts via Google Fonts link; Home placeholder + NotFound; vercel.json rewrite; git init (no commits yet — Aditya commits).
- In progress: nothing.
- Broken or risky: Home.jsx is a setup-check placeholder. Formspree form ID not created yet (needed for the contact and enquiry forms).
- Next: Navbar (desktop links ≥1024px, Menu button + full-screen honey menu below, fixed WhatsApp/Call bar <768px), then Footer, then Home sections top to bottom.
- Do not touch: reference/ (Aditya's screenshots), docs/blutec-assignment-plan.md, docs/ai-prompts.md (Aditya's own log).
