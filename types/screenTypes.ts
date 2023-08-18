import { NativeStackScreenProps } from "@react-navigation/native-stack"

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
