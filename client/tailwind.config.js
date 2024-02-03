/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        s: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1430px",
      },
      colors: {
        // main
        mainBg: "#2b2d48",
        darkBg: "#262940",
        white: "#F2FBEF",

        // sidebar
        7: "#F2A540",
        gg: "#E94957",
        sidebarBg: "#262940",
        currentLinkBg: "#E94957",

      },
      flexGrow: {
        2: "2",
        4: "4",
        8: "8",
        12: "12",
        16: "16",
      },
    },
  },
  plugins: [],
}
