---
paths:
  - "src/**/*.jsx"
  - "src/**/*.js"
---

# Animation Rules (Motion and GSAP)

Direction: gentle, calm, purposeful. See section 16 of `docs/design.md`.

## Choosing the tool
- **Motion** (`motion/react`): mount/unmount, hover/tap, drawers, dropdowns, staggered lists, layout transitions, progress fill. Default choice.
- **GSAP**: multi-step timelines, scroll-linked or sequenced hero effects. Use it only when Motion cannot do the job cleanly.
- Never animate the same element with both libraries.
- Import Motion from `motion/react`. Do not add other animation libraries or Tailwind animation plugins.

## Style
- Durations roughly 0.2–0.5 s. Ease-out for entrances, ease-in-out for movement. No bounce, elastic, shake, spin or flashing.
- Entrances: fade plus a small translate (a few px), staggered in small steps.
- Hover: slight lift and shadow, or an arrow nudge. Do not scale cards noticeably.
- Progress bars and rings animate from 0 to value once, when they enter view.
- Animate `transform` and `opacity` only. Avoid animating width/height/top/left. The exception is a progress fill (use `scaleX` or accept a width transition where simpler).

## Accessibility and performance
- Respect `prefers-reduced-motion`. With Motion use `useReducedMotion` or `MotionConfig reducedMotion="user"`. With GSAP use `gsap.matchMedia()`. Reduced motion means no movement, and instant or opacity-only changes.
- Content must be visible and usable if animation never runs. Do not hide text with `opacity: 0` in CSS that only JS can undo.
- Animation must not delay first meaningful paint, cause layout shift or block interaction.
- Do not animate large blurred or filtered surfaces or full-page backgrounds.

## GSAP lifecycle
- Create GSAP animations inside `useEffect` (or `useGSAP` only if that package is later approved) using `gsap.context()` scoped to a ref.
- Revert the context in the cleanup function. This is required for React StrictMode, which runs effects twice in development.
- Kill ScrollTrigger instances on cleanup. ScrollTrigger is a GSAP plugin, so register it explicitly and only when used.

## Verification
- Verify in the browser that animations run, finish and leave the final state correct.
- Verify with reduced motion emulated.
- Report any animation that could not be checked.
