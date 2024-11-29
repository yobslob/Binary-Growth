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
        cardPurple: 'rgba(155, 60, 244, 0.1)',
        statePurple: '#b473ed',
      },
      zIndex: {
        60: '60',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-110px)' },
          '100%': { opacity: '1', transform: 'translateY(-80px)' },
        },
        popIn: {
          '0%': { transform: 'translateY(0%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        popHard: {
          '0%': { transform: 'translateY(70%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 1.2s ease-in-out forwards',
        popIn: 'popIn 0.3s ease-out',
        popHard: 'popHard 0.7s ease-out',
      },
      opacity: {
        '40': '0.4', // Add a custom opacity value for 50%
      },
      backgroundImage: {
        customGradient: 'linear-gradient(45deg, #130413, #8e43a7, #131113)',
      }
    },
  },
  plugins: [],
};
