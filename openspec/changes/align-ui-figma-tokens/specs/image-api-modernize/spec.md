## ADDED Requirements

#### Scenario: Replace deprecated next/image props
Given the application is built with Next.js 14.2.5
When rendering images in components that previously used deprecated next/image props (layout, objectFit)
Then there MUST be no occurrences of layout="..." or objectFit="..." in the codebase
And each such image MUST use either:
- fill with a relatively positioned container and sizes, OR
- explicit width and height
And when a covering behavior is intended, the image MUST include a Tailwind class that implies object-fit: cover (e.g., "object-cover").

Validation
- Code search returns zero results for layout="fill" and objectFit=
- Build with pnpm build succeeds without next/image deprecation errors
- Visual verification on pages with hero/background/card images confirms expected cover behavior (no layout shifts)
