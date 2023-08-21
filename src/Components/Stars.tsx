import React from "react"
import { View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import tw from "../lib/tailwind"

type Props = {
  rating: number
  size?: number
}

const Star = ({
  value,
  index,
  size,
}: {
  value: number
  index: number
  size?: number
}) => {
  if (value >= index + 1)
    return (
      <MaterialIcons
        style={tw`text-yellow-500`}
        size={size ?? 16}
        name="star"
      />
    )

  if (value > index)
    return (
      <MaterialIcons
        style={tw`text-yellow-500`}
        size={size ?? 16}
        name="star-half"
      />
    )

  return (
    <MaterialIcons
      style={tw`text-yellow-500`}
      size={size ?? 16}
      name="star-border"
    />
  )
}

const Stars = ({ rating, size }: Props) => {
  return (
    <View style={tw`flex-row items-center`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star index={i} value={rating} key={i} size={size} />
      ))}
    </View>
  )
}

export default Stars
