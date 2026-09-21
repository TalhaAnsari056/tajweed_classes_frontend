---
name: review-ui
description: Review changed UI code in this project against the design doc, rules and accessibility/responsive requirements. Use after building or editing UI, or when asked to review UI quality. Read-only unless asked to fix.
---

# Review UI

Review only. Do not edit files unless the user asks for fixes. Do not run any Git write command.

## Scope
Use `git status` and `git diff` (read-only) to find changed files. If there are untracked new files, read them directly.

## Checklist
Report a finding for each item that fails. Cite `file:line`.

**Design fidelity** (against `docs/design.md` and the mockup)
- Palette, typography roles, radius, shadow and spacing follow the documented style
- Card, button, form, sidebar, header and progress patterns match
- Copy and Arabic/Quran text match the mockup exactly
- No invented styles, effects or imagery

**Code and rules**
- Conforms to `.claude/rules/react.md` and `tailwind.md`
- Uses tokens rather than raw hex or arbitrary values
- No unnecessary dependency, abstraction, dead code, `console.log` or commented-out code
- No backend, API, auth or storage logic
- Icons are imported individually from Tabler or come from the provided SVGs

**Responsive**
- Mobile-first, no horizontal scroll, no fixed widths that break at small sizes
- Grids collapse appropriately and touch targets are at least 44 px

**Accessibility**
- Semantic elements, heading order, one `h1`
- Labels on inputs, accessible names on icon buttons
- Focus visible and keyboard operable. Drawers and menus handle Escape and focus.
- Contrast is adequate. State is not conveyed by color alone.
- Decorative images are `aria-hidden` and `alt=""`

**Animation** (`.claude/rules/animation.md`)
- Correct tool, no double-animating, transform/opacity only
- Reduced motion handled and GSAP cleanup present

## Output
Group findings as **Must fix**, **Should fix** and **Nice to have**. Then list what was checked with no issues, and what could not be verified statically (visual output, real behavior). Do not claim visual correctness from code alone. Recommend the `visual-check` skill for that.
