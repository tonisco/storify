import React from "react"
import { FlatList, Text, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import categoriesImage from "../../data/cartegoriesImage"
import { GroupByCategory } from "../../types/main"
import CategoryCard from "../Components/CategoryCard"
import tw from "../lib/tailwind"

type Props = {
  groupByCategory: GroupByCategory
}

const CategoriesGroup = ({ groupByCategory }: Props) => {
  return (
    <View style={tw`gap-2`}>
      <View style={tw`flex-row justify-between`}>
        <Text
          style={tw`text-xl font-sans-bold uppercase text-brandDark dark:text-darkBrandWhite`}
        >
          Categories
        </Text>
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
        data={Object.keys(groupByCategory)}
        renderItem={({ item }) => (
          <CategoryCard
            category={item as keyof typeof categoriesImage}
            total={groupByCategory[item].length}
          />
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-4`}
      />
    </View>
  )
}

export default CategoriesGroup
