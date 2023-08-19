import React, { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useColorScheme, View } from "react-native"

import ThemeProvider from "./context/ThemeContext"
import PaperThemeProvider from "./theme/PaperThemeProvider"
import Navigation from "./Navigation"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontLoaded] = useFonts({
    "font-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "font-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "font-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "font-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
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
