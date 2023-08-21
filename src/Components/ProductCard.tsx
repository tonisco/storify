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
      style={tw`relative z-0 self-stretch overflow-hidden shadow-none w-44 bg-brandBackground dark:bg-brandBackground`}
    >
      <Image
        source={product.image as unknown as ImageProps}
        style={tw`w-full h-48 rounded-lg`}
        resizeMode="cover"
      />
      <View style={tw`gap-1 px-2 pb-4 mt-2 shadow-none`}>
        <View style={tw`flex-row items-center gap-1`}>
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
          style={tw`h-12 text-base uppercase font-sans-bold text-brandDark dark:text-darkBrandWhite`}
        >
          {product.name}
        </Text>
        {product.discount ? (
          <View style={tw`flex-row items-center gap-2 mt-auto`}>
            <Text
              style={tw`text-sm line-through font-sans-bold text-brandGray dark:text-darkBrandGray`}
            >
              ${product.price}
            </Text>
            <Text
              style={tw`text-sm font-sans-bold text-brandSale dark:text-darkBrandSale`}
            >
              ${(product.price - product.discount).toFixed(2)}
            </Text>
          </View>
        ) : (
          <Text
            style={tw`text-sm font-sans-bold text-brandDark dark:text-darkBrandDark`}
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
        style={tw`absolute items-center justify-center px-2 py-1 rounded-full bg-brandWhite dark:bg-darkBrandDark top-2 right-2`}
      >
        <Ionicons
          name="heart-outline"
          style={tw`text-lg text-brandGray dark:text-darkBrandGray`}
        />
      </View>
    </View>
  )
}

export default ProductCard
