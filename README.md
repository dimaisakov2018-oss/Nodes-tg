# Telegram-style Blog (Astro + Markdown + /ru & /en)

## Run locally
1) Install dependencies:
   - `npm install`

2) Start dev server:
   - `npm run dev`

Open: http://localhost:4321

## Structure
- `src/content/ru/blog/*.md` — Russian posts
- `src/content/en/blog/*.md` — English posts
- Routes:
  - `/ru/blog/<slug>`
  - `/en/blog/<slug>`

## Add a new post
Create a Markdown file with frontmatter:

```md
---
title: "Post title"
description: "Short subtitle"
date: "2025-12-14"
---

Your content...
```
