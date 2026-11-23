# Project brief: Puppy Website Clone (Blutec AI technical assignment)

## Who I am
Aditya Valaki, final-year B.Tech IT student (GCET, Gujarat). I know React, Vite, JavaScript/TypeScript, Python/FastAPI, Tailwind basics, Git, and I deploy on Vercel. I must be able to **explain every line of this project in a recorded video**, so keep the code simple and readable.

## The assignment
Blutec AI shortlisted me for a Full Stack Developer role. The task:

- **Clone https://puppy.instabizweb.com/**, matching its design, layout, responsiveness and functionality as closely as possible.
- Deliver: **live URL**, **public GitHub repo**, **Loom video** explaining process, structure, tools, **AI tools and the exact prompts used**, decisions, challenges, testing and deployment.
- **Deadline: 48 hours** from when I confirmed the assignment.
- Their policy allows any AI tool, but I must understand and explain the whole workflow.

## Names
- Repo and folder: `puppy-website-clone`
- Live site: `puppy-website-clone.vercel.app`

## Stack
- React + Vite (JavaScript, not TypeScript, to keep it simple)
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router only if the reference site has more than one page
- Forms: Formspree (no backend) unless the site needs something more
- Deploy: Vercel from GitHub

Do not add libraries I didn't ask for. If you think one is needed, ask first and explain why.

## Folder structure
```
public/images/{hero,gallery,icons}/
src/components/layout/      Navbar.jsx, Footer.jsx
src/components/sections/    one file per page section, named after the real section
src/components/ui/          small reusable pieces (Button, SectionTitle)
src/data/content.js         all page text and lists
src/pages/                  Home.jsx, NotFound.jsx (+ other pages if the site has them)
docs/ai-prompts.md          log of my prompts
reference/                  my screenshots of the original site (gitignored)
```
Remove Vite's demo files (`App.css`, `assets/react.svg`, counter code). No empty folders.

## How to work with me
1. **Plan first.** Before writing code, study the reference site (fetch it, and look at my screenshots in `reference/`). Give me a list of pages, sections in order, fonts, colours, breakpoints and interactions. Wait for my OK.
2. **One section at a time**, top to bottom: Navbar → Hero → each section → Footer. After each section, stop so I can check it in the browser and commit it myself.
3. **Suggest a short commit message** after each step (for example `Add navbar with mobile menu`). I will make the commits myself. Never commit, push, or rewrite git history for me, and never change commit dates.
4. **Explain briefly** what you wrote and why, in plain English, so I can explain it in my video.
5. **Mobile-first and responsive** at 375px, 768px, 1024px and 1440px.
6. **Clean code:** consistent names (PascalCase components, camelCase variables), no `console.log`, no commented-out code, no unused imports, comments only where something isn't obvious.
7. **Images and text:** use free images (Unsplash/Pexels) and my own placeholder text of similar length, unless I tell you Blutec allowed using their assets.

## Testing before I submit
- Every link and button works; mobile menu opens and closes
- Form validates and submits
- Images load on Vercel (paths are case-sensitive)
- Refreshing a sub-page doesn't 404 (`vercel.json` rewrite if using React Router)
- Lighthouse run for Performance, Accessibility and SEO
- Side-by-side check against the original at every breakpoint

## AI prompt log
I keep every prompt I give you in `docs/ai-prompts.md` with a one-line note on what I changed afterwards. When I ask, help me tidy that file, but never invent prompts I didn't send.
