# Page Implementation and Content Reference

This document records the current page structure, implementation patterns, visible copy themes, and image sources to help developers make changes consistently. It is an inventory of the current code, not a promise that content or claims are still current. When this guide conflicts with the HTML, the HTML is the source of truth; update this document when the implementation changes.

Exact paragraph wording, image alt text, gallery captions, and review quotations remain in their corresponding HTML files to avoid maintaining a second copy that can drift. This guide describes their content and lists the image assets so developers can find the source quickly.

For project purpose, local preview, integrations, and repository overview, see the [README](../README.md). The always-on coding-agent rules are in [`.github/copilot-instructions.md`](../.github/copilot-instructions.md).

## Current coding conventions

- **Page structure:** Every route is a standalone `.html` document. Use the existing page's `<!DOCTYPE html>`, `<html lang="en">`, UTF-8 charset, viewport, title, favicon, stylesheet, shared-fragment placeholders, and semantic sections as the starting pattern.
- **Formatting:** Existing HTML and CSS are indented with four spaces. HTML attributes use double quotes. Follow the surrounding file's formatting and avoid unrelated whole-file reformatting.
- **HTML and CSS:** Use semantic headings and sections; reuse `.container` and existing component classes. Site-wide rules belong in `styles.css`; `results.html` currently has inline page styles. Preserve existing responsive behavior and test at desktop and mobile widths.
- **Naming:** Existing CSS classes and IDs are generally lowercase kebab-case. IDs are also used as in-page anchors and JavaScript selectors; check references before renaming.
- **JavaScript:** Use browser-native JavaScript; there is no framework or package setup. Shared fragment/mobile-menu logic is in `script.js`. The homepage carousel and gallery/results lightboxes are currently inline in their respective HTML pages. Keep selectors aligned with actual markup.
- **Assets:** Use relative asset paths and preserve exact filename casing, spaces, punctuation, and extensions. Most gallery and result images live under `img/`; several branding/hero assets are at repository root. Add descriptive alt text for new meaningful images.
- **Content:** Keep testimonials, names, qualifications, addresses, contact details, result claims, and milestone facts faithful to approved source content. Do not invent quotes or achievements. Preserve external customer-facing URLs unless the task specifically changes them.
- **Validation:** There is no configured build, lint, or automated test command. Use the HTTP preview instructions in the [README](../README.md), check the affected page at desktop and mobile sizes, and test affected links/interactions. Shared changes need checks on multiple pages.

## Shared page shell

Most pages contain `#common-header` and `#common-footer`; `script.js` fetches `header.html` and `footer.html` into these placeholders. Serve the site over HTTP because browsers generally block these fetches from `file://`.

- `header.html`: brand image `logo.JPG`, brand name “Poorwa Tutorials”, displayed phone `+91 86985 14474`, hamburger control, and links to Home, About Us, Results, Gallery, Contact, Our Journey, and Messages.
- `footer.html`: copyright “© 2025 Poorwa Tutorials. All rights reserved.”, WhatsApp URL `https://wa.me/918698514474`, and inline filename-to-navigation-ID highlighting.
- `script.js`: fetches and inserts both fragments; initializes the mobile menu by selecting `.hamburger` and `nav ul`; closes the menu when a navigation link is clicked.
- **Existing navigation gap:** `results.html` is linked from the header as `nav-results`, but it is not present in the current `footer.html` active-page map.
- **Shared visual style:** `styles.css` uses a global reset, a system sans-serif stack (`Segoe UI`, Tahoma, Geneva, Verdana, sans-serif), dark gray body text, light page background, and a centered `.container` with 90% width and 1200px maximum width. The file contains page/component rules and breakpoints at several widths; preserve and verify affected responsive rules rather than assuming a single breakpoint.
- **Unresolved background asset:** The header rule in `styles.css` references `header-bg.jpg`, but that file is not present at the repository root in the current checkout. Verify the asset before relying on or changing that background.

## Page-by-page implementation

### Home — [`index.html`](../index.html)

**Structure and copy**

1. A Swiper hero carousel with six slides:
   - “Class 10 Full Portion Test 2025” — “Simulating Board Exam Environment for Success”.
   - “Focused Exam Preparation” — “Boosting Confidence & Time Management”.
   - “Welcome to Poorwa Tutorials” — “Maths Excellence for Classes 9th to 12th (CBSE)”.
   - “Concept Clarity & Confidence” — personalized guidance, doubt clearing, and results.
   - “Celebrating Student Success!” — CBSE Board.
   - “Interactive Classroom Learning” — small batches, expert faculty, and fun with Maths.
