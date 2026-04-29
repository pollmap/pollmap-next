// stats-bar-mono 안쪽의 단일 셀.
// + 표식 (상단 좌측) + 라벨 + 큰 값 + 메타.

import { cn } from '@/lib/utils';

interface DataPointProps {
  label: string;
  value: string;
  unit?: string;
  meta?: string;
  className?: string;
}

export function DataPoint({
  label,
  value,
  unit,
  meta,
  className,
}: DataPointProps) {
  return (
    <div
      className={cn(
        'relative px-6 py-8',
        'before:absolute before:left-3 before:top-3 before:h-px before:w-2 before:bg-hal',
        'after:absolute after:left-3 after:top-3 after:h-2 after:w-px after:bg-hal',
        className,
      )}
    >
      <div
        className="mb-3 font-mono text-[9px] uppercase text-grey"
        style={{ letterSpacing: '0.25em' }}
      >
        {label}
      </div>
      <div
        className="mb-2 font-display text-[36px] font-normal leading-none text-starlight"
        style={{ letterSpacing: '0.04em' }}
      >
        {value}
        {unit && (
          <span className="ml-1 font-mono text-[13px] text-grey">{unit}</span>
        )}
      </div>
      {meta && (
        <div
          className="font-mono text-[10px] uppercase text-grey-deep"
          style={{ letterSpacing: '0.1em' }}
        >
          {meta}
        </div>
      )}
    </div>
  );
}

export default DataPoint;
