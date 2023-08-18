// import { StatusBar } from "expo-status-bar"

import { NavigationContainer } from "@react-navigation/native"

import ProductNavigator from "./navigators/ProductNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <ProductNavigator />
    </NavigationContainer>
  )
}
