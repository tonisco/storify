import { MD3DarkTheme, MD3LightTheme } from "react-native-paper"

export const lightTheme = {
  ...MD3LightTheme,
  myOwnProperty: true,
  colors: {
    ...MD3LightTheme.colors,
    brandWhite: "#FFFFFF",
    brandPrimary: "#DB3022",
    brandGray: "#9B9B9B",
    brandBackground: "#F9F9F9",
    brandDark: "#222222",
  },
}

export type LightTheme = typeof lightTheme

export const darkTheme = {
  ...MD3DarkTheme,
  myOwnProperty: true,
  colors: {
    ...MD3DarkTheme.colors,
    brandWhite: "#F6F6F6",
    brandPrimary: "#EF3651",
    brandGray: "#ABB4BD",
    brandBackground: "#1E1F28",
    brandDark: "#2A2C36",
  },
}

export type DarkTheme = typeof darkTheme

export type PaperTheme = LightTheme | DarkTheme
