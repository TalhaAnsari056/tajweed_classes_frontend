---
name: visual-check
description: Verify a page in a real browser with Playwright MCP and compare it to its mockup at desktop, tablet and mobile widths. Use after any visible UI change or when asked to visually verify.
---

# Visual Check

Playwright MCP is already installed. Do not reinstall it. Its tool schemas are deferred, so load them with ToolSearch first (search for `playwright browser`).

## Steps
1. Run `npm run build` first. Stop if it fails.
2. Start the dev server in the background with `npm run dev`. Note the URL (default http://localhost:5173).
3. Open the page in Playwright and wait until it renders.
4. Take screenshots at these widths: 1440, 1024, 768, 375.
5. Open the matching mockup in `docs/design/references/` and compare:
   - layout and proportions
   - colors and typography roles
   - spacing, radius and shadows
   - state variants (hover, focus, completed, current, locked)
   - imagery and icons
6. Check for horizontal scroll (compare `document.documentElement.scrollWidth` with `clientWidth`) at each width.
7. Check console messages for errors and warnings.
8. Keyboard: Tab through the page and confirm a visible focus order and that drawers and menus open and close (Escape).
9. If animation exists, confirm it runs and ends in the right state, then emulate `prefers-reduced-motion: reduce` and confirm motion is removed.
10. Stop the dev server when finished.

## Report
- **Verified:** what was actually seen, with the widths tested
- **Differences from the mockup:** specific and actionable, not "looks fine"
- **Not verified / could not verify:** for example real devices, screen readers, hover that could not be triggered
- **Console:** errors or warnings found

## Rules
- If Playwright MCP is unavailable or fails, say so. Do not claim a visual check.
- Do not edit code during a check unless the user asks. Report differences instead.
- Screenshots are temporary. Save them in the scratchpad or an untracked temp location, not in the repo.
- Never leave the dev server running.
