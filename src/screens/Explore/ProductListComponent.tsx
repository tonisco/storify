/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { Button } from "react-native-paper"

import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { FlashList } from "@shopify/flash-list"

import { Products } from "../../../types/main"
import ProductCard from "../../Components/ProductCard"
import tw from "../../lib/tailwind"

type Props = {
  productData: Products
  hasMore: boolean
  loadMore: () => void
  goToFilter: () => void
  setSortBy: React.Dispatch<React.SetStateAction<any>>
  sortBy: string
}

const sort = [
  "Newest",
  "Ratings",
  "Discount",
  "Price: Lowest To Highest",
  "Price: Highest To Lowest",
]

const ProductListComponent = ({
  productData,
  hasMore,
  loadMore,
  goToFilter,
  sortBy,
  setSortBy,
}: Props) => {
  const [visible, setVisible] = useState(false)

  const onSort = (val: string) => {
    setSortBy(val)
    setVisible(!visible)
  }

  const toggleVisible = () => setVisible(!visible)

  return (
    <FlashList
      data={productData}
      renderItem={({ item }) => <ProductCard product={item} />}
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={40}
      contentContainerStyle={tw`px-4 pt-6 pb-10 bg-brandBackground dark:bg-darkBrandBackground`}
      // columnWrapperStyle={tw`gap-4`}
      numColumns={2}
      ListHeaderComponent={() => (
        <View style={tw`flex-row justify-between px-2 py-2 mb-10`}>
          <Pressable
            style={tw`flex-row items-center gap-2`}
            onPress={goToFilter}
          >
            <Ionicons
              style={tw`text-brandDark dark:text-brandWhite`}
              name="filter"
              size={18}
              color="black"
            />
            <Text style={tw`text-brandDark dark:text-brandWhite text-[11px]`}>
              Filter
            </Text>
          </Pressable>
          <View style={tw`flex-row items-center gap-2`}>
            <FontAwesome
              style={tw`text-brandDark dark:text-brandWhite`}
              name="sort"
              size={18}
              color="black"
            />
            <View style={tw`relative w-44`}>
              <Text
                onPress={toggleVisible}
                style={tw`text-brandDark dark:text-brandWhite text-[11px]`}
              >
                {sortBy}
              </Text>
              {visible ? (
                <View
                  style={tw`absolute z-50 w-full shadow-md top-4 bg-brandBackground dark:bg-darkBrandBackground`}
                >
                  {sort.map((val) => (
                    <Text
                      onPress={() => onSort(val)}
                      style={tw`p-1 text-sm -z-50 text-brandDark dark:text-brandWhite`}
                      key={val}
                    >
                      {val}
                    </Text>
                  ))}
                </View>
              ) : null}
            </View>
          </View>
          <MaterialCommunityIcons name="view-list" size={24} color="black" />
        </View>
      )}
      ListFooterComponent={() => (
        <>
          {hasMore && productData.length > 0 ? (
            <Button
              mode="contained"
              onPress={() => loadMore()}
              style={tw`self-center bg-brandSale dark:bg-darkBrandSale`}
            >
              Load More
            </Button>
          ) : null}

          {/* <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            // onChange={handleSheetChanges}
          >
            <View>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheet> */}
        </>
      )}
    />
  )
}

export default ProductListComponent
