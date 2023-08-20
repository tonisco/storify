import React, { useMemo } from "react"
import { ScrollView, Text, View } from "react-native"
import products from "../../../data/products"
import { GroupByCategory, Products } from "../../../types/main"
import { getPercentDiscount } from "../../utils/methods"
import tw from "../../lib/tailwind"
import GroupProducts from "../GroupProducts"
import CategoriesGroup from "../CategoriesGroup"

type Props = object

const ProductListScreen = (props: Props) => {
  // TODO: reduce number rendered
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

  const sale = useMemo(
    () =>
      products
        .sort(
          (a, b) =>
            getPercentDiscount(b.discount, b.price) -
            getPercentDiscount(a.discount, a.price),
        )
        .reduce((prev, curr) => {
          if (curr.discount && prev.length < 6) {
            prev.push(curr)
          }
          return prev
        }, [] as Products),
    [],
  )

  const newItems = useMemo(
    () =>
      products
        .sort((a, b) => b.id - a.id)
        .reduce((prev, curr) => {
          if (prev.length < 6) {
            prev.push(curr)
          }
          return prev
        }, [] as Products),
    [],
  )

  const topRated = useMemo(
    () =>
      products
        .sort((a, b) => b.average_rating - a.average_rating)
        .reduce((prev, curr) => {
          if (prev.length < 6) {
            prev.push(curr)
          }
          return prev
        }, [] as Products),
    [],
  )

  return (
    <ScrollView
      style={tw`bg-brandBackground dark:bg-darkBrandBackground px-4 pt-6 pb-10`}
      contentContainerStyle={tw``}
    >
      <View style={tw`mb-8 gap-6`}>
        <View>
          <Text
            style={tw`text-base font-sans-bold capitalize text-brandDark dark:text-darkBrandWhite`}
          >
            Hey, John Doe
          </Text>
          <Text
            style={tw`font-sans-regular text-[11px] text-brandGray dark:text-darkBrandGray`}
          >
            Find your best products at your fingers
          </Text>
        </View>
        <CategoriesGroup groupByCategory={groupByCategory} />
        <GroupProducts items={sale} title="Sale" subtitle="Super Summer Sale" />
        <GroupProducts
          items={newItems}
          title="New"
          subtitle="You've never seen it before"
          tag="New"
        />
        <GroupProducts
          items={topRated}
          title="Top Rated"
          subtitle="The best we have"
        />
      </View>
    </ScrollView>
  )
}

export default ProductListScreen
