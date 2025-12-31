<!-- Auto-generated guidance for AI coding agents working on this repository -->
# Copilot / AI agent instructions

This repository is a small static website (no build system). The instructions below focus on the concrete, discoverable patterns an AI should follow to be immediately productive.

1. Big picture
- Type: Static client-side website built from plain HTML, CSS and vanilla JavaScript.
- Main runtime: pages are standalone HTML files that dynamically load shared fragments (`header.html`, `footer.html`) via `fetch` in `script.js`.
- Key files: `index.html`, `about.html`, `contact.html`, `header.html`, `footer.html`, `script.js`, `styles.css`.

2. Important architecture details you must preserve
- Shared header/footer are client-side includes: `script.js` fetches `header.html` and `footer.html` and injects them into DOM. Any change to navigation IDs or element structure must be reflected in `script.js` and in the footer highlight map.
  - See the include pattern in [script.js](script.js) where `fetch('header.html')` and `fetch('footer.html')` are used.
  - The footer contains a small page-highlighting map keyed by file names (e.g., `'contact.html': 'nav-contact'`) — update both locations together: [footer.html](footer.html) and [script.js](script.js).

3. Project-specific conventions
- Navigation links use element IDs like `nav-home`, `nav-contact` etc. The highlight script in `footer.html` expects these IDs. Do not rename nav IDs without updating the mapping.
- Shared visual/layout utilities live in `styles.css`. Reuse the `.container` class and existing patterns (e.g., `.course-card`, `.contact-info`, `.milestone-timeline`) for consistent spacing and responsive behavior.
- `logo.JPG` and `header-bg.jpg` are referenced by styles and header — preserve those asset filenames or update references consistently.

4. External integrations and assumptions
- Font Awesome is loaded via CDN in `index.html` (and similarly available to other pages).
- An Elfsight reviews widget is embedded on the homepage — it loads external scripts and markup. Changes to that area should preserve the embed container markup.
- A WhatsApp direct link is present in `footer.html`; the number is used live and should not be changed without confirmation.

5. Local developer workflows (how to run/preview)
- There is no build step. To preview locally run a simple static server from the repo root. Example (PowerShell):

```powershell
# from repository root
python -m http.server 8000
# or with Node if preferred
npx http-server -c-1 . -p 8000
```

- Alternatively use the VS Code Live Server extension to preview pages.

6. Editing guidance for AI changes
- When modifying navigation or shared header/footer, update both `header.html` and the `navMap` in `footer.html` (the mapping uses file basenames like `contact.html`).
- When adding new pages, add a nav link with the matching `id` (pattern: `nav-<slug>`) and add the mapping entry to the footer highlight code.
- When changing DOM structure that `script.js` depends on (e.g., `.hamburger`, `nav ul`, element IDs), update `initMobileMenu()` and any selectors used in `script.js`.

7. Examples (concrete edits)
- To add a new page `pricing.html`:
  - Create `pricing.html` by copying `about.html` pattern.
  - Add `<li><a id="nav-pricing" href="pricing.html">Pricing</a></li>` to `header.html`.
  - Add `'pricing.html': 'nav-pricing'` to the `navMap` object in `footer.html`.

8. Tests & CI
- There are no automated tests or CI config discoverable. Avoid adding assumptions about a build/test pipeline unless you add supporting config files (and describe them in this repo's README).

9. Safety & live-content notes
- The site contains live links (Google write-review, WhatsApp). Avoid making changes that alter these customer-facing links without explicit user approval.

If anything here is unclear or you want a more opinionated contributor guide (linting, commit message style, or adding a small dev server script), tell me which areas to expand and I'll update this file.
