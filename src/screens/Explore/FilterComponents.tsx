import React from "react"
import { Pressable, Text, View } from "react-native"

import tw from "../../lib/tailwind"

type Props = {
  items: string[]
  title: string
  onPress: (val: string) => void
  itemList: string[]
}

const FilterComponents = ({ items, title, onPress, itemList }: Props) => {
  return (
    <View style={tw`gap-4`}>
      <Text
        style={tw`text-base font-sans-semibold text-brandDark dark:text-brandWhite`}
      >
        {title}
      </Text>
      <View style={tw`flex-row flex-wrap gap-3`}>
        {items.map((value) =>
          !itemList.includes(value) ? (
            <Pressable key={value} onPress={() => onPress(value)}>
              <Text
                style={tw`px-4 py-2 border text-darkBrandDark dark:text-white rounded-2xl border-brandGray dark:border-darkBrandGray`}
              >
                {value}
              </Text>
            </Pressable>
          ) : (
            <Pressable key={value} onPress={() => onPress(value)}>
              <Text
                style={tw`px-4 py-2 text-white rounded-2xl bg-brandPrimary dark:bg-darkBrandPrimary`}
              >
                {value}
              </Text>
            </Pressable>
          ),
        )}
      </View>
    </View>
  )
}

export default FilterComponents
