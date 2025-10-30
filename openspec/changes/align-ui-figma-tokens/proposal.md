# Proposal — Change: align-ui-figma-tokens

Context
- Background: Several UI regressions and DX blockers were identified while aligning with the latest Next.js and design tokens:
  - next/image deprecated props (layout, objectFit) still used in multiple components.
  - Inconsistent internal navigation (raw anchor tags causing full page refresh).
  - Invalid Tailwind token class names (e.g., bg-base-white-bg) present in some components.
  - i18n on /services page: features rendered via t(...) instead of array extraction; misuse of indexed key for section title.
- Platform: Next.js 14.2.5 with next-intl and Tailwind CSS.
- Goal: Minimal blocking fix to restore compatibility, remove deprecated API usage, standardize internal routing, and correct invalid tokens without expanding scope to unrelated concerns.

Objectives (Minimal Blocking Fix)
1) image-api-modernize
   - Remove deprecated next/image props layout and objectFit.
   - Use fill (or width/height where explicit sizing is desired) + sizes + Tailwind object-cover class.

2) client-routing-links
   - Normalize internal navigation to next/link to avoid full page reloads (Header + Footer + landing items where applicable).

3) tailwind-token-correctness
   - Replace invalid/unregistered Tailwind classes such as bg-base-white-bg with valid tokens (e.g., bg-white or previously defined tokens).
   - Keep brand tokens (text-base-black, text-base-gray, etc.) intact.

4) i18n unblock for /services
   - Extract array with t.raw for features.
   - Add a dedicated featuresTitle message key (en/zh).
   - Remove incorrect array index usage in title references.

Non-Goals
- images.remotePatterns changes or asset clean-up.
- Full design overhaul beyond minimal compatibility fixes.
- Broader token refactors unrelated to the reported blockers.

Constraints
- Next.js 14.2.5 behavior for next/image (layout/objectFit are deprecated).
- Keep changes tightly scoped and verifiable.
- Ensure pnpm build passes with ESLint and type checks.

Acceptance Criteria
- No occurrences of layout="fill" or objectFit= across code.
- Internal site links use next/link (no full-page refresh).
- Invalid Tailwind token class names are removed and replaced with valid ones.
- /services page uses t.raw for features array and includes a proper featuresTitle key in en/zh messages.
- pnpm build passes; key pages render correctly.

Verification Plan
- Code search:
  - layout="fill" | objectFit= → 0 results
  - <a href="/(?!http|mailto|tel) → 0 results
  - bg-base-white-bg | border-base-white-stroke → 0 results
- Build: pnpm build succeeds.
- Manual sanity check for pages: /, /en/services, /en/contact, /en/about

Notes
- Keep brand tokens intact; only remove truly invalid classes.
- Favor minimal edits to avoid scope creep.
