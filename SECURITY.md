# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in `pollmap-odyssey`, please report
it responsibly:

- Email the maintainer (see GitHub profile contact)
- Do **not** open a public issue with the vulnerability details
- Allow at least 7 days for an initial response before public disclosure

## Scope

This site is a static-first portfolio + blog. The repository contains:

- Next.js 14 App Router source code
- MDX content (essays, reports, project descriptions)
- Tailwind / TypeScript configuration

There are no authenticated endpoints, no databases, and no user-submitted
content paths. Forms (if added) post to third-party services with their own
security boundaries.

## Hardening checklist (project-side)

- HTTP security headers configured in `next.config.mjs`
  (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`, `Strict-Transport-Security`, `Content-Security-Policy`)
- No secrets in source. Use `.env.local` (gitignored) for any keys
- Dependencies pinned via `package.json`; run `npm audit` before deploy
- MDX content sanitized via `next-mdx-remote` defaults

## Out of scope

- Vulnerabilities in upstream packages (report to the package authors)
- Issues that require physical access to a maintainer device
