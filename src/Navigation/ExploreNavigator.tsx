import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ExploreScreenType } from "../../types/screenTypes"
import ProductDetailsScreen from "../screens/Explore/ProductDetailsScreen"
import ProductListScreen from "../screens/Explore/ProductListScreen"

const Navigator = createNativeStackNavigator<ExploreScreenType>()

const ExploreNavigator = () => {
  return (
    <Navigator.Navigator>
      <Navigator.Screen name="ProductList" component={ProductListScreen} />
      <Navigator.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Navigator.Navigator>
  )
}

export default ExploreNavigator
