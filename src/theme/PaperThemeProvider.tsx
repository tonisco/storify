import React from "react"
import { PaperProvider } from "react-native-paper"

import { useTheme } from "../context/ThemeContext"

import { darkTheme, lightTheme } from "./PaperTheme"

type Props = {
  children: React.ReactNode
}

const PaperThemeProvider = ({ children }: Props) => {
  const { theme } = useTheme()

  return (
    <PaperProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </PaperProvider>
  )
}

export default PaperThemeProvider
