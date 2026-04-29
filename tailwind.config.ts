import type { Config } from 'tailwindcss';

// Kubrick / Odyssey 디자인 토큰 — 14_kubrick_design_v2.html 매핑
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 우주 본체
        void: '#000000',
        'void-deep': '#050507',
        hull: '#0c0d10',
        station: '#1a1c20',
        steel: '#2a2d33',
        plate: '#3a3d44',
        // 빛
        starlight: '#f5f5f5',
        'starlight-dim': '#d8d9dd',
        grey: '#b0bec5',
        'grey-deep': '#5a6168',
        // 액센트
        orbital: '#1565c0',
        'orbital-bright': '#2a7fd9',
        hal: '#ff0000',
        'hal-glow': '#ff000033',
        success: '#5fcf80',
      },
      fontFamily: {
        display: [
          'Orbitron',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'system-ui',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        kubrick: '0.18em',
        wide5: '0.05em',
        wide10: '0.10em',
        wide15: '0.15em',
        wide20: '0.20em',
        wide25: '0.25em',
        wide30: '0.30em',
        wide35: '0.35em',
        wide40: '0.40em',
        wide50: '0.50em',
      },
      maxWidth: {
        frame: '1440px',
        prose18: '18ch',
        prose36: '36ch',
        prose52: '52ch',
      },
      animation: {
        'glacial-fade': 'glacial-fade 8s cubic-bezier(.6,0,.4,1) forwards',
        'hal-pulse': 'hal-pulse 4s ease-in-out infinite',
        'station-rotate': 'station-rotate 360s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        'glacial-fade': {
          from: {
            opacity: '0',
            transform: 'translateY(8px)',
            letterSpacing: '0.5em',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'hal-pulse': {
          '0%, 100%': {
            opacity: '0.4',
            boxShadow: '0 0 4px rgba(255, 0, 0, 0.2)',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 12px #ff0000',
          },
        },
        'station-rotate': {
          to: { transform: 'rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
