# Superior Roofing Company of Georgia — Landing Page

A React + TypeScript + Vite + Tailwind CSS landing page for Superior Roofing
Company of Georgia, Inc.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   All UI sections (Navbar, Hero, Services, ProjectGallery, EstimateForm, ...)
  data/         Content arrays (services, process steps, gallery items, FAQ, service areas)
  types/        Shared TypeScript interfaces
  index.css     Tailwind entry + small global utility classes
  App.tsx       Assembles all sections in order
  main.tsx      React root
```

## Notes

- **Photography**: Images are temporary high-resolution Unsplash URLs so the
  layout, cropping, and lazy-loading are all wired up correctly. Swap the
  `image` fields in `src/data/services.ts` and `src/data/gallery.ts`, and the
  `src` attributes in `Hero.tsx`, `WhySuperior.tsx`, `About.tsx`, and
  `FinalCTA.tsx`, for licensed photography of the company's own projects
  before launch.
- **Logo**: `src/components/Logo.tsx` is an original, temporary SVG mark
  (a roofline that resolves into a hidden "S"). It's built to be swapped for
  a professionally produced logo asset without touching any layout code —
  replace the `<svg>` markup, keep the component's props the same.
- **Estimate form**: No backend is wired up. `EstimateForm.tsx` simulates a
  submission (validation → loading → success/error states) so the UX is
  ready to connect to a real endpoint (e.g. an API route, Formspree, or a
  CRM webhook).
- **Content accuracy**: All statistics, certifications, and awards reflect
  only the verified information supplied in the design brief (founded 1990,
  A+ BBB rating, CertainTeed Master Contractor, 2025 CertainTeed Diamond
  Approval Award). No reviews, prices, or additional certifications were
  invented — the Reviews section intentionally uses verified credentials
  instead of fabricated testimonials.
