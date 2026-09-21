---
paths:
  - "src/**/*.jsx"
  - "src/**/*.css"
---

# UI Rules

Applies to any visible UI work. `docs/design.md` is the source of truth. Do not restate it here, read it.

- Read `docs/design.md` and open the matching mockup in `docs/design/references/` before writing markup.
- Reproduce the mockup's structure and hierarchy first, then refine details.
- Reuse existing components before creating new ones. Build a shared primitive (Button, Card, ProgressBar, Input) once, then compose it.
- Card anatomy, button variants, sidebar, header and progress UI must match the documented patterns. Do not make a page-specific variant when a shared one exists.
- State variants are required where the mockups show them: completed, current, locked, recommended, disabled, hover, focus.
- Include loading-free static states only. Do not invent empty/error states beyond simple, on-theme ones, and mention them if added.
- Copy comes from the mockups. Do not rewrite labels or taglines.
- Arabic and Quran text is copied verbatim, never generated. Flag anything doubtful.
- Decorative imagery is `aria-hidden` and must not reduce text contrast.
- Missing illustrations: do not fake them. Use a neutral placeholder block only if the user agrees, and report it.
- Every screen must work at mobile, tablet and desktop widths without horizontal scroll.
- Every interactive element needs a visible focus style and a 44 px touch target.
- Do not use color alone for state. Pair it with an icon or text.
