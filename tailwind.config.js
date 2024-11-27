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
      zIndex: {
        60: '60',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-110px)' },
          '100%': { opacity: '1', transform: 'translateY(-80px)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 1.2s ease-in-out forwards',
      },

    },
  },
  plugins: [],
};
