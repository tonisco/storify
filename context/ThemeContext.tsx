import React, { createContext, useContext, useEffect, useState } from "react"
import { ColorSchemeName } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"

type Theme = ColorSchemeName

type Context = {
  theme: Theme
  toggleTheme: () => Promise<void>
}

const ThemeContext = createContext<Context>({
  theme: "light",
  async toggleTheme() {},
})

type Props = {
  children: React.ReactNode
  defaultTheme: Theme | undefined
}

const ThemeProvider = ({ children, defaultTheme }: Props) => {
  const [theme, setTheme] = useState(defaultTheme ?? "light")

  useEffect(() => {
    const getTheme = async () => {
      const storedTheme = (await AsyncStorage.getItem("theme")) as Theme | null

      if (storedTheme) {
        setTheme(storedTheme)
      }
    }

    getTheme()
  }, [])

  const toggleTheme = async () => {
    if (theme === "dark") {
      setTheme("light")
      await AsyncStorage.setItem("theme", "light")
    } else {
      await AsyncStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)
