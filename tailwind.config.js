/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        VeryDarkBlue: "hsl(212, 21%, 14%)",
        DarkGrayishBlue: "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
