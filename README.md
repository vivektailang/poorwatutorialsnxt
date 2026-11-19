# Poorwa Tutorials

Poorwa Tutorials is a public-facing website for a mathematics coaching institute in Pimple Saudagar, Pune. It presents information about the classes, teaching approach, student achievements, events, and ways to get in touch.

The site is a static, multi-page website built with plain HTML, CSS, and vanilla JavaScript. There is no application server, package manager, framework, or build step.

## At a glance

- **Pages:** Home, About, Results, Gallery, Contact, Our Journey, and Messages.
- **Main audience:** Students and parents looking for mathematics coaching information and results.
- **Subjects and levels shown:** Mathematics for Classes 9–12, with board and competitive-exam preparation.
- **Production domain:** `poorwatutorials.in` (also recorded in [`CNAME`](CNAME)).
- **Runtime requirements:** A modern browser and an HTTP server for local preview.
- **Build and automated tests:** None are currently configured.

## Run locally

Serve the repository root over HTTP. This is important: the shared header and footer are loaded with `fetch()`, which does not work reliably when HTML files are opened directly with a `file://` URL.

From the repository root, start Python's built-in static server:

```powershell
py -m http.server 8000
```

If `py` is not available but Python is installed, use:

```powershell
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. Stop the server with `Ctrl+C`.

Alternatively, open the repository in VS Code and use the Live Server extension. No dependency installation is needed.

## Site map

| Page | File | Purpose |
| --- | --- | --- |
| Home | [`index.html`](index.html) | Landing page, class offerings, hero carousel, and Google reviews embed. |
| About Us | [`about.html`](about.html) | Founder profile, background, mission, and vision. |
| Results | [`results.html`](results.html) | Unified Class 10 2026 student cards sorted by marks, with blank photo placeholders where portraits are not yet available, historical achievement images, and an image lightbox. |
| Gallery | [`gallery.html`](gallery.html) | Student, batch, and event photos with a navigable lightbox. |
| Contact | [`contact.html`](contact.html) | Contact details, location, and Google Maps embed. |
| Our Journey | [`journey.html`](journey.html) | Institute milestones and history. |
| Messages | [`messages.html`](messages.html) | Student and parent reviews. |

The pages share [`header.html`](header.html) and [`footer.html`](footer.html). The header contains the navigation; the footer contains the copyright, WhatsApp link, and active-page highlighting.

## Page-by-page developer context

Use this section to locate the source of a page feature before changing it. Page copy, image markup, and most page-specific behavior live in that page's HTML; shared navigation and presentation are described under [Shared site behavior](#shared-site-behavior). For the full current coding conventions, content/heading inventory, image paths grouped by page, and implementation notes, read the [Page Implementation and Content Reference](docs/PAGE-IMPLEMENTATION.md).

### Home — `index.html`

- **Purpose and content:** Main introduction to the institute. Contains the hero carousel, teaching benefits, class offerings, Google reviews widget, and course cards for Classes 9–12 and competitive exams.
- **Interactions:** Swiper drives the hero carousel. Its CSS and JavaScript are loaded from jsDelivr; initialization is an inline script near the bottom of the file. The Google reviews area uses an Elfsight embed and is not locally managed review data.
- **Important links and assets:** Slides link to Gallery, Contact, Our Journey, About, and WhatsApp. Images include root assets such as `classroom_test.png` and `pt_felicitaion_banner.jpg`, plus images under `img/2025/10thClassTest_2025_full_portion/`. One slide uses an external stock image.
- **When changing it:** Keep slide captions, destinations, and assets aligned. If changing Swiper markup or initialization, check both desktop and mobile layouts and confirm the CDN script is available. The “Farewell Party” CTA points to `gallery.html#farewell`; as currently written, `gallery.html` has no element with `id="farewell"`, so add/restore that target if the CTA should scroll to a section.

### About Us — `about.html`