2. A “Farewell Party” CTA above the slides links to `gallery.html#farewell`.
3. “Why Mathematics Matters” explains the relevance of mathematics to economic/technical progress and career opportunities.
4. “What We Offer” lists CBSE Classes 9–12, personalized learning, exam preparation, and study resources. The nearby feature-board text advertises offline classes, conceptual learning, personal attention, weekly/mix-portion/full-portion tests, school-paper discussions, and doubt-clearing classes.
5. “Why Choose Poorwa Tutorials?” describes faculty experience, student results, conceptual clarity/exam strategy, and a supportive learning environment.
6. Google reviews section embeds Elfsight and offers a Google review link. The reviews widget itself is external content.
7. “Our Courses” cards cover Class 9–10 Mathematics, Class 11–12 Maths, and competitive exams (including JEE, Olympiads, and NTSE).

**Images and integrations**

- Carousel slide backgrounds: `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_1.jpeg`; same path ending `_2.jpeg`; `classroom_test.png`; `pt_felicitaion_banner.jpg` (used on two slides); and a Freepik-hosted external stock photo.
- Uses Swiper 11 CSS/JS from jsDelivr; initialization is an inline script near the end of the document.
- Uses Font Awesome from cdnjs and Elfsight from `elfsightcdn.com`.

**Implementation notes**

- Keep slide caption, background, CTA destination, and order consistent.
- The Farewell CTA fragment does not currently have a corresponding `id="farewell"` in `gallery.html`; adding or changing the target requires coordinating both pages.
- Carousel buttons/pagination depend on Swiper markup and initialization. Check that the CDN is reachable when validating.

### About Us — [`about.html`](../about.html)

**Structure and copy**

- `#teacher` contains “Meet Our Founder”, Poorwa Tailang, the displayed qualification “B.Sc, M.Sc. & MPhil (Maths)”, and a short founder description.
- `#about` contains “About Us” and institute copy describing mathematics coaching for Classes 9–12 and competitive exams, student-centered teaching, and CBSE-aligned online videos/live classroom sessions.
- “Our Mission & Vision” is divided into Mission and Vision subheadings. Its copy discusses mathematics as a core life skill, math anxiety, accessible learning, concept building, problem-solving, reasoning, and real-world connections.

**Images and styling**

- Founder portrait: root-level `PoorwaTailang.JPG`, with alt text “Poorwa Tailang”.
- Uses shared `styles.css` and `script.js`; section IDs are `teacher` and `about`.

**Implementation notes**

- Treat founder name, qualification, institute identity, and educational claims as facts requiring confirmation for changes.
- Preserve the portrait path and meaningful alt text when replacing the image.

### Results — [`results.html`](../results.html)

**Structure and copy**

- The page heading is “Yearwise Results”.
- Introductory copy presents the images as year-by-year student achievements in board exams and competitive tests, including Poorwa Tutorials and Shree Tutorials results.
- A “Class 10 Results 2026” section appears before the historical yearwise gallery. It displays 107 student cards: 27 supplied portraits and 80 students whose portraits were not supplied.
- All 107 cards share one grid and are sorted by descending marks; students with equal marks are sorted alphabetically by displayed name. The grid shows 10 cards per row on wide screens, reducing to five, three, or two columns at narrower breakpoints. The 11 students for whom marks were not supplied are shown as “Marks: Not provided” at the end, alphabetically. The duplicate Arnav Shewale row in the source is listed once.
- Cards without a supplied portrait use a blank, accessible placeholder instead of a broken image. Actual portrait cards retain their image, name, and marks. The photo lightbox includes only cards with real images.
- The 27 supplied portraits are marked up in HTML; additional names and marks are stored in the inline script as a small data list and rendered into the same gallery at page load. Results are not loaded from an API.
- Results grid styling and the lightbox CSS are inline in this page, in addition to shared `styles.css`.

**Image inventory**

The 2026 portrait section uses `img/results_2026_class10/`. The public card captions use the student names below; filenames intentionally omit school names that appeared in the source filenames:

