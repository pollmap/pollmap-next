import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'POLLMAP // ODYSSEY — pollmap (이찬희) 의 단일 채널 소개.',
};

export default function AboutPage() {
  return (
    <main className="frame pt-32">
      <article className="mx-auto max-w-[68ch]">
        <p
          className="mb-4 font-mono text-[10px] uppercase text-hal"
          style={{ letterSpacing: '0.25em' }}
        >
          /about
        </p>
        <h1
          className="mb-8 font-display text-[44px] font-medium uppercase leading-[1.15] text-starlight"
          style={{ letterSpacing: '0.06em' }}
        >
          The <em className="not-italic font-bold">human</em> in between.
        </h1>

        <p className="mb-5 text-[15px] leading-[1.85] text-starlight-dim">
          <strong className="font-medium text-starlight">
            이찬희 (Lee ChanHee, 燦熙)
          </strong>{' '}
          — 충북대학교 경영학부 24학번. 한양대 ERICA 프랑스학과 자퇴 → 군 복무
          → 독학 재수 → 충북대. CUFA 가치투자학회 2대 회장(사임), KDA
          키움디지털아카데미 4기 재학 (2026.05.07 ~ 08.21, 568h).
        </p>

        <p className="mb-5 text-[15px] leading-[1.85] text-starlight-dim">
          매크로 사이클 위에서 턴어라운드를 직관으로 포착하고,{' '}
          <em className="not-italic text-starlight">
            Probe → Pyramid → Tight Stop
          </em>
          으로 비대칭 베팅을 운용한다. 가치투자로 분석하고, 매크로·모멘텀으로
          집행하고, 데이터·AI로 자동화한다.
        </p>

        <h2
          className="mb-4 mt-14 font-display text-[22px] uppercase text-starlight"
          style={{ letterSpacing: '0.08em' }}
        >
          Track record
        </h2>
        <ul className="mb-8 list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-grey">
          <li>산단 254곳 답사 (2023.12 송도 →)</li>
          <li>Equity Research Book — 240K자 / 17 파일 / CC BY-NC-ND</li>
          <li>Nexus Finance MCP — 398 도구 / 64 서버</li>
          <li>CUFA Equity Report — 9편 (HD HHI · KSS · JYP 외)</li>
          <li>Luxon Terminal — 989 tests / walk-forward backtest</li>
          <li>Career-Ops KR — 27 채널 단일 CLI 스캔</li>
        </ul>

        <h2
          className="mb-4 mt-14 font-display text-[22px] uppercase text-starlight"
          style={{ letterSpacing: '0.08em' }}
        >
          Reach out
        </h2>
        <p className="text-[14px] leading-[1.7] text-grey">
          GitHub: <code className="text-orbital-bright">@pollmap</code>. 그
          외에는 LinkedIn 또는 이메일로. 채용 / 협업 제안은{' '}
          <em className="not-italic text-starlight">briefly</em> 부탁드립니다.
        </p>
      </article>
    </main>
  );
}