- **Purpose and content:** Founder profile, institute introduction, and mission/vision copy. The founder shown is Poorwa Tailang; the page displays the qualification B.Sc, M.Sc. & MPhil (Maths).
- **Important assets and structure:** Founder portrait is root-level `PoorwaTailang.JPG`. Main sections use `#teacher` and `#about`; shared styles are in `styles.css`.
- **When changing it:** Treat names, qualifications, educational claims, and organization history as factual business content; preserve them unless the requested change supplies updated facts. Check the portrait path and alt text if replacing the photo.

### Results — `results.html`

- **Purpose and content:** A yearwise image collection of student and institute results, including historical material represented in `img/results_yearwise/`.
- **Interactions and styling:** The page contains its own results grid styles and an inline lightbox script. Images open a larger view; the lightbox supports previous/next navigation, Escape/backdrop close, and image panning logic.
- **When changing it:** Add or update the result image and its caption/alt text together. Preserve exact filenames, including spaces, punctuation, and extensions. Check the grid at narrow widths and the lightbox interaction after changing image markup.

### Gallery — `gallery.html`

- **Purpose and content:** Photo and event archive. Current sections cover the 2025–2026 Class 10 farewell, 2025 full-portion tests and events, 2019–20 and 2018–19 batches and events, special achievements, results/achievements, and advertisements/partners.
- **Interactions and assets:** Gallery thumbnail markup and the inline lightbox script are in this file. The lightbox supports previous/next, keyboard arrow navigation, Escape, and backdrop close. Photos are in `img/`, including folders such as `img/2025/`; many older batch images are directly under `img/`.
- **Section links:** The page currently exposes section IDs `gallery`, `results`, and `advertisement`. The homepage links to `gallery.html#farewell`, but the current Gallery markup does not define `id="farewell"`; see the Home note before relying on that fragment.
- **When changing it:** Keep each thumbnail's image, alt text, and following caption consistent because the lightbox reads the caption from the adjacent markup. Preserve lazy loading for long galleries and verify that the lightbox still includes all intended thumbnails.

### Contact — `contact.html`

- **Purpose and content:** Public contact information, institute address, and embedded Google Map. The currently published address is Poorwa Tutorials, P.K. International School, Pimple Saudagar, Pune; the page displays `+91-8698514474`.
- **External links:** Embedded Google Maps iframe and an “Open in Google Maps” link. WhatsApp contact is also available through the shared footer.
- **When changing it:** Phone numbers, address, map location, or other live contact details are business-critical. Do not invent replacements; use confirmed details and keep the displayed information and map/link destinations consistent.

### Our Journey — `journey.html`

- **Purpose and content:** A descending timeline from the 2026 present/future entry to the 2016 foundation year, covering growth, achievements, admissions, and teaching history.
- **External content:** Timeline milestones include YouTube video links for historical learning content. Font Awesome is loaded from a CDN on this page.
- **When changing it:** Keep the milestone year, heading, narrative, and any linked media together. Verify factual dates, student counts, results, and achievement claims with supplied/approved information rather than inferring them.

### Messages — `messages.html`

- **Purpose and content:** Student and parent testimonials shown as review cards, including rating, review text, and author.
- **Data and external link:** Reviews are hard-coded in the HTML (not fetched from Google at runtime). A “View All Reviews on Google Maps” link directs visitors to the external listing.
- **When changing it:** Keep rating, quotation, and attribution paired; do not fabricate testimonials or modify named attributions without approved content. Preserve the external review destination unless asked to change it.

## Shared site behavior

- **Header/navigation:** [`header.html`](header.html) contains the brand, mobile menu button, and navigation links. When adding a page, create a matching link and `nav-<slug>` ID.
- **Footer/active page:** [`footer.html`](footer.html) contains the footer and a filename-to-navigation-ID map. Keep map entries aligned with `header.html`. Current code has a Results link in the header, but the active-page map does not include `results.html`; do not assume the Results item currently receives active-page highlighting.
- **Shared JavaScript:** [`script.js`](script.js) fetches the header and footer into the page placeholders and wires the mobile menu after header insertion. Keep the `.hamburger` and `nav ul` selectors compatible with the markup.
- **Shared styles:** [`styles.css`](styles.css) defines common layout, visual components, and responsive behavior. Results also has page-specific inline styles; Gallery and Results have page-specific inline interaction scripts.