| Caption | Marks | Image |
| --- | ---: | --- |
| Aarush Arora | 95 | `aarush-arora.jpeg` |
| Aashka Thakkar | 92 | `aashka-thakkar.jpeg` |
| Adityasingh Karbhari | 95 | `adityasingh-karbhari.jpg` |
| Anishka Lodha | 93 | `anishka-lodha.jpg` |
| Ansh Ramchandani | 91 | `ansh-ramchandani.jpg` |
| Arush Jain | 90 | `arush-jain.jpg` |
| Ayush Indrajeet Kurakuri | 82 | `ayush-indrajeet-kurakuri.jpg` |
| Dhriti Manchharamani | 80 | `dhriti-manchharamani.jpg` |
| Dhruv Shinde | 79 | `dhruv-shinde.png` |
| Gautam Vineet Tutari | 90 | `gautam-vineet-tutari.jpg` |
| Harshil Singla | 94 | `harshil-singla.jpg` |
| Harshit Godbole | 77 | `harshit-godbole.jpg` |
| Kabir Bhatia | 95 | `kabir-bhatia.jpg` |
| Murtaza Ravat | 99 | `murtaza-ravat.jpg` |
| Neil Oza | 69 | `neil-oza.jpg` |
| Pratyush Mohanty | 95 | `pratyush-mohanty.jpg` |
| Purav Shah | 96 | `purav-shah.jpg` |
| Saee Kane | 82 | `saee-kane.jpg` |
| Samiksha Patil | 85 | `samiksha-patil.jpg` |
| Sanjeevani Nirmal | 92 | `sanjeevani-nirmal.jpg` |
| Sarakshi Tiwari | 70 | `sarakshi-tiwari.jpeg` |
| Shanmukh Prasad | 68 | `shanmukh-prasad.jpg` |
| Shreyas Mulik | 84 | `shreyas-mulik.jpg` |
| Soham Deshmane | 88 | `soham-deshmane.jpg` |
| Soham Shailesh Pathak | 63 | `soham-shailesh-pathak.jpg` |
| Srushti Kokate | 95 | `srushti-kokate.jpg` |
| Vihaan Prakash | 86 | `vihaan-prakash.jpg` |

All result thumbnails use `img/results_yearwise/`. These are the current referenced files; preserve exact spelling, spaces, and suffixes:

| Year | Files |
| --- | --- |
| 2026 | `2026_8th_jan_punepulse_advertisement.jpeg` |
| 2025 | `2025_3rd_july_punepulse_advertisement.jpeg`; `2025_3rd_july_punepulse_advertisement_review_comments.jpeg` |
| 2023 | `2023_Punepulse_from_2018_to_2023.jpeg` |
| 2022 | `2022_Pune Pulse Ad 21 Jan 2022 10th, 12th CBSE Maths Result Batch 2020-21.jpg`; `2022_Pune Pulse Ad 21 Jan 2022 CBSE 10th Science, 12th Chemistry Result Batch 2020-21.jpg.jpg` |
| 2021 | `2021_Pune Pulse ad Poorwa Shree Tutorials 14th Aug 2021.jpeg`; `2021_Pune Pulse ad Poorwa Tutorials 5th Dec 2021.jpg`; `2021_Pune Pulse ad Shree Tutorials 5th Dec 2021.jpg`; `2021_Pune Pulse ad Shree Tutorials Reviews 5th Dec 2021.jpg` |
| 2020 | `2020_10th Batch Results Dec 2020 Poorwa Tutorials.jpg`; `2020_Pune Pulse ad Dec 2020 Poorwa Tutorials.jpeg`; `2020_Shree Tutorials Results-of-2020-CBSE-10-th-SCIENCE-AND-12-th-CHEMISTRY-1.jpg` |
| 2019 | `2019_Poorwa and Shree Tutorials  Result 10th Shree 2018 19-1.jpg`; `2019_Poorwa Tutorials_2019_Toppers.jpeg`; `2019_Results Shree and Poorwa Tutorials 10th CBSE Science 12th CBSE Chemistry.jpg`; `2019_Shree and Poorwa Tutorials Result_2018_19-1.jpeg` |
| 2018 | `2018_Shree Tutorials Results 10th CBSE Science 12th CBSE 2020.jpg`; `2018_Shree Tutorials_Results-X-CBSE-2018-8.jpg` |
| 2017 | `2017_Poorwa and Shree Tutorials -results-of-10th-12th-JEE-CET-2016-1017.jpg` |
| 2016 | `2016_Shree Tutorials_Fantastic-results-2016.jpg` |

**Interactions**

