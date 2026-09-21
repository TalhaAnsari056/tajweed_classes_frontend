# Project Progress

Branch: `feature/frontend-ui`
Commit numbers are tracking references only. The user creates every real Git commit manually.

## Commit Tracker

| # | Task | Status |
|---|---|---|
| 001 | Frontend foundation (Vite, React, Tailwind, Router, Motion, GSAP, Tabler) | files written and verified; **not yet committed** (`git status` shows everything untracked) |
| 002 | Claude/project configuration (CLAUDE.md, docs, rules, skills) | **files written, awaiting manual review and commit** |
| 003 | Design system (tokens, fonts, base primitives) | pending |
| 004 | Login UI | pending |
| 005 | App shell (sidebar and header) | pending |
| 006 | Student dashboard / My Courses UI | pending |
| 007 | Course detail UI | pending |
| 008 | Responsive, accessibility and animation polish | pending |

- Planned commits: 8
- Completed commits (confirmed by user): none yet. 001 and 002 files are both still untracked
- Current task: 002 — Claude/project configuration
- Next commit/task: 003 — Design system (do not start until requested)

## Completed Tasks

- [x] Vite + React (JS) scaffold, npm scripts (`dev`, `build`, `preview`)
- [x] Tailwind CSS v4 via `@tailwindcss/vite`, single `@import "tailwindcss"` in `src/index.css`
- [x] Installed: react-router-dom, motion, gsap, @tabler/icons-react
- [x] Minimal structure: `components/ hooks/ layouts/ lib/ pages/` (empty) and a placeholder router shell
- [x] Root `.gitignore`
- [x] Commit 002 files: `CLAUDE.md`, `docs/design.md`, `docs/project.md`, `docs/project-progress.md`, four rule files, three skills

## Remaining Tasks

- [ ] Design tokens and fonts (003)
- [ ] Login page (004)
- [ ] App shell (005)
- [ ] Dashboard (006)
- [ ] Course detail (007)
- [ ] Responsive / a11y / animation polish (008)

## Verification Status

| Item | Status |
|---|---|
| `npm run build` (foundation) | passed (24 modules, built in ~400 ms) |
| `npm run dev` serves | passed (HTTP 200 on :5173) |
| Commit 002 files exist | verified by file listing (CLAUDE.md 229 lines, 4 rules, 3 skills) |
| `npm run build` after commit 002 files | passed (built in ~226 ms) |
| Browser/Playwright checks | not applicable yet (no UI built) |
| Visual comparison with mockups | not applicable yet |

## Manual Checks Needed

- Review `docs/design.md` against the mockups. Hex values marked "Approximate" are visual estimates.
- Confirm the rules and skills in `.claude/` match how you want Claude to work.
- **Rename `src/assests` to `src/assets`** (blocked while a dev server holds the folder; stop it first). Then change the favicon href in `index.html` to `/src/assets/login/brand-mark.svg`.
- Create the Git commit yourself, then tell Claude so this file can record it as completed.

## Risks

- Mockups are AI-rendered bitmaps, so exact sizes and hex codes cannot be read from them. Fidelity will rely on visual comparison.
- Many mockup illustrations (hero scenes, course icons, mosque skyline, avatar) are not in `src/assets/`. Only login assets are present. Missing artwork must be supplied or approved.
- Fonts load from Google Fonts (network dependency, no npm package). Offline or blocked networks fall back to system fonts.
- Playwright MCP verification depends on the plugin being available in the session.
