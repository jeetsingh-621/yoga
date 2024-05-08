/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        lightwhite: "#FFF4EB",
        "light-orange":"#CA9277"
      },
    },
  },
  plugins: [],
}

