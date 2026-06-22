/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f6f4',
          100: '#e9e8e3',
          200: '#d3d1c8',
          300: '#b3b0a3',
          400: '#8f8b7b',
          500: '#73705f',
          600: '#5c5a4d',
          700: '#47453c',
          800: '#2e2d28',
          900: '#1a1916',
          950: '#0d0c0a',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5ecd0',
          200: '#ebd89e',
          300: '#e0c266',
          400: '#d9a93f',
          500: '#c68f2a',
          600: '#a97020',
          700: '#85521d',
          800: '#6e421e',
          900: '#5c381d',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#f7efe0',
          200: '#efddbd',
          300: '#e4c591',
          400: '#dca96b',
          500: '#d18f4f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-down': 'fadeDown 0.8s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
