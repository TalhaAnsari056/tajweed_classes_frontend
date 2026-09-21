# CLAUDE.md — Tajweed Classes Frontend

Frontend for an Islamic LMS (Quran, Tajweed, Noorani Qaida, Islamic studies).
Read `docs/project.md` for context, `docs/design.md` for visuals, and `docs/project-progress.md` for the current task.
Scoped rules live in `.claude/rules/`. Workflows live in `.claude/skills/`.

## 1. Project Purpose and Scope

- This repo is **frontend only**. Build UI from the mockups in `docs/design/references/`.
- Do not create or imply: backend, API clients, database, auth logic, business logic, server folders.
- Use static/mock data kept close to the UI that uses it (for example inside the page or a small `lib/` file).
- Forms and actions that would need a backend are visual only. Leave them non-functional and say so.
- Build only the page or task requested. Never start the next task on your own.
- Never touch `.remember/`. Do not move, rename, edit or delete it.

## 2. Stack

- React (JavaScript, no TypeScript), Vite, npm.
- Tailwind CSS v4 through `@tailwindcss/vite`. There is no `tailwind.config.js`.
- React Router (`react-router-dom`), Motion, GSAP, `@tabler/icons-react`.
- Installed dependencies are final unless the user approves a change.

## 3. Dependencies and Rewrites

- Do not add a dependency without asking. This includes UI kits, clsx, tailwind-merge, form libraries, state managers, font packages and test frameworks.
- Prefer platform features and what is already installed.
- Do not reinstall existing packages. Do not upgrade versions unprompted.
- Do not rewrite or restructure working code for taste. Change only what the task needs.
- No speculative architecture: no context providers, stores, abstraction layers or generic wrappers until a real second use exists.
- Do not delete files you did not create. Ask first.

## 4. React / JavaScript / Vite

- Function components and hooks only. Files are `.jsx`; plain logic is `.js`.
- One component per file, PascalCase filename matching the export.
- Default export for pages and layouts. Named exports are fine for small shared parts.
- Keep components small. Extract when a piece is reused or a file exceeds roughly 200 lines.
- Props are explicit and destructured. Give sensible defaults instead of prop-type libraries.
- No `useEffect` for anything derivable during render. Keep effects for subscriptions, timers and animation setup, and always return cleanup.
- Use stable keys from data ids, never array indexes for reorderable lists.
- Import with relative paths. Do not add path aliases unless requested.
- Imports at the top, ordered: React, third-party, local components, assets, styles.
- Static assets imported in JSX come from `src/`. Files referenced by URL go in `public/`.
- No `console.log` left behind. No commented-out code.

## 5. Structure

```
src/
  assets/      provided images, SVGs and brand assets
  components/  reusable UI (Button, Card, ProgressBar, ...)
  layouts/     app shell, auth layout
  pages/       one folder or file per route
  hooks/       custom hooks
  lib/         small helpers and mock data
  App.jsx      routes
  main.jsx     entry
  index.css    Tailwind import and design tokens
```

- Create a folder only when it has real content. Do not add empty scaffolding.
- Page-specific parts stay next to the page. Promote to `components/` only when reused.
- Routes are declared in `App.jsx` with React Router. Use `<Link>`/`<NavLink>`, never raw `<a href>` for internal navigation.

## 6. Tailwind CSS

- Tailwind v4 is CSS-first. Design tokens go in `src/index.css` under `@theme`.
- Use utilities in JSX. Add custom CSS only for what utilities cannot express (patterns, keyframes, complex gradients).
- Use tokens for brand colors, fonts, radii and shadows. Do not scatter raw hex values or arbitrary values through components.
- Mobile-first: unprefixed classes are mobile, then `sm:`, `md:`, `lg:`, `xl:`.
- Do not use `@apply` to rebuild component libraries. Prefer a React component for repeated markup.
- Full details: `.claude/rules/tailwind.md`.

## 7. Design Fidelity

- `docs/design.md` is the visual source of truth. Read it before any UI work.
- Match the mockups: palette, serif headings, spacing, radius, soft shadows, card anatomy, sidebar, header.
- Do not invent a new visual style, add trendy effects or change the palette.
- If a value cannot be read from the mockups, follow the described direction. Do not fake precision.
- If something is ambiguous or missing (illustration, icon, copy), flag it. Do not silently substitute.
- Use only the provided imagery. Do not fabricate artwork or use placeholder stock images without saying so.
- Keep the text content shown in the mockups (labels, headings, taglines) unless told otherwise.

## 8. Assets

- Existing assets live in `src/assets/`.
- Prefer SVG for icons and marks. Use the provided files before Tabler.
- Import assets through Vite so they are hashed and bundled.
- Give informative images meaningful `alt`. Decorative images use `alt=""` and `aria-hidden`.
- Set width/height or an aspect ratio to prevent layout shift. Use `loading="lazy"` for below-the-fold images.
- Do not modify, recolor or re-export provided assets without asking.
- Do not commit large unoptimized images. Report their size if a provided file is very heavy.

## 9. Icons

- Use `@tabler/icons-react` for all UI icons that are not already supplied as SVG assets.
- Import named icons individually (`import { IconBook } from '@tabler/icons-react'`). Never import the whole set.
- Keep size and stroke consistent with `docs/design.md`.
- Icon-only buttons need an accessible label. Decorative icons get `aria-hidden`.

## 10. Responsive UI

- Design mobile-first, then enhance. Check 375, 768, 1024 and 1440 px at minimum.
- No horizontal page scroll at any width.
- Use grid/flex and `gap`, not fixed pixel widths. Use `min-w-0` and truncation to prevent overflow.
- Sidebar: fixed on desktop and an accessible drawer on smaller screens.
- Touch targets are at least 44 px.
- Grids collapse: 3–4 columns on desktop, 2 on tablet, 1 on mobile.
- Test with long text and long names, not only the mockup copy.

