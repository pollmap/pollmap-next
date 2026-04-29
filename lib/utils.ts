// 작은 공용 유틸. 컴포넌트/라이브러리 양쪽에서 안전하게 import 가능.

/** Tailwind 클래스 합성. clsx 의존성 없이 가벼운 구현. */
export function cn(
  ...inputs: ReadonlyArray<string | false | null | undefined>
): string {
  return inputs.filter(Boolean).join(' ');
}

/** ISO 날짜 → 한국식 표기 (2026.05.07) */
export function formatDateKo(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    return iso;
  }
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

/** 안전한 비교용 sort key — 같은 값이면 slug 로 안정 정렬 */
export function compareByOrderThenSlug<
  T extends { order: number; slug: string },
>(a: T, b: T): number {
  if (a.order !== b.order) {
    return a.order - b.order;
  }
  return a.slug.localeCompare(b.slug);
}

/** 발행일 내림차순 정렬 (최신 먼저) */
export function compareByPublishedDesc<T extends { publishedAt: string }>(
  a: T,
  b: T,
): number {
  return b.publishedAt.localeCompare(a.publishedAt);
}
