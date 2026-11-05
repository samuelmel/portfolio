# Samuel Mendes Portfolio

Personal portfolio of Samuel Mendes dos Santos, Computer Science student in Fortaleza, Brazil, focused on data engineering. Built with React, Vite and Tailwind CSS (reset and utilities only; the design tokens live in `src/index.css`).

Live site: https://samuelmel.github.io/portfolio/

## Running locally

```bash
npm install
npm run dev        # development server
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## Project structure

- `src/components`: Navbar, Hero, Projects, CaseStudy, About, Contact, Footer
- `src/data/profile.js`: name, tagline, links, about text, stack groups and "Now"
- `src/data/projects.js`: the three case studies (question, what was done, finding, stack, images, links)
- `public/projects/*.webp`: project images (1600px wide, under 200 KB)
- `public/resume_samuel.pdf`: CV linked from the navbar, hero and contact
- `public/og.png`, `public/favicon.svg`: link preview and tab icon

## Deployment (GitHub Pages)

The site is published from the `docs/` folder of the `main` branch, with `base: "/portfolio/"` in `vite.config.js`.

```bash
npm run build:docs
```

Then commit `docs/` and push. Do not use `gh-pages` or another branch: `docs/` is the only deploy path.
