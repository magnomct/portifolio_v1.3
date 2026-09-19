/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A1420',
        panel: '#101E2E',
        'panel-2': '#0D1826',
        line: '#1E3348',
        'line-soft': '#16293B',
        text: '#E8EEF2',
        'text-muted': '#7C93A8',
        'text-dim': '#4E6479',
        teal: '#4FD1C5',
        'teal-dim': '#2B5C57',
        amber: '#F5A623',
        'amber-dim': '#6B4A16',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      fontSize: {
        'hero-name': ['58px', { lineHeight: '1.06', letterSpacing: '-0.015em', fontWeight: '700' }],
        'hero-name-mobile': ['34px', { lineHeight: '1.06', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h1': ['54px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1-mobile': ['34px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.18', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h2-mobile': ['23px', { lineHeight: '1.18', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.65' }],
        'lede': ['19px', { lineHeight: '1.55' }],
        'kicker': ['13px', { lineHeight: '1', letterSpacing: '0.02em' }],
        'panel-title': ['12px', { lineHeight: '1', letterSpacing: '0.02em' }],
        'panel-body': ['14.5px', { lineHeight: '1.55' }],
        'stat-num': ['32px', { lineHeight: '1', fontWeight: '700' }],
        'stat-label': ['13px', { lineHeight: '1' }],
        'hero-stat-num': ['28px', { lineHeight: '1', fontWeight: '700' }],
        'hero-stat-label': ['12.5px', { lineHeight: '1' }],
        'project-step-num': ['11px', { lineHeight: '1' }],
        'project-step-title': ['14.5px', { lineHeight: '1', fontWeight: '600' }],
        'project-step-desc': ['12.5px', { lineHeight: '1.5' }],
        'timeline-count': ['13px', { lineHeight: '1' }],
        'timeline-year': ['12px', { lineHeight: '1' }],
        'nav-count': ['13px', { lineHeight: '1' }],
        'nav-btn': ['13px', { lineHeight: '1' }],
        'cta-label': ['11px', { lineHeight: '1' }],
        'cta-value': ['15px', { lineHeight: '1' }],
      },
      spacing: {
        'slide-padding': '56px 72px 40px',
        'slide-padding-mobile': '32px 24px 90px',
      },
      boxShadow: {
        'teal-glow': '0 0 6px #4FD1C5',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(var(--line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--line-soft) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '48px 48px',
      },
    },
  },
  plugins: [],
}