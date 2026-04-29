# POLLMAP // ODYSSEY

KDA PB 브리핑 + 블로그 + 포트폴리오 통합 채널. Next.js 14 App Router +
Tailwind 3.4 + MDX. Kubrick / 2001 디자인 톤 (`14_kubrick_design_v2.html`
의 단일 HTML 을 컴포넌트로 분해).

## Stack

| 레이어 | 도구 |
|------|------|
| Framework | Next.js 14.2 (App Router) |
| UI | React 18.3 + Tailwind 3.4 |
| Animation | Framer Motion 11 (예약), CSS keyframes (현재) |
| Content | MDX (`@next/mdx` + `next-mdx-remote/rsc` + `gray-matter`) |
| 타입 | TypeScript 5.6 strict + `noUncheckedIndexedAccess` |
| 폰트 | Orbitron · Pretendard Variable · JetBrains Mono |

## Getting started

```bash
# 의존성 설치 (pnpm 권장)
pnpm install

# 개발 서버 — http://localhost:3000
pnpm dev

# 타입 체크 + 린트
pnpm type-check
pnpm lint

# 프로덕션 빌드
pnpm build
pnpm start
```

> npm 또는 yarn 도 동작합니다. `package.json` 에 lock 파일을 강제하지
> 않습니다.

## Directory layout

```
.
├── app/                  # App Router
│   ├── layout.tsx        # HUD top/bot + filter contrast/saturate
│   ├── page.tsx          # 홈 — Starfield + Hero + 4 sections
│   ├── posts/[slug]      # MDX 포스트
│   ├── projects/[slug]   # MDX 프로젝트
│   └── about
├── components/           # 12 컴포넌트
│   ├── Starfield · Station · Sunline (CSS-only)
│   ├── Hero · AirlockCTA · HalMark
│   ├── Section{Destinations,Vessel,Training,MissionControl}
│   ├── ProjectCard · PostCard
│   └── ui/{Tag,DataPoint}
├── content/
│   ├── posts/            # YYYY-MM-DD-slug.mdx
│   └── projects/         # slug.mdx
├── lib/                  # projects, posts, utils
├── styles/               # kubrick-tokens.css + starfield.css
├── types/content.ts      # ProjectFrontmatter / PostFrontmatter
└── public/               # favicon, og.png
```

## Design tokens

`tailwind.config.ts` 와 `styles/kubrick-tokens.css` 가 동일 토큰을 공유.

| 토큰 | 16진 | 용도 |
|-----|-----|-----|
| `void` | `#000000` | 배경 본체 |
| `hull` / `station` / `steel` / `plate` | 어두운 회색 5단 | 패널, 보더 |
| `starlight` | `#f5f5f5` | 본문 텍스트 |
| `grey` / `grey-deep` | `#b0bec5` / `#5a6168` | 보조 텍스트 |
| `orbital` / `orbital-bright` | `#1565c0` / `#2a7fd9` | 호버, 강조 링크 |
| `hal` / `hal-glow` | `#ff0000` / `#ff000033` | 위험·라이브 시그널 |
| `success` | `#5fcf80` | 정상 telemetry |

`body` 에 `filter: contrast(1.04) saturate(0.85)` 를 걸어 ENR (silver
retention) 룩을 흉내냅니다.

## MDX content

### Post frontmatter

```yaml
---
slug: my-post                  # 옵션 (없으면 파일명)
title: '...'                   # 필수
description: '...'             # 60자 이하 권장
publishedAt: '2026-05-07'      # 필수, ISO
channel: devlog                # 필수, 5종 중 하나
tags: [...]
draft: false
readingTime: 4
---
```

### Project frontmatter

`lib/projects.ts` 의 `PROJECT_CATALOG` 가 SSOT. MDX 본문은 `/projects/[slug]`
페이지에서 추가 설명으로 사용.

## Deploy on Vercel

```bash
# 첫 배포 — 인터랙티브
vercel

# 프로덕션
vercel --prod
```

`vercel.json` 은 의도적으로 두지 않았습니다 (Next.js 기본값으로 충분).
환경 변수는 Vercel 대시보드 → Settings → Environment Variables.

### 필요한 환경 변수

`.env.example` 참고. 현재 빌드는 모두 옵션이며, 누락되어도 정상 동작합니다.

## Security

- `next.config.mjs` 에 5 헤더 + CSP 명시 (X-Frame, X-Content, Referrer,
  Permissions, HSTS, CSP)
- 시크릿은 `.env.local` (gitignored). 절대 커밋 금지
- `npm audit` 을 배포 전에 실행
- 자세한 사항은 `SECURITY.md`

## License

- 코드: **MIT** (`LICENSE`)
- 콘텐츠 (에세이, 리포트): **CC BY-NC-ND 4.0** — 글마다 frontmatter 에서 별도
  지정 가능

## Contributing

`CONTRIBUTING.md` 참고. 외부 PR 은 오타 수정 / 접근성 개선 / 명백한 버그
수정에 한해 환영합니다.

## Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인 (한 번만)
vercel login

# 배포 (preview)
vercel

# 프로덕션 배포
vercel --prod
```

또는 GitHub UI: <https://vercel.com/new> → `pollmap/pollmap-next` import → Vercel 자동 감지 (`vercel.json` 읽음) → 배포.

**예상 도메인**: `pollmap-next.vercel.app` (또는 Vercel 프로젝트 설정에서 사용자 지정).

`vercel.json` 에는 5 보안 헤더 + Korean region (`icn1`) + pnpm 빌드 명령이 사전 설정되어 있다.
