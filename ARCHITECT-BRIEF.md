# ARCHITECT BRIEF — BB-Moonbow

## Builder Plan

### Issue
GitHub Issue #1402 — strip template stubs and establish an accessibility baseline on bb-moonbow.vercel.app before client launch.

### Goal
Replace all visible placeholder content, wire the page landmarks and form labels correctly, and add keyboard-focus styling so the site is launch-ready and passes basic WCAG AA / Lighthouse accessibility checks.

### Current context
- The app already has a single-page homepage at `app/page.tsx` composed of reusable section components.
- The homepage currently already has a `main` wrapper, but the header is not wrapped in a semantic `nav` landmark and the footer is not explicitly structured as a landmarked footer component.
- `components/sections/Hero.tsx` already contains the only `h1` on the page. Any other heading-level work must preserve that one-h1-per-page rule.
- `components/sections/Contact.tsx` already uses `label` elements with `htmlFor`, but the issue report indicates the live DOM may still be missing explicit associations or may need a broader accessibility audit after rendering.
- `lib/stub-data.ts` still contains many `[STUB: ...]` strings and `null` image fields; there are no real JPG/PNG/WebP assets in `public/` yet.
- The current codebase uses inline styles heavily, with only a few shared utility classes in `app/globals.css`.

### Constraints / blockers
- Real headshot and listing photos are not present in the repo. If the final client assets are not already available elsewhere, this work will need asset delivery before the stub-removal portion can be fully completed.
- The final license number must come from the client questionnaire or another authoritative source; do not invent it.
- Preserve existing layout and editorial tone; this is a cleanup / launch-hardening pass, not a redesign.

### Proposed approach
1. Audit the rendered DOM for every remaining stub string, generic alt text, and focusability gap.
2. Replace placeholder copy and `Photo Coming Soon` fallbacks with actual content paths and descriptions once the source assets are available.
3. Tighten semantics: add explicit landmarks where missing, verify the single `h1`, and ensure the contact form controls have stable IDs plus matching labels.
4. Add visible keyboard focus states in the shared CSS layer so links, buttons, and header nav items all show a clear focus indicator.
5. Verify contrast on footer muted text and decorative separators; adjust colors until the text meets AA contrast on the dark footer background.
6. Run build and browser/a11y validation, then only then close out the issue.

### Files likely to change
- `components/Header.tsx` — wrap navigation in a semantic `<nav>`, add focus-visible styles/attributes as needed.
- `components/Footer.tsx` — address contrast, remove remaining stubs, keep footer landmark semantics.
- `components/sections/Hero.tsx` — confirm `h1` stays unique and update hero copy if needed.
- `components/sections/About.tsx` — swap photo placeholder for real asset, verify alt text.
- `components/sections/PropertyJournal.tsx` — replace image placeholders and `[STUB: MLS platform]` text.
- `components/sections/ClientStories.tsx` — add testimonial avatar images / alt text if present in the design, otherwise ensure no generic image labels remain.
- `components/sections/Contact.tsx` — verify labels, focus state, and any accessible error/success messaging.
- `lib/stub-data.ts` — replace placeholder strings with final content and real image paths.
- `app/globals.css` — add shared `:focus-visible` treatment for links, buttons, and nav controls; fix any contrast helpers.
- `app/page.tsx` — only if a structural landmark issue emerges during audit.

### Validation plan
- Search the rendered source and compiled output for `\[STUB:` and `Photo Coming Soon` until there are zero matches.
- Run the production build to ensure no TypeScript or Next.js regressions.
- Open the live site and inspect keyboard navigation: header links, section CTAs, property buttons, and submit button must all show a visible focus state.
- Run Lighthouse accessibility on the deployed branch and target 95+.
- Spot-check contrast on footer text and dividers against the actual rendered background.

### Open questions
- What are the final photo assets and their intended file names/paths?
- What is the final NC broker license number and any public-facing license wording preference?
- Are the testimonial avatars required to be real people photos, initials-only circles, or decorative portraits?

### Delivery note
When the implementation is ready for review, update `BUILD-LOG.md` and `REVIEW-REQUEST.md`, then hand off for review.
