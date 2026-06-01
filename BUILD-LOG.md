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

1. **Map tile availability**: Stamen Watercolor tiles via `stamen-tiles.a.ssl.fastly.net` may be deprecated (Stamen was acquired by Stadia Maps in 2023). If map renders blank in production, swap URL to `https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg` — requires a free Stadia Maps API key set as `NEXT_PUBLIC_STADIA_API_KEY`.

2. **Listing images**: All 3 listing cards show placeholder. Replace `LISTINGS[n].image` in `lib/stub-data.ts` with `/images/listing-n.jpg` paths and uncomment `<Image>` logic in `PropertyJournal.tsx` when photos arrive.

3. **Agent photo**: `AGENT.photo = null` in stub-data. When received, set `AGENT.photo = '/britteney.jpg'`, place file at `public/britteney.jpg`, and update `About.tsx` to render `<Image>`.

4. **All STUB: fields**: 15+ placeholders in stub-data.ts and component copy await questionnaire response. Search `// STUB:` to locate all.

5. **Social URLs**: Footer social links all point to `#`. Update Facebook, Instagram, LinkedIn hrefs when Britteney provides handles.

6. **Mobile nav**: Header desktop nav hidden via CSS class `header-nav-link` — relies on globals.css media query. The hamburger is always rendered in HTML but hidden via CSS; this is the correct pattern for SSR.

7. **MLS platform name**: PropertyJournal footer note has `[STUB: MLS platform]` — update when confirmed.

## Key Decisions

- Used inline styles + existing CSS classes throughout to avoid Tailwind dependency (this project uses Tailwind v4 but the existing questionnaire used inline styles — maintained consistency).
- CoverageMapSection wraps CoverageMap with `dynamic(..., { ssr: false })` as a separate file to keep the map-containing component client-only without polluting the static page.
- Leaflet CSS imported inside CoverageMap.tsx to co-locate the dependency.
- Contact section uses the same Composio Gmail pattern as submit/route.ts — same connectedAccountId, same endpoint.
- Fonts loaded via next/font/google variables on `<html>` tag — CSS vars `--font-display`, `--font-subhead`, `--font-accent` overwritten from Georgia fallback to real fonts at hydration.