- Clicking a result image, including a 2026 portrait, opens the page's inline lightbox. It supports previous/next, Escape/backdrop close, and panning logic for large images.
- The inline script adds the no-photo student data as cards, then sorts all `.class10-results-gallery` cards by numeric `.result-score` descending and displayed name ascending for ties; unprovided marks sort last. Keep student names in a paragraph outside `.result-score`. A blank placeholder uses `.result-photo-placeholder` with an accessible label.
- Keep no-photo roster data and portrait markup in the same `.class10-results-gallery` so all students appear together. The lightbox is built from actual images only, so do not add a fake/broken `img` to placeholder cards.
- Marks are copied from the user-provided 10th-class results table. The user confirmed the name matches for Ayush Indrajeet Kurakuri/Ayush Kurakuri, Gautam Vineet Tutari/Vineet Tutari, Saee Kane/Saee Pravin Kane, and Soham Shailesh Pathak/Soham Pathak. The source lists Soham Pathak as 63, so that is the value shown for the confirmed matching portrait. Scores are labelled “Marks” as in the source; they are not labelled as percentages.
- New 2026 portraits use lazy loading and `object-fit: contain` within a consistent card height so faces and any existing image text are not cropped. The supplied folder also contained a PDF; it is not included in the gallery because this update uses the supplied portrait photos only.
- Keep each `.result-item` image, `alt`, and caption together. Verify the lightbox after changing the item markup and verify the single-column mobile grid.

### Gallery — [`gallery.html`](../gallery.html)

**Structure and text**

- Main heading “Gallery” and subtitle describing student batches, events, and achievements.
- Sections: “2025-2026 Farewell Party – 10th Class Batch”, “2025 Class 10 Full Portion Tests”, “2025 Batch & Events”, “2019-20 Batch”, “2019 - Events & Celebrations”, “2018-19 Batch”, “2018 - Events & Celebrations”, “Special Achievements”, “Results & Achievements”, and “Advertisements & Partners”.
- Farewell section includes a quote attributed to Poorwa Tailang and a short event introduction.
- Image caption text is part of each `.gallery-item`, adjacent to its thumbnail. The inline script reads that adjacent paragraph as the lightbox caption.

**Image inventory by current section**

- Farewell ticket strip and Farewell Party section share nine files:
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.03 (1).jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.03.jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.04.jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.05 (1).jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.05.jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.06 (1).jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.06 (2).jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.06 (3).jpeg`
  - `img/2025/Batch2025-2026FarewellParty10thClassBatch/WhatsApp Image 2026-02-14 at 14.02.06.jpeg`
- Full-portion test photos:
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_1.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_2.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_3.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_4.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_5.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_6.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_7.jpeg`
  - `img/2025/10thClassTest_2025_full_portion/2025_full_portion_test_maths_10th_class_8.jpeg`
- 2025 student/parent event images: `img/2025/2025_students_award.JPG`, `img/2025/2025_parents_talking.JPG`.
- 2019–20 batches: `img/9th_2019-20-batch.jfif`, `img/9th_2019-20-batch-2.jfif`, `img/9th_2019-20-batch-4.jfif`, `img/10th_2019-20-batch.jfif`, `img/10th_2019-20-batch-2.jpg`, `img/10th_2019-20-batch-3.jfif`.
- 2019 celebrations: `img/Felicitation of meritorious students 2019.JPG`, `img/A glimpse of the Felicitation ceremony 2019_2.JPG`.
- 2018–19 batch: `img/10th_2018-19-batch.jfif`, `img/10th_2018-19-batch-2.jfif`, `img/10th_2018-19-batch-3.jfif`, `img/10th_2018-19-batch-4.jfif`; 2018 celebration: `img/Felicitation_10th_2018.JPG`.
- Achievements: `img/2020_100_Scorer.JPG`, `img/Students with 100100 in Science and maths.JPG`, `img/PT_ST_Header.JPG`.
- Results/advertisement material: `img/20262025_punepulse_results/2026_8th_jan_punepulse_advertisement.jpeg`, `img/20262025_punepulse_results/2025_3rd_july_punepulse_advertisement.jpeg`, `img/20262025_punepulse_results/2025_3rd_july_punepulse_advertisement_review_comments.jpeg`, `img/Result_2021_Both.jpeg`, `img/REsult_2021_PT.jpeg`, `img/2020/Result-2020-adv.jpg`, `img/Adv_201920_resulttop.JPG`, `img/Adv_punePulse-1.jfif`, and `img/Adv-Website1.jpg`.

**Interactions and notes**

