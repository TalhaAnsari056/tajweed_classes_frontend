---
name: build-ui
description: Build or modify a UI page/component from the project mockups. Use when asked to implement a screen, section or shared component in this frontend (Login, Dashboard, Course Detail, sidebar, cards, etc.).
---

# Build UI

Implement UI that matches the mockups, within frontend-only scope.

## Before writing code
1. Read `docs/project-progress.md` and confirm this task is the current one. If not, stop and ask.
2. Read `docs/design.md`.
3. Open the matching mockup(s) in `docs/design/references/`.
4. Read `CLAUDE.md` and the rules in `.claude/rules/` that apply.
5. Inspect `src/components/`, `src/layouts/`, `src/pages/` and `src/index.css` for reusable parts and existing tokens.
6. List the assets the screen needs and confirm they exist in `src/assests/`. Report any that are missing. Do not fabricate them.

## Build
1. State a short plan: the components to create or reuse, the route and the mock data shape.
2. Add or extend design tokens in `src/index.css` first, if the screen needs values that are not there.
3. Build shared primitives first, then compose the page. Keep the page-specific parts near the page.
4. Cover every state shown in the mockup (hover, focus, active, completed, current, locked, disabled).
5. Make it responsive (mobile-first) as you go, not afterwards.
6. Use semantic HTML, labels, keyboard support and visible focus.
7. Add animation last, following `.claude/rules/animation.md`.
8. Use static or mock data only. Add no fetch, auth, API or storage logic.

## Finish
1. Run `npm run build` and fix everything you introduced.
2. Run the `visual-check` skill to compare with the mockup at several widths.
3. Run the `review-ui` skill on the result and fix findings.
4. Update `docs/project-progress.md`.
5. Report using the format in CLAUDE.md section 16, including a suggested commit message and the commit number. Do not run any Git write command. Do not start the next task.

## Do not
- Add dependencies, backend code or extra pages.
- Change the visual style or palette.
- Rewrite unrelated files.
