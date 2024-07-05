/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      b_project_card: "930px"

    },
    extend: {
      // colors: { // PLUM

      //   "app-bg": "#FDFDFE", // 1. App background
      //   "d-app-bg": "#181118",

      //   "subtle-bg": "#F7F9FF", // 2. Subtle background
      //   "d-subtle-bg": "#201320",

      //   "ui-bg": "#EDF2FE", // 3. UI element background
      //   "d-ui-bg": "#351A35",

      //   "hover-ui-bg": "#E1E9FF", // 4. Hovered UI element background
      //   "d-hover-ui-bg": "#451D47",

      //   "active-ui-bg": "#D2DEFF", // 5. Active / Selected UI element background
      //   "d-active-ui-bg": "#512454",

      //   "subtle-border": "#C1D0FF", // 6. Subtle borders and separators
      //   "d-subtle-border": "#5E3061",

      //   "ui-border": "#ABBDF9", // 7. UI element border and focus rings
      //   "d-ui-border": "#734079",

      //   "hover-ui-border": "#8DA4EF", // 8. Hovered UI element border
      //   "d-hover-ui-border": "#92549C",

      //   // "solid-bg": "#AB4ABA", // 9. Solid backgrounds
      //   // "d-solid-bg": "#AB4ABA",
      //   "accent-color": "#3E63DD",
      // "d-accent-color": "#AB4ABA",

      //   // "hover-solid-bg": "#A144AF", // 10. Hovered solid backgrounds
      //   // "d-hover-solid-bg": "#B658C4",
      //   "hover-accent-color": "#2348C3", // 10. Hovered solid backgrounds
      //   "d-hover-accent-color": "#943DA0",

      //   "low-contrast-text": "#3A5BC7", // 11. Low-contrast text
      //   "d-low-contrast-text": "#E796F3",

      //   "high-contrast-text": "#1F2D5C", // 12. High-contrast text
      //   "d-high-contrast-text": "#F4D4F4",
      // }

      // colors: {
      //   // PLUM
      //   "app-bg": "#E0F7FA", // 1. App background
      //   "d-app-bg": "#0B032D",

      //   "subtle-bg": "#B2EBF2", // 2. Subtle background
      //   "d-subtle-bg": "#1E0F45",

      //   "ui-bg": "#F296FF", // 3. UI element background
      //   "d-ui-bg": "#2B155D",

      //   "hover-ui-bg": "#F296FF", // 4. Hovered UI element background
      //   "d-hover-ui-bg": "#371B6D",

      //   "active-ui-bg": "#66B5E0", // 5. Active / Selected UI element background
      //   "d-active-ui-bg": "#441F7D",

      //   "subtle-border": "#4DA6D9", // 6. Subtle borders and separators
      //   "d-subtle-border": "#532E91",

      //   "ui-border": "#3398D1", // 7. UI element border and focus rings
      //   "d-ui-border": "#6A3DB1",

      //   "hover-ui-border": "#1A89CA", // 8. Hovered UI element border
      //   "d-hover-ui-border": "#8546D4",

      //   "accent-color": "#FF5F7E", // 9. Solid backgrounds
      //   "d-accent-color": "#FF5F7E",

      //   "hover-accent-color": "#FF2D5A", // 10. Hovered solid backgrounds
      //   "d-hover-accent-color": "#FF4D7A",

      //   "low-contrast-text": "#953EA3", // 11. Low-contrast text
      //   "d-low-contrast-text": "#FFD1DC",

      //   "high-contrast-text": "#53195D", // 12. High-contrast text
      //   "d-high-contrast-text": "#FFE4F1",
      // }



      // "app-bg": "#", // 1. App background

      // "subtle-bg": "#", // 2. Subtle background
      // "ui-bg": "#", // 3. UI element background
      // "hover-ui-bg": "#", // 4. Hovered UI element background
      // "active-ui-bg": "#", // 5. Active / Selected UI element background
      // "subtle-border": "#", // 6. Subtle borders and separators
      // "ui-border": "#", // 7. UI element border and focus rings
      // "hover-ui-border": "#", // 8. Hovered UI element border

      // "accent-color": "#", // 9. Solid backgrounds
      // "hover-accent-color": "#", // 10. Hovered solid backgrounds
      // "low-contrast-text": "#", // 11. Low-contrast text
      // "high-contrast-text": "#", // 12. High-contrast text




      colors: {
        // PLUM
        // "app-bg": "#FFFAF1", // 1. App background (crème léger)
        // "subtle-bg": "#FFE0B3", // 2. Subtle background (abricot doux)
        // "ui-bg": "#FFD1A3", // 3. UI element background (pêche pâle)
        // "hover-ui-bg": "#FFC38B", // 4. Hovered UI element background (orange clair)
        // "active-ui-bg": "#FFB074", // 5. Active / Selected UI element background (orange pastel)
        // "subtle-border": "#FFAB67", // 6. Subtle borders and separators (orange léger)
        // "ui-border": "#FF9854", // 7. UI element border and focus rings (orange doux)
        // "hover-ui-border": "#FF863E", // 8. Hovered UI element border (orange vif)
        // "accent-color": "#FF704D", // 9. Solid backgrounds (corail)
        // "hover-accent-color": "#FF5A36", // 10. Hovered solid backgrounds (rouge orangé)
        // "low-contrast-text": "#A65C35", // 11. Low-contrast text (brun clair)
        // "high-contrast-text": "#5A2B1F", // 12. High-contrast text (brun foncé)






        // "app-bg": "#FDFDFE", // 1. App background
        // "subtle-bg": "#F7F9FF", // 2. Subtle background
        // "ui-bg": "#EDF2FE", // 3. UI element background
        // "hover-ui-bg": "#E1E9FF", // 4. Hovered UI element background
        // "active-ui-bg": "#D2DEFF", // 5. Active / Selected UI element background
        // "subtle-border": "#C1D0FF", // 6. Subtle borders and separators
        // "ui-border": "#ABBDF9", // 7. UI element border and focus rings
        // "hover-ui-border": "#8DA4EF", // 8. Hovered UI element border
        // "accent-color": "#3E63DD",
        // "hover-accent-color": "#2348C3", // 10. Hovered solid backgrounds
        // "low-contrast-text": "#3A5BC7", // 11. Low-contrast text
        // "high-contrast-text": "#1F2D5C", // 12. High-contrast text




        // Cool background
        // #FFD4CE | #FEECFF

      "app-bg": "#FEECFF", // 1. App background
      "subtle-bg": "#FEF2FF", // 2. Subtle background
      "ui-bg": "#FDEAFF", // 3. UI element background
      "hover-ui-bg": "#F8DAFB", // 4. Hovered UI element background
      "active-ui-bg": "#FCDEFF", // 5. Active / Selected UI element background
      "subtle-border": "#FBC7FF", // 6. Subtle borders and separators
      "ui-border": "#F788FF", // 7. UI element border and focus ring
      "hover-ui-border": "#F792FF", // 8. Hovered UI element border
      "accent-color": "#EC64F4", // 9. Solid backgrounds
      "hover-accent-color": "#DC40E5", // 10. Hovered solid backgrounds
      "low-contrast-text": "#83008A", // 11. Low-contrast text
      "high-contrast-text": "#5B0060", // 12. High-contrast text


        // Dark theme colors
        "d-app-bg": "#0B032D",
        "d-subtle-bg": "#1E0F45",
        "d-ui-bg": "#2B155D",
        "d-hover-ui-bg": "#371B6D",
        "d-active-ui-bg": "#441F7D",
        "d-subtle-border": "#532E91",
        "d-ui-border": "#6A3DB1",
        "d-hover-ui-border": "#8546D4",
        "d-accent-color": "#FF5F7E",
        "d-hover-accent-color": "#FF4D7A",
        "d-low-contrast-text": "#FFD1DC",
        "d-high-contrast-text": "#FFE4F1"
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

