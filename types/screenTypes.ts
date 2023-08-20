import { MaterialBottomTabScreenProps } from "react-native-paper"

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type MainTabType = {
  Main: NavigatorScreenParams<HomeScreenType>
  Explore: undefined
  Cart: undefined
  Favorite: undefined
  Orders: undefined
}

export type HomeScreenType = {
  Home: undefined
  Categories: undefined
}
export type ProductScreenType = {
  ProductList: undefined
  ProductDetails: { id: string }
}

export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeScreenType, "Home">,
  MaterialBottomTabScreenProps<MainTabType>
>

export type CategoriesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeScreenType, "Categories">,
  MaterialBottomTabScreenProps<MainTabType>
>

export type ProductListScreenProps = NativeStackScreenProps<
  ProductScreenType,
  "ProductList"
>
export type ProductDetailsScreenProps = NativeStackScreenProps<
  ProductScreenType,
  "ProductDetails"
>
