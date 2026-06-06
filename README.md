# Manchester United Pub Quiz 🔴⚪

A standalone Manchester United trivia game built with React. 150+ real,
hand-written questions across history, legends, the Treble, transfers, the
Ferguson era and more — with explanations, streaks, a timer, sound effects,
categories, difficulty levels and a persistent leaderboard.

## Play locally

Just open `index.html` in a browser. It loads React from a CDN and the
pre-built `app.js` and `styles.css`.

## How it's built

The source of truth is `src/app.jsx`. The deployed files are generated from it:

| Source            | Built output |
|-------------------|--------------|
| `src/app.jsx`     | `app.js` (JSX compiled to plain JS) |
| `src/input.css` + classes in `src/app.jsx` | `styles.css` (Tailwind, minified) |

To regenerate after editing the source:

```bash
npm install
npm run build
```

This avoids compiling JSX in the browser and ships a real Tailwind stylesheet,
so there are no runtime build steps or production warnings.

## Adding questions

Add objects to the `REAL_QUESTIONS` array in `src/app.jsx`:

```js
{
  question: "Your question?",
  options: ["A", "B", "C", "D"],
  correct: 2,            // index of the correct option (0-3)
  cat: "History",        // category (shows up in the setup screen)
  diff: "Medium",        // "Easy" | "Medium" | "Hard"
  explain: "A short factual note shown after answering."
}
```

Answer positions are shuffled at runtime, so it doesn't matter which slot the
correct answer sits in. Run `npm run build` afterwards.

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) publishes the site to
GitHub Pages on every push to `main`. One-time setup: **Settings → Pages →
Build and deployment → Source → GitHub Actions**.
