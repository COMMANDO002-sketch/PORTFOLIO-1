/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#001f3f', // navy blue
          600: '#001738',
          700: '#00102a',
        },
        secondary: '#5c5c5c',
        bg: '#0a0a0a',
      },
    },
  },
  plugins: [],
};

