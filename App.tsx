import React, { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useColorScheme, View } from "react-native"

import ThemeProvider from "./src/context/ThemeContext"
import Navigation from "./src/Navigation"
import PaperThemeProvider from "./src/theme/PaperThemeProvider"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontLoaded] = useFonts({
    "sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "sans-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  const colorScheme = useColorScheme()

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded])

  if (!fontLoaded) {
    return null
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider defaultTheme={colorScheme}>
        <PaperThemeProvider>
          <Navigation />
        </PaperThemeProvider>
      </ThemeProvider>
    </View>
  )
}
