# Contributing

`pollmap-odyssey` is currently a **single-author personal site**. Outside
contributions are limited to:

- Bug reports (open an issue with reproduction steps)
- Typo / copy-edit fixes (small PRs welcome)
- Accessibility improvements

## Development

```bash
pnpm install        # or: npm install
pnpm dev            # http://localhost:3000
pnpm type-check
pnpm lint
pnpm build
```

## Conventions

- TypeScript strict + `noUncheckedIndexedAccess`
- Components stay under 200 lines; extract subcomponents when they grow
- Tailwind first; custom CSS only for the starfield / station effects
- Korean comments and copy are intentional — do not "translate" them in PRs
- `"use client"` only when interaction or browser-only APIs are required

## Content

- Posts: `content/posts/YYYY-MM-DD-slug.mdx`
- Projects: `content/projects/slug.mdx`
- Required frontmatter fields are listed in `types/content.ts`

## Pull requests

1. Fork and create a feature branch
2. Run `pnpm type-check && pnpm lint && pnpm build` locally
3. Open the PR with a one-line summary + 2-3 line description
4. The maintainer reviews on a best-effort basis (this is a side project)

## License

By contributing code, you agree your contribution is released under the
project's MIT License (see `LICENSE`). Site content remains CC BY-NC-ND 4.0.
