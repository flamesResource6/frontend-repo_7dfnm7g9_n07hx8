HADS Agency — Blue Futuristic Website

Overview
- A premium, dark blue themed agency site with neon accents, glassmorphism, and smooth micro‑animations.
- Sections: Hero, Services, Why Choose HADS, About, Portfolio, Contact, Footer.
- Hero uses a Spline 3D scene for a subtle, interactive background.

Typography
- Headings are styled with a classic serif look to match the provided reference image (/mnt/data/Screenshot 2025-11-20 111636.png).
- For production, replace with a real webfont that visually matches the reference:
  1) Choose a display serif (e.g., "Fraunces", "Playfair Display", "Cormorant Garamond").
  2) Add @import or @font-face in src/index.css.
  3) Apply it to the .heading class.

Example @font-face setup
@font-face {
  font-family: 'HADS Display';
  src: url('/fonts/hads-display.woff2') format('woff2');
  font-weight: 300 800;
  font-style: normal;
  font-display: swap;
}
.then set in CSS:
.heading { font-family: 'HADS Display', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; }

Color tokens
- Primary Blue: #2D9CDB
- Deep Navy: #051427
- Accent neon: lighter variants of primary blue

Components
- Reusable UI components: Hero cards, Service cards, Portfolio cards, Contact form.
- Glassmorphism via translucent backgrounds, blur, and soft borders.

Accessibility
- High-contrast dark theme, visible focus rings on interactive elements, readable sizes.

Content Management
- Content sits in simple arrays for easy updates. Integrate a CMS by swapping arrays with API calls.

Running locally
- npm install
- npm run dev

Notes
- Replace placeholder project art with real images.
- The silhouette in About is abstract layers — you can swap with an SVG illustration.
