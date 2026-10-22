# Ahmad Rehan — Portfolio (`ECHO.`)

A monochrome, editorial-archive portfolio. Cream paper, ink black, film grain,
halftone-dithered portraits and oversized display type — inspired by the
"anti-boring portfolio" reference reel (`ECHO.` → `EXPLORE MY PORTFOLIO`).

## Stack

- React 18 + Vite
- framer-motion for the preloader, scroll reveals and the oversized contact type
- Plain CSS (`src/index.css`) design tokens — no UI framework
- `Space Mono` for micro-labels, `Archivo` (900) for display type

## Structure

```
src/
  App.jsx                 single-page composition + film layers
  data.jsx                all content (profile, projects, archive, skills…)
  index.css               design system: paper/ink tokens, sections, responsive
  components/
    Preloader.jsx         "ECHO." intro with a loading bar
    Navbar.jsx            auto theme-swapping nav (ink ↔ paper), PKT clock
    Cursor.jsx            blended custom cursor
    Hero.jsx              EXPLORE MY / PORTFOLIO + dithered portrait
    Marquee.jsx           infinite ticker band
    About.jsx             ABOUT ME frame, details ledger, stats strip
    Archive.jsx           "Where I've been" ledger, field notes, skill bars
    Work.jsx              fanned browser-window cards + works index bento
    Services.jsx          accordion service list
    Contact.jsx           LET'S TALK, live local time, contact grid
    Footer.jsx            ticker + credits
```

## Visual assets

| File | Use |
| --- | --- |
| `public/portrait-dots.png` | halftone-dithered portrait (generated from `ahmad.png`) |
| `public/ahmad-cutout.png` | clean cut-out portrait, revealed on hover in the About frame |
| `public/texture-dark.jpg` | dark swirl texture (hero, cards, frames) |
| `public/texture-paper.jpg` | paper fibre texture (About section) |
| `public/noise-tile.png` | animated film grain overlay + portrait dither |

The dither is produced with a dot-grid halftone (5px cell, gamma 1.75) so the
portrait reads as ink dots on black — the same treatment used in the reel.

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```
