# Design Source of Truth — Tajweed Classes

Derived from the mockups in `docs/design/references/`:

- `REF LMS.jpeg` — login screen
- `student-dashboard-target.png` — "My Courses" dashboard
- `noorani-qaida-course-target.png` — course detail with lesson grid
- `tajweed-classes-logo.webp`, `tajweed-classes-mark.webp` — brand logo / mark

Value confidence:

- **Confirmed** = read from the real asset SVGs in `src/assests/login/`.
- **Approximate** = judged visually from the mockups. Treat as direction, then verify by side-by-side comparison. Do not invent precise values beyond this.

The mockups are AI-rendered bitmaps, so pixel-exact sizes are not recoverable. Match proportion, hierarchy and feel.

## 1. Overall Feel

Warm, calm, premium Islamic learning environment. Cream/ivory canvas, deep emerald green as the anchor, muted gold as the accent, soft shadows, generous whitespace, serif headings. Friendly for kids and parents, respectful, never loud or neon. Decorative Islamic imagery (mosque silhouettes, lantern, Quran on rehal, geometric patterns) is used softly and never blocks content.

## 2. Color

| Role | Value | Confidence |
|---|---|---|
| Brand green (primary buttons, brand mark, links) | `#087052` | Confirmed (SVGs) |
| Mint tint (icon tiles, soft green surfaces) | `#EAF5F0` | Confirmed (SVGs) |
| Gold accent (mark outline, quote marks, highlights) | `#C9A13B` | Confirmed (SVGs) |
| Slate icon/secondary text | `#50616A` | Confirmed (SVGs) |
| Sidebar background | very deep forest/emerald green, darker than the brand green, with a faint geometric pattern and a subtle lighter gradient toward the bottom | Approximate (direction) |
| Page background | warm off-white / cream, slightly warmer than pure white | Approximate |
| Card surface | white or near-white | Approximate |
| Body text | near-black with a slight green/charcoal cast; secondary text mid grey | Approximate |
| Current-lesson / CTA highlight | warm gold-amber fill (button), pale cream-gold card tint | Approximate |
| Locked state | flat light grey surfaces, grey lock icon, grey text | Approximate |
| Success | brand-green check badge | Approximate |

Course accent colors, each with a tinted circle icon, a matching progress bar and a matching pale "Continue" button:

- Green — Noorani Qaida
- Blue — Quran Reading
- Purple — Quran Memorization
- Amber/gold — Quran Tafseer
- Teal-green — Islamic Studies
- Pink/rose — Short Courses

Rules:

- Green is the dominant color, gold is the accent, and neither is used at full saturation on large areas except the sidebar and the primary button.
- Gradients are subtle and used only for the sidebar, hero banners and the login left panel.
- Third-party brand logos (Google, Microsoft) keep their own colors.

## 3. Typography

- **Headings and titles:** elegant serif with high-contrast strokes, in the style of Georgia/Garamond/Playfair. Used for page titles ("My Courses"), hero headings, card titles, section titles ("Your Courses", "All Lessons"), the "Welcome Back!" heading and the brand wordmark.
- **Body, UI and form text:** clean humanist/geometric sans-serif. Used for form labels, input text, small captions, helper text, buttons on the login screen and footer links.
- **Course/dashboard body copy:** the dashboard cards use serif for descriptions too, so the dashboard reads more serif-led than the login. Keep one consistent system: serif for titles and descriptive prose, sans for controls, labels and metadata.
- **Arabic:** the lesson letters (ا ب ت) are large, heavy and rendered in a traditional Arabic face inside circles. Arabic text must use `dir="rtl"` / `lang="ar"` and a proper Arabic font.
- **Hierarchy:**
  - Page title — large serif, semibold.
  - Hero title — very large serif, bold (course detail "Noorani Qaida").
  - Section title — large serif, semibold, with a short gold underline accent beneath it.
  - Card title — medium serif, semibold.
  - Metadata ("7 of 17 lessons", "Lesson 4") — small sans or serif, muted.
  - Eyebrow/tagline ("LEARN · PRACTICE · GROW") — small, uppercase, wide letter-spacing, muted.
- Font choice must be decided in the design-system task. Prefer a free web font pairing, and add it only with approval (see CLAUDE.md dependency rules).