## 11. Accessibility

- Use semantic HTML: `header`, `nav`, `main`, `aside`, `section`, `button`, `ul/li`, headings in order, one `h1` per page.
- Every input has a visible `<label>` bound with `htmlFor`/`id`.
- Buttons perform actions. Links navigate. Do not use `div` with `onClick`.
- All interactive elements are keyboard reachable with a visible focus ring. Never remove outlines without a replacement.
- Text contrast meets WCAG AA. Check gold-on-cream and grey-on-grey (locked state) carefully.
- Do not convey state by color alone (locked, complete, current also need an icon or text).
- Drawers, menus and dropdowns manage focus, close on Escape and use correct ARIA.
- Arabic text uses `lang="ar"` and `dir="rtl"`.
- Respect `prefers-reduced-motion`.

## 12. Motion and GSAP

- Use **Motion** for component-level transitions: mount, hover, drawers, list stagger, layout changes.
- Use **GSAP** only for timelines, scroll-linked or sequenced hero effects that Motion handles poorly. Do not use both for the same element.
- Follow `docs/design.md` animation direction: gentle, calm, short. No bounce, shake or flashy effects.
- Animate `transform` and `opacity`. Avoid animating layout properties.
- GSAP animations are created inside `useEffect` or a `gsap.context` and reverted in cleanup.
- Always honor `prefers-reduced-motion` by disabling or minimizing motion.
- Animation must never block content or delay first meaningful paint. Details: `.claude/rules/animation.md`.

## 13. Verification with Playwright MCP

- Playwright MCP is already installed. Do not reinstall it.
- Playwright MCP tools are deferred, so load their schemas with ToolSearch before use.
- For any visible UI change: start `npm run dev`, open the page, take screenshots, and compare with the matching mockup.
- Check at desktop, tablet and mobile widths, and check console errors.
- Check keyboard navigation and focus for interactive UI.
- Stop the dev server you started when done.
- **Cleanup (permanent rule):** Playwright screenshots, snapshots, logs and other artifacts (for example the `.playwright-mcp/` folder or any saved `.png`) are temporary. Use them during the task, then delete them all before the final report. Never leave them in the repository.
- If the browser tool is unavailable or fails, say so. Do not claim visual verification.
- The `visual-check` skill contains the procedure.

## 14. Development Workflow

1. Read `docs/project-progress.md` to confirm the current task.
2. Read `docs/design.md` and the relevant mockup before UI work.
3. Inspect the existing code first. Reuse before creating.
4. Make the smallest change that meets the requirement.
5. Run `npm run build`. Fix all errors and warnings you introduced.
6. Verify in the browser when the change is visual.
7. Update `docs/project-progress.md`.
8. Report using the format in section 16.

- Ask a question only when a decision is genuinely the user's. Otherwise choose a sensible default and state it.
- For large tasks, outline the plan in a few lines before editing.
- Do not fix unrelated problems. Mention them instead.

## 15. Git Workflow

- Working branch: `feature/frontend-ui`.
- **Claude never commits.** Do not run `git add`, `git commit`, `git reset`, `git checkout`, `git stash`, `git rebase`, `git merge`, `git push` or any command that changes history, staging or the working tree state.
- Read-only Git is allowed: `git status`, `git diff`, `git log`, `git branch --show-current`.
- The user creates all commits manually.
- Commit numbers in `docs/project-progress.md` are tracking references only.
- Give a suggested commit message at the end of each task. Use Conventional Commits, for example `feat(ui): add login page` or `chore: configure claude project rules`.
- Do not mark a commit as "completed" until the user confirms it was made.
- Never edit `.gitignore` to hide a problem. Never commit or expose secrets.

## 16. Task Completion Report

At the end of every task or phase, report:

1. What was completed
2. Files changed (created / modified / deleted)
3. Verification actually performed (commands run and results, browser checks)
4. Risks and open questions
5. What the user must check manually
6. Whether the requirements are satisfied, item by item
7. Suggested commit message and commit number
8. Next planned task (do not start it)

Then stop.

## 17. Verification Honesty

- Never claim a check passed unless you ran it and saw the result in this session.
- Separate **verified**, **not verified** and **could not verify**.
- If `npm run build` was not run, say so. If a warning appeared, report it.
- Do not say "should work". Test it or state that it is untested.
- Do not declare visual fidelity without comparing to the mockup.
- Report risks plainly: missing assets, contrast concerns, unverified breakpoints, approximated values.

## 18. Manual Verification

Always list what only a human can confirm. For example:

- Visual match against the mockups on a real screen
- Real-device mobile check and touch behavior
- Screen-reader behavior
- Brand accuracy of Arabic text and Islamic content (quotes, Surah references, hadith wording)
- Any Git action

## 19. Content Sensitivity

- Quranic verses, hadith and Arabic text must be copied exactly from the mockups or provided content. Never generate, paraphrase or correct religious text yourself.
- If religious text looks wrong or unclear, flag it for human review.
- Keep tone respectful. Do not add imagery of people or animals beyond what the mockups show.

## 20. Commands

```
npm run dev       start the Vite dev server (http://localhost:5173)
npm run build     production build, required check before reporting done
npm run preview   serve the built output
```

There is no lint or test script yet. Do not add one without approval.

## 21. Do Not

- Do not build or scaffold pages that were not requested.
- Do not add backend, API, mock server or auth code.
- Do not install or reinstall packages without approval.
- Do not commit, stage or reset Git state.
- Do not touch `.remember/`.
- Do not invent design values or new visual styles.
- Do not silently expand scope.
- Do not leave dev servers running after verification.
