import React, { useMemo } from "react"
import { FlatList } from "react-native"

import categoriesImage from "../../../data/cartegoriesImage"
import products from "../../../data/products"
import { GroupByCategory } from "../../../types/main"
import CategoryCard from "../../Components/CategoryCard"
import tw from "../../lib/tailwind"

type Props = object

const CategoriesScreen = (props: Props) => {
  const groupByCategory = useMemo(
    () =>
      products.reduce((prev, curr) => {
        const { category } = curr
        if (!prev[category]) prev[category] = []
        prev[category].push(curr)
        return prev
      }, {} as GroupByCategory),
    [],
  )

  return (
    <FlatList
      data={Object.keys(groupByCategory)}
      renderItem={({ item }) => (
        <CategoryCard
          category={item as keyof typeof categoriesImage}
          total={groupByCategory[item].length}
        />
      )}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tw`gap-4 px-4 py-6`}
      columnWrapperStyle={tw`gap-4`}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
