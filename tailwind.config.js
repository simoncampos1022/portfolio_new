/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e60000',
          glow: '#ff3c3c',
          dark: '#b80000',
        },
        ink: {
          DEFAULT: '#000000',
          900: '#070707',
          800: '#111111',
          700: '#181818',
          600: '#242424',
        },
        line: '#c9c9c9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 4px #e60000, 0 0 4px #e60000',
        glow: '0 0 6px #e60000, 0 0 18px rgba(230, 0, 0, 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'beam-sway': 'beamSway 9s ease-in-out infinite alternate',
        'glow-breathe': 'glowBreathe 7s ease-in-out infinite',
        'ember-rise': 'emberRise 8s ease-in infinite',
      },
      keyframes: {
        beamSway: {
          '0%': { transform: 'rotate(var(--beam-from, -16deg))', opacity: '0.55' },
          '100%': { transform: 'rotate(var(--beam-to, -4deg))', opacity: '1' },
        },
        glowBreathe: {
          '0%, 100%': { transform: 'scale(0.92)', opacity: '0.7' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        emberRise: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0' },
          '15%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-170px) scale(1)', opacity: '0' },
        },
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
}
