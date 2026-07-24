# STYLE_AUDIT.md — Phase 0 (read-only)

Audit of `my_portfolio` before the dark editorial-technical redesign. No source files were
modified in producing this. Every specific claim cites a file and line. Where I could not
confirm something from the code, it is listed as an open question rather than guessed.

> **One caveat about content:** `src/pages/Index.tsx` and `README.md` in this repo already
> reflect the earlier `RESUME_CONTENT.md` copy refresh done in this session. `index.html`
> meta tags and `src/assets/resume.pdf` do **not** — they are still the old version. That
> split matters for the content-coupling analysis below.

---

## 1 — INVENTORY (the facts)

### Stack & tooling
- **Framework:** Vite + React SPA. React `18.3.1`, Vite `5.4.19`, `@vitejs/plugin-react-swc` `3.11.0` (`package.json`). Not Next.js — no App/Pages Router; routing is client-side via `react-router-dom` `6.30.1` (`src/App.tsx:5,16-22`).
- **Language:** TypeScript `5.8.3` (`tsconfig.json`, `tsconfig.app.json`).
- **Package manager:** ambiguous — **both** `bun.lockb` (201 KB) and `package-lock.json` (223 KB) are committed. CI uses `npm ci` (`.github/workflows/deploy.yml:26`). Two lockfiles is a smell; pick one.
- **Node:** CI pins **Node 18** (`.github/workflows/deploy.yml:19`). No `.nvmrc`, no `engines` field — nothing constrains local Node.
- **Deployment:** GitHub Pages via `peaceiris/actions-gh-pages@v3`, `publish_dir: ./dist`, custom domain `cname: vishnuvardhanreddy.me` (`.github/workflows/deploy.yml`). `.nojekyll` present. `vite.config.ts` sets `base: '/'` (correct for the apex domain). Dev server on port 8080 (`vite.config.ts:7-8`).
- **No SPA 404 fallback:** there is no `public/404.html`. On GitHub Pages, a hard refresh or direct hit to any path other than `/` returns GitHub's own 404 — the React `NotFound` route (`src/App.tsx:20`) never gets a chance to render. Low impact today (one-page site) but real.

### Styling architecture
- **Tailwind CSS `3.4.17`** + **shadcn/ui** (`components.json`, `style: "default"`, `baseColor: "slate"`). No CSS Modules, no styled-components, no SCSS.
- **Design tokens exist and are reasonable** — HSL CSS custom properties in `src/index.css:10-88`, split `:root` (light) / `.dark`. Colours, three gradients, two shadows, and one transition are tokenized. Tailwind maps them via `hsl(var(--…))` (`tailwind.config.ts:16-60`). This is the strongest part of the codebase and the redesign should extend it, not replace it.
- **What's customised vs default in the Tailwind config:** only `colors` (all token-mapped), `borderRadius` (from `--radius`), `container` (centered, 2rem pad, 2xl=1400px), and two accordion keyframes (`tailwind.config.ts:8-88`). **No `fontFamily`, no custom `fontSize`, no `letterSpacing`, no `transitionTimingFunction`, no spacing extensions.** Everything typographic and motion-related falls back to Tailwind defaults.
- **Systematised vs ad-hoc:** colour/gradient/shadow = systematised (good). Typography, spacing, and layout = ad-hoc Tailwind utilities sprinkled inline in `src/pages/Index.tsx`.
- **CSS-in-JS runtime:** none. Global stylesheet is small (`src/index.css`, 138 lines). But `src/App.css` (the default Vite template: `.logo`, `logo-spin`, `.read-the-docs`, lines 1-40) is **dead code — not imported anywhere** (`main.tsx:3` imports only `index.css`; `App.tsx` imports no CSS). Delete it.

### Typography
- **Fonts: none loaded.** No `@font-face`, no `next/font`, no Google Fonts `<link>`, no `@import` — confirmed by grep across `src/`, `index.html`, `tailwind.config.ts`. The site renders in Tailwind's default `font-sans` stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto…`), i.e. **the visitor's OS system font**. This is the single biggest "templated" tell.
- **Type scale actually in use** (all from `src/pages/Index.tsx`, Tailwind defaults):
  - `text-6xl` / `text-5xl` — h1 (`:110`)
  - `text-4xl` — section h2 (`:189`, `:214`, `:268`, …)
  - `text-2xl` — h3 in Experience/Education, hero subtitle md (`:120`, `:222`, …)
  - `text-xl` — project/skill/cert h3, contact lead (`:120`, `:279`, …)
  - `text-lg` — body copy, xl buttons
  - `text-base` — button `xl` size (`src/components/ui/button.tsx:25`)
  - `text-sm` — social labels, badges, footer
  - `text-xs` — tech badges
  - **Weights:** `font-bold`, `font-semibold`, `font-medium`, normal. **Line-height:** only `leading-tight`, `leading-relaxed`, `leading-snug`. **Letter-spacing:** none anywhere — zero `tracking-*` usage.
