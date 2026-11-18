# Portfolio — Philip Filadelphia Tomasui

Read this file before every task. It is the source of truth for design and content rules.

## Goal

A personal portfolio aimed at **tech internship recruiters** (back-end and machine learning).
Within 30 seconds a recruiter must know: who Philip is, what he builds, proof that he can, and how to contact him or download his CV.

## Stack

- Next.js App Router in `src/app`, TypeScript, Tailwind CSS (`tailwind.config.ts`), `next/font/google`.
- Do not add UI libraries, animation libraries or icon packs without asking first. Icons are small inline SVGs (stroke 1.8–2, `currentColor`).
- All page copy lives in `src/content/content.ts`. Components never hard-code user-facing text.

## Design direction: "ID Card"

Visual reference: the design canvas "Portfolio Philip Tomasui — 5 Arah Desain", page **"v5 · ID Card dipoles"** (artboards "Home · desktop" and "Home · HP").

### Color tokens (add to `tailwind.config.ts` under `theme.extend.colors`)

| Token | Hex | Use |
|---|---|---|
| `navy` | `#1f2d6b` | Hero, contact block, primary text accents, active filter |
| `navy-deep` | `#16215a` | Footer background, lanyard straps |
| `navy-line` | `#2a3772` | Dividers inside the footer |
| `gold` | `#c8a24a` | Primary buttons on navy, active language button, ID-card bottom stripe |
| `gold-ink` | `#7d5c12` | Gold-coloured text on white (machine-learning tags) |
| `ink` | `#121a3d` | Body text on white, text on gold |
| `body` | `#3a4260` | Secondary paragraph text |
| `muted` | `#4d5674` | Meta text (dates, stacks) |
| `mist` | `#eef1f8` | Thumbnail placeholders, image backgrounds |
| `line` | `#dfe3ee` | Hairlines between rows |
| `card-line` | `#d8ddea` | Card borders |
| `on-navy` | `#c5cce6` | Muted text on navy |
| `fill-bg` / `fill-fg` | `#fff1bf` / `#5a4300` | Highlight for unfilled `[ISI: …]` placeholders |
| `live` | `#2f9e57` | "Currently active" dot |

### Typography

- One family: **Archivo** variable (`next/font/google`, `axes: ['wdth']`, weights 400–800).
- Headings are condensed: `font-stretch` 62–80 %, weight 800, line-height 0.9–1.1. Tailwind v3 has no font-stretch utility, so use arbitrary properties such as `[font-stretch:68%]`.
- Hero name: `clamp(52px, 8.4vw, 112px)`, stretch 68 %, line-height 0.9.
- Section titles: `clamp(42px, 6vw, 68px)`, stretch 70 %.
- Body: 17px / 1.6, normal width. Lines stay under ~75 characters.

### Shape and depth

- Buttons and inputs: radius 4px. Cards: radius 10px, 1px `card-line` border, **no shadow**. ID card: radius 18px.
- The ID card is the only element with a shadow (`0 30px 60px rgba(8,14,45,.45)`) and the only rotated element (−4°).

### Rules (keep the page from looking generated)

- No ALL-CAPS labels, no tracked-out eyebrow text above headings.
- No `01 / 02 / 03` numbering unless the content really is a sequence.
- No arrows (→) appended to button text, no emoji, no gradients, no glassmorphism.
- No progress bars or percentages for skills.
- One bold element per screen: the hero ID card. Everything else stays calm.
- Sentence case everywhere. Buttons say exactly what happens ("Email me", "Download CV").

### Accessibility and quality floor

- Real `<button>`, `<a href>`, `<nav>`, `<main>`, `<footer>`; `aria-label` on icon-only buttons; `aria-pressed` on toggles.
- Text contrast WCAG AA (4.5:1). Touch targets at least 44px.
- Visible focus ring: `outline: 2px solid #c8a24a; outline-offset: 2px`.
- Respect `prefers-reduced-motion` (no smooth scrolling or animation when set).
- Works from 360px wide upward; nothing scrolls horizontally except the project slider.

## Content rules

- Every string is bilingual `{ en, id }`. Language is switched with an EN/ID toggle and remembered in `localStorage` (wrap access in try/catch).
- **Never invent facts** (numbers, dates, employers, links). If something is missing, use a visible placeholder `[ISI: …]` rendered with the `fill-bg` / `fill-fg` highlight.
- Contact: email `dzosfphilip@gmail.com`, WhatsApp `https://wa.me/6281237651330`. LinkedIn, Instagram and GitHub URLs are placeholders until Philip supplies them.

## Page structure (home `/`)

1. Nav (on navy): name, links Experience / Projects / Skills / Contact, EN/ID toggle.
2. Hero (navy): condensed name, one-line intro, "looking for" line, Email + CV buttons, ID card on a lanyard with Philip's photo.
3. Experience: dated list, newest first. SatuaGen-AI is the current item with a green live dot.
4. Projects: filter All / Back-end / Machine learning (with counts); 3 featured cards with thumbnail; "More projects" horizontal slider (scroll-snap + prev/next buttons using `scrollBy`).
5. Skills: three groups, each skill shows "Used in: <projects>".
6. Contact block (navy): headline, Email (gold), WhatsApp, Download CV.
7. Footer (navy-deep): identity + live Bali time (WITA, `Asia/Makassar`), page links, "Reach me" list (WhatsApp, Email, LinkedIn, Instagram, GitHub), language toggle, back to top, copyright line, oversized "Tomasui" wordmark.

Project detail pages live at `/projects/[slug]` and show: problem, approach, result (with model comparison table when present), takeaway, screenshot, stack.

## Workflow

- `npm run dev`, `npm run build`, `npm run lint`. Run build and lint after every task; fix what breaks.
- Work on the `redesign` branch. Small commits with clear messages.
- Ask before deleting anything that is not listed in the cleanup report Philip approved.
