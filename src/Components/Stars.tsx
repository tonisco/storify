import React from "react"
import { View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import tw from "../lib/tailwind"

type Props = {
  rating: number
}

const Star = ({ value, index }: { value: number; index: number }) => {
  if (value >= index + 1)
    return <MaterialIcons style={tw`text-yellow-500`} size={16} name="star" />

  if (value > index)
    return (
      <MaterialIcons style={tw`text-yellow-500`} size={16} name="star-half" />
    )

  return (
    <MaterialIcons style={tw`text-yellow-500`} size={16} name="star-border" />
  )
}

const Stars = ({ rating }: Props) => {
  return (
    <View style={tw`flex-row items-center`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star index={i} value={rating} key={i} />
      ))}
    </View>
  )
}

export default Stars
