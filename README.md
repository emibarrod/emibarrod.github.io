# emibarrod.com

Personal site of Emilio Barragán — data engineer. Built with [Astro](https://astro.build),
deployed to GitHub Pages at [emibarrod.com](https://emibarrod.com).

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm ci`          | Install dependencies from the lockfile       |
| `npm run dev`     | Dev server at `localhost:4321`               |
| `npm run build`   | Production build to `./dist/`                |
| `npm run preview` | Serve the production build locally           |
| `npm run check`   | Type-check `.astro` and `.ts` files          |

## Structure

```
src/
  components/   Header, Footer, social icons, post rows, section headings
  content/blog/ Blog posts as .md / .mdx
  data/         cv.ts and projects.ts — typed data behind /cv and /work
  layouts/      Base.astro (shell) and BlogPost.astro
  lib/posts.ts  Shared post querying: draft filtering, ordering, reading time
  pages/        Routes
  styles/       global.css — all design tokens live here
```

## Writing a post

Add a `.md` or `.mdx` file to `src/content/blog/`:

```yaml
---
title: 'Post title'
description: 'One-line summary, used in listings, RSS and social cards.'
pubDate: '2026-03-14'
tags: ['python', 'dbt']
draft: false
---
```

**Do not prefix filenames with a dot.** The content loader's glob does not match
dotfiles, so a leading dot silently removes the post from the collection — no
error, no warning, it just disappears from `/blog`, the RSS feed and the
sitemap. This is how the blog shipped empty for a year.

`draft: true` hides a post from production builds but keeps it visible in
`npm run dev`.

## Design

All colour, type, spacing and layout tokens are defined at the top of
`src/styles/global.css` and everything else references them. Light and dark
themes both follow `prefers-color-scheme`. `/cv` carries a print stylesheet, so
⌘P on that page produces the PDF — there is no separate CV document to maintain.

Contact is routed through LinkedIn only. There is deliberately no email address
or phone number anywhere on the site.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. The custom domain is configured by `public/CNAME`.
