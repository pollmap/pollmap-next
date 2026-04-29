// 12개 레포의 type-safe 카탈로그.
// MDX content/projects/*.mdx 가 추가되면 그 frontmatter 가 SSOT 가 되지만,
// destinations 섹션은 정적 가드를 위해 이 파일을 먼저 사용한다.

import type { ProjectFrontmatter } from '@/types/content';
import { compareByOrderThenSlug } from '@/lib/utils';

// 모든 12 레포 — Featured 5 + Long-tail 7
export const PROJECT_CATALOG: ReadonlyArray<ProjectFrontmatter> = [
  {
    slug: 'nexus-finance-mcp',
    name: 'Nexus Finance',
    repo: 'https://github.com/pollmap/nexus-finance-mcp',
    description:
      'DART · ECOS · FRED · 시장 · 온체인을 MCP로 통합. AI 에이전트의 금융 데이터 인프라.',
    class: 'DATA INFRA',
    stat: '398 / 64',
    statLabel: 'TOOLS / SERVERS',
    status: 'active',
    order: 1,
    featured: true,
    tags: ['mcp', 'finance', 'agents'],
    publishedAt: '2026-01-08',
    updatedAt: '2026-04-13',
  },
  {
    slug: 'cufa-equity-report',
    name: 'CUFA Equity',
    repo: 'https://github.com/pollmap/cufa-equity-report',
    description:
      '검증·투자포인트·밸류에이션·리스크·품질평가까지 모듈화한 자동화 시스템.',
    class: 'RESEARCH OPS',
    stat: '9',
    statLabel: 'REPORTS · MULTI-MODEL',
    status: 'active',
    order: 2,
    featured: true,
    tags: ['research', 'equity', 'automation'],
    publishedAt: '2025-11-12',
    updatedAt: '2026-04-12',
  },
  {
    slug: 'equity-research-book',
    name: 'Equity Research Book',
    repo: 'https://github.com/pollmap/equity-research-book',
    description:
      '한국 시장 8주 기업분석 커리큘럼. 단독 저작물. CC BY-NC-ND 4.0.',
    class: 'CURRICULUM',
    stat: '240K / 17',
    statLabel: 'CHARS / FILES',
    status: 'active',
    order: 3,
    featured: true,
    tags: ['book', 'curriculum', 'equity'],
    publishedAt: '2025-09-01',
    updatedAt: '2026-03-20',
  },
  {
    slug: 'luxon-terminal',
    name: 'Luxon Terminal',
    repo: 'https://github.com/pollmap/luxon-terminal',
    description:
      '백테스트·리스크 게이트·자본 승급 룰을 설계한 실험용 퀀트 프레임워크.',
    class: 'QUANT LAB',
    stat: '989',
    statLabel: 'TESTS · WALK-FORWARD',
    status: 'active',
    order: 4,
    featured: true,
    tags: ['quant', 'backtest', 'python'],
    publishedAt: '2025-12-15',
    updatedAt: '2026-04-07',
  },
  {
    slug: 'career-ops-kr',
    name: 'Career-Ops KR',
    repo: 'https://github.com/pollmap/career-ops-kr',
    description:
      '한국 27개 채용 포털 단일 CLI 스캔. 정규화·스코어링 데이터 파이프라인.',
    class: 'JOB MARKET',
    stat: '27',
    statLabel: 'CHANNELS · DAILY',
    status: 'active',
    order: 5,
    featured: true,
    tags: ['cli', 'scraping', 'jobs'],
    publishedAt: '2026-02-20',
    updatedAt: '2026-04-12',
  },
  // — Long-tail 7 —
  {
    slug: 'gitlawb',
    name: 'gitlawb',
    repo: 'https://github.com/pollmap/gitlawb',
    description: 'DID 기반 git 자동화 CLI. 40도구 MCP, OAuth 토큰 회전.',
    class: 'CLI TOOLING',
    stat: '40',
    statLabel: 'MCP TOOLS',
    status: 'active',
    order: 10,
    tags: ['cli', 'mcp', 'identity'],
    publishedAt: '2026-03-10',
  },
  {
    slug: 'pharos',
    name: 'Pharos',
    repo: 'https://github.com/pollmap/pharos',
    description:
      'Luxon 독립 SaaS 스켈레톤. FastAPI + SPA + JWT + Cytoscape 그래프 뷰.',
    class: 'AI SAAS',
    stat: '62',
    statLabel: 'TESTS · 91% COV',
    status: 'maintenance',
    order: 11,
    tags: ['saas', 'fastapi', 'graph'],
    publishedAt: '2026-04-23',
  },
  {
    slug: 'luxon-nis',
    name: 'Luxon-NIS',
    repo: 'https://github.com/pollmap/luxon-nis',
    description: '개인 국정원. KAVEN dedup + 난리지식 스타일 DSL.',
    class: 'KNOWLEDGE BASE',
    stat: '42',
    statLabel: 'TESTS · 93% COV',
    status: 'maintenance',
    order: 12,
    tags: ['nis', 'dsl', 'knowledge'],
    publishedAt: '2026-04-23',
  },
  {
    slug: 'luxon-ai',
    name: 'Luxon AI',
    repo: 'https://github.com/pollmap/luxon-ai',
    description:
      'Luxon AI 공식 문서 — SOUL · README · VISION · ARCHITECTURE · MCP-CATALOG.',
    class: 'AGENT OPS',
    stat: '5',
    statLabel: 'CORE DOCS',
    status: 'active',
    order: 13,
    tags: ['docs', 'agents'],
    publishedAt: '2026-04-07',
  },
  {
    slug: 'pollmap-design',
    name: 'Pollmap Design',
    repo: 'https://github.com/pollmap/pollmap-design',
    description:
      '브랜드 토큰 + Kubrick 디자인 시스템. Tailwind 프리셋 + Storybook.',
    class: 'DESIGN SYSTEM',
    stat: '30+',
    statLabel: 'TOKENS · 12 COMPONENTS',
    status: 'maintenance',
    order: 14,
    tags: ['design', 'tokens'],
    publishedAt: '2026-04-30',
  },
  {
    slug: 'kubrick-widgets',
    name: 'Kubrick Widgets',
    repo: 'https://github.com/pollmap/kubrick-widgets',
    description:
      'Starfield · Station · Airlock CTA — 단일 컴포넌트 위젯 패키지.',
    class: 'WIDGETS',
    stat: '12',
    statLabel: 'WIDGETS · MIT',
    status: 'maintenance',
    order: 15,
    tags: ['widgets', 'react'],
    publishedAt: '2026-04-30',
  },
  {
    slug: 'researchclaw',
    name: 'ResearchClaw',
    repo: 'https://github.com/pollmap/researchclaw',
    description: '자율 리서치 에이전트. Exa + arXiv + Vault + 평가 루프.',
    class: 'AGENT OPS',
    stat: '4',
    statLabel: 'AGENT STAGES',
    status: 'maintenance',
    order: 16,
    tags: ['research', 'agents'],
    publishedAt: '2026-04-15',
  },
];

/** Featured (destinations 섹션, 5개) */
export function getFeaturedProjects(): ReadonlyArray<ProjectFrontmatter> {
  return [...PROJECT_CATALOG]
    .filter((p) => p.featured === true)
    .sort(compareByOrderThenSlug);
}

/** 전체 정렬 목록 (projects 페이지) */
export function getAllProjects(): ReadonlyArray<ProjectFrontmatter> {
  return [...PROJECT_CATALOG].sort(compareByOrderThenSlug);
}

/** 슬러그로 단일 조회 — 미발견 시 undefined (호출자가 notFound() 결정) */
export function getProjectBySlug(
  slug: string,
): ProjectFrontmatter | undefined {
  return PROJECT_CATALOG.find((p) => p.slug === slug);
}