- **Verdict:** the *sizes* roughly follow Tailwind's scale (consistent enough), but there is no deliberate typographic system — no font choice, no tracking, no display/body distinction beyond size. It reads as default.

### Colour
- **Defined palette (tokens, `src/index.css`):**
  - background `0 0% 100%` / dark `222 47% 11%`
  - foreground `222 47% 11%` / dark `0 0% 98%`
  - **primary (cyan) `189 94% 43%`** / dark `53%`; `--primary-glow` `189 94% 53/63%`
  - **accent (orange) `25 95% 53%`**
  - secondary slate `222 47% 11%`; muted `210 40% 96%` / `217 33% 17%`; muted-foreground `215 16% 47%` / `215 20% 65%`; destructive red `0 84% 60%`; border `214 32% 91%`
  - gradients: `--gradient-primary` (cyan→cyan), `--gradient-accent` (orange→orange), `--gradient-hero` (slate→slate) (`src/index.css:42-44`)
- **This is the stock Lovable/shadcn "cyan-on-slate + orange accent" default.** Two saturated brand hues that never appear together with intent. After the Hobbies section was removed this session, `--gradient-accent` / the orange `accent` are now **effectively unused on the page** — the live palette is really just cyan + slate + white.
- **Off-palette hard-coded colours** (bypass the token system):
  - `src/pages/NotFound.tsx:12,15,16` — `bg-gray-100`, `text-gray-600`, `text-blue-500`, `hover:text-blue-700`. This page doesn't use the design system at all.
  - `src/App.css:12,15,42` — `#646cffaa`, `#61dafbaa`, `#888` (dead code).
  - `index.html:14,18` — `og:image`/`twitter:image` point at `/placeholder.svg`.
- **Contrast (computed):** body/heading contrast is strong (near-black on white ≈ 16:1). The weakest real text is `muted-foreground` light mode `215 16% 47%` on white ≈ **4.7:1** — passes WCAG AA for normal text, but only just. Translucent-white text on the slate hero/contact (`text-white/70`, `/80`) computes to roughly **7–9:1** over the dark gradient — fine. So contrast is *not* a current problem; re-verify after recolouring to near-black.

### Spacing & layout
- **Reasonably consistent**, all on Tailwind's default 4px scale. Sections use `py-20 px-4` uniformly (`Index.tsx:188,213,267,296,342,393,441`). Gaps are `gap-4/6/8/12`. No arbitrary `px-[13px]`-style one-offs.
- **Containers:** `container max-w-6xl mx-auto` for most sections; Contact narrows to `max-w-4xl` (`:442`). Config container is centered with `2rem` padding, `2xl:1400px` (`tailwind.config.ts:8-14`).
- **Layout patterns:** flex + CSS grid. Hero `grid md:grid-cols-2` (`:100`); Projects `grid md:grid-cols-2` (`:270`); Skills `grid md:grid-cols-2` (`:300`); Certifications `grid md:grid-cols-3` (`:407`); Contact `grid sm:grid-cols-2 md:grid-cols-4` (`:365`).
- **Breakpoints:** almost entirely `md:`, with occasional `sm:`/`lg:`. Applied consistently. Mobile is a single-column stack — functional but not *designed* (see critique).

