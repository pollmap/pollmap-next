// 홈 = Kubrick v2 의 정적 등가물.
// Server Component — "use client" 없이 렌더 (AirlockCTA 만 client island).

import Link from 'next/link';

import Starfield from '@/components/Starfield';
import Station from '@/components/Station';
import Hero from '@/components/Hero';
import SectionDestinations from '@/components/SectionDestinations';
import SectionVessel from '@/components/SectionVessel';
import SectionTraining from '@/components/SectionTraining';
import SectionMissionControl from '@/components/SectionMissionControl';
import DataPoint from '@/components/ui/DataPoint';

export default function HomePage() {
  return (
    <>
      <Starfield />
      <Station />
      <div className="sunline" aria-hidden="true" />

      <main className="frame">
        <Hero />

        {/* COUNT-UP STATS BAR */}
        <div className="my-20 grid grid-cols-4 border border-starlight/[0.06] max-md:grid-cols-2">
          <div className="border-r border-starlight/[0.06] max-md:border-b">
            <DataPoint
              label="FIELD VISITS"
              value="254"
              unit="곳"
              meta="SINCE 2023.12 SONGDO"
            />
          </div>
          <div className="border-starlight/[0.06] max-md:border-b md:border-r">
            <DataPoint
              label="EQUITY RESEARCH BOOK"
              value="240K"
              unit="자"
              meta="17 FILES · CC BY-NC-ND"
            />
          </div>
          <div className="border-r border-starlight/[0.06] max-md:border-r-0">
            <DataPoint
              label="MCP PAYLOAD"
              value="398"
              unit="tools"
              meta="64 SERVERS · NEXUS-FINANCE"
            />
          </div>
          <div>
            <DataPoint
              label="CUFA REPORTS"
              value="9"
              meta="HD HHI · KSS · JYP · 외 6"
            />
          </div>
        </div>

        <SectionDestinations />
        <SectionVessel />
        <SectionTraining />
        <SectionMissionControl />
      </main>

      <footer className="frame border-t border-starlight/[0.06] py-24">
        <div className="mb-14 grid gap-12 max-md:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div
              className="mb-4 font-display text-[14px] uppercase text-starlight"
              style={{ letterSpacing: '0.18em' }}
            >
              POLLMAP // ODYSSEY
            </div>
            <p className="max-w-[36ch] text-[13px] leading-[1.7] text-grey">
              "The silence should feel loud."
              <br />
              <br />
              가치투자로 분석하고, 매크로·모멘텀으로 집행하고, 데이터·AI로
              자동화한다.
            </p>
          </div>
          <FooterCol
            heading="Pages"
            items={[
              ['Destinations', '/#destinations'],
              ['The Vessel', '/#vessel'],
              ['Training', '/#training'],
              ['Mission Control', '/#mission'],
              ['About', '/about'],
            ]}
          />
          <FooterCol
            heading="Channels"
            items={[
              ['Equity', '/posts?channel=equity-reports'],
              ['ETF & Products', '/posts?channel=etf-products'],
              ['Devlog', '/posts?channel=devlog'],
              ['Trade Journal', '/posts?channel=trade-journal'],
              ['Field Notes', '/posts?channel=field-notes'],
            ]}
          />
          <FooterCol
            heading="Network"
            items={[
              ['GitHub ↗', 'https://github.com/pollmap'],
              ['LinkedIn ↗', '#'],
              ['Email ↗', '#'],
              ['Resume.pdf ↗', '#'],
            ]}
          />
        </div>
        <div
          className="flex justify-between border-t border-starlight/[0.06] pt-6 font-mono text-[9px] uppercase text-grey-deep"
          style={{ letterSpacing: '0.2em' }}
        >
          <span>© 2026—2028 POLLMAP</span>
          <span className="max-md:hidden">MIT (code) · CC BY-NC-ND (content)</span>
          <span>BUILT WITH NEXT.JS</span>
        </div>
      </footer>
    </>
  );
}

interface FooterColProps {
  heading: string;
  items: ReadonlyArray<readonly [string, string]>;
}

function FooterCol({ heading, items }: FooterColProps) {
  return (
    <div>
      <h4
        className="mb-4 font-mono text-[10px] uppercase text-grey-deep"
        style={{ letterSpacing: '0.25em' }}
      >
        {heading}
      </h4>
      {items.map(([label, href]) => (
        <Link
          key={label + href}
          href={href}
          className="block py-1.5 text-[13px] text-grey transition-colors duration-1000 hover:text-starlight"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
