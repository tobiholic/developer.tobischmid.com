import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        flowRight: 'flowRight 20s linear infinite',
        flowLeft: 'flowLeft 20s linear infinite',
      },
      keyframes: {
        flowRight: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(10%)' },
          '50%': { transform: 'translateX(0%)' },
          '70%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        flowLeft: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(0%)' },
          '70%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