### Motion
- **No animation library installed.** No Framer Motion, GSAP, Lenis, Three, R3F, Spline in `package.json`. `tailwindcss-animate` `1.0.7` is present but only drives shadcn/Radix enter/exit + the two accordion keyframes.
- **Every motion currently in the code:**
  - `--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (`src/index.css:49`) — the **one** custom curve (Material standard ease-in-out). Exposed as `.transition-smooth` and baked into the Button base (`button.tsx:8`), `hover-lift` (translateY -4px) and `hover-glow` (`src/index.css:130-136`).
  - `group-hover:scale-110` on contact icons (`Index.tsx:370`, uses the 300ms smooth transition).
  - `html { scroll-behavior: smooth }` (`src/index.css:101`) and `scrollIntoView({behavior:"smooth"})` (`Index.tsx:90`) — neither guarded by reduced-motion.
  - **`animate-fade-in` is a no-op.** It's applied twice (`Index.tsx:97,184`) but **no `fade-in` keyframe is defined** in `index.css` or `tailwind.config.ts`, and `tailwindcss-animate` exposes `animate-in`+`fade-in-0`, not `animate-fade-in`. So the site's only intended entrance animation does nothing. The page is fully static on load.
- **Easing consistency:** technically consistent (one curve everywhere it's applied) — but that's because there's almost no motion. `prefers-reduced-motion` is respected **nowhere** in live code (the only reference is in dead `App.css:30`).

### Components & structure
- **Route tree:** `App.tsx` → `/` = `Index`, `*` = `NotFound` (`src/App.tsx:16-22`). Providers: QueryClient, Tooltip, two Toasters (`:12-15`).
- **The entire visible site is one file:** `src/pages/Index.tsx` (~470 lines) renders every section inline: Hero → About → Experience → Projects → Skills → Education → Certifications → Contact → Footer. There is no `<Section>`, `<Hero>`, `<ProjectCard>` etc. — sections are copy-pasted JSX blocks.
- **Reusable vs one-off:** the only first-party reusable pieces are `ThemeToggle` (`src/components/ThemeToggle.tsx`) and `NavLink` (`src/components/NavLink.tsx`) — and **`NavLink` is imported nowhere** (dead). `src/components/ui/` holds **50+ shadcn components; only Button, Card, Badge, Toaster, Sonner, Tooltip are used.** The rest (carousel, chart, sidebar, calendar, command, drawer, …) are dead surface area.
- **Duplication a redesign should consolidate:**
  1. The social links (email/phone/LinkedIn/GitHub, same URLs) are authored twice — hero row (`Index.tsx:159-207`) and contact cards (`:353-424`). Two sources of truth for the same data.
  2. The `section > container > h2` wrapper is repeated 6× verbatim.
  3. The "icon tile + heading + body" Card pattern repeats across Experience/Education/Certifications.

### Content
- **All copy is hard-coded in `src/pages/Index.tsx`.** Three data arrays live at the top — `skills` (`:24`), `projects` (`:64`), `certifications` (`:86`) — and everything else (hero, about paragraphs, experience bullets, contact) is inline JSX. **Copy and markup are in the same file with no separation.**
- `RESUME_CONTENT.md` exists at repo root but is **not imported** by any component — it's a reference doc, not a data source.
- **Stale content to flag:**
  - `index.html:6-18` still describes the *old* positioning: title "Backend **Developer** Portfolio", description "skilled in Python, **Flask, MySQL, and DynamoDB**", keywords list, and `og:image`/`twitter:image` = `/placeholder.svg`. This contradicts the refreshed "Backend Engineer / FastAPI / SaaS" story now in the page body.
  - **`src/assets/resume.pdf` is not a PDF.** `file` reports `UTF-8 text` (3.4 KB). The hero and contact "Download Resume" buttons (`Index.tsx:151,432`) serve a file named `.pdf` that isn't one — the download is effectively broken.

### Assets & performance
- **`src/assets/profile-photo.jpg`** — 1005×1275, progressive JPEG, 73 KB. Rendered at `w-80 h-80` = 320×320 (`Index.tsx:196`). So it's ~3× larger than needed and not square-cropped by the encoder. No `srcset`, no WebP/AVIF, no responsive sizes.
- **`public/favicon.ico`** 15 KB; `public/placeholder.svg` 3 KB (referenced only by stale OG tags); `public/robots.txt` present.
- **Bundle (from the production build run earlier this session):** JS `335 KB` raw / **107 KB gzip**; CSS `62 KB` raw / 11 KB gzip. Heavy for a single static page. Drivers:
  - `@tanstack/react-query` — provider is mounted (`App.tsx:9,12`) but **no `useQuery`/`useMutation` exists anywhere**. Pure dead weight.
  - `react-router-dom` — a full SPA router for what is really one anchored page.
  - shadcn `ui/` pulls ~30 `@radix-ui/*` packages; unused ones tree-shake out of the *bundle* but bloat `node_modules`/lockfiles and invite accidental use.
  - `recharts`, `embla-carousel-react`, `cmdk`, `vaul`, `react-day-picker`, `input-otp` — installed, unused on the page.
- **No render-blocking fonts** yet (because there are none). That changes in Phase 1 and must be managed.

### Accessibility
- **Heading hierarchy is correct:** one `<h1>` (hero), `<h2>` per section, `<h3>` nested. Good.
- **Landmarks missing:** sections are `<section id=…>` directly under a `<div>` — there is **no `<main>`, no `<nav>`, no skip link** (`Index.tsx:95` down).
- **Images:** profile has descriptive `alt` (`Index.tsx:198`). Good.
- **Focus:** shadcn `Button` has a `focus-visible` ring (`button.tsx:8`), but the many bare `<a>` links (social, contact cards) rely on the browser default outline, which on the dark slate hero can be nearly invisible — no custom `focus-visible` styling on them.
- **ThemeToggle** (`src/components/ThemeToggle.tsx`): initial state is hard-coded `"light"` (`:6`), **ignores `prefers-color-scheme`**, and the choice is **not persisted** (no `localStorage`) — it resets every reload. No `aria-pressed`.
- **Motion:** smooth scroll is not reduced-motion aware.
- **Contrast:** no failures found at current values (see Colour), though `muted-foreground` is borderline at 4.7:1.

---

## 2 — CRITIQUE (blunt)

The bones are better than the skin. The token system and clean section structure are
genuinely fine. What makes it read as a *template* is entirely surface: default font, stock
palette, and no motion. Scored against your eight criteria:

1. **Typographic character — 2/10.** No font is loaded; it renders in the OS system stack, and there is zero letter-spacing control (no `tracking-*` anywhere). Headings differ from body only by size/weight, not by *voice*. This is the number-one reason it looks amateur. **Fix:** load a real display + body pairing (your Instrument Serif / Satoshi plan is exactly right) and define tracking on display sizes.
2. **Colour restraint — 4/10.** Two saturated hues (cyan `189 94% 43%`, orange `25 95% 53%`) plus slate. Premium = near-monochrome + one accent. The orange is now essentially vestigial. **Fix:** collapse to near-black/off-white + a single amber accent used sparingly (your redesign direction).
3. **Easing consistency — 6/10.** Only one curve exists (`cubic-bezier(0.4,0,0.2,1)`, `index.css:49`), so it's consistent by absence. But it's the generic Material curve, and the *intended* entrance animation (`animate-fade-in`) is broken (`Index.tsx:97,184`). **Fix:** define 1–2 deliberate curves as tokens and actually animate with them.
4. **Spacing rhythm — 6/10.** Consistent `py-20`/`max-w-6xl` rhythm, on-scale. It's fine, not generous or characterful. **Fix:** widen vertical rhythm on desktop and vary section spacing intentionally rather than uniform `py-20`.
5. **Motion quality — 1/10.** Nothing animates on scroll; the page is static and the one entrance animation is a no-op. This is the second-biggest gap. **Fix:** Lenis + GSAP ScrollTrigger reveals (Phase 1).
6. **Surface treatment — 2/10.** Flat digital gradients (`--gradient-hero`, `--gradient-primary`), no texture or depth. **Fix:** near-black base + ~4% grain overlay.
7. **Detail work — 3/10.** Buttons have decent hover (`hover-glow`, `hover-lift`) and a focus ring, but: no custom cursor, no loading state, no page/section transitions, bare links lack visible focus on dark, theme choice doesn't persist. **Fix:** focus-visible system, persisted theme, entrance/scroll polish.
8. **Mobile experience — 4/10.** It *reflows* (single column) but isn't *designed* for mobile — same uniform spacing squeezed down, oversized image shipped to phones, no mobile-specific type scale. **Fix:** responsive image + mobile type/spacing pass; and per your plan, static fallbacks for heavy motion.

### Top 3 changes, most perceived quality per unit of effort
1. **Load real fonts + define a type scale with tracking** (Instrument Serif display / Satoshi body). Biggest single visual jump; a few hours.
2. **Recolour to near-black + one amber accent** by swapping token values in `src/index.css` — because colour is tokenized, this is a small, low-risk edit with outsized effect.
3. **Add scroll-reveal motion** (Lenis + GSAP ScrollTrigger) and fix the dead `animate-fade-in`. Turns a static page into something that feels considered.

All three are Phase 1, all achievable in a weekend, none require 3D.

---

## 3 — REDESIGN READINESS

**Keep & extend**
- The **HSL CSS-variable token system** (`src/index.css:10-88`) — recolour it (near-black bg, warm off-white fg, amber accent) and *add* new token families (fontFamily, easing, extra spacing). `darkMode:["class"]` infra stays.
- The **Tailwind token wiring** (`tailwind.config.ts`) — extend `theme.extend` with `fontFamily`, `transitionTimingFunction`, and reveal keyframes.
- The **data-array pattern** for `projects`/`skills`/`certifications` — clean, keep it.
- **shadcn Button/Card/Badge** — keep, they restyle for free through tokens.
- **Vite + SWC + TS** — perfectly fine host for Lenis/GSAP (all client-side; GH Pages is static, no SSR concerns).

**Replace / remove**
- Add the **fonts** (none today). Delete dead **`src/App.css`**. Remove **`@tanstack/react-query`** (unused). Fix/replace the broken **`animate-fade-in`**. Reconsider **`react-router-dom`** for a one-page site (optional). Repurpose the **orange accent** slot to amber. `NavLink` (unused) can go.

**Does the architecture fight the redesign?** Mostly it supports it, because colour is
centralized. Two real frictions:
- **Content is coupled to markup** in the 470-line `Index.tsx`. A restyle edits the same
  file as the copy — which is exactly why your plan to do the content refresh as a
  *separate* pass is correct. (That copy pass already happened this session for the page
  body; `index.html` meta + the resume file still need it.)
- **Everything is one monolithic component.** Wiring GSAP refs/ScrollTrigger into a
  470-line file is workable but messy. Extracting sections into components is worth doing
  as groundwork before the motion-heavy phases (2–3), though not strictly required for
  Phase 1.

**Dependencies to add (approx gzip cost)**
- `lenis` — ~3–4 KB. Low risk.
- `gsap` (+ ScrollTrigger) — ~50 KB core, +~25 KB ScrollTrigger ≈ **75 KB gzip**. This is ~70% of your *current* total JS. Must be **code-split / lazy-loaded** and gated behind desktop + non-reduced-motion.
- **Instrument Serif** — one weight, small (Google Fonts or self-host).
- **Satoshi** — self-hosted woff2 (Fontshare), 1–2 weights, ~30–50 KB each; subset to trim.
- **Grain** — inline SVG `feTurbulence` or a tiny tiled PNG; negligible.
- Later phases: dot-matrix (canvas/WebGL) and the architecture sequence (possibly R3F/`three` ≈ 150 KB+ gzip) — **defer, lazy-load, desktop-only, static fallback.**
- **Net Phase 1 additions ≈ 80–100 KB gzip**, which roughly doubles current JS unless GSAP is lazy-loaded. Flagged for the budget discussion.

**Regression risks by area**
- *Fonts:* FOUT/FOIT and layout shift — mitigate with `font-display: swap`, `size-adjust`, and reserving space.
- *Token recolour:* changing `--primary`/`--accent`/`--background` recolours **all** shadcn surfaces (toasts, tooltips, buttons) — verify they stay legible on near-black.
- *Lenis + GSAP ScrollTrigger:* the classic integration pitfall (must sync Lenis to ScrollTrigger's scroller); medium risk of janky/《stuck》 scroll if wired wrong.
- *Reduced motion:* Lenis and reveals must be fully disabled under `prefers-reduced-motion`, with a static fallback path — currently respected nowhere, so it's net-new work, not a regression.
- *Removing react-query:* touches `App.tsx` providers — low risk, just confirm Toasters/Tooltip still mount.
- *Deep-link 404:* pre-existing; worth fixing (`public/404.html`) while you're in the build.

**Is content coupled tightly enough that a restyle breaks copy?** Yes — copy and markup
share `Index.tsx`, so a careless styling edit *can* touch text. Keep the passes separate
(content vs style), as you already intend.

---

## 4 — PHASED PLAN

**Phase A — Content (separate from styling; partly done)**
Scope: finish wiring the refreshed copy — fix `index.html` meta/title/OG (`:6-18`), supply
a *real* `resume.pdf`, verify LinkedIn URL. Files: `index.html`, `src/assets/resume.pdf`.
Effort: ~1 hr. Risk: trivial. (Page-body copy already refreshed this session.)

**Phase 1 — Typography / colour / motion-feel (a weekend, no 3D)**
Scope: recolour tokens to `#0A0A0B` bg / warm off-white fg / one amber accent; add
`fontFamily` (Instrument Serif display, Satoshi body) + load fonts; define a real type
scale with tracking/leading; add easing tokens (1–2 curves); ~4% grain overlay; Lenis
smooth scroll + GSAP ScrollTrigger section reveals replacing the dead `animate-fade-in`;
full `prefers-reduced-motion` fallback; delete `App.css`; remove react-query; add focus-
visible ring on links; persist theme + honour `prefers-color-scheme`.
Files: `src/index.css`, `tailwind.config.ts`, `index.html` (font preload), `src/main.tsx`
(Lenis init), `src/pages/Index.tsx` (class swaps + reveal refs), `src/App.tsx` (drop
QueryClient), `src/components/ThemeToggle.tsx`, new `src/lib/motion.ts`; delete
`src/App.css`. Effort: 1–2 days. Risks: font FOUT, Lenis/ScrollTrigger sync, token
recolour side-effects on shadcn surfaces.

**Phase 2 — Dot-matrix photo treatment**
Scope: dithered dot-matrix that resolves to a real half-body photo on scroll (canvas/WebGL,
scroll-driven). Files: new `PhotoDither` component, new asset(s). Effort: 2–3 days. Risks:
mobile perf (needs static-image fallback); **requires a suitable half-body photo** — the
current asset is a 1005×1275 portrait that may not fit.

**Phase 3 — Architecture scroll sequence**
Scope: pinned GSAP timeline visualising request → API → Redis queue → worker → generation
pipeline → CDN. Files: new `ArchSequence` component + assets; likely section extraction
first. Effort: 3–5 days. Risks: pin + Lenis conflicts, mobile fallback, bundle growth if
R3F/three is introduced (lazy-load, desktop-only).

**Phase 4 — Detail polish**
Scope: custom cursor, page/section transitions, loading state, real OG image, `404.html`,
responsive images (`srcset`/WebP/AVIF), accessibility sweep (landmarks, skip link, focus).
Files: `index.html`, `public/404.html`, `Index.tsx`, assets. Effort: 1–2 days. Risks: low.

---

## 5 — WHAT I COULD NOT DETERMINE (need your input)

1. **`resume.pdf` is a text file, not a PDF** (`src/assets/resume.pdf`, `file` → UTF-8 text). Do you have the real PDF? The download button is broken until it's replaced.
2. **Half-body photo for Phase 2** — the only image is a 1005×1275 portrait. Do you have (or will you shoot) a half-body photo suitable for the dot-matrix resolve?
3. **Font hosting/licensing** — self-host Satoshi woff2 (Fontshare) and Instrument Serif locally to avoid a third-party request on GitHub Pages? Or Google Fonts link for Instrument Serif? Confirm.
4. **Strip react-query, and/or react-router?** I recommend removing react-query (unused) now; router is optional to keep.
5. **`index.html` meta + OG image** — refresh the stale meta now (Phase A)? Do you want a real generated OG image, or is a static one fine?
6. **Node version** — CI is on Node 18. Bump to Node 20 LTS while touching the build? GSAP/Lenis are fine either way.
7. **Deep-link `404.html` fallback** — add it (Phase 4), or is the single-page scope such that you don't care?
8. **Exact accent value** — amber vs burnt orange: give me one hex so I can token it.
9. **Performance budget number** — a concrete target (e.g. ≤120 KB gzip JS on mobile, LCP < 2.5s)? This decides whether GSAP must be lazy-loaded (it's ~75 KB gzip alone).
10. **Dual lockfiles** — `bun.lockb` + `package-lock.json` both committed; CI uses `npm ci`. OK to delete `bun.lockb` and standardize on npm?
11. **LinkedIn URL** — `linkedin.com/in/vishnu-vardhan-dev` (set this session) is unverified. Is it correct/live?

## 6 — DECISIONS NEEDED BEFORE PHASE 1

- Approve the **design tokens** I'll present next (colour values, type scale, spacing scale, easing curves) — you asked to see these before any code, and I'll bring them for sign-off.
- Confirm **self-hosting fonts** (Q3) and the **accent hex** (Q8).
- Confirm **removing react-query** (Q4).
- Confirm the **GSAP bundle cost / lazy-load approach** against a stated budget (Q9).

---

*End of Phase 0. No source files were changed. Awaiting your go-ahead (and the answers
above) before proposing Phase 1 tokens.*
