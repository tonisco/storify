import { useFonts } from "expo-font"
import { useCallback } from "react"
import * as SplashScreen from "expo-splash-screen"
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import ProductNavigator from "./navigators/ProductNavigator"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontLoaded] = useFonts({
    "font-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "font-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "font-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "font-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded])

  if (!fontLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <ProductNavigator />
      </NavigationContainer>
    </View>
  )
}
