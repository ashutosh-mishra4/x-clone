/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#5b677a",
        twitterBlue: "rgb(29, 155, 240)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        tiny: "0.75rem",
      },
    },
  },
  plugins: [],
};
