/* eslint-disable react/no-unstable-nested-components */
import React from "react"

import { Ionicons } from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

import { MainTabType } from "../../types/screenTypes"
import tw from "../lib/tailwind"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"

import HomeNavigator from "./HomeNaviagtor"

const Tab = createMaterialBottomTabNavigator<MainTabType>()

const MainNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={tw`bg-white dark:bg-darkBrandBackground`}
      screenOptions={{}}
      style={tw`font-sans-semibold`}
    >
      <Tab.Screen
        name="Main"
        component={HomeNavigator}
        options={{
          title: "Home",
          tabBarIcon({ focused }) {
            return (
              <Ionicons
                size={24}
                name={focused ? "home" : "home-outline"}
                style={tw`${
                  focused
                    ? "text-brandPrimary dark:text-darkBrandPrimary"
                    : "text-brandGray dark:text-darkBrandGray"
                }`}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ProductDetailsScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Ionicons
                size={24}
                name={focused ? "compass" : "compass-outline"}
                style={tw`${
                  focused
                    ? "text-brandPrimary dark:text-darkBrandPrimary"
                    : "text-brandGray dark:text-darkBrandGray"
                }`}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={ProductDetailsScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Ionicons
                size={24}
                name={focused ? "heart" : "heart-outline"}
                style={tw`${
                  focused
                    ? "text-brandPrimary dark:text-darkBrandPrimary"
                    : "text-brandGray dark:text-darkBrandGray"
                }`}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProductDetailsScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Ionicons
                size={24}
                name={focused ? "cart" : "cart-outline"}
                style={tw`${
                  focused
                    ? "text-brandPrimary dark:text-darkBrandPrimary"
                    : "text-brandGray dark:text-darkBrandGray"
                }`}
              />
            )
          },
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={ProductDetailsScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Ionicons
                size={24}
                name={focused ? "clipboard" : "clipboard-outline"}
                style={tw`${
                  focused
                    ? "text-brandPrimary dark:text-darkBrandPrimary"
                    : "text-brandGray dark:text-darkBrandGray"
                }`}
              />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
