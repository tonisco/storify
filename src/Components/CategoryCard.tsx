import React from "react"
import { Image, Text, View } from "react-native"

import categoriesImage from "../../data/cartegoriesImage"
import tw from "../lib/tailwind"

type Props = { category: keyof typeof categoriesImage; total: number }

const CategoryCard = ({ category, total }: Props) => {
  return (
    <View>
      <Image
        style={tw`h-32 w-32 rounded-lg`}
        source={categoriesImage[category]}
      />
      <View style={tw`gap-1 px-1`}>
        <Text
          style={tw`font-sans-bold capitalize text-brandDark dark:text-darkBrandWhite`}
        >
          {category}
        </Text>
        <Text
          style={tw`font-sans-regular capitalize text-[11px] text-brandGray dark:text-darkBrandGray`}
        >
          {total} items
        </Text>
      </View>
    </View>
  )
}

export default CategoryCard