## 4. Spacing and Layout

- Fixed left sidebar (roughly 17–18% of the desktop mockup width) plus a fluid main area.
- Main content has a generous left/right gutter, about 24–32 px at desktop scale.
- Card grids: dashboard courses = 3 columns; course lessons = 4 columns; comfortable gaps of roughly 16–24 px.
- Cards have an internal padding of roughly 16–24 px.
- Vertical rhythm is airy: large gaps between hero, section title and grid.
- The login is a two-panel layout: a decorative brand panel on the left and a floating white card on the right.
- Footer sits at the bottom of the main area: copyright on the left, three tagline links on the right ("Learn Quran • Live the Change • A Brighter Ummah").

## 5. Border Radius

- Cards, hero banners, the login card, buttons and inputs all use soft, rounded corners.
- Large surfaces (login card, hero, cards): large radius, about 16–24 px.
- Buttons, inputs, selects, dropdown, active nav item: medium radius, about 8–12 px.
- Icon/image containers, progress rings and avatars: full circle.
- Pills/badges ("RECOMMENDED FOR YOU", "CURRENT LESSON"): fully rounded pill.
- Progress bars: fully rounded track and fill.

## 6. Shadows and Borders

- Shadows are very soft, diffuse and low-opacity. No hard or dark drop shadows.
- Cards sit on the cream background with a hairline light border plus a faint shadow.
- The login card floats with a larger, softer shadow.
- The active sidebar item is a light pill with a subtle glow.
- Highlighted cards (Recommended, Current Lesson) have a thin colored border (green / gold) with the matching soft tint.
- Locked cards are flat: lighter, near-zero shadow.

## 7. Cards

- **Course card:** a circular illustrated icon on the left (colored background), then a serif title, a two-to-three-line description, "N of M lessons" with a percentage on the right, a thin progress bar, and a full-width tinted "Continue Learning" button with a chevron at the end. The "Short Courses" card has no progress and uses "Explore Courses".
- **Recommended card:** the same layout with a green border, a pill badge, and a solid dark-green button with white text.
- **Lesson card:** a circular badge with an Arabic glyph on the left, a small "Lesson N" label in green, a serif title, a short description, and a full-width bottom button.
  - Completed: a green check badge top-right and a solid green "Review Lesson" button with a replay icon.
  - Current: gold border, cream tint, a "CURRENT LESSON" pill and a solid gold "Continue Lesson" button with an arrow.
  - Locked: grey lock icon in a grey circle and a flat grey disabled "Locked" bar.
- **Stat/summary cards** (course detail): a white "Your Progress" card with a circular progress ring and a checklist; a pale quote card with large gold quote marks; a dark-green "Continue Learning" feature card with a gold button and imagery.
- **Info banner:** a wide pale strip with a green rosette icon, message text and a script tagline with decorative books on the right.

## 8. Buttons

- **Primary:** solid brand green, white text, medium radius, full width in forms, trailing arrow icon ("Sign In →").
- **Accent/Current:** solid warm gold with dark text and an arrow.
- **Soft/tinted:** a pale tint of the course color with colored text and icon, and a trailing chevron ("Continue Learning").
- **Secondary/social:** white with a thin border, brand logo on the left, dark text ("Continue with Google/Microsoft").
- **Disabled/Locked:** flat light grey, grey text, no shadow, not interactive.
- **Icon toggles:** grid/list view toggle. The active state is a filled dark-green square with a white icon. The inactive state is a plain grey icon.
- Labels are medium weight, sentence case. Icons sit inline with the label.

## 9. Forms (Login)

- Labels above fields in small semibold dark text.
- Inputs are tall, white, with a thin light-grey border, medium radius, a leading icon (user, lock) in slate and a placeholder in muted grey.
- The password field has a trailing eye icon toggle.
- Row: a green checkbox with "Remember me" on the left and a green "Forgot Password?" link on the right.
- Divider: a thin line with centered muted "or continue with" text.
- Footer text: "Don't have an account? Contact your academy admin", with the link in green.
- The card header stacks a circular mint mark, a serif "Welcome Back!" and a muted subtitle.
- Select ("All Courses", "All Lessons"): a small white bordered dropdown with a chevron.

