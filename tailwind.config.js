/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        openCart: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-0%)' },
        },
        initPage: {
          '0%': { opacity: '0' },
          '100%': {  opacity: '1' },
        }
      },
      animation: {
        openCart: 'openCart 0.4s ease-in-out',
        initPage: 'initPage 1s ease-in-out',
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}