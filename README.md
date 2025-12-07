# My React Full Starter

Features:
- Vite + React
- Tailwind CSS (dark mode class strategy)
- React Router (Home, About, Contact, API Demo, Login)
- Navbar & Footer
- Dark mode toggle (stores preference in localStorage)
- Simple Context API + Redux Toolkit example
- Dummy authentication (frontend only)
- Framer Motion animations
- Axios API example
- Deployment notes for GitHub Pages / Vercel / Netlify

## Quick start

1. Install dependencies:
```
npm install
```

2. Start dev server:
```
npm run dev
```

3. Build:
```
npm run build
```

## Tailwind
Tailwind is already configured via `tailwind.config.cjs` and `postcss.config.cjs`. Run `npm install` to install dev deps.

## Deploy
- Vercel: connect repository and deploy (auto detects Vite).
- Netlify: build command `npm run build` and publish `dist/`.
- GitHub Pages: set up a workflow or use `gh-pages` package and deploy `dist/`. Homepage is set to `.` in package.json for relative paths.

