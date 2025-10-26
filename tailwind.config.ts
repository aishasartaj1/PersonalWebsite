import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', ...fontFamily.serif],
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        brown: {
          100: '#EADBC8',
          200: '#E6C8A1',
          300: '#C6A48B',
          400: '#B08B73',
          600: '#8B6F5E',
        },
        blush: {
          300: '#F4C2A0',
          400: '#E8B4A2',
        },
        terra: {
          500: '#D07C5A',
        },
        border: 'var(--border)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.06)',
        lift: '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;


