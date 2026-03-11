/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        italo: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc8c8',
          300: '#ff9c9c',
          400: '#ff5e5e',
          500: '#f13b3b',
          600: '#d82828',
          700: '#b11f1f',
          800: '#8c1b1b',
          900: '#741a1a',
        },
      },
      boxShadow: {
        card: '0 6px 16px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl2: '16px',
      },
    },
  },
  plugins: [],
}
