# HUDA

Personal essays and notes by **RIMO**.

[Visit the site](https://rimoooliii.github.io/HUDA/) ·
[Contact RIMO on GitHub](https://github.com/rimoooliii)

HUDA is an Astro static site hosted on GitHub Pages. Writing is stored as
Markdown and published at stable URLs under `/writing/`.

## Add a piece

Create `src/content/writing/your-slug.md`:

```md
---
title: "Title"
description: "One sentence explaining the piece."
date: 2026-07-29
author: RIMO
language: en
kind: essay
topics: [history]
tags: []
period: "Optional historical period"
places: []
terms: []
sources: []
draft: false
---

The article begins here.[^note]

[^note]: A source or explanatory note.
```

Standard Markdown footnotes become right-margin sidenotes on wide screens and
click-to-expand notes on narrow screens. Without JavaScript, they remain normal
endnotes.

## Commands

```sh
npm install
npm run check
npm run build
npm run dev
```

Commits to `main` are built and deployed by GitHub Actions.
