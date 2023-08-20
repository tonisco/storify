/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brandWhite: "#FFFFFF",
        brandPrimary: "#DB3022",
        brandGray: "#9B9B9B",
        brandBackground: "#F9F9F9",
        brandDark: "#222222",
        brandSale: "#DB3022",
        darkBrandWhite: "#F6F6F6",
        darkBrandPrimary: "#EF3651",
        darkBrandGray: "#ABB4BD",
        darkBrandBackground: "#1E1F28",
        darkBrandDark: "#2A2C36",
        darkBrandSale: "#FF3E3E",
      },
      fontFamily: {
        "sans-regular": ["sans-regular"],
        "sans-medium": ["sans-medium"],
        "sans-semibold": ["sans-semibold"],
        "sans-bold": ["sans-bold"],
      },
    },
  },
  plugins: [],
}
