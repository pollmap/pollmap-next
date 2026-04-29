// §02 — 6개 블로그 채널을 코리도 모듈로.
// 5개 cell (CH-01 ~ CH-05) 를 grid-cols-5 로.

import Link from 'next/link';

interface VesselCell {
  id: string;
  href: string;
  name: ReadonlyArray<string>; // 두 줄 분리
  metric: string;
  unit: string;
  tag: string;
}

const CELLS: ReadonlyArray<VesselCell> = [
  {
    id: 'CH-01',
    href: '/posts?channel=equity-reports',
    name: ['EQUITY', 'REPORTS'],
    metric: '9',
    unit: 'posts',
    tag: 'BIWEEKLY · CUFA',
  },
  {
    id: 'CH-02',
    href: '/posts?channel=etf-products',
    name: ['ETF &', 'PRODUCTS'],
    metric: '∞',
    unit: 'queue',
    tag: 'BIWEEKLY · WM',
  },
  {
    id: 'CH-03',
    href: '/posts?channel=devlog',
    name: ['DEVLOG', '· KDA'],
    metric: '16',
    unit: 'weeks',
    tag: 'WEEKLY · MISSION',
  },
  {
    id: 'CH-04',
    href: '/posts?channel=trade-journal',
    name: ['TRADE', 'JOURNAL'],
    metric: '5',
    unit: 'trades',
    tag: 'WEEKLY · POST-MORTEM',
  },
  {
    id: 'CH-05',
    href: '/posts?channel=field-notes',
    name: ['FIELD', 'NOTES'],
    metric: '254',
    unit: '곳',
    tag: 'BIWEEKLY · INDUSTRIAL',
  },
];

export function SectionVessel() {
  return (
    <section id="vessel" className="section">
      <div className="section-head">
        <div>
          <p className="section-overline">
            <span className="text-hal">§ 02</span>
            <span>THE VESSEL · LIFE-SUPPORT MODULES</span>
          </p>
          <h2 className="section-title">
            Six <em className="not-italic font-bold">channels</em> in the
            corridor.
          </h2>
        </div>
        <div className="section-meta">
          <strong className="font-normal text-starlight">WEEKLY</strong> · 매주
          발행
        </div>
      </div>

      <div className="relative overflow-hidden border border-starlight/[0.06] py-20">
        {/* one-point perspective hint — 가벼운 그리드 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(245,245,245,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,245,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse 50% 70% at 50% 50%, black 0%, transparent 60%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 50% 70% at 50% 50%, black 0%, transparent 60%)',
          }}
        />
        <div
          className="relative z-[2] mx-auto grid max-w-[1200px] gap-px max-lg:grid-cols-2 max-sm:grid-cols-1"
          style={{
            background: 'rgba(245,245,245,0.06)',
            gridTemplateColumns: 'repeat(5, 1fr)',
          }}
        >
          {CELLS.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="group block bg-void px-5 py-8 transition-all duration-[2000ms] hover:-translate-y-1 hover:bg-orbital/[0.04]"
            >
              <div
                className="mb-2 font-mono text-[9px] text-hal"
                style={{ letterSpacing: '0.25em' }}
              >
                {c.id}
              </div>
              <div
                className="mb-4 min-h-[38px] font-mono text-[13px] text-starlight"
                style={{ letterSpacing: '0.05em' }}
              >
                {c.name[0]}
                <br />
                {c.name[1]}
              </div>
              <div
                className="mb-1 font-display text-[28px] font-normal leading-none text-starlight"
                style={{ letterSpacing: '0.05em' }}
              >
                {c.metric}
                <span className="ml-0.5 font-mono text-[12px] text-grey">
                  {c.unit}
                </span>
              </div>
              <div
                className="border-t border-starlight/[0.06] pt-3 font-mono text-[9px] uppercase text-grey-deep"
                style={{ letterSpacing: '0.2em' }}
              >
                {c.tag}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionVessel;
