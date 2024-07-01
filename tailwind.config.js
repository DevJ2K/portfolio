/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      // colors: { // PLUM

      //   "app-bg": "#FEFCFF", // 1. App background
      //   "d-app-bg": "#181118",

      //   "subtle-bg": "#FDF7FD", // 2. Subtle background
      //   "d-subtle-bg": "#201320",

      //   "ui-bg": "#FBEBFB", // 3. UI element background
      //   "d-ui-bg": "#351A35",

      //   "hover-ui-bg": "#F7DEF8", // 4. Hovered UI element background
      //   "d-hover-ui-bg": "#451D47",

      //   "active-ui-bg": "#F2D1F3", // 5. Active / Selected UI element background
      //   "d-active-ui-bg": "#512454",

      //   "subtle-border": "#E9C2EC", // 6. Subtle borders and separators
      //   "d-subtle-border": "#5E3061",

      //   "ui-border": "#DEADE3", // 7. UI element border and focus rings
      //   "d-ui-border": "#734079",

      //   "hover-ui-border": "#CF91D8", // 8. Hovered UI element border
      //   "d-hover-ui-border": "#92549C",

      //   // "solid-bg": "#AB4ABA", // 9. Solid backgrounds
      //   // "d-solid-bg": "#AB4ABA",
      //   "accent-color": "#AB4ABA",
      //   "d-accent-color": "#AB4ABA",

      //   // "hover-solid-bg": "#A144AF", // 10. Hovered solid backgrounds
      //   // "d-hover-solid-bg": "#B658C4",
      //   "hover-accent-color": "#A144AF", // 10. Hovered solid backgrounds
      //   "d-hover-accent-color": "#B658C4",

      //   "low-contrast-text": "#953EA3", // 11. Low-contrast text
      //   "d-low-contrast-text": "#E796F3",

      //   "high-contrast-text": "#53195D", // 12. High-contrast text
      //   "d-high-contrast-text": "#F4D4F4",
      // }



      colors: { // PLUM

        "app-bg": "#FDFDFE", // 1. App background
        "d-app-bg": "#181118",

        "subtle-bg": "#F7F9FF", // 2. Subtle background
        "d-subtle-bg": "#201320",

        "ui-bg": "#EDF2FE", // 3. UI element background
        "d-ui-bg": "#351A35",

        "hover-ui-bg": "#E1E9FF", // 4. Hovered UI element background
        "d-hover-ui-bg": "#451D47",

        "active-ui-bg": "#D2DEFF", // 5. Active / Selected UI element background
        "d-active-ui-bg": "#512454",

        "subtle-border": "#C1D0FF", // 6. Subtle borders and separators
        "d-subtle-border": "#5E3061",

        "ui-border": "#ABBDF9", // 7. UI element border and focus rings
        "d-ui-border": "#734079",

        "hover-ui-border": "#8DA4EF", // 8. Hovered UI element border
        "d-hover-ui-border": "#92549C",

        // "solid-bg": "#AB4ABA", // 9. Solid backgrounds
        // "d-solid-bg": "#AB4ABA",
        "accent-color": "#3E63DD",
        "d-accent-color": "#AB4ABA",

        // "hover-solid-bg": "#A144AF", // 10. Hovered solid backgrounds
        // "d-hover-solid-bg": "#B658C4",
        "hover-accent-color": "#2348C3", // 10. Hovered solid backgrounds
        "d-hover-accent-color": "#943DA0",

        "low-contrast-text": "#3A5BC7", // 11. Low-contrast text
        "d-low-contrast-text": "#E796F3",

        "high-contrast-text": "#1F2D5C", // 12. High-contrast text
        "d-high-contrast-text": "#F4D4F4",
      }


      // colors: {
      //   // PLUM
      //   "app-bg": "#2A1E5C", // 1. App background
      //   "d-app-bg": "#0B032D",

      //   "subtle-bg": "#38227A", // 2. Subtle background
      //   "d-subtle-bg": "#1E0F45",

      //   "ui-bg": "#4C2C9C", // 3. UI element background
      //   "d-ui-bg": "#2B155D",

      //   "hover-ui-bg": "#5733AA", // 4. Hovered UI element background
      //   "d-hover-ui-bg": "#371B6D",

      //   "active-ui-bg": "#6638B8", // 5. Active / Selected UI element background
      //   "d-active-ui-bg": "#441F7D",

      //   "subtle-border": "#7851CC", // 6. Subtle borders and separators
      //   "d-subtle-border": "#532E91",

      //   "ui-border": "#9069E0", // 7. UI element border and focus rings
      //   "d-ui-border": "#6A3DB1",

      //   "hover-ui-border": "#A580F4", // 8. Hovered UI element border
      //   "d-hover-ui-border": "#8546D4",

      //   "accent-color": "#FF5F7E", // 9. Solid backgrounds
      //   "d-accent-color": "#FF5F7E",

      //   "hover-accent-color": "#FF2D5A", // 10. Hovered solid backgrounds
      //   "d-hover-accent-color": "#FF4D7A",

      //   "low-contrast-text": "#FFB6C1", // 11. Low-contrast text
      //   "d-low-contrast-text": "#FFD1DC",

      //   "high-contrast-text": "#F4E4F4", // 12. High-contrast text
      //   "d-high-contrast-text": "#FFE4F1",
      // }

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

