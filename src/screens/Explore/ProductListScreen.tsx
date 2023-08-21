import React, { useCallback, useEffect, useState } from "react"

import products from "../../../data/products"
import { ProductListScreenProps } from "../../../types/screenTypes"
import { getPercentDiscount } from "../../utils/methods"

import ProductListComponent from "./ProductListComponent"

type Props = ProductListScreenProps

const sort = [
  "Newest",
  "Ratings",
  "Discount",
  "Price: Lowest To Highest",
  "Price: Highest To Lowest",
] as const

const ProductListScreen = ({ navigation, route }: Props) => {
  const { params } = route

  const filterProducts = useCallback(() => {
    let newProducts = products

    if (params?.categories && params.categories?.length > 0) {
      newProducts = newProducts.filter(
        (item) => params.categories?.includes(item.category),
      )
    }

    if (params?.genders && params.genders.length) {
      newProducts = newProducts.filter(
        (item) => params.genders?.includes(item.gender),
      )
    }

    if (params?.ratings && params.ratings.length) {
      newProducts = newProducts.filter(
        (item) => item.average_rating > Math.min(...(params.ratings ?? [0])),
      )
    }

    if (params?.price && params.price.length > 2) {
      newProducts = newProducts.filter(
        (item) =>
          item.price >= params.price![0] && item.price <= params.price![1],
      )
    }

    return newProducts
  }, [params])

  const [sortBy, setSortBy] = useState<(typeof sort)[number]>("Newest")

  // sorts according to change in sortBy
  const sortedProduct = useCallback(
    (data: typeof products) => {
      switch (sortBy) {
        case "Newest":
          return data.sort((a, b) => a.id - b.id)
        case "Price: Highest To Lowest":
          return data.sort((a, b) => b.price - a.price)
        case "Price: Lowest To Highest":
          return data.sort((a, b) => a.price - b.price)
        case "Discount":
          return data.sort(
            (a, b) =>
              getPercentDiscount(b.discount, b.price) -
              getPercentDiscount(a.discount, a.price),
          )
        case "Ratings":
          return data.sort((a, b) => b.average_rating - a.average_rating)
      }
    },
    [sortBy],
  )

  const [length, setLength] = useState(10)
  const [productData, setProductData] = useState<typeof products>([])
  const [hasMore, setHasMore] = useState(true)

  const loadMore = async () => {
    setLength(length + 10)
  }

  useEffect(() => {
    let filter = filterProducts()
    let sorted = sortedProduct(filter)
    setProductData(sorted.slice(0, length))
    if (filter.length >= length + 1) {
      setHasMore(true)
    } else setHasMore(false)
  }, [filterProducts, sortedProduct, length])

  const goToFilter = () => {
    navigation.navigate("ProductFilter", { ...params })
  }

  return (
    <ProductListComponent
      hasMore={hasMore}
      loadMore={loadMore}
      productData={productData}
      goToFilter={goToFilter}
      setSortBy={setSortBy}
      sortBy={sortBy}
    />
  )
}

export default ProductListScreen
