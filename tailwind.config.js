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
      },

    },
  },
  plugins: [],
};
