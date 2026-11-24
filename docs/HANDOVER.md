# HANDOVER
Lane: A (graded demo, no real users or data) — agreed with Aditya 2026-11-23. Promote to B if it ever gets real users.
Read first: CLAUDE.md, docs/DECISIONS.md, docs/blutec-assignment-plan.md

<!-- Newest entry on top. Five lines, every session. -->
## 2026-11-24 (5) — model: Claude Opus 5.5 (after a Haiku 4.5 turn)
- Done: 0866178 (Haiku) flipped the Home mascot on every section and swapped headings to a non-existent "Dear Teddypups" Google font (fell back to Georgia) + restyled the form. 7cde60a reverted both: mascot faces travel direction again, a stop can pin its facing via data-pup-face (only Meet the Pups = right, the row slides past a still dog); form restored and the whole letter set in font-hand (Shantell Sans). New layout/PageLoader.jsx: first-load screen (cream glow + diamond lattice, Pup trots left→right on a 1.8s loop, "every puppy is family"), stays until window load and at least 1.8s, fades 0.5s, once per visit.
- In progress: 10-step polish plan from Aditya's reference screenshots (order agreed). Step 1 done, uncommitted: Pup.jsx redrawn fluffy (scalloped `fluff()` outline, shiny eyes, collar + heart tag, pom tail) with CSS moods (tongue/tail-wag while walking or playing, `pup-happy` closes eyes); every pup-stand.svg <img> replaced by <Pup/> so stops match the mover; Mascot stop filter uses getBoundingClientRect (SVG has no offsetWidth); walking mood lingers 250ms. Step 1 + loader committed (87ce6ae, 10fefa9). Step 2 done, uncommitted: Pup.jsx head split into PupHead, new PupPeek (head + paws, same face) used by hero + Gone Home; hero hover (.hero-peek) tilts head -9deg, closes eyes, tongue out, "hm?" .pup-bubble (reusable for step 3 "coming?"); hero peek now z 26 over the quilt so paws rest on it, 0.46 x --teddy-w to clear the CTA buttons. pup-peek.svg + pup-stand.svg now unused (ask before deleting). Step 2 committed (3a2fc70). Step 3 done, uncommitted: hero peek is the mascot's first stop (data-pup-stop + data-pup-peek); Mascot maps it to a whole-dog box with the heads aligned (PupPeek viewBox 120 6 108 136) and uses its bottom as the leave edge; at scrollY<=4 the peek shows and the dog hides, after that html[data-pup-up] hides the peek and the dog pops up (stand-up keyframes). "coming?" (.pup-bubble) when the dog is between stops and idle >1s (timer wakes the stopped frame loop). Step 3 committed (37a741c). Step 4 done, uncommitted: Journey phone shows "typing…" status + ••• bubble (.msg-typing) while scrolling, back to "online" 0.7s after; only in the live (>=1024px, motion) mode via showTyping = live && typing. Next: step 5, passport stamps stamp in on scroll + pup sits in passport (sitting pose).
- Broken or risky: loader adds up to 1.8s before content on fast loads (may cost Lighthouse LCP/perceived speed); it is React-rendered, so the plain cream page shows before the JS bundle runs.
- Next: Lighthouse run, README, ai-prompts log tidy (Aditya's own prompts), Loom.
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-24 (4) — model: Claude Opus 5.5
- Done: Animation work pushed (1d6ae82). Responsive sweep of all 8 inner pages at 375/768/1024/1440 (overflow + broken images): fixed Contact at 375 (letter form select forced the grid column wide; min-w-0 on both columns), Gone home at 375 (smaller photo, wrapping route line, no tilt on phones), How it works playground (definite width in the auto column from 768, fluid below). All pages now 0px horizontal overflow, 0 broken images at every width.
- In progress: nothing.
- Broken or risky: Forms still need VITE_FORMSPREE_ENDPOINT in Vercel. Not tested on real devices or Safari/Firefox.
- Next: Lighthouse run, README, ai-prompts log tidy (Aditya's own prompts), Loom.
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-24 (3) — model: Claude Opus 5.5
- Done: Polish 2 (Aditya's feedback): Mascot rewritten so it stays with the reader: target is always between the stops around a line at 55% of the screen, eased 14%/frame (no jumps), kept on screen between stops, fades only above the first stop. New shared ui/FlightPath.jsx: redesigned airliner flies Korea to Dubai along the route as you scroll, flown part turns solid (Home "Two paths" + How it works Imported scene). Site-wide paw cursor + fading paw-print trail (layout/PawCursor.jsx, mouse only, off for reduced motion). How it works closing card: puppy playing with a ball (trotting legs, hops, turns round).
- In progress: polish round. Not committed (mascot v1 + these changes).
- Broken or risky: In very fast scrolling the dog can be off screen for a moment while catching up (4/90 samples), then glides back. Cursor trail only tested with simulated pointer events.
- Next: commit + push when asked; visual check of inner pages at 375/768/1024/1440.
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-24 (2) — model: Claude Opus 5.5
- Done: Polish 1, walking mascot on the home page (D-004): ui/Pup.jsx is the dog in parts (4 legs, tail, head); sections/home/Mascot.jsx moves it between the six section dogs (data-pup-stop) as you scroll, legs swing from distance travelled (diagonal trot), body bobs, head nods, tail wags, turns to face direction, fading paw prints; pulled into view mid-walk; off for reduced motion. Verified at 1440 and 375: fully on screen in 109/110 sampled walk frames, 17-20 leg angles per walk, no console errors.
- In progress: polish round (next: visual check of inner pages at 375/768/1024/1440).
- Broken or risky: Mascot changes are not committed yet. Dog walks over text in places (as the reference does).
- Next: commit + push when Aditya asks; continue polish.
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

## 2026-11-24 — model: Claude Opus 5.5
- Done: All pages built and routed: /puppies (URL-query filters origin/breed/sex, round cards, gone-home strip), /puppies/:slug (gallery full + close-up of the same photo, info card, checklist, way-home steps per origin, enquiry form, prev/next; unknown slug shows 404), /gone-home (tickets), /happy-families (full polaroid wall + lightbox via shared PolaroidWall), /how-it-works (chapter chips, Dubai/Imported toggle, promise stamps via shared Stamp, #delivery, why us, CTA), /faq (search + one-open-at-a-time cork-board accordion), /contact (letter form), 404 poster. Forms validate in src/lib/enquiry.js (name + phone required, email format, honeypot).
- In progress: polish pass (Aditya: "first make the whole website and then we will polish it"). Pages are NOT committed yet.
- Broken or risky: Forms only send once VITE_FORMSPREE_ENDPOINT is set (in .env.local locally and in Vercel project settings); until then they say "Sending is not connected yet" instead of pretending. .env.example could not be created (env files are blocked by permission settings). New pages not yet visually checked at 375px (test browser froze after a script-driven navigation test; real click navigation was fine).
- Next: commit + push when Aditya asks; visual check of every new page at 375/768/1024/1440 against reference/, then polish.
- Do not touch: reference/, docs/blutec-assignment-plan.md, docs/ai-prompts.md.

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
