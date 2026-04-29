// §04 — Operator dashboard. 좌: 정체성+카운트다운, 우: telemetry 행렬.

interface TelRow {
  key: string;
  value: string;
  tone?: 'orbital' | 'hal' | 'success' | 'plain';
}

const TEL_ROWS: ReadonlyArray<TelRow> = [
  { key: 'PRIMARY TRACK', value: 'FIN · DATA / AI', tone: 'orbital' },
  { key: 'DOMAIN OVERLAY', value: 'WM · PB · RESEARCH' },
  { key: 'GPA TRAJECTORY', value: '2.91 → 3.30', tone: 'success' },
  { key: 'LICENSES PROGRESS', value: '1 / 5 (SQLD ✓)' },
  { key: 'INTERN PLAN A', value: '26.12 · POLICY-FIN' },
  { key: 'INTERN PLAN D', value: '27.06 · FINTECH-DATA' },
  { key: 'CORE TARGET 27.10', value: '11 COMPANIES' },
  { key: 'DOGE POSITION', value: '39,000 · HOLD', tone: 'hal' },
  { key: 'OXYGEN · MOTIVATION', value: '98% · NOMINAL', tone: 'success' },
];

const TONE_CLASS: Record<NonNullable<TelRow['tone']>, string> = {
  orbital: 'text-orbital-bright',
  hal: 'text-hal',
  success: 'text-success',
  plain: 'text-starlight',
};

const COUNTDOWN: ReadonlyArray<{ num: string; lbl: string }> = [
  { num: '02', lbl: 'YEARS' },
  { num: '04', lbl: 'MONTHS' },
  { num: '12', lbl: 'DAYS' },
  { num: '→', lbl: 'GRAD' },
];

export function SectionMissionControl() {
  return (
    <section id="mission" className="section">
      <div className="section-head">
        <div>
          <p className="section-overline">
            <span className="text-hal">§ 04</span>
            <span>MISSION CONTROL · OPERATOR</span>
          </p>
          <h2 className="section-title">
            From here,{' '}
            <em className="not-italic font-bold">we monitor the trajectory.</em>
          </h2>
        </div>
        <div className="section-meta">
          <strong className="font-normal text-starlight">T-MINUS</strong> ·
          2028.06 · GRADUATION
        </div>
      </div>

      <div
        className="grid gap-px border border-starlight/[0.06] max-md:grid-cols-1"
        style={{
          background: 'rgba(245,245,245,0.06)',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* 좌: 정체성 */}
        <div className="bg-void px-10 py-12">
          <div
            className="mb-6 font-mono text-[10px] uppercase text-hal"
            style={{ letterSpacing: '0.3em' }}
          >
            ⏵ OPERATOR · IDENTITY
          </div>
          <h3
            className="mb-6 font-display text-[28px] font-medium uppercase leading-tight"
            style={{ letterSpacing: '0.08em' }}
          >
            Discretionary Trend-Following
            <br />
            Macro Trader
            <br />
            with Pyramiding.
          </h3>
          <p className="mb-4 text-[14px] leading-[1.7] text-grey">
            <strong className="font-medium text-starlight">
              이찬희 (Lee ChanHee, 燦熙)
            </strong>{' '}
            · 충북대학교 경영학부 24학번. 한양대 ERICA 프랑스학과 자퇴 → 군 복무
            → 독학 재수 → 충북대. CUFA 가치투자학회 2대 회장(사임), KDA
            키움디지털아카데미 4기 재학.
          </p>
          <p className="mb-4 text-[14px] leading-[1.7] text-grey">
            매크로 사이클 위에서 턴어라운드를 직관으로 포착하고,{' '}
            <strong className="font-medium text-starlight">
              Probe → Pyramid → Tight Stop
            </strong>
            으로 비대칭 베팅을 운용한다.{' '}
            <em className="not-italic text-starlight">
              가치투자로 분석하고, 매크로·모멘텀으로 집행한다.
            </em>
          </p>

          <div
            className="my-6 grid gap-4 border-y border-starlight/[0.06] py-6 max-sm:grid-cols-2"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {COUNTDOWN.map((c) => (
              <div key={c.lbl} className="text-center">
                <div
                  className="font-display text-[32px] font-normal leading-none text-starlight"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {c.num}
                </div>
                <div
                  className="mt-1.5 font-mono text-[9px] uppercase text-grey-deep"
                  style={{ letterSpacing: '0.25em' }}
                >
                  {c.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 우: telemetry */}
        <div className="bg-void px-10 py-12">
          <div
            className="mb-6 font-mono text-[10px] uppercase text-hal"
            style={{ letterSpacing: '0.3em' }}
          >
            ⏵ TELEMETRY · LIVE STATE
          </div>
          <div className="font-mono text-[11px]">
            {TEL_ROWS.map((row, i) => (
              <div
                key={row.key}
                className="grid grid-cols-[1fr_auto] py-2"
                style={
                  i < TEL_ROWS.length - 1
                    ? {
                        borderBottom:
                          '1px dashed rgba(245,245,245,0.06)',
                      }
                    : undefined
                }
              >
                <span
                  className="font-mono text-[10px] uppercase text-grey-deep"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {row.key}
                </span>
                <span className={TONE_CLASS[row.tone ?? 'plain']}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMissionControl;
