import React from "react"
import { Image, ImageProps, Text, View } from "react-native"

import { Ionicons } from "@expo/vector-icons"

import { Product } from "../../types/main"
import tw from "../lib/tailwind"
import { getPercentDiscount } from "../utils/methods"

import Stars from "./Stars"

type Props = {
  product: Product
  tag?: string
}

const ProductCard = ({ product, tag }: Props) => {
  const discount = getPercentDiscount(product.discount, product.price)

  return (
    <View
      style={tw`w-44 relative self-stretch overflow-hidden bg-brandBackground shadow-none dark:bg-brandBackground`}
    >
      <Image
        source={product.image as unknown as ImageProps}
        style={tw`h-48 w-full rounded-lg`}
        resizeMode="cover"
      />
      <View style={tw`gap-1 mt-2 pb-4 px-2 shadow-none`}>
        <View style={tw`flex-row gap-1 items-center`}>
          <Stars rating={product.average_rating} />
          <Text
            style={tw`text-xs font-sans-regular text-brandGray dark:text-darkBrandGray`}
          >
            ({product.num_reviews})
          </Text>
        </View>
        <Text
          style={tw`text-brandGray font-sans-regular dark:text-darkBrandGray text-[11px]`}
        >
          {product.category}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={tw`text-base h-12 font-sans-bold uppercase text-brandDark dark:text-darkBrandWhite`}
        >
          {product.name}
        </Text>
        {product.discount ? (
          <View style={tw`flex-row items-center gap-2 mt-auto`}>
            <Text
              style={tw`font-sans-bold text-sm text-brandGray dark:text-darkBrandGray line-through`}
            >
              ${product.price}
            </Text>
            <Text
              style={tw`font-sans-bold text-sm text-brandSale dark:text-darkBrandSale`}
            >
              ${(product.price - product.discount).toFixed(2)}
            </Text>
          </View>
        ) : (
          <Text
            style={tw`font-sans-bold text-sm text-brandDark dark:text-darkBrandDark`}
          >
            ${product.price}
          </Text>
        )}
      </View>
      {discount && !tag ? (
        <Text
          style={tw`absolute top-2 text-[11px] left-2 px-2 py-1 rounded-2xl text-brandWhite bg-brandSale dark:bg-darkBrandSale`}
        >
          -{discount}%
        </Text>
      ) : null}
      {tag ? (
        <Text
          style={tw`absolute top-2 text-[11px] left-2 px-2 py-1 rounded-2xl text-brandWhite bg-brandDark dark:bg-darkBrandBackground`}
        >
          {tag}
        </Text>
      ) : null}
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
