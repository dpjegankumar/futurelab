# FutureMe Lab

Test-drive careers through interactive missions and a 50-question career explorer. Discover interests, build a skills profile, and explore personalized next steps with age- and grade-based mission filtering.

## Features

- 50 multiple-choice scenario questions across software, design, business, science, people-focused work, and engineering.
- Three explained career directions based on interest ratings.
- Three interactive career missions with hints and evidence-linked feedback.
- Grade or age setup, eligible learning-level labels, and mission filtering.
- Skills profile, enjoyment ratings, personalized next-step checklists, and journal downloads.
- Saved answers, mission drafts, and progress in browser local storage.
- Two illustrative student demos with different strengths.

## Run locally

Open `index.html` in a modern browser, or serve this directory with any static HTTP server. No build step or dependency installation is required.

To run the scoring and eligibility checks with Node.js:

```sh
node verify.cjs
```

## Hosting

The repository root contains the static application. It can be hosted using GitHub Pages or another static hosting service. For GitHub Pages, select the `main` branch and `/ (root)` directory in the repository's Pages settings.

## How feedback works

Career suggestions average authored interest ratings across six areas. They reflect preferences, not tested ability. Mission feedback uses explicit authored rubrics, not a live AI service or validated aptitude assessment. Science, people-focused work, and engineering currently offer suggested experiments rather than full in-app missions.

## Privacy

This MVP has no backend or API credentials. Answers and profiles stay in the browser's local storage; clear site data to remove them. Fonts are loaded from Google Fonts, with system font fallbacks. Progress is specific to each browser and site origin.
