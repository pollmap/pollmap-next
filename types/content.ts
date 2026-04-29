// content/posts 와 content/projects 의 frontmatter 타입.
// strict + noUncheckedIndexedAccess 환경에서도 안전하게 사용.

export type ProjectClass =
  | 'DATA INFRA'
  | 'RESEARCH OPS'
  | 'CURRICULUM'
  | 'QUANT LAB'
  | 'JOB MARKET'
  | 'AGENT OPS'
  | 'CLI TOOLING'
  | 'AI SAAS'
  | 'DESIGN SYSTEM'
  | 'KNOWLEDGE BASE'
  | 'WIDGETS'
  | 'OTHER';

export type ProjectStatus = 'active' | 'maintenance' | 'archived';

export interface ProjectFrontmatter {
  /** 슬러그 (파일명 기반) — 라우팅 키 */
  slug: string;
  /** 디스플레이 이름 — Orbitron 캡스 */
  name: string;
  /** GitHub repo URL */
  repo: string;
  /** 한 줄 설명 (40-80자) */
  description: string;
  /** 분류 — destinations 카드의 dest-coord */
  class: ProjectClass;
  /** 상위 통계 (오른쪽 큰 숫자) */
  stat: string;
  /** 상위 통계 보조 라벨 */
  statLabel: string;
  /** 상태 */
  status: ProjectStatus;
  /** 정렬 우선순위 — 작은 값이 먼저 (Featured 5) */
  order: number;
  /** Featured 5 노출 여부 */
  featured?: boolean;
  /** 태그 */
  tags?: ReadonlyArray<string>;
  /** 발행일 ISO */
  publishedAt: string;
  /** 마지막 갱신일 ISO */
  updatedAt?: string;
}

export interface PostFrontmatter {
  slug: string;
  title: string;
  /** 60자 이하 권장 */
  description: string;
  /** ISO 8601 */
  publishedAt: string;
  updatedAt?: string;
  /** 채널 — vessel 의 CH-01 ~ CH-05 */
  channel:
    | 'equity-reports'
    | 'etf-products'
    | 'devlog'
    | 'trade-journal'
    | 'field-notes';
  tags?: ReadonlyArray<string>;
  /** 초안 — true 면 production 빌드에서 제외 */
  draft?: boolean;
  /** 읽기 시간 (분) */
  readingTime?: number;
}

export interface ContentRecord<TFrontmatter> {
  frontmatter: TFrontmatter;
  /** 원본 MDX body */
  body: string;
}
