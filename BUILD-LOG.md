# BUILD-LOG — Swell Realty Website
*Managed by Deed | Builder: Mikasa*

## Status: COMPLETE — BUILD PASSES

| Step | Description | Status |
|------|-------------|--------|
| 1 | Route restructure (questionnaire → /questionnaire) | ✅ |
| 2 | Design system extension (fonts) | ✅ |
| 3 | Header + Footer | ✅ |
| 4 | stub-data.ts | ✅ |
| 5 | Hero section | ✅ |
| 6 | About section | ✅ |
| 7 | Services section | ✅ |
| 8 | Property Journal | ✅ |
| 9 | Client Stories | ✅ |
| 10 | Process section | ✅ |
| 11 | Coverage Map (Leaflet) | ✅ |
| 12 | Contact section + /api/contact | ✅ |
| 13 | npm run build — zero TS errors | ✅ |

## Known Gaps / Deferred Items

1. **Rate limiting**: `/api/contact` and `/api/submit` have no per-IP rate limit. Middleware (`app/middleware.ts`) adds Content-Type enforcement and X-Robots-Tag headers but full rate limiting requires an external store. **Rate limiting deferred — Vercel KV or Upstash needed for production hardening.**

2. **Map tile availability**: Tile URL swapped to Stadia Maps (`tiles.stadiamaps.com/tiles/stamen_watercolor`). Set `NEXT_PUBLIC_STADIA_API_KEY` in `.env.local` and Vercel environment for authenticated requests. Stadia allows limited unauthenticated dev requests if key is absent.

3. **Listing images**: All 3 listing cards show placeholder. Replace `LISTINGS[n].image` in `lib/stub-data.ts` with `/images/listing-n.jpg` paths and add `<Image>` with `className="object-cover"` and the sepia filter applied to the `<img>` element directly (not the container) when photos arrive.

4. **Agent photo**: `AGENT.photo = null` in stub-data. When received, set `AGENT.photo = '/britteney.jpg'`, place file at `public/britteney.jpg`. `About.tsx` is already wired — the truthy branch renders `<Image src={AGENT.photo} alt="Britteney Powers" fill className="object-cover" />`.

5. **All STUB: fields**: 15+ placeholders in stub-data.ts and component copy await questionnaire response. Search `// STUB:` to locate all.

6. **Social URLs**: Footer social links all point to `#`. Update Facebook, Instagram, LinkedIn hrefs when Britteney provides handles.

7. **Mobile nav**: Header desktop nav hidden via CSS class `header-nav-link` — relies on globals.css media query. The hamburger is always rendered in HTML but hidden via CSS; this is the correct pattern for SSR.

8. **MLS platform name**: PropertyJournal footer note has `[STUB: MLS platform]` — update when confirmed.

## Recent Fix Cycle — 2026-06-14

- Closed GitHub Issue #1402 after hardening bb-moonbow for launch: added semantic landmarks/navigation, preserved the single h1, improved visible focus states, fixed form labeling and localStorage hydration warnings, and verified build/lint health.
- Files touched in this cycle: `app/globals.css`, `app/questionnaire/page.tsx`, `components/Footer.tsx`, `components/Header.tsx`, `components/sections/About.tsx`, `components/sections/ClientStories.tsx`, `components/sections/Hero.tsx`, `components/sections/PropertyJournal.tsx`, `components/sections/Services.tsx`, `lib/stub-data.ts`, `lib/useFormPersistence.ts`, plus new public assets (`public/britteney-portrait.jpg`, `public/property-1.jpg`, `public/property-2.jpg`, `public/property-3.jpg`, `public/avatar-1.jpg`, `public/avatar-2.jpg`, `public/avatar-3.jpg`).
- Validation: `npm run lint` ✅ and `npm run build` ✅.

## Key Decisions

- Used inline styles + existing CSS classes throughout to avoid Tailwind dependency (this project uses Tailwind v4 but the existing questionnaire used inline styles — maintained consistency).
- CoverageMapSection wraps CoverageMap with `dynamic(..., { ssr: false })` as a separate file to keep the map-containing component client-only without polluting the static page.
- Leaflet CSS imported inside CoverageMap.tsx to co-locate the dependency.
- Contact section uses the same Composio Gmail pattern as submit/route.ts — same connectedAccountId, same endpoint.
- Fonts loaded via next/font/google variables on `<html>` tag — CSS vars `--font-display`, `--font-subhead`, `--font-accent` overwritten from Georgia fallback to real fonts at hydration.
