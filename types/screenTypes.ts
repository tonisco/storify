import { NavigatorScreenParams } from "@react-navigation/native"
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

export type ProductListScreenProps = NativeStackScreenProps<
  ProductScreenType,
  "ProductList"
>
export type ProductDetailsScreenProps = NativeStackScreenProps<
  ProductScreenType,
  "ProductDetails"
>
