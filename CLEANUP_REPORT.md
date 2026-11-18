# Cleanup report

Audit on branch `redesign` (18 Nov 2026), before the redesign.
Tools: `npx knip` (default config, Next.js plugin detected automatically; no knip.json needed), `npm run build`, `npm run lint`.

## Baseline

- `npm run build`: passes. Only a Node `DEP0174` deprecation warning from tooling.
- `npm run lint`: "No ESLint warnings or errors" (after adding `.eslintrc.json` and installing `eslint@8` + `eslint-config-next@14` as devDependencies).
- knip:
  - Unused files: `src/components/MagneticButton.tsx`, `src/content/content.ts` (new, not wired up yet)
  - Unused dependencies: `clsx`, `tailwind-merge`
  - Unused export: `getFallbackTelemetry` in `src/lib/github.ts`
  - Unused exported type: `ProjectItem` in `src/types/index.ts`

First Load JS before: `/` 150 kB, `/projects` 134 kB, `/toolkit` 137 kB, shared 87.3 kB.

## Routes

| Path | Contents | Used by | Recommendation | Reason |
|---|---|---|---|---|
| `src/app/page.tsx` | Old home (hero, carousel, slider, GitHub activity) | entry | rewrite | Becomes a placeholder, then the ID Card home |
| `src/app/projects/page.tsx` | Old project list | entry | delete | Approved; replaced by home section + `/projects/[slug]` |
| `src/app/toolkit/page.tsx` | Skills page with hard-coded data | entry | delete | Approved; replaced by the Skills section |
| `src/app/api/github/route.ts` | GitHub telemetry endpoint | `GithubActivity` | delete | Approved; nothing in the new design calls it |
| `src/app/error.tsx` | Error boundary | Next | keep | Made neutral now, restyled in Prompt 10 |
| `src/app/global-error.tsx` | Root error boundary | Next | keep | Same |
| `src/app/not-found.tsx` | 404 | Next | keep | Same |
| `src/app/layout.tsx` | Fonts, theme, overlays, Navbar/Footer | Next | rewrite | Remove old fonts, theme and overlays |

## Components

| Path | Contents | Used by | Recommendation | Reason |
|---|---|---|---|---|
| `Navbar.tsx` | Old nav + theme toggle | layout | delete | Approved |
| `Footer.tsx` | Old footer | layout, ExhibitionSlider | delete | Approved; new footer comes in Prompt 8 |
| `ThemeProvider.tsx`, `ThemeToggle.tsx` | next-themes wrapper and toggle | layout, Navbar | delete | Approved; no dark mode |
| `GrainOverlay.tsx`, `AmbientGlowOrbs.tsx` | Decorative overlays | layout | delete | Approved |
| `SkillCarousel.tsx`, `EngineeringGatewayCards.tsx` | Skills carousel | page | delete | Approved |
| `ExhibitionSlider.tsx`, `LeadershipGatewayCards.tsx` | Leadership slider | page | delete | Approved |
| `GithubActivity.tsx` | GitHub contribution graph | page | delete | Approved |
| `ProjectFilterGrid.tsx` | Project filter grid | /projects | delete | Approved |
| `ScrollReveal.tsx` | framer-motion reveal wrapper | pages, ProjectFilterGrid | delete | Only used by deleted pages; framer-motion is being removed |
| `MagneticButton.tsx` | Magnetic hover button | nobody (knip) | delete | Approved |

## Utilities and types

| Path | Contents | Used by | Recommendation | Reason |
|---|---|---|---|---|
| `src/lib/github.ts` | GitHub fetch | api route, old home | delete | Approved; no users left |
| `src/types/index.ts` | Types for old components | old components | delete | Approved; no users left after cleanup |

## Style

| Path | Recommendation | Reason |
|---|---|---|
| `globals.css` | rewrite | Remove theme CSS variables, `.dark`, grain and orange accent; keep Tailwind directives and a minimal reset |
| `tailwind.config.ts` | rewrite | Remove `darkMode`, CSS-variable colours, `signal-orange`, `stone` aliases, old fonts, radius/spacing presets |

## Assets in public

| Path | Used by | Recommendation | Reason |
|---|---|---|---|
| `public/profile.jpg` | old home only | delete | Approved; it is actually a PNG, identical to `philip-profile.png` |
| `public/philip-profile.png` | nobody | delete | Approved |
| `public/CV_Philip_Tomasui.pdf` | old home, /projects | delete | Approved; new copy at `public/cv/` |
| `public/images/philip.png` | `content.ts` (temporary) | **keep for now** | `philip.jpg` and `philip-cutout.png` are not in the repo yet; deleting it would leave no photo |
| `public/images/ai-cover.jpg`, `backend-cover.jpg`, `frontend-cover.jpg` (~2 MB) | only `EngineeringGatewayCards` (deleted) | **question for Philip** | Orphaned after cleanup, not on the approved list, so not deleted |

No metadata, Open Graph or Twitter image references the old assets.

## npm dependencies

| Package | Recommendation | Reason |
|---|---|---|
| `framer-motion` | uninstall | Approved; no animation library |
| `lucide-react` | uninstall | Approved; inline SVG icons |
| `next-themes` | uninstall | Approved; no dark mode |
| `clsx`, `tailwind-merge` | uninstall | Approved; unused (knip) |
| `eslint@8`, `eslint-config-next@14` (dev) | added | Needed so `next lint` runs non-interactively |

## Commands run

```bash
git rm -r src/app/projects src/app/toolkit src/app/api src/lib src/types
git rm src/components/*.tsx
git rm public/profile.jpg public/philip-profile.png public/CV_Philip_Tomasui.pdf
npm uninstall framer-motion lucide-react next-themes clsx tailwind-merge
```

## Open questions

1. Delete the three cover images in `public/images/`?
2. `philip.jpg` and `philip-cutout.png` are not in `public/images/`. Once they are, switch `profile.photo` back to `/images/philip.jpg` and delete `philip.png`.
