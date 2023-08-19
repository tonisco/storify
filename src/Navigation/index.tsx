import React from "react"

import { NavigationContainer } from "@react-navigation/native"

import ProductNavigator from "./ProductNavigator"

const Navigation = () => {
  return (
    <NavigationContainer>
      <ProductNavigator />
    </NavigationContainer>
  )
}

export default Navigation
