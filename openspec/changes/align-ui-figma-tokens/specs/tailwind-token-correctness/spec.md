## ADDED Requirements

#### Scenario: Fix invalid Tailwind token classes
Given the application uses TailwindCSS with extended brand tokens
When scanning component className definitions
Then there MUST be no occurrences of invalid or unregistered classes such as:
- bg-base-white-bg
- border-base-white-stroke
And previously invalid usages MUST be replaced by valid classes:
- Use bg-white for plain white backgrounds
- Use border-white-stroke for the brand white stroke (if configured), or a valid fallback (e.g., border-white)

Validation
- Code search returns zero results for:
  - bg-base-white-bg
  - border-base-white-stroke
- Visual/Manual check confirms affected components render with valid styles (no missing styles)
