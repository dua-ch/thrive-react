/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans"],
      },
      backgroundImage: {
        progress: "linear-gradient(90.09deg, #12E0F5 0.07%, #246F7A 96.53%)",
      },
    },
  },
  plugins: [],
};
