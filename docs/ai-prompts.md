# AI prompts

Tool: **Claude Code** (VS Code extension), model Claude Opus 5.5, with [CLAUDE.md](../CLAUDE.md) as the standing brief.

Every prompt I typed in this project, in order, copied from my local Claude Code session logs
(typos left as I wrote them). Short ones like "continue" are kept so the log is complete.
Screenshots I attached are marked; they are not in the repo. Under each prompt: the commits it
led to and the outcome, including the places where the AI got it wrong and I corrected it
(prompts 23-28 and 38).

## 1. 23 Nov 17:27

> Read CLAUDE.md and docs/blutec-assignment-plan.md. Then study https://puppy.instabizweb.com/ and run agents to get the screenshots in reference/. Give me: every page, every section in order, the fonts, colour codes, breakpoints and interactive features. Then propose the setup steps. Don't write any code until I approve the plan.

Outcome: The AI audited the reference: 8 pages plus a 404, every section in order, fonts, colours, breakpoints and interactions, and offered three scope options. No code yet, as I asked.

## 2. 23 Nov 17:39

> continue

Outcome: Audit finished; reference screenshots saved in reference/ (gitignored).

## 3. 23 Nov 18:10

> [pasted text]
> Build every page, layout, breakpoint and working part.
> Include the pinned door row.
> Do the light motion (hovers, fade-ins on scroll, twinkle) with CSS and a small amount of code.
> Use a simple static SVG dog in each section.
> Leave three things as stretch goals, done only if time is left: the dog that follows your scroll, the page curtain, and smooth scrolling. Smooth scrolling would mean adding Lenis, a new library.
> [end of pasted text]
>
> use Unsplash/Pexels puppies and write similar-length text.
> Lane: I'd call this Lane A (graded demo, no real users). That means only a short HANDOVER.md and DECISIONS.md, which also gives you material for the video. Agree?
> yes agreed.

Outcome: I chose the AI's option 2 (DECISIONS.md D-001): every page and working part, light motion, the scroll-following dog only as a stretch goal. Free photos and my own text (D-003; the text was later replaced, see prompt 38). Agreed to keep docs light.

## 4. 23 Nov 18:18

> yes move according to folder structure plan, and add gitignore if requeired.

Outcome: Folders set up as in my plan; .gitignore keeps reference/ and my private notes out of the repo.

## 5. 23 Nov 18:30

> https://github.com/Adityavalaki/puppy-website-clone.git this is the repo commit

Commits: `8dadeea` Set up Vite, React, Tailwind and routing, `d6d019d` Add navbar with mobile menu and WhatsApp bar

Outcome: Repo connected. First commits: Vite + React + Tailwind + React Router, then the navbar with mobile menu.

## 6. 23 Nov 18:39

> build the vercel app and now start cloning the website as it is

Outcome: The site went live on Vercel at puppy-website-clone-f8vo.vercel.app (the plain name was already taken), and the build moved on to the footer.

## 7. 23 Nov 18:51

> COMMIT AND PUSH TO REPO

Commits: `60b89cc` Add footer with night sky and contact links

Outcome: Footer committed.

## 8. 23 Nov 18:52

> CHECK THE VERCEL APP https://puppy-website-clone-f8vo.vercel.app/ AND MOVE FORMWARD IN BUILDING '

Outcome: Deploy checked; the hero was built next.

## 9. 23 Nov 22:19

> continue

Outcome: Hero finished.

## 10. 23 Nov 22:22

> commit and push

Commits: `f63ff20` Build home hero with puppy lineup and quilt

Outcome: Hero committed.

## 11. 23 Nov 22:23

> move forward with meet the pups

Outcome: Meet the pups built, with the pinned sliding door row.

## 12. 23 Nov 22:42

> commit and push

Commits: `c6fa1ef` Add Meet our pups section with sliding door row

Outcome: Committed.

## 13. 23 Nov 22:44

> move forward with two ways to meet your puppy

Outcome: Two ways to meet your puppy built, with the signpost and plane route.

## 14. 23 Nov 22:51

> commit and push

Commits: `c6f1b4b` Add two paths section with signpost and plane route

Outcome: Committed.

## 15. 23 Nov 22:53

> move forward with your puppy journey AND COMMIT AND PUSH ALSO

Commits: `09bc4ca` Add puppy journey section with step-by-step chat, `5b6970c` Finish home page: passport, happy homes, questions and closing CTA

Outcome: Journey section (step-by-step phone chat), then the rest of Home: passport, happy homes, questions, closing CTA.

## 16. 23 Nov 23:17

> make the diiferent pages also

Outcome: Inner pages started: puppies list with URL filters, one detail template for all puppies, gone home, happy families, how it works, FAQ, contact, 404.

## 17. 23 Nov 23:44

> continue

Outcome: Continued the inner pages.

## 18. 24 Nov 08:10

> continue

Outcome: Inner pages finished, forms validated in src/lib/enquiry.js.

## 19. 24 Nov 09:10

> commit and push

Commits: `2b843f8` Build all inner pages: puppies, detail, gone home, families, how it works, FAQ, contact, 404

Outcome: All inner pages committed.

## 20. 24 Nov 09:30

> start the polish round, start with puppy animation around the webistes home page

Outcome: Stretch goal picked up: a dog drawn in parts that walks between the section dogs as you scroll (DECISIONS.md D-004).

## 21. 24 Nov 09:50 · 2 screenshot(s) attached

> the the dog again the animation and moving around should be more smooth and dont direct jumop to the next page, adjust the animation, scrolling, and UI of the moving arounf puppy. while we sroll, it should with us. right now in between fewer scrolling sections, the puppy is been disappreared, directly jumped to a far and stoped. it should be smoother and stay with us while scrolling.
> then in the two paths to your new puppy, the rocket animation must move in the path like from korea to dubai it is actually working while we are scrolling down. 
> the cursor must be the pow of the puppy as in the webiste and it should be leaving the small paw like animation behind from where the cursor/paw past in the website . 
> in th e How it works page, remake the section i have taken the screenshot of make it animated like we did in the hoime page like an animation from korea to dubai, redsdign the rocket/plane properly, at last in that page, make the puppy animation like it is playing aroounf in that section

Outcome: My feedback: the dog jumped and vanished between sections. It was rewritten to stay with the reader and ease towards its target every frame. Also added: plane flying Korea to Dubai with scroll, paw cursor with a paw-print trail, a playing pup on How it works.

## 22. 24 Nov 10:00

> conitnue if it was remainig

Commits: `1d6ae82` Add walking puppy, scroll-driven flight, paw cursor and playful pup, `fd88aa9` Fix horizontal overflow on small screens

Outcome: Committed, plus a fix for horizontal overflow found while checking 375 px.

## 23. 24 Nov 10:19 · 1 screenshot(s) attached

> the dog is movi g in te opposite side, fix it and commit and push

Outcome: The AI fixed the direction, but on every section instead of only the one I meant (see prompt 27).

## 24. 24 Nov 10:21

> chane the font to Dear Teddypups font and redesign the form

Outcome: The AI switched the headings to a "Dear Teddypups" font that does not exist on Google Fonts, so the browser fell back to Georgia, and restyled the form. Both were wrong.

## 25. 24 Nov 10:21

> commit and push at last

Outcome: Asked for one commit once both changes were done.

## 26. 24 Nov 10:30

> start

Commits: `0866178` Fix dog direction, add Dear Teddypups font, redesign contact form

Outcome: Committed (0866178), including the mistakes above.

## 27. 24 Nov 10:36 · 2 screenshot(s) attached

> we fixedthe side of the puppy but it ended up been change across the website. i told you to fix the change in the meet the puppy section only

Outcome: I caught the mistake from prompts 23-24: the dog now faces right only in Meet the Pups, the form design is restored, and the letter uses the real handwriting font (Shantell Sans).

## 28. 24 Nov 10:56

> commit and push

Commits: `7cde60a` Face the puppy right only in Meet the Pups; restore form and use handwriting font across it

Outcome: Fix committed (7cde60a).

## 29. 24 Nov 14:37 · 1 screenshot(s) attached

