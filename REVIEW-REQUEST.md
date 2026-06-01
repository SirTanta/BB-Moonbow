# REVIEW REQUEST — Swell Realty Main Site
*Builder: Mikasa | Reviewer: Deed / Jon*

## Files Changed

| File | Change |
|------|--------|
| `app/page.tsx` | Replaced questionnaire with homepage — imports and renders all 8 sections |
| `app/questionnaire/page.tsx` | New route — questionnaire moved here unchanged |
| `app/layout.tsx` | Added Cormorant Garamond, Playfair Display, IM Fell English via next/font/google; font vars on `<html>` |
| `app/globals.css` | Extended with --font-display/subhead/accent vars, font utility classes, header responsive CSS, Leaflet z-index reset |
| `app/api/contact/route.ts` | New API route — sends Swell Realty Inquiry email via Composio Gmail to jedwards@tanta-holdings.com |
| `lib/stub-data.ts` | New — all placeholder content: AGENT, LISTINGS (3), TESTIMONIALS (3); all fields have // STUB: comments |
| `components/Header.tsx` | New — sticky header, BP monogram, smooth-scroll nav, mobile hamburger |
| `components/Footer.tsx` | New — name + tagline, nav links, license numbers, social placeholders, copyright |
| `components/sections/Hero.tsx` | New — full-bleed section, agent name h1, credential line, tagline stub, two CTAs |
| `components/sections/About.tsx` | New — two-column grid, photo placeholder, bio stub, wax-seal credential badges |
| `components/sections/Services.tsx` | New — 4-up grid, brass top border, 4 service cards with stubs |
| `components/sections/PropertyJournal.tsx` | New — masthead header, 3 listing cards with sepia filter, For Enquiries CTA |
| `components/sections/ClientStories.tsx` | New — horizontal scroll container, snap-scroll letter cards, nav dots |
| `components/sections/Process.tsx` | New — vertical timeline, 4 steps with brass circles |
| `components/sections/CoverageMap.tsx` | New — Leaflet MapContainer, Stamen Watercolor tiles, NC+VA polygon overlays |
| `components/sections/CoverageMapSection.tsx` | New — dynamic import wrapper (ssr: false) for CoverageMap |
| `components/sections/Contact.tsx` | New — Name/Email/Phone/Message form, vintage thank-you success state |

## Build Result

```
npm run build → EXIT 0
Zero TypeScript errors
Routes: / (static), /questionnaire (static), /api/contact (dynamic), /api/submit (dynamic)
```

## Known Gaps (see BUILD-LOG.md for detail)
- Stamen tile URL may need swap to Stadia Maps in production (tile CDN status uncertain)
- All STUB: fields await questionnaire response
- Listing images, agent photo, social URLs — all pending

## Ready for Review: YES

---

## Fix Cycle 1 — 2026-06-01

Files re-touched:

| File | Change |
|------|--------|
| `components/sections/About.tsx` | Replaced broken truthy photo branch with real `<Image src fill className="object-cover">` in a `position:relative` wrapper |
| `components/sections/CoverageMap.tsx` | Replaced CSS vars in pathOptions with hardcoded `#722f37`; removed dead Leaflet icon useEffect; swapped Stamen tile URL to Stadia Maps CDN; added `STADIA_KEY` env var |
| `components/sections/Contact.tsx` | Updated error message text; parse response body to catch `ok: false` on 503 |
| `app/api/contact/route.ts` | Added `escHtml()` applied to all user-supplied values; stripped `\r\n` from name (`safeName`); field length validation (name≤200, email≤200, phone≤50, message≤5000); returns 503 when `COMPOSIO_SDK_KEY` is absent |
| `app/api/submit/route.ts` | Added `escHtml()` applied to label and display values in email rows; escapes name and submittedAt in email body; strips `\r\n` from name in subject |
| `app/middleware.ts` | Created — X-Robots-Tag on API routes, Content-Type enforcement on POST |
| `app/layout.tsx` | Updated root metadata title and description to production values |
| `components/sections/PropertyJournal.tsx` | Moved sepia filter from image container div to inner placeholder div so badge is not affected |
| `BUILD-LOG.md` | Marked fixed items; added rate limiting Known Gap |
