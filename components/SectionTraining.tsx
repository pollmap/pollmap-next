// §03 — KDA 16주 3 phase 카드. one-point perspective ::before 효과 그대로.

interface Phase {
  num: string;
  title: ReadonlyArray<string>;
  desc: string;
  status: 'active' | 'queued';
}

const PHASES: ReadonlyArray<Phase> = [
  {
    num: 'PHASE 01 / WEEK 01—04',
    title: ['Centrifuge', '· Data Pipeline'],
    desc: 'ECOS · FRED · DART · KOFIA. Four sources. One ETL. The first eight weeks the spacecraft never leaves the launch pad — only the data flows.',
    status: 'active',
  },
  {
    num: 'PHASE 02 / WEEK 05—08',
    title: ['Zero-G', '· Match Engine'],
    desc: 'Customer profile × market state × product universe. The match function. The PDF generator. Streamlit prototype. First demo with five personas.',
    status: 'queued',
  },
  {
    num: 'PHASE 03 / WEEK 09—16',
    title: ['Pressure-Suit', '· Next.js Deploy'],
    desc: 'LLM 3-stage prompt. WeasyPrint PDF. Vercel + Render. Final presentation. ADsP (8/8) · Investment Asset Operations Officer (8/23). Graduation.',
    status: 'queued',
  },
];

export function SectionTraining() {
  return (
    <section id="training" className="section">
      <div className="section-head">
        <div>
          <p className="section-overline">
            <span className="text-hal">§ 03</span>
            <span>TRAINING PROGRAM · KDA 4TH COHORT</span>
          </p>
          <h2 className="section-title">
            Sixteen <em className="not-italic font-bold">weeks</em> of
            preparation.
          </h2>
        </div>
        <div className="section-meta">
          <strong className="font-normal text-starlight">568h</strong> ·
          2026.05.07 → 08.21
        </div>
      </div>

      <div
        className="grid gap-px border border-starlight/[0.06] max-md:grid-cols-1"
        style={{
          background: 'rgba(245,245,245,0.06)',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {PHASES.map((phase) => (
          <article
            key={phase.num}
            className="relative min-h-[280px] overflow-hidden bg-void px-8 pb-10 pt-14 transition-colors duration-[3000ms] hover:bg-starlight/[0.02]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top right, transparent calc(50% - 0.5px), rgba(245,245,245,0.06) 50%, transparent calc(50% + 0.5px)), linear-gradient(to top left, transparent calc(50% - 0.5px), rgba(245,245,245,0.06) 50%, transparent calc(50% + 0.5px))',
                maskImage:
                  'radial-gradient(circle at 50% 100%, black 0%, transparent 60%)',
                WebkitMaskImage:
                  'radial-gradient(circle at 50% 100%, black 0%, transparent 60%)',
              }}
            />
            <div
              className="mb-6 font-mono text-[10px] text-hal"
              style={{ letterSpacing: '0.3em' }}
            >
              {phase.num}
            </div>
            <h3
              className="mb-4 font-display text-[20px] font-medium uppercase leading-tight"
              style={{ letterSpacing: '0.08em' }}
            >
              {phase.title[0]}
              <br />
              {phase.title[1]}
            </h3>
            <p className="max-w-[36ch] text-[13px] leading-[1.7] text-grey">
              {phase.desc}
            </p>
            <div
              className="absolute bottom-6 right-6 font-mono text-[10px] uppercase text-grey-deep"
              style={{ letterSpacing: '0.2em' }}
            >
              {phase.status === 'active' ? (
                <>
                  <span className="text-hal">●</span> ACTIVE
                </>
              ) : (
                'QUEUED'
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SectionTraining;
