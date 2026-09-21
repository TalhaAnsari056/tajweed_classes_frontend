---
paths:
  - "src/**/*.jsx"
  - "src/**/*.css"
  - "index.html"
---

# Tailwind CSS Rules (v4)

- Tailwind v4 is configured through `@tailwindcss/vite` and `@import "tailwindcss"` in `src/index.css`. There is no `tailwind.config.js` and no PostCSS config. Do not create either.
- Define design tokens in `src/index.css` with `@theme` (colors, fonts, radii, shadows, breakpoints only if needed). Token values come from `docs/design.md`.
- Token names are semantic (`--color-brand`, `--color-sidebar`, `--color-canvas`), not literal (`--color-green-1`).
- Use token utilities (`bg-brand`, `text-ink`) instead of raw hex or arbitrary values such as `bg-[#087052]`. Arbitrary values are a last resort for one-off measurements and need a reason.
- Mobile-first ordering. Base classes first, then `sm:` `md:` `lg:` `xl:` in ascending order.
- Prefer `gap`, `grid` and `flex` over margins between siblings. Prefer fluid sizes (`w-full`, `max-w-*`, `min-w-0`) over fixed widths.
- Use `focus-visible:` for focus rings and `motion-reduce:` / `motion-safe:` for animation-related utilities.
- Dark mode is not in the mockups. Do not add `dark:` variants.
- Keep class lists readable. When the same long list repeats, extract a React component. Do not use `@apply` to build a parallel component system.
- Custom CSS is allowed only for things utilities cannot express: background patterns, keyframes, complex gradients, `@font-face`. Put it in `src/index.css` in a clearly commented section.
- Do not use inline `style` except for values that are truly dynamic (for example progress width, animated values).
- Do not install Tailwind plugins or UI kits (daisyUI, shadcn, Headless UI) without approval.
- Fonts: declare them via `--font-*` tokens. Adding a font package or Google Fonts link needs approval.
