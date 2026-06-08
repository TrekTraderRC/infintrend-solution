# InfinTrend AI Website

A React + Vite + Tailwind CSS website for an enterprise AI Solution Provider.

## Tech Stack

- React
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router
- Lucide React icons
- Formspree contact form

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

The production build will be generated in the `dist` folder.

## Formspree Setup

Open:

```bash
src/pages/Contact.jsx
```

Replace:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

with your real Formspree endpoint.

## Main Pages

- `/` Home
- `/solutions` Solutions
- `/services` Services
- `/portfolio` Portfolio
- `/about` About
- `/contact` Contact / Book a Call

## Customization

Most business content is stored in:

```bash
src/data/services.js
src/data/solutions.js
src/data/portfolio.js
```

Update these files to change service cards, solution cards, and portfolio entries.
