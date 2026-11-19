# Project Instructions for Coding Agents

## Read project context first

- Before starting a development task, read the repository's [`README.md`](../README.md) for the application purpose, page map, architecture, development workflow, and external-service constraints.
- For any page, visual, copy, or asset change, also read [`docs/PAGE-IMPLEMENTATION.md`](../docs/PAGE-IMPLEMENTATION.md) for the current page structure, coding conventions, text/content inventory, image paths, and interaction-specific requirements.
- Then inspect the current source for the requested change. Treat the source as authoritative if it differs from the README; update the README when a change materially changes documented project behavior or structure.
- Trace shared behavior across its callers before editing. In particular, check the page, shared header/footer, JavaScript, styles, and referenced assets that the change can affect. Do not assume a page or asset exists based only on documentation.

## Project architecture

- This is a static, multi-page website using plain HTML, CSS, and vanilla JavaScript. There is no package manifest, framework, backend, build step, or configured automated test suite.
- Shared layout fragments are `header.html` and `footer.html`. `script.js` fetches them into `#common-header` and `#common-footer`; pages using these fragments must be served over HTTP, not opened directly with `file://`.
- `header.html` defines navigation links and their IDs. `footer.html` contains the filename-to-navigation-ID map for active-page highlighting. Keep the link, ID, and map entry in sync when adding or changing pages. Verify the map against the actual source; not every existing navigation item is necessarily mapped.
- `script.js` initializes the mobile menu after injecting the header. Preserve its expected `.hamburger` and `nav ul` selectors, or update the script together with any markup changes.
- Shared styles and responsive rules are in `styles.css`. Some page-specific styles and interactions are inline in the relevant HTML files.
- Image assets are referenced by relative paths, and some existing names contain spaces or mixed casing. Preserve exact paths and case when editing references; add useful alt text for new images.

## Development and verification

- Make focused changes that follow the existing page and styling patterns. Keep customer-facing content, phone numbers, WhatsApp, maps, review links, and other external integrations unchanged unless the task specifically requests a change.
- There are no project build, lint, or automated test commands. For code changes, preview the site using the local HTTP server instructions in the README and manually check affected behavior at desktop and mobile widths. For shared changes, check more than one page.
- Report clearly if a requested behavior cannot be validated locally, for example because it depends on an external service.

## Keep context current

When a development change affects project structure, page responsibilities, runtime, local workflow, tests, integrations, or important conventions, update the relevant section of [`README.md`](../README.md) and/or [`docs/PAGE-IMPLEMENTATION.md`](../docs/PAGE-IMPLEMENTATION.md). Keep this instruction file concise and focused on guidance agents need on every task; keep detailed page and content context in the reference document.
