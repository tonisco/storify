import { MaterialBottomTabScreenProps } from "react-native-paper"

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type MainTabType = {
  Main: NavigatorScreenParams<HomeScreenType>
  Explore: NavigatorScreenParams<ExploreScreenType>
  Cart: undefined
  Favorite: undefined
  Orders: undefined
}

export type HomeScreenType = {
  Home: undefined
  Categories: undefined
}
export type ExploreScreenType = {
  ProductList: {
    ratings?: number[]
    categories?: string[]
    genders?: string[]
    price?: number[]
  }
  ProductDetails: { id: string }
  ProductFilter: {
    ratings?: number[]
    categories?: string[]
    genders?: string[]
    price?: number[]
  }
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
export type ProductListScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ExploreScreenType, "ProductList">,
  MaterialBottomTabScreenProps<MainTabType>
>
export type ProductDetailsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ExploreScreenType, "ProductDetails">,
  MaterialBottomTabScreenProps<MainTabType>
>
export type ProductFilterScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ExploreScreenType, "ProductFilter">,
  MaterialBottomTabScreenProps<MainTabType>
>
