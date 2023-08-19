import React from "react"
import { Text, View } from "react-native"

import ProductCard from "../Components/ProductCard"

type Props = object

const ProductListScreen = (props: Props) => {
  return (
    <View>
      <Text>ProductListScreen</Text>
      <ProductCard />
    </View>
  )
}

export default ProductListScreen