- The page contains its own lightbox markup and inline script. It opens on thumbnail click, supports previous/next, arrow-key navigation, Escape, and clicking the backdrop.
- The currently referenced section IDs are `gallery`, `results`, and `advertisement`. Home's `gallery.html#farewell` link currently has no matching `id="farewell"` here.
- Preserve each image's useful `alt` text, adjacent visible caption, and `loading="lazy"` on long galleries. Some ticket strip images are intentionally repeated in the event gallery.

### Contact — [`contact.html`](../contact.html)

**Structure and text**

- `#contact` section headed “Visit Us / Contact Us”.
- Displays address as Poorwa Tutorials, P.K. International School, Pimple Saudagar, Pune.
- Displays mobile `+91-8698514474` with a Call/WhatsApp prompt.
- Contains a Google Maps iframe and “Open in Google Maps” external link.

**Images and integrations**

- No local photo is used in the page body. The map is remote embedded content from Google Maps and has lazy loading.
- The shared footer provides the WhatsApp link.

**Implementation notes**

- The displayed address, phone, iframe location, and map link must be treated as one set of verified business details. Do not replace any of them with guessed data.

### Our Journey — [`journey.html`](../journey.html)

**Structure and text**

- A descending timeline from 2026 to 2016. Current year/headline/content inventory:
  - **2026 — Present & Future:** “Celebrating 10 years”, mentoring 100+ students annually.
  - **2025 — Community Trust:** positive parent/student feedback.
  - **2024 — Record Achievements:** over 100 enrolled, 50+ scoring 95%+, advanced problem-solving.
  - **2023 — Consistent Growth:** new study materials and board distinctions.
  - **2022 — Competitive Exam Focus:** 15+ students qualified for JEE Main.
  - **2021 — Outstanding Results:** 100% pass rate and multiple perfect mathematics scores.
  - **2020 — Digital Transformation:** online instruction, digital board, chapter/full-length tests, digitally shared evaluated answers.
  - **2019 — Celebrating Success:** felicitation ceremony and 10th board results.
  - **2018 — Admissions Milestone:** 2017 batch admissions and Classes 9–12 CBSE enrollment.
  - **2017 — Building Momentum:** parent/student feedback and expanded practice/test materials.
  - **2016 — Foundation Year:** establishment at P.K. International School, founders Poorwa Ma'am (Maths) and Geeta Ma'am (Science), Classes 9–12 CBSE.

**Images and integrations**

- No local image tags are used in the timeline.
- Includes YouTube links in the 2021 and 2020 milestones. Font Awesome 6.5.2 is loaded from cdnjs.

**Implementation notes**

- Treat all dates, counts, rankings, and achievement assertions as facts requiring approval before edits. Keep the year, title, prose, and associated video link together.

### Messages — [`messages.html`](../messages.html)

**Structure and text**

- Heading “Messages from Students & Parents”, explanatory text identifying the content as Google Maps reviews, followed by 18 statically authored review cards.
- Every card groups a star display, numeric rating, quoted review, and author. The current content includes 4.0 and 5.0 ratings and feedback about teaching clarity, support, tests, worksheets, resources, and student improvement.
- Current attributions, in order: Shreni Pawar; Shubhra Phirke; Karteek (Gautam Vineet); Shesh Rao; Parag Tyagi; Aarti Bhavsar; Gunjan Agrawal; Sonali Naik; Shipra Khare; Shraddha Kulkarni; Megha Goswami; Sonia Sharma; Dipika Patro; Shraddha Patil; Pallavi Suryawanshi; Shloka Thaker; Devshri Sangamnerkar; Saurabh Khare.
- A “View All Reviews on Google Maps” CTA points to the external Google listing.

**Images and integrations**

- No local images are used on this page. Font Awesome icons are loaded from cdnjs; the page does not fetch the displayed review cards dynamically.

**Implementation notes**

- Preserve the rating, quotation, and author as a single record. Do not fabricate or silently rewrite testimonials or attributions. Keep the external destination intact unless specifically requested.

## Image and copy maintenance checklist

1. Locate the page section in this document, then open the linked HTML file; update code and visible text there.
2. For each changed image, verify the path exists, keep exact filename casing, update descriptive `alt`, and keep the caption aligned with the actual image.
3. For galleries and results, maintain the existing card/thumbnail structure because lightbox scripts read from its DOM.
4. Confirm factual copy with approved information. These pages contain public claims, names, review quotes, phone/address details, and historical results.
5. Update this document if sections, image groups, interactions, or page text change materially.