## Repository layout

```text
.
├── index.html, about.html, results.html, gallery.html
├── contact.html, journey.html, messages.html
├── header.html              # Shared navigation markup
├── footer.html              # Shared footer and active-page highlighting
├── script.js                # Shared-fragment loading and mobile navigation
├── styles.css               # Site-wide styles and responsive layouts
├── img/                     # Gallery, results, and other page images
├── docs/
│   └── PAGE-IMPLEMENTATION.md # Page structure, content, asset, and coding reference
├── favicon*.{ico,png}       # Browser icons
├── CNAME                    # Custom production domain
└── .github/
    └── copilot-instructions.md
```

Several standalone images (logo, founder portrait, classroom image, and banner) are kept in the repository root and referenced directly by the pages.

## How the site works

- Each `.html` file is a page and can be opened directly through the local server.
- Most pages include [`script.js`](script.js), which fetches `header.html` and `footer.html` into the `#common-header` and `#common-footer` placeholders. It initializes the mobile menu after the header is inserted.
- Active navigation styling is selected by filename in the inline script in `footer.html`. When adding a page or changing a navigation item, keep its `id` in `header.html` and the filename-to-ID mapping in `footer.html` consistent.
- Page-specific interactions are implemented in inline scripts in the relevant HTML files. For example, the home page initializes Swiper, while the gallery and results pages implement their own lightboxes.
- Shared layout, components, and responsive rules belong in `styles.css`. Some page-specific styles are currently inline in their HTML files; follow the existing page's pattern unless deliberately consolidating styles.
- Images are referenced by relative path. Preserve the existing names, letter case, spaces, and directory structure when editing references; these details can affect deployed sites.

## External services and dependencies

There are no locally installed JavaScript or CSS dependencies. The site does load optional features and content from external services:

- Font Awesome icons from cdnjs.
- Swiper from jsDelivr for the home-page carousel.
- An Elfsight platform script for the home-page Google reviews widget.
- Google Maps on the Contact page.
- External Google Maps, WhatsApp, YouTube, and review links.

These features need network access and may be affected by the availability or configuration of their providers. Avoid changing customer-facing contact, map, or review links without confirming the intended replacement.

## Updating content

- **Navigation:** Edit `header.html`; keep navigation IDs and the active-page map in `footer.html` aligned.
- **Shared appearance:** Edit `styles.css`.
- **Page copy and sections:** Edit the corresponding HTML page.
- **Gallery and results photos:** Add the image under `img/` (or use the appropriate existing root asset) and update the relative image path and accompanying alt text/caption in the page markup.
- **Header or footer behavior:** Check `script.js` and the inline active-page script in `footer.html`, since the fragments are injected after the page loads.
- **Images:** Use descriptive alt text and retain lazy loading where it is already used for long image galleries.

## Context for coding agents

The workspace instructions in [`.github/copilot-instructions.md`](.github/copilot-instructions.md) are intended to be automatically applied to GitHub Copilot chat in VS Code. They direct the agent to read this README before development, inspect the relevant source files, and keep this project context current. If repository instructions are not being applied in VS Code, check that Copilot's instruction-file support is enabled. Keep the README as the fuller project reference; use the instruction file for concise, always-applicable development guidance.

## Deployment and verification

The repository contains a `CNAME` for `poorwatutorials.in` and is structured to be served as static files. There is no deployment workflow in the repository, so confirm the hosting provider's publishing configuration before changing deployment settings.

There is no configured automated test or lint command. After a change, serve the site locally and manually check the affected page at desktop and mobile widths. For shared navigation or fragment changes, check multiple pages and verify that the header, footer, and active-page behavior still work. For image or content changes, check that the assets load and that external links point to the intended destination.
