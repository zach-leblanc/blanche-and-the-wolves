# 60s Rock Band – Vite + React + Tailwind (GitHub Pages ready)

## Your GitHub Pages URL
**https://zach-leblanc.github.io/blanche-and-the-wolves/**

The project is preconfigured with `base: '/blanche-and-the-wolves/'` so asset paths resolve on Pages.

## Why you saw `main.tsx` 404
If GitHub Pages is serving the raw source (index.html pointing to `/src/main.tsx`), it means Pages is not using the built files.
Use the included **GitHub Actions** workflow so Vite builds to `dist` and Pages serves the compiled assets.

## Quick deploy
1. Create a new GitHub repo named **blanche-and-the-wolves** and push this project.
2. In the repo: **Settings → Pages** → set **Source: GitHub Actions**.
3. Push to `main`. The included workflow will build and publish to Pages automatically.

## Local dev (optional)
```bash
npm install
npm run dev
```

## Manual (branch) deploy alternative
```bash
npm run build
npm install --save-dev gh-pages
npm run deploy:gh-pages
```
Then set Pages to serve from the **gh-pages** branch (root).

## Customize
- Edit `src/App.tsx` to change the hero image, SVG logo, YouTube IDs, and contact info.
