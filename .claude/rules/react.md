---
paths:
  - "src/**/*.jsx"
  - "src/**/*.js"
---

# React Rules

- JavaScript only. Function components and hooks. No class components and no TypeScript.
- One component per file. PascalCase file and component name. Hooks are `useX` in `src/hooks/`.
- Pages go in `src/pages/`, layouts in `src/layouts/`, reusable UI in `src/components/`. Routes live in `App.jsx`.
- Keep a component focused. Split when it does more than one job or passes about 200 lines.
- Derive values during render instead of copying props into state or syncing with `useEffect`.
- Effects are for subscriptions, timers and imperative animation. Always clean up.
- Keys come from stable ids. Do not use array indexes for lists that can change.
- Mock data is plain arrays/objects in `src/lib/` or beside the page. Shape it as an API response might look, but do not create fetch code, services or fake endpoints.
- Do not add global state, context or a store until at least two distant components genuinely need shared state.
- Use `Link` / `NavLink` from `react-router-dom` for internal navigation. Use `useNavigate` only for programmatic navigation.
- Forms: controlled inputs with local state. No validation library. Submit handlers must not call any backend. Prevent default and leave a clearly marked no-op or visual-only behavior.
- Do not introduce `React.memo`, `useMemo` or `useCallback` without a measured reason.
- No unused imports, variables or files. No `console.log` and no commented-out code.
- Do not add packages (clsx, classnames, prop-types) without approval. Join class names with template strings or small helper expressions.
