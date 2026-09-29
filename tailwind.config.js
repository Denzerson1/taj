/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D6A94F',
          light: '#E9C987',
          dark: '#A9812F',
        },
        ink: '#0B0706',
        espresso: '#1A0E0B',
        cocoa: '#2A170F',
        cream: '#F4ECE1',
      },
      fontFamily: {
        sans: ['Mukta', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'ken-burns': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 7s ease-out forwards',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        bob: 'bob 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
