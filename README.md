# Lee Chee Loong — Portfolio

A single-page personal portfolio built with HTML, Tailwind CSS, and vanilla JavaScript,
bundled and served with [Vite](https://vite.dev/).

## Tech Stack
- HTML5 + vanilla JavaScript (no UI framework — this isn't about proving backend/framework skill, it's about presentation)
- [Tailwind CSS v4](https://tailwindcss.com/) for styling, configured via CSS (`@theme` in `src/style.css`)
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Fontsource](https://fontsource.org/) for a self-hosted Inter font (no external Google Fonts request)
- [Vite](https://vite.dev/) as the dev server and production bundler
- All dependencies are npm-managed and version-locked via `package-lock.json`
- Hosted on GitHub Pages

## Prerequisites
- [Node.js](https://nodejs.org/) 18+ (built and tested on Node 22)

## Running locally
```bash
npm install     # install dependencies (first time only)
npm run dev     # start the dev server with hot-reload
```
Then open the URL Vite prints in the terminal (usually http://localhost:5173).

## Building for production
```bash
npm run build     # outputs an optimized, minified site to dist/
npm run preview   # locally preview the production build
```

## Deployment (GitHub Pages)
This repo auto-deploys via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`:
1. Push this repo to GitHub as **`portfolio`** (must match the `base` path in `vite.config.js` exactly).
2. In the repo settings: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.
4. Live at `https://<your-username>.github.io/portfolio/`.

No manual build/upload needed after this is set up once.

## TODO before publishing
- [ ] Add a profile photo to `public/assets/img/` and reference it in the Hero section (optional)
- [ ] Add project screenshots to `public/assets/img/` and swap them in for the gradient placeholders in the Projects section

## Folder structure
```
CL's Portfolio/
├── index.html          # entry HTML (references /src/main.js)
├── vite.config.js
├── package.json
├── src/
│   ├── main.js          # app logic + imports (Tailwind, AOS, Fontsource)
│   └── style.css        # Tailwind import + custom component styles
├── public/               # static files served as-is, referenced from "/"
│   └── assets/
│       ├── img/          (profile photo, project screenshots)
│       └── docs/         (Resume (Lee Chee Loong).pdf)
└── README.md
```
