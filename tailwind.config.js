/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: { // PLUM
        "bg-1": "#FEFCFF",
        "d-bg-1": "#181118",

        "bg-2": "#FDF7FD",
        "d-bg-2": "#201320",

        "primary": "#FDD1EA",
        "d-primary": "#FDD1EA",

        "border": "#FFF",
        "d-border": "#FFF",

        "border-hover": "#FFF",
        "d-border-hover": "#FFF",

        "accent-color": "#B658C4",
        "d-accent-color": "#B658C4"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      padding: "2rem",
      center: true,
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1100px', // 48rem
        'xl': '1100px'
      }
    }
  },
  plugins: [],
}

