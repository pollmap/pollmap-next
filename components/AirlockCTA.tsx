'use client';

// 200x200 원형 CTA — hover 시 흰색 인장(seal)이 압력으로 부풀고 라벨이 반전.
// scrollTo 인터랙션이 있으므로 client component.

import { cn } from '@/lib/utils';

interface AirlockCTAProps {
  /** 스크롤 타겟 anchor (id 또는 absolute URL) */
  href: string;
  /** 라벨 (두 줄로 줄바꿈) */
  label?: string;
  /** 보조 라벨 — pressure ring */
  pressure?: string;
  className?: string;
}

export function AirlockCTA({
  href,
  label = 'ENTER\nTHE PORT',
  pressure = '⏵ AIRLOCK · PRESSURIZING',
  className,
}: AirlockCTAProps) {
  // 외부 URL vs 내부 anchor 분기
  const isAnchor = href.startsWith('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAnchor) return;
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={label.replace(/\n/g, ' ').trim()}
      className={cn(
        'group relative block h-[200px] w-[200px] cursor-pointer',
        'opacity-0 [animation:glacial-fade_5s_cubic-bezier(.6,0,.4,1)_5s_forwards]',
        className,
      )}
    >
      {/* 외곽 링 */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-starlight transition-transform duration-[8000ms] ease-[cubic-bezier(.4,0,.2,1)]"
      />
      {/* 내부 링 */}
      <span
        aria-hidden="true"
        className="absolute inset-3 rounded-full border border-starlight/40"
      />
      {/* 인장 — hover 시 0 → 0.92 */}
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-center scale-0 rounded-full bg-starlight transition-transform duration-[5000ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[0.92]"
      />
      {/* 라벨 */}
      <span
        className={cn(
          'absolute inset-0 z-[2] flex items-center justify-center whitespace-pre text-center',
          'font-display text-[12px] uppercase text-starlight transition-colors duration-[5000ms]',
          'group-hover:text-void',
        )}
        style={{ letterSpacing: '0.5em' }}
      >
        {label}
      </span>
      {/* 압력 라벨 */}
      <span
        aria-hidden="true"
        className="absolute -bottom-7 left-0 right-0 text-center font-mono text-[9px] uppercase text-grey-deep"
        style={{ letterSpacing: '0.3em' }}
      >
        {pressure}
      </span>
    </a>
  );
}

export default AirlockCTA;
