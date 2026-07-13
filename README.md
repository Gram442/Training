# Link Hub

A minimal, mobile-friendly personal link page. Dark ink background, warm paper text, one amber accent.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for deployment (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
```

This outputs a static site to `dist/`.

## Customize

Everything you need to change lives at the top of `src/App.jsx`:

- `profile` — name, bio, and the two-letter initials shown in the avatar circle
- `links` — the 4 (or more) links; each is `{ label, url }`

Colors and fonts are defined as tokens in `tailwind.config.js` (`ink`, `panel`, `paper`, `muted`, `amber`) if you want to retheme it.
