// HERO — slow approach. 4초/8초/6초/5초 stagger fade.
// 정적 렌더 우선. AirlockCTA 만 client.

import AirlockCTA from '@/components/AirlockCTA';

export function Hero() {
  return (
    <section
      id="top"
      className="hero relative grid items-center justify-items-start"
      style={{
        minHeight: '100vh',
        paddingTop: 'var(--pad-section)',
        paddingBottom: 'var(--pad-section)',
      }}
    >
      <p
        className="mb-8 font-mono text-[11px] uppercase text-grey opacity-0 [animation:glacial-fade_4s_cubic-bezier(.6,0,.4,1)_1s_forwards]"
        style={{ letterSpacing: '0.4em' }}
      >
        <span className="text-hal">●</span>{' '}
        <span>NODE / 2026.05.07 → 2028.06</span>
      </p>

      <h1
        className="mb-8 max-w-[18ch] font-display text-starlight uppercase opacity-0 [animation:glacial-fade_8s_cubic-bezier(.6,0,.4,1)_1.5s_forwards]"
        style={{
          fontWeight: 400,
          fontSize: 'clamp(40px, 7vw, 96px)',
          letterSpacing: '0.18em',
          lineHeight: 1.1,
        }}
      >
        <span className="font-normal opacity-70">An odyssey of</span>
        <br />
        Financial Data,
        <br />
        Research Automation,
        <br />
        <em className="not-italic font-bold text-starlight">
          and the human in between.
        </em>
      </h1>

      <p
        className="mb-14 max-w-[52ch] font-sans text-[14px] leading-[1.7] text-grey opacity-0 [animation:glacial-fade_6s_cubic-bezier(.6,0,.4,1)_4s_forwards]"
      >
        충북대 경영 24학번 이찬희가 짓는 단일 채널. 산단 254곳 답사, 24만자
        단독 저서, MCP 398도구, KDA 568h. 매크로 사이클의 전환점에서 비대칭
        기회를 찾고, 데이터·AI로 자동화한다.
      </p>

      <AirlockCTA href="#destinations" />
    </section>
  );
}

export default Hero;
