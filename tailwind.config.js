/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#07000f', // or any other color code you prefer
        custPurple: '#862C92',
        numbPurple: '#81278d',
        headPurple: '#110025',
      },
      keyframes: {
        fadeBackground: {
          '0%': { background: 'linear-gradient(to bottom, transparent, transparent)' },
          '25%': { background: 'linear-gradient(to bottom, rgba(17, 0, 37, 0.25), transparent)' },
          '50%': { background: 'linear-gradient(to bottom, rgba(17, 0, 37, 0.5), transparent)' },
          '75%': { background: 'linear-gradient(to bottom, rgba(17, 0, 37, 0.75), transparent)' },
          '100%': { background: 'linear-gradient(to bottom, #110025, transparent)' },
        },
      },
      animation: {
        fadeBackground: 'fadeBackground 1s ease-in-out',
      },

    },
  },
  plugins: [],
};