> this is the loading page SS, make the loading page like this and the puppy is moving from left to right while it loads

Outcome: Loading screen built from my screenshot: a puppy trots left to right while the page loads.

## 30. 24 Nov 15:11 · 25 screenshot(s) attached

> this is logo and main picture/SS of the top left corner. this is the photo of the cursor, so chnage it and make the excat cursor style. as i hover the cursor on the puppy in the home page as in the photo, it closes its eyes, and the puppy has a little bit his tougne out as a cute guesture look. as we hover theb cursor on that puppy it slitly tune his neck and closes his eyes ,and the smooth "hm? "message on the puppy shows as n the photo
> As i scroll from that scene, the puppy in the middle slitly lift and shows the aniumation that he is the puppy which moving all arounf scrolling down with us, so basically he stand ups from their and takes place of the puppy and look likke the same puppy which moves with us all arounf while scrolling down to the bottom of the page. this is how it lift from that place and moves to the site if "meet the puppies" and in between if we stop for a while somewhere bettwen then a "Coming?" message like the "hm?" shows. 
> Also, in the puppy, as we move his legs moves like we are moving that puppy can you make the same puppy as i have given you the SS and his tail must swing, also the minute detail of the puppy is that when we stop scrolling it stos so his tougne is inside and when we are scrolling his legs are moving tail is swinging, and tougne is slitlly outside of this mouth. as we scrol the phone and chatting UI shows the loading effect in the animation like "..." which is like someone is typing the reply as we are scrolling and the persons status at top changes from online to typing. 
> In the how it works section, the stamps are animated as you can see, while we scrol doewn the stamps are been animated as they are been stamped. at their in the passport, the puppy moving with us sits their. 
> you forget to add the street light on left, the door in the middle and on the right we have  "see every happy family " as iin the SS. 
> at last the puppy moving with us also comes to the bottom of thr page and rest in the basket. and move basket a bit in the middle so the whole basket is seen. you can see as we scroll to the bottom first the basket is empty and at the bottom, the puppy is been rested in that basket.  the puppy in the Puppies pages above the self portrail has a swing tail, and a message poping up "hm?" like previous. their is a tap like component in the available puppy section. 
> you can see in the SS that the when we see the puppies details. there is a puppy animation their like he is seeing us and the page is fixed as a pin borad. there is also a puppy paw mark in the form as in SS. 
> as you can see there is a ribon like scrolling on the left when we see puppy destails change the "Already gone home", as in the SS i have given. add the little elements arounf the photos SS are been attached

Outcome: From 25 screenshots of the reference, the AI split my notes into a 10-step polish plan and proposed an order.

## 31. 24 Nov 15:12

> go and follow the order

Outcome: I approved the order; step 1 (fluffier dog with tongue and tail moods) started.

## 32. 24 Nov 15:29

> commit and push this and previous branch of loading screen

Commits: `87ce6ae` Add first-load screen with a puppy trotting left to right, `10fefa9` Redraw the puppy fluffy, with tongue and tail moods

Outcome: Loader and redrawn dog committed.

## 33. 24 Nov 15:50

> continue step 2

Outcome: Step 2: hero puppy tilts its head, closes its eyes and says "hm?" on hover.

## 34. 24 Nov 15:59

> commit and push and contnue e

Commits: `3a2fc70` Hero puppy tilts its head, closes its eyes and says "hm?" on hover

Outcome: Step 2 committed; step 3 (hero dog stands up and becomes the walking dog, asks "coming?" when you pause) done.

## 35. 24 Nov 16:05

> commit and push and continue

Commits: `37a741c` Hero puppy stands up and becomes the walking dog; it asks "coming?" when you pause

Outcome: Step 3 committed.

## 36. 24 Nov 16:09

> commit and push and continue keep commit and push when the rask is completed and continue after

Commits: `3b5b24d` Phone chat shows "typing…" and a ••• bubble while you scroll, `a6c5b03` Stamps thump in as you scroll; the walking puppy sits in the passport, `17531da` Add a street to the Home photo wall: lamp, front door and the CTA, `5670968` Walking puppy ends its trip resting in the footer basket, `eb56d46` Puppies page: wagging self-portrait with "hm?", taped filter card, doodles round the photos, `16a0160` Puppy detail: pinned card with a watching pup, reading ribbon, paw stamp on the form, `aebc4f8` New TeddyPups badge logo and a mini-badge cursor

