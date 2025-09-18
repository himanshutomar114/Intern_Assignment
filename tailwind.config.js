/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ['"SF Pro Rounded"', 'SF Pro Display', 'system-ui', 'sans-serif'],
        sacramento: ['"Sacramento"', 'cursive'],
      },
    },
  },
  plugins: [],
};
