/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './views/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F3E32F',
          hover: '#E2D120',
          text: '#857A05',
        },
        ink: '#0B1220',
        paper: '#F6F2E9',
      },
      fontFamily: {
        sans: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif'],
      },
    },
  },
  plugins: [],
};