Outcome: Steps 4-10 done and committed one by one. In step 10 the AI drew its own logo and badge cursor; I replaced both in prompt 37.

## 37. 24 Nov 16:42 · 3 screenshot(s) attached

> this "Already gone home " it should look like. 
> change the cursor to the paw i shared you the image of. 
> logo is been given to you. check it out and use that 
> make the ribbon scrolling animation smoother

Commits: `f222ec4` Use the TeddyPups U.A.E logo Aditya supplied in the navbar, footer and chat, `4a4f5b7` Cursor is an orange paw with a dark outline, as in Aditya's photo, `9e40252` Reading ribbon glides to its new length instead of jumping with each scroll, `3c60f18` Redo the Puppies page "Already gone home" band like the reference

Outcome: Replaced the AI-drawn logo with the TeddyPups logo I supplied, cursor changed to the paw from my photo, reading ribbon made smooth, Already gone home band redone like the reference.

## 38. 24 Nov 17:10 · 9 screenshot(s) attached

> when ever we change the page, their the loading screen appearing, keep that in mind.
> this detail section of thr puppies is been swing from a fixed point where the pin is stucked and it swings on hover over it. 
> in the coming home from dubai section, there are no dots, instead of them there are paws(light static paw same as the ones that are formed after the cursor leaves behind it).
> view this screen, left is our clone. and right is original. here their is a lot of different in the bg of images, and also, when we are scrolling down the imges pops up smoothly, not as a static pre loaded image. it should be poped up while scrolling. and also, when they poped up, their must be a paw as i shared and diappeared from the tab as it must look like the puppies stick that photos with their paws and the animation of the paw to disappear and the image is as it is as now. at last of the photos of the puppy with theur family their os this SS and puppy sitting. 
> see where is the 4 boxes in my website. and who told you to change the writting of the field. you have make a ditto same clone, same writting clone of the website. change the whole website writting with the original writting and do the necessary changes accordingly. 
> make the sniff out a question section like this as in the SS i shared. 
> the round in the SS i shared is the pin like component from the FAQs section, the inthat pin component is the as we scroll down the tends to appear at that time and they gives that glossy finish 3d animation look of the pins. in that FAQs, the each question is pinned in a board as a UI. so that question is looked like a paper and as seen in the SS i shared the bottom right of each question boc the been looked like it is folded 
>
> and their is a puppy with swing tail and poping up the messages "hm?" and "coming?" adter the visits and contact form

Commits: `2ba79fb` Use the reference site's exact wording everywhere; add How it works step cards, `358d598` Show the loading screen on every page change; tab titles as on the reference, `8631943` Puppy detail card swings from its pin on hover

Outcome: Main correction: the AI had written its own text, so I asked for the reference's exact wording everywhere (DECISIONS.md D-005). Also: loader on every page change, detail card swings from its pin.

## 39. 24 Nov 20:52

> continue

Commits: `826982e` Way-home steps are joined by a light paw-print trail instead of dots

Outcome: Way-home steps joined by a paw-print trail instead of dots.

## 40. 24 Nov 21:07

> continue

Commits: `2ed84c1` Polaroids pop in on scroll with a paw patting them on; Happy families wall like the reference, `02ed251` FAQ like the reference: sniff-out side panel, pinned paper notes with folded corners, `84b7552` Contact: Teddy sits under the letter, tail wagging, saying "hm?" then "coming?"

Outcome: Polaroids pop in with a paw patting them on, FAQ as pinned paper notes on a cork board, contact page dog saying "hm?" and "coming?".

## 41. 24 Nov 23:25

> yes delete the unused svgs and change the favicon and brower tab icon

Commits: `c569822` Use the TeddyPups logo as the browser tab icon; delete unused SVGs

Outcome: Unused SVGs deleted; the logo is now the browser tab icon.

## 42. 24 Nov 23:44

> run lighthouse and fix the issues

