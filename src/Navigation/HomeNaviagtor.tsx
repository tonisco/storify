import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreenType } from "../../types/screenTypes"
import CategoriesScreen from "../screens/Main/CategoriesScreen"
import HomeScreen from "../screens/Main/HomeScreen"

const Navigator = createNativeStackNavigator<HomeScreenType>()

const HomeNavigator = () => {
  return (
    <Navigator.Navigator>
      <Navigator.Screen name="Home" component={HomeScreen} />
      <Navigator.Screen name="Categories" component={CategoriesScreen} />
    </Navigator.Navigator>
  )
}

export default HomeNavigator
