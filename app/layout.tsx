import type { Metadata, Viewport } from 'next';

import './globals.css';
import HalMark from '@/components/HalMark';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pollmap.dev',
  ),
  title: {
    default: 'POLLMAP // ODYSSEY OF FINANCIAL DATA',
    template: '%s · POLLMAP',
  },
  description:
    'KDA PB 브리핑 + 블로그 + 포트폴리오 통합 채널. 충북대 경영 24학번 이찬희가 짓는 단일 채널.',
  authors: [{ name: 'pollmap', url: 'https://github.com/pollmap' }],
  openGraph: {
    title: 'POLLMAP // ODYSSEY',
    description: '가치투자로 분석하고, 매크로·모멘텀으로 집행한다.',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        {/* HUD TOP — 모든 페이지 공통 */}
        <header className="hud-top">
          <div className="flex items-center gap-3">
            <HalMark />
            <span>
              <strong className="font-medium tracking-[0.2em] text-starlight">
                POLLMAP
              </strong>{' '}
              // ODYSSEY
            </span>
          </div>
          <nav className="flex gap-7 max-md:hidden">
            <a className="transition-colors duration-1000 hover:text-starlight" href="/#destinations">
              Destinations
            </a>
            <a className="transition-colors duration-1000 hover:text-starlight" href="/#vessel">
              The Vessel
            </a>
            <a className="transition-colors duration-1000 hover:text-starlight" href="/#training">
              Training
            </a>
            <a className="transition-colors duration-1000 hover:text-starlight" href="/#mission">
              Mission Control
            </a>
            <a className="transition-colors duration-1000 hover:text-starlight" href="https://github.com/pollmap" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
          <div className="text-right text-grey-deep">
            T-MINUS · <span className="text-grey">2028.06.15</span> · GRADUATION
          </div>
        </header>

        {children}

        {/* HUD BOT */}
        <div className="hud-bot">
          <span>POLLMAP // ODYSSEY · 2026—2028</span>
          <span className="max-md:hidden">
            BUILT IN VACUUM · INSPIRED BY 2001
          </span>
          <span>COMMERCIAL ORBITAL DEPARTURES · 2028.06</span>
        </div>
      </body>
    </html>
  );
}