Outcome: Lighthouse run on the production build of all 9 pages.

## 43. 25 Nov 07:22

> continue

Commits: `4f9907f` Lighthouse fixes: robots.txt and llms.txt, ticket arrow contrast, self-hosted fonts

Outcome: Fixes: robots.txt and llms.txt served as real files, a low-contrast arrow darkened, fonts self-hosted (D-006). Result: 100 Accessibility, Best Practices and SEO on all pages.

## 44. 25 Nov 09:57

> verfy that the repo contains only the necessary file which should be only shown to the recutor, with this structure:
>
> [pasted text]
> puppy-website-clone/
> ├── public/
> │   ├── favicon.svg
> │   └── images/
> │       ├── hero/
> │       ├── gallery/
> │       └── icons/
> ├── src/
> │   ├── components/
> │   │   ├── layout/
> │   │   │   ├── Navbar.jsx
> │   │   │   └── Footer.jsx
> │   │   ├── sections/
> │   │   │   ├── Hero.jsx
> │   │   │   ├── About.jsx
> │   │   │   ├── Services.jsx
> │   │   │   ├── Gallery.jsx
> │   │   │   ├── Testimonials.jsx
> │   │   │   └── Contact.jsx
> │   │   └── ui/
> │   │       ├── Button.jsx
> │   │       └── SectionTitle.jsx
> │   ├── data/
> │   │   └── content.js        # text, lists, testimonials kept out of the JSX
> │   ├── pages/
> │   │   ├── Home.jsx
> │   │   └── NotFound.jsx
> │   ├── App.jsx
> │   ├── main.jsx
> │   └── index.css
> ├── docs/
> │   └── ai-prompts.md         # every AI prompt you used, in order
> ├── .env.example              # only if you use Formspree/Supabase keys
> ├── .gitignore
> ├── index.html
> ├── package.json
> ├── tailwind.config.js
> ├── vite.config.js
> └── README.md
> [end of pasted text]
>
> and do the necessary changes. and lets submit this to the recruitor. start the process and write me a email

Outcome: The AI kept the real structure instead of the sample tree (sections named after the real site, no empty Button/SectionTitle/tailwind.config.js files, D-007), wrote the README, built this log from my session logs, and stopped tracking its session notes. It also found that puppy-website-clone.vercel.app is someone else's site; mine is the -f8vo URL.

## 45. 25 Nov 11:00

> i used [my email] and forms sent through formspree

Outcome: The AI checked the live bundle: no Formspree endpoint yet. Vite bakes VITE_ variables in at build time, so the variable had to be set in Vercel and the site rebuilt.

## 46. 25 Nov 11:03

> what i need to do tell me in steps from this:
>
> [pasted text]
> What you need to do before sending
> Formspree: create a form at formspree.io. In Vercel, go to the project's Settings → Environment Variables and add VITE_FORMSPREE_ENDPOINT = https://formspree.io/f/xxxx. Then redeploy and tell me, and I'll check that the live form sends.
> .env.example: a hook stops me from writing env files, so run this yourself: "VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id" | Out-File -Encoding utf8 .env.example
> Commit: suggested message: Add README, AI prompt log and decisions; stop tracking session handover. Then push.
> Loom: record it, set it to "anyone with the link", and replace LOOM_LINK in the README and in the email.
> Gmail: the connector needs you to sign in again, so I couldn't make a draft. Reconnect it in your claude.ai connector settings if you want me to create one. Otherwise, copy the email below.
> [end of pasted text]

Outcome: Got a numbered checklist for the remaining submission steps.

## 47. 25 Nov 11:05

> how can i get Key: VITE_FORMSPREE_ENDPOINT (exactly, including VITE_)

Outcome: The key is just the variable name I type in; only the value comes from Formspree.

## 48. 25 Nov 11:07 · 1 screenshot(s) attached

> what to do

Outcome: Added VITE_FORMSPREE_ENDPOINT in Vercel as a Config variable for Production.

## 49. 25 Nov 11:12

> done with first 3 step, now take comtrol from step 4

Outcome: The AI filled in these outcome lines from the commit history and my follow-up prompts, then committed and pushed.
