import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ExploreScreenType } from "../../types/screenTypes"
import ProductDetailsScreen from "../screens/Explore/ProductDetailsScreen"
import ProductFilterScreen from "../screens/Explore/ProductFilterScreen"
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
      <Navigator.Screen name="ProductFilter" component={ProductFilterScreen} />
    </Navigator.Navigator>
  )
}

export default ExploreNavigator
