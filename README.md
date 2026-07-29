# HUDA

Personal essays and notes by **RIMO**.

[Visit the site](https://rimoooliii.github.io/HUDA/) ·
[Contact RIMO on GitHub](https://github.com/rimoooliii)

HUDA is an Astro static site hosted on GitHub Pages. Writing is stored as
Markdown and published at stable URLs under `/writing/`.

## Publishing documentation

For a detailed, non-technical walkthrough of publishing through the GitHub
website—including metadata, images, footnotes/sidenotes, drafts, deployment
checks, and troubleshooting—read the
**[中文手动上传与发布文章指南](docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md)**.

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

Every article also ends with an embedded Discussion panel powered by giscus and
the repository's GitHub Discussions. Threads are mapped to each article's
pathname and are created when the first comment or reaction is posted.

## Commands

```sh
npm install
npm run check
npm run build
npm run dev
```

Commits to `main` are built and deployed by GitHub Actions.
