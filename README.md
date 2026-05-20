# Samuel Mendes Portfolio

Professional personal portfolio built with React, Vite and Tailwind CSS. The site is written in English and presents Samuel Mendes dos Santos as a Computer Science student focused on data engineering, Python, automation, backend and cybersecurity.

## Stack

- React
- Vite
- Tailwind CSS
- lucide-react

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Project structure

- `src/components`: reusable UI sections such as Navbar, Hero, About, Skills, Projects, Resume, Contact and Footer
- `src/data/projects.js`: portfolio projects in a separate array for easy editing
- `src/data/skills.js`: grouped skills used by the Skills section
- `public/resume.pdf`: expected resume file for download buttons

## GitHub Pages deployment

This project is configured with `base: "./"` in `vite.config.js`, which makes the build easier to publish on GitHub Pages without hardcoding a repository name.

### Option 1: Deploy with `gh-pages`

1. Install dependencies:

```bash
npm install
```

2. Run the deploy script:

```bash
npm run deploy
```

3. In your GitHub repository, open `Settings` > `Pages`.
4. If needed, set the source branch used by `gh-pages` and save.

### Option 2: Manual deployment

1. Build the project:

```bash
npm run build
```

2. Push the generated `dist` content to a branch used for GitHub Pages, such as `gh-pages`.
3. In GitHub, open `Settings` > `Pages`.
4. Select the branch and folder configured for publishing.

## Publishing steps on GitHub

1. Create a GitHub repository and push this project.
2. Upload your real resume file to `public/resume.pdf`.
3. Confirm that the LinkedIn, GitHub and email links are correct.
4. Run `npm run build` to verify the production output.
5. Publish with `npm run deploy` or configure GitHub Pages manually.

## Notes

- If your GitHub Pages repository uses a custom workflow instead of `gh-pages`, you can still keep this Vite structure and adapt only the deployment step.
