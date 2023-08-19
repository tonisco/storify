import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import ProductListScreen from "../screens/ProductListScreen"
import { ProductScreenType } from "../types/screenTypes"

const Navigator = createNativeStackNavigator<ProductScreenType>()

const ProductNavigator = () => {
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

export default ProductNavigator
