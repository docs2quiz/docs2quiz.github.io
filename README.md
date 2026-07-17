# docs2quiz.github.io

Landing page + bilingual (EN/ID) documentation for [docs-to-quiz](https://github.com/iqbal-rahmatullah/docs-to-quiz), built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), deployed to GitHub Pages at [docs2quiz.github.io](https://docs2quiz.github.io).

This repo is the website only. The application source lives at [iqbal-rahmatullah/docs-to-quiz](https://github.com/iqbal-rahmatullah/docs-to-quiz).

## Structure

```
src/
├── assets/            # logo, demo.gif — shared by landing + docs
├── components/
│   └── Landing.astro  # the whole custom landing page, lang="en" | "id"
├── i18n/
│   └── landing.ts      # landing page copy, both locales
├── pages/
│   ├── index.astro     # EN landing (/)
│   └── id/index.astro  # ID landing (/id/)
├── styles/
│   └── theme.css        # brand tokens (accent, fonts) shared by Starlight + landing
└── content/docs/         # Starlight docs, EN at root, ID under docs/id/
```

## Commands

```bash
npm install
npm run dev       # localhost:4321
npm run build     # -> dist/
npm run preview   # preview the production build
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and publishes to GitHub Pages automatically.