## 10. Sidebar

- Full-height, deep green, with a subtle geometric Islamic pattern texture.
- Top: the centered brand mark plus a "TAJWEED / CLASSES" wordmark in light serif with a gold dome mark.
- Nav items: a line icon plus a label in light text, with generous vertical spacing.
- Active item: a light (near-white/mint) rounded pill with a dark-green filled icon and dark text.
- Dashboard nav: Dashboard, My Courses, Progress, Lessons, Assignments, Profile, Settings.
- Course detail nav adds Achievements and Messages.
- Lower area: a hadith quote block, gold quote marks and a gold attribution ("— Sahih Bukhari"). In the course detail it is inside a thin dashed/outlined frame.
- Bottom: a translucent mosque silhouette skyline fading into the green, with a crescent moon.
- The course detail mockup shows a hamburger toggle in the header, which indicates a collapsible sidebar on smaller screens.

## 11. Header (Top Bar)

- White/cream bar with a hairline bottom border.
- Left: the page title in serif (with a hamburger icon on the course detail).
- Right: a bell icon with a small red notification dot, a thin vertical divider, a circular avatar, name (semibold), role ("Student") in muted text, and a chevron.

## 12. Icons

- Style: Tabler-like outline/line icons with a consistent stroke and rounded caps, sized about 20–24 px in nav and 16–20 px inline.
- Sidebar icons are light on green. The active one is filled dark green.
- Cards and forms use slate or green line icons. Locked lessons use a grey padlock.
- Existing SVGs in `src/assests/login/` (eye, lock, user, arrow-right, brand-mark, feature icons, Google and Microsoft marks) are the source for the login screen.
- All other icons come from `@tabler/icons-react`.
- Feature icons on the login panel sit in small rounded mint squares.

## 13. Imagery and Decoration

- Recurring motifs: Quran on a wooden rehal, an ornate lantern, potted green plants, mosque and dome silhouettes, stacked books labeled Quran/Tajweed/Islamic Knowledge, Arabic letters on a green circle, and soft arch/window light.
- Hero banners blend the photo-style illustration into a cream gradient on the left so the text stays readable.
- Course icons are circular illustrated badges, each with its own background color.
- Login left panel: a cream top with a curved gold-outlined swoosh separating it from the deep green lower area, which holds the hadith quote.
- Decorative images are `aria-hidden` and non-interactive. They must never reduce text contrast.
- Only images actually present in `src/assests/` or `docs/design/references/` may be used. Do not fabricate or substitute stock art. Flag missing illustrations instead.

## 14. Progress UI

- **Linear bar:** thin, fully rounded, a light grey track with a course-colored fill and a bold percentage label on the right, using the same accent as the card.
- **Circular ring:** a thick ring in a green fill over a pale track, with the percentage in large serif in the center ("41%").
- **Checklist:** small green check-circle, book and flag icons, each with a short line ("7 of 17 lessons completed", "Current: Lesson 4", "10 lessons remaining").
- **Lesson state badges:** a green check for complete, a pill for current, a lock for locked.

## 15. Responsive Direction

The mockups show desktop/tablet widths only. Direction, not measured behavior:

- Desktop: fixed sidebar and the full grids (3 course columns, 4 lesson columns).
- Tablet: the hamburger in the header collapses the sidebar into a drawer. Grids drop to 2 columns.
- Mobile: a single column, hero simplified with the imagery reduced or cropped, and the sidebar as an off-canvas drawer.
- Login: the two panels stack on small screens, with the form card first and the decorative brand panel reduced or hidden.
- Never rely on horizontal scroll. Buttons and inputs keep at least a 44 px touch target.

## 16. Animation Direction

Gentle, calm and purposeful. Nothing bouncy or flashy.

- Page/section load: soft fade + small upward translate, staggered across cards.
- Hover: a slight lift with a soft shadow increase on cards, and a small brightness or arrow-nudge on buttons.
- Progress: bars and rings animate from 0 to value on first view.
- Sidebar drawer and dropdowns: quick ease-out slide/fade.
- Hero decoration: optional very subtle parallax or float. Optional, and only on desktop.
- Always honor `prefers-reduced-motion`. See `.claude/rules/animation.md`.
