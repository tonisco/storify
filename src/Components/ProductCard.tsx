import React from "react"
import { Image, Text, View } from "react-native"

import { Ionicons } from "@expo/vector-icons"

import products from "../../data/products.json"
import tw from "../lib/tailwind"

import Stars from "./Stars"

type Props = object

const ProductCard = ({}: Props) => {
  return (
    <View
      style={tw`w-44 relative overflow-hidden bg-brandBackground shadow-none dark:bg-brandBackground`}
    >
      <Image
        source={require("../../assets/images/product_img25.jpg")}
        style={tw`h-48 w-full rounded-lg`}
        resizeMode="cover"
      />
      <View style={tw`gap-1 mt-2 pb-4 px-2 shadow-none`}>
        <View style={tw`flex-row gap-1 items-center`}>
          <Stars rating={products[0].average_rating} />
          <Text
            style={tw`text-xs font-sans-regular text-brandGray dark:text-darkBrandGray`}
          >
            ({products[0].num_reviews})
          </Text>
        </View>
        <Text
          style={tw`text-brandGray font-sans-regular dark:text-darkBrandGray text-[11px]`}
        >
          {products[0].category}
        </Text>
        <Text
          style={tw`text-base font-sans-bold uppercase text-brandDark dark:text-darkBrandWhite`}
        >
          {products[0].name}
        </Text>
        <Text
          style={tw`font-sans-bold text-sm text-brandDark dark:text-darkBrandDark`}
        >
          ${products[0].price}
        </Text>
        <View style={tw`flex-row items-center gap-2`}>
          <Text
            style={tw`font-sans-bold text-sm text-brandGray dark:text-darkBrandGray line-through`}
          >
            ${products[0].price}
          </Text>
          <Text
            style={tw`font-sans-bold text-sm text-brandSale dark:text-darkBrandSale`}
          >
            ${products[0].discount}
          </Text>
        </View>
      </View>
      <Text
        style={tw`absolute top-2 text-[11px] left-2 px-2 py-1 rounded-2xl text-brandWhite bg-brandSale dark:bg-darkBrandSale`}
      >
        -20%
      </Text>
      <View
        style={tw`bg-brandWhite items-center justify-center dark:bg-darkBrandDark absolute px-2 py-1 top-2 right-2 rounded-full`}
      >
        <Ionicons
          name="heart-outline"
          style={tw`text-brandGray dark:text-darkBrandGray text-lg`}
        />
      </View>
    </View>
  )
}

export default ProductCard
