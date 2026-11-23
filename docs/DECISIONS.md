# DECISIONS
<!-- One entry per meaningful decision, drafted BEFORE the change. Newest at the bottom. -->

## D-001: How much of the original's animation to rebuild
Date: 2026-11-23   Model: Claude Opus 5.5
Context: The reference site (puppy.instabizweb.com) has 8 pages plus a 404 and very heavy custom motion: a scroll-following SVG mascot with a paw-print trail, a pinned horizontal "doors" row, a page-change curtain, Lenis smooth scrolling and about 45 CSS keyframe animations. The deadline is 48 hours and every line must be explainable in the Loom video.
Options:   1) Rebuild everything, including the mascot engine and curtain.  2) Every page, layout, breakpoint and working feature, plus the pinned door row; light motion only (hovers, fade-in on scroll, twinkle); a simple static SVG dog per section.  3) Static layouts only, no motion.
Chosen: 2. Stretch goals, only if time is left: the scroll-following dog, the page curtain, smooth scrolling.
Why: Option 1 is the most time and the hardest code to explain; option 3 drops "functionality", which is graded. Option 2 covers what the brief grades (design, layout, responsiveness, functionality) and keeps the signature pinned door row.
Trade-off: The clone will feel calmer than the original; the mascot that walks with the scroll is the most visible thing missing.
Revisit if: Core pages are done and tested with more than 10 hours left.

## D-002: Stack and dependencies
Date: 2026-11-23   Model: Claude Opus 5.5
Context: Multi-page site (8 routes plus 404), two forms, deploy on Vercel. CLAUDE.md fixes React + Vite (JS) + Tailwind v4 and says no extra libraries without asking.
Options:   1) React + Vite + Tailwind v4 + react-router-dom, fonts via Google Fonts link, forms to Formspree.  2) Same plus Lenis (smooth scroll) and @fontsource packages.  3) Plain HTML/CSS/JS, one file per page.
Chosen: 1.
Why: The site has real routes (/puppies/:slug for 15 puppies from one template), which React Router handles with one data-driven page; plain HTML would mean 15 copied detail pages. Google Fonts by <link> needs no package. Formspree needs no backend. Lenis is only cosmetic (see D-001).
Trade-off: A client-side router needs a vercel.json rewrite so refreshing a sub-page doesn't 404. Fonts load from Google's CDN (one extra host).
Revisit if: Smooth scrolling gets picked up as a stretch goal (then Lenis, asked first).

## D-003: Images and text
Date: 2026-11-23   Model: Claude Opus 5.5
Context: The original uses the client's own puppy photos and copy. No permission from Blutec to reuse them.
Options:   1) Reuse the original's assets.  2) Free Unsplash/Pexels photos and my own text of similar length.
Chosen: 2. Cartoon dog, stamps and icons are simple SVGs drawn for this project.
Why: Reusing a client's photos without permission is not ours to decide; CLAUDE.md defaults to free images.
Trade-off: Side-by-side the photos won't match; layout, sizes and crops will.
Revisit if: Blutec confirms their assets may be used.
