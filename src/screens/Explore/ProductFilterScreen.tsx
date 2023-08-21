import React, { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Button, Checkbox } from "react-native-paper"

import products from "../../../data/products"
import { ProductFilterScreenProps } from "../../../types/screenTypes"
import PriceRangeSlider from "../../Components/PriceRangeSlider"
import Stars from "../../Components/Stars"
import tw from "../../lib/tailwind"

import FilterComponents from "./FilterComponents"

type Props = ProductFilterScreenProps

const ProductFilterScreen = ({ navigation, route }: Props) => {
  const categories = [...new Set(products.map((product) => product.category))]
  const gender = [...new Set(products.map((product) => product.gender))]
  const prices = products.map((product) => Math.round(product.price))
  const maxPrice = Math.max(...prices)

  const { params } = route

  const [selectedCategories, setSelectedCategories] = useState<
    typeof categories
  >(params.categories ?? [])
  const [selectedGenders, setSelectedGenders] = useState<typeof gender>(
    params.genders ?? [],
  )
  const [multiSliderValue, setMultiSliderValue] = useState(
    params.price ?? [0, maxPrice],
  )
  const [selectedRatings, setSelectedRatings] = useState<number[]>(
    params.ratings ?? [],
  )

  const setCategories = (category: string) => {
    if (!selectedCategories.includes(category))
      setSelectedCategories([...selectedCategories, category])
    else
      setSelectedCategories(
        selectedCategories.filter((val) => val !== category),
      )
  }

  const setGender = (genders: string) => {
    if (!selectedGenders.includes(genders))
      setSelectedGenders([...selectedGenders, genders])
    else setSelectedGenders(selectedGenders.filter((val) => val !== genders))
  }

  const setRatings = (ratings: number) => {
    if (!selectedRatings.includes(ratings))
      setSelectedRatings([...selectedRatings, ratings])
    else setSelectedRatings(selectedRatings.filter((val) => val !== ratings))
  }

  const clearFilter = () => {
    setSelectedRatings([])
    setSelectedCategories([])
    setSelectedGenders([])
    setMultiSliderValue([0, maxPrice])
  }

  const applyFilter = () => {
    navigation.navigate("ProductList", {
      ratings: selectedRatings,
      categories: selectedCategories,
      genders: selectedGenders,
      price: multiSliderValue,
    })
  }

  return (
    <ScrollView
      style={tw`gap-8 px-4 pt-6 pb-16 bg-brandBackground dark:bg-darkBrandBackground`}
      contentContainerStyle={tw`gap-8`}
    >
      <FilterComponents
        items={categories}
        title="Categories"
        onPress={setCategories}
        itemList={selectedCategories}
      />
      <FilterComponents
        items={gender}
        title="Gender"
        itemList={selectedGenders}
        onPress={setGender}
      />
      <View style={tw`gap-10`}>
        <Text
          style={tw`text-base font-sans-semibold text-brandDark dark:text-brandWhite`}
        >
          Price
        </Text>
        <View style={tw`px-4`}>
          <PriceRangeSlider
            maxPrice={maxPrice}
            multiSliderValue={multiSliderValue}
            setMultiSliderValue={setMultiSliderValue}
          />
        </View>
      </View>
      <View style={tw`gap-2`}>
        <Text
          style={tw`text-base font-sans-semibold text-brandDark dark:text-brandWhite`}
        >
          Ratings
        </Text>
        <View style={tw`gap-2`}>
          {Array.from({ length: 4 }, (_, i) => (
            <TouchableOpacity
              onPress={() => setRatings(4 - i)}
              key={i}
              style={tw`flex-row items-center justify-between`}
            >
              <Stars key={i} rating={4 - i} size={24} />
              <Checkbox
                color="#EF3651"
                status={
                  selectedRatings.includes(4 - i) ? "checked" : "unchecked"
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={tw`flex-row gap-4 mx-auto mb-12`}>
        <Button
          mode="contained"
          onPress={() => applyFilter()}
          style={tw`self-center capitalize bg-brandSale dark:bg-darkBrandSale`}
        >
          Apply filter
        </Button>
        <Button
          mode="outlined"
          onPress={() => clearFilter()}
          style={tw`self-center capitalize border-brandSale dark:border-darkBrandSale`}
          textColor="#EF3651"
        >
          Clear Filter
        </Button>
      </View>
    </ScrollView>
  )
}

export default ProductFilterScreen
