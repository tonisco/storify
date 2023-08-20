import React from "react"
import { FlatList, Text, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import { Products } from "../../types/main"
import ProductCard from "../Components/ProductCard"
import tw from "../lib/tailwind"

type Props = {
  items: Products
  title: string
  subtitle?: string
  tag?: string
}

const GroupProducts = ({ items, title, subtitle, tag }: Props) => {
  return (
    <View style={tw`gap-4`}>
      <View style={tw`flex-row justify-between`}>
        <View>
          <Text
            style={tw`text-xl font-sans-bold uppercase text-brandDark dark:text-darkBrandWhite`}
          >
            {title}
          </Text>
          <Text
            style={tw`font-sans-regular text-[11px] text-brandGray dark:text-darkBrandGray`}
          >
            {subtitle}
          </Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Text
            style={tw`font-sans-regular text-sm text-brandGray dark:text-darkBrandGray`}
          >
            View all
          </Text>
          <MaterialIcons
            name="chevron-right"
            style={tw`font-sans-regular text-lg text-brandGray dark:text-darkBrandGray`}
          />
        </View>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <ProductCard product={item} tag={tag} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-4`}
      />
    </View>
  )
}

export default GroupProducts
