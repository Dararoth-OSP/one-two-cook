/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      gridTemplateColumns: {
        footer: "4fr 1fr 2fr 2fr",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
