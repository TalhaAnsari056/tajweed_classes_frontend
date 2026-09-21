# Project Overview

## Purpose

Tajweed Classes is an Islamic learning management system (LMS) for online Quran learning: Noorani Qaida, Quran reading, memorization, Tafseer, Islamic studies and short courses. It serves students (mostly kids), their parents and academy staff. This repository is the **frontend only**.

## Technology Stack

| Area | Choice |
|---|---|
| UI | React 19, JavaScript (no TypeScript) |
| Build | Vite, npm |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` (CSS-first, no config file) |
| Routing | React Router (`react-router-dom`) |
| Animation | Motion (UI transitions), GSAP (complex timelines) |
| Icons | Tabler Icons (`@tabler/icons-react`) |

No other runtime dependencies. Adding one requires explicit approval.

## Current Phase: Frontend-Only

The current phase builds the UI from the mockups with static or mock data in the frontend.

**In scope**
- Project foundation and Claude Code configuration
- Design tokens and shared UI primitives
- Pages built from the mockups: Login, Student Dashboard (My Courses), Course Detail
- Responsive layout, accessibility, animation

**Out of scope (do not build)**
- Backend, APIs, database
- Real authentication or authorization
- Business logic, payments, live-class integration
- Any server code or backend folder structure

Forms and buttons that imply a backend (Sign In, Google/Microsoft login) must be visual and non-functional until a backend phase is approved.

## Key References

- `CLAUDE.md` — working rules for Claude Code
- `docs/design.md` — visual source of truth
- `docs/design/references/` — mockups
- `docs/project-progress.md` — task, commit and verification tracking
- `.claude/rules/` and `.claude/skills/` — scoped rules and workflows

## Known Notes

- The asset folder is spelled `src/assests/` (sic). It has not been renamed and all references must use the actual path until it is renamed deliberately.
