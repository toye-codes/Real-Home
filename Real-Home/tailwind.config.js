/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'custom': '28%'
      },
      height: {
        'custom': "398px"
      }
    },
  },
  plugins: [],
};

