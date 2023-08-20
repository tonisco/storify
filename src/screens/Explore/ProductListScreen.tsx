import React, { useMemo } from "react"
import { ScrollView, Text, View } from "react-native"
import products from "../../../data/products"
import { GroupByCategory, Products } from "../../../types/main"
import { getPercentDiscount } from "../../utils/methods"
import tw from "../../lib/tailwind"
import CategoriesGroup from "../CategoriesGroup"
import GroupProducts from "../GroupProducts"

type Props = object

const ProductListScreen = (props: Props) => {
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
    ></ScrollView>
  )
}

export default ProductListScreen
