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

        "app-bg": "#FEFCFF", // 1. App background
        "d-app-bg": "#181118",

        "subtle-bg": "#FDF7FD", // 2. Subtle background
        "d-subtle-bg": "#201320",

        "ui-bg": "#FBEBFB", // 3. UI element background
        "d-ui-bg": "#351A35",

        "hover-ui-bg": "#F7DEF8", // 4. Hovered UI element background
        "d-hover-ui-bg": "#451D47",

        "active-ui-bg": "#F2D1F3", // 5. Active / Selected UI element background
        "d-active-ui-bg": "#512454",

        "subtle-border": "#E9C2EC", // 6. Subtle borders and separators
        "d-subtle-border": "#5E3061",

        "ui-border": "#DEADE3", // 7. UI element border and focus rings
        "d-ui-border": "#734079",

        "hover-ui-border": "#CF91D8", // 8. Hovered UI element border
        "d-hover-ui-border": "#92549C",

        // "solid-bg": "#AB4ABA", // 9. Solid backgrounds
        // "d-solid-bg": "#AB4ABA",
        "accent-color": "#AB4ABA",
        "d-accent-color": "#AB4ABA",

        // "hover-solid-bg": "#A144AF", // 10. Hovered solid backgrounds
        // "d-hover-solid-bg": "#B658C4",
        "hover-accent-color": "#A144AF", // 10. Hovered solid backgrounds
        "d-hover-accent-color": "#B658C4",

        "low-contrast-text": "#953EA3", // 11. Low-contrast text
        "d-low-contrast-text": "#E796F3",

        "high-contrast-text": "#53195D", // 12. High-contrast text
        "d-high-contrast-text": "#F4D4F4",
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
  variants: {
    extend: {
      backgroundColor: ['dark'],
    },
  },
  plugins: [],
}

