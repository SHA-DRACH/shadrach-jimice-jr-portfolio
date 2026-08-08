# Shadrach Jimice Jr — Portfolio

Personal portfolio for **Shadrach Jimice Jr**, Software Engineer · Full-Stack Developer · ICT
Professional (Monrovia, Liberia). Built from scratch with plain HTML, CSS and JavaScript — no
framework, no build step, no dependencies. Drop it on any static host and it runs.

**Live:** https://sha-drach.github.io/shadrach-jimice-jr-portfolio/

---

## Structure

```
.
├── index.html          Single-page site — all sections
├── css/style.css       Design tokens, light/dark themes, layout, responsive rules
├── js/script.js        Theme toggle, mobile nav, scroll reveal, counters, contact form
├── assets/             Profile photo, CV, project screenshots (see assets/README.md)
├── .nojekyll           Tells GitHub Pages to serve files as-is
└── README.md
```

Sections in order: Hero → Work → About → Services → Skills → Experience → Contact → Footer.
Social links appear in three places (hero, contact, footer) so a visitor never has to hunt for one.

---

## Before you publish — 4 things to add

These are the only placeholders left in the site.

**1. Profile photo** — save a portrait as `assets/profile.jpg`, then in `index.html` replace:

```html
<div class="portrait-fallback" aria-hidden="true">SJ</div>
```

with:

```html
<img src="assets/profile.jpg" alt="Shadrach Jimice Jr">
```

Until you do, a styled "SJ" monogram shows in its place — it looks deliberate, not broken.

**2. CV** — export your CV as PDF and save it as `assets/Shadrach-Jimice-Jr-CV.pdf`.
The "Download CV" button in the hero already points there.

**3. Project screenshots** — each project card currently shows a CSS-drawn mock browser.
To use a real screenshot, replace the contents of a `.browser-body` div with an `<img>`:

```html
<div class="browser-body">
  <img src="assets/project-campusconnect.png" alt="CampusConnect Liberia interface">
</div>
```

**4. Project repo links** — the three "Source" buttons point at your GitHub profile.
Once each project has its own public repo, swap in the direct repo URL.

---

## Contact form

Out of the box the form validates input and then opens the visitor's mail client with the whole
brief pre-filled — no server needed, which is what makes it work on GitHub Pages.

To receive submissions in your inbox instead, create a free form at
[formspree.io](https://formspree.io) and paste the endpoint into `js/script.js`:

```js
var FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
```

Everything else is already wired — loading state, success message and error fallback.

---

## Publishing to GitHub Pages

```bash
git add . && git commit -m "Build portfolio site" && git push origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**

The site is live at `https://sha-drach.github.io/shadrach-jimice-jr-portfolio/` within a minute or two.

### Using a custom domain

Add a file named `CNAME` at the repo root containing just your domain (e.g. `shadrachjimice.com`),
point an `ALIAS`/`A` record at GitHub's Pages IPs at your registrar, then enable
**Enforce HTTPS** in Settings → Pages.

---

## Running locally

Open `index.html` in a browser — that is genuinely all it needs.

For a local server (nicer for testing links and the clipboard API, which needs a secure context):

```bash
npx serve .
```

---

## Editing guide

| I want to change… | Go to |
| --- | --- |
| Any text, section order, links | `index.html` |
| Colours, spacing, fonts | the `:root` / `[data-theme]` blocks at the top of `css/style.css` |
| The rotating job titles in the hero | the `words` array in `js/script.js` |
| Contact email or phone | search `jimicejrs@gmail.com` / `231778079167` in `index.html`, and `CONTACT_EMAIL` in `js/script.js` |

The accent colour is one variable — `--accent` — set separately for dark and light themes.
Change those two values and the whole site re-skins.

---

## Notes

- Light and dark themes; the choice is remembered in `localStorage` and defaults to the visitor's system setting.
- Fully responsive: mobile drawer navigation, fluid type, no horizontal scroll at any width.
- Accessible: skip link, visible focus rings, ARIA labels on icon-only buttons, semantic landmarks.
- Respects `prefers-reduced-motion` — all animation stops for visitors who ask for that.
- Icons are inline SVG, so there is no icon-font CDN to slow the page down or break later.

© Shadrach Jimice Jr.
