// 작은 모노 태그 — 카드/포스트 보조 라벨.

import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  /** 'hal' | 'orbital' | 'grey' (기본) */
  tone?: 'hal' | 'orbital' | 'grey' | 'success';
}

const TONE_CLASS: Record<NonNullable<TagProps['tone']>, string> = {
  hal: 'text-hal',
  orbital: 'text-orbital-bright',
  grey: 'text-grey-deep',
  success: 'text-success',
};

export function Tag({ children, className, tone = 'grey' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[10px] uppercase',
        TONE_CLASS[tone],
        className,
      )}
      style={{ letterSpacing: '0.2em' }}
    >
      {children}
    </span>
  );
}

export default Tag;
