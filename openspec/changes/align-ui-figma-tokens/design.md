# Design — Change: align-ui-figma-tokens

Decision Summary
- Prefer minimal, surgical edits to unblock build and align with Next 14.2.5 and current design tokens, without broader refactors.

Key Decisions
1) next/image modernization
   - Rationale: Next 14.2.5 deprecates `layout` and `objectFit`. The idiomatic approach is:
     - Use the `fill` boolean prop with a relatively positioned parent and absolute image.
     - Move object-fit behavior to CSS via Tailwind, e.g., `object-cover`.
     - Provide `sizes` for responsive correctness and performance.
   - Patterns applied:
     - Hero/background/cover images → `fill` + `sizes="100vw"` + `object-cover`.
     - Grid/card images → `fill` + `sizes` tuned to layout breakpoint (e.g., `(min-width: 768px) 33vw, 100vw`, `(min-width: 1024px) 50vw, 100vw`, or fixed like `96px` for avatars/thumbnails).

2) Client routing with next/link
   - Rationale: Avoid full page refreshes and keep client routing consistent.
   - Applied to Header (desktop and mobile nav) and Footer (section links and policy links).
   - Preserves existing classes and event handlers (e.g., closing mobile menu on click).

3) Tailwind token correctness
   - Rationale: Remove invalid/unregistered classes (e.g., `bg-base-white-bg`) which can break styling or confuse contributors.
   - Replace with valid tokens:
     - Use `bg-white` for plain background.
     - Keep existing brand tokens (e.g., `text-base-black`, `text-base-gray`) that map to design tokens via Tailwind extension.

4) i18n fixes for /services
   - Rationale: Lists should be rendered from arrays, not interpolated strings. Section titles should be distinct keys, not array index hacks.
   - Apply `t.raw('services.X.features') as string[]` for array extraction.
   - Add `Services.featuresTitle` in `en.json` and `zh.json`.
   - Replace incorrect `{t('services.home.features[0]')}` with `{t('services.featuresTitle')}`.

Sizing Choices (examples)
- ServicesCards images: `(min-width: 768px) 33vw, 100vw` (3-up on md+ grid).
- Blog main card image: `(min-width: 1024px) 50vw, 100vw` (two-column on lg+).
- Blog other card thumbnail: `96px` (fixed square).
- Background/Hero fills: `100vw`.

Out-of-Scope (explicitly)
- `images.remotePatterns` and asset clean-up.
- Broad token migration or component rewrites beyond minimal fixes.

Risks and Mitigations
- Minor visual shifts due to moving from inline `objectFit` to Tailwind `object-cover`:
  - Mitigated by preserving container sizing, aspect, and overflow.
- ESLint or type strictness issues emerging during build:
  - Addressed by:
    - Casting read-only fontSize tokens where necessary in Tailwind config.
    - Copying read-only arrays for fontFamily (`[...typography.fontFamily.sans]`).

Validation
- Regex/code search ensuring no `layout="fill"` or `objectFit=` remains.
- Search ensuring no internal `<a href="/...">` remains; replaced by `<Link>`.
- Search ensuring no invalid Tailwind tokens (`bg-base-white-bg`, `border-base-white-stroke`) remain.
- `pnpm build` completes successfully.

Notes
- Edits intentionally small and localized to satisfy OpenSpec Apply guardrails.
