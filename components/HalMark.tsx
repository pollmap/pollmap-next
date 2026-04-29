// HUD 좌상단의 흰 원 + 빨간 점 4초 펄스.
// HAL 9000 의 시각적 인장. aria-hidden — 장식 요소.

import { cn } from '@/lib/utils';

interface HalMarkProps {
  /** 추가 클래스 (예: 크기 조정) */
  className?: string;
  /** label — 명시적으로 의미를 부여하고 싶을 때 사용 */
  label?: string;
}

export function HalMark({ className, label }: HalMarkProps) {
  const ariaProps = label
    ? { role: 'img' as const, 'aria-label': label }
    : { 'aria-hidden': true as const };

  return (
    <span
      {...ariaProps}
      className={cn(
        'relative inline-block h-[14px] w-[14px] rounded-full border border-starlight',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-[4px] rounded-full bg-hal animate-hal-pulse"
      />
    </span>
  );
}

export default HalMark;
