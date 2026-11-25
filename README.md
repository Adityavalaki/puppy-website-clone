# Puppy Website Clone

A responsive clone of [puppy.instabizweb.com](https://puppy.instabizweb.com/) (TeddyPups U.A.E.), built as a technical assignment for Blutec AI.

**Live:** https://puppy-website-clone-f8vo.vercel.app
**Video walkthrough:** https://www.loom.com/share/9592f0995227493ebd626e33b5fe747d

## What's in it
Nine routes, all from the reference site:

| Route | Page |
|---|---|
| `/` | Home: hero, meet the pups (pinned door row), two ways to meet your puppy, journey (sticky phone chat), trust, happy families, questions, closing CTA |
| `/puppies` | All puppies, filtered by origin, breed and sex through the URL query |
| `/puppies/:slug` | One template for all 15 puppies: gallery, info card, way-home steps, enquiry form |
| `/gone-home` | Puppies already gone home |
| `/happy-families` | Polaroid wall with a lightbox |
| `/how-it-works` | Dubai vs imported journey, promises, delivery |
| `/faq` | Searchable questions, one open at a time |
| `/contact` | Letter-style contact form |
| `*` | 404 page |

Interactions: mobile menu, a puppy mascot that walks between sections as you scroll, page loader, paw cursor with a paw-print trail, scroll-driven flight path from Korea to Dubai, form validation with a honeypot, keyboard-friendly lightbox. Motion is turned off for users who prefer reduced motion.

## Tech
- **React 19 + Vite**: component-based pages, fast dev server, static build.
- **React Router**: the site has real sub-pages, and the 15 puppy pages share one data-driven template. `vercel.json` rewrites every path to `index.html` so refreshing a sub-page doesn't 404.
- **Tailwind CSS v4** (via `@tailwindcss/vite`): theme colours and fonts live in `src/index.css`, so no `tailwind.config.js` is needed.
- **Formspree**: the forms post to Formspree, so there's no backend to run.
- **Vercel**: deploys from GitHub on every push to `main`.

No other runtime libraries. Fonts (Fraunces, Figtree, Shantell Sans; OFL) are self-hosted in `public/fonts`.

## Run locally
```bash
npm install
npm run dev
```
To make the forms send, copy `.env.example` to `.env.local` and set `VITE_FORMSPREE_ENDPOINT` to your Formspree form URL. Without it, the forms still validate and say that sending isn't connected.

`npm run build` makes the production build, and `npm run lint` runs oxlint.

## Structure
```
public/            fonts, images (gallery, puppies, icons), robots.txt, llms.txt
src/
  components/
    layout/        Navbar, Footer, mobile WhatsApp bar, page loader, paw cursor
    sections/home/ one file per Home section, named after the real section
    ui/            reusable pieces: Pup (the SVG dog), Stamp, Lightbox, PolaroidWall, FlightPath
  data/content.js  all page text and lists, kept out of the JSX
  lib/enquiry.js   form validation and the Formspree request
  pages/           one file per route
docs/
  ai-prompts.md    every prompt I gave the AI, in order
  DECISIONS.md     the main decisions, the options I rejected and why
  IMAGE-CREDITS.md photo sources
CLAUDE.md          the brief the AI worked from
```

## AI tools
I built this with **Claude Code** in VS Code (Claude Opus 5.5). `CLAUDE.md` is the standing brief I gave it: stack, folder structure, one section at a time, no unrequested libraries. Every prompt I typed is in [docs/ai-prompts.md](docs/ai-prompts.md), with the commits each one led to.

## Testing
- Breakpoints 375, 768, 1024 and 1440 px on every page: no horizontal overflow, no broken images.
- Lighthouse (mobile, production build): 100 for Accessibility, Best Practices and SEO on all 9 pages.
- Every route, asset and refresh checked on the live Vercel URL.

## Content and images
The text and the TeddyPups logo match the reference site, because the brief asked for as close a clone as possible. All photos are free Unsplash images (see [docs/IMAGE-CREDITS.md](docs/IMAGE-CREDITS.md)). The cartoon dog, stamps and icons are SVGs drawn for this project.

## What I'd improve with more time
- Test on real phones and on Safari and Firefox (so far only Chrome and its device emulation).
- Bring Home's LCP down on slow phones (about 2-3 s on a throttled mobile profile).
- Add the reference site's chat video message (skipped: no free video asset).
