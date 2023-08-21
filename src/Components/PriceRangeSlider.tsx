import React from "react"

import MultiSlider from "@ptomasroos/react-native-multi-slider"

import tw from "../lib/tailwind"

type Props = {
  maxPrice: number
  multiSliderValue: number[]
  setMultiSliderValue: (val: number[]) => void
}

const PriceRangeSlider = ({
  maxPrice,
  multiSliderValue,
  setMultiSliderValue,
}: Props) => {
  const multiSliderValuesChange = (values: number[]) =>
    setMultiSliderValue(values)

  return (
    <MultiSlider
      values={[multiSliderValue[0], multiSliderValue[1]]}
      sliderLength={280}
      onValuesChange={multiSliderValuesChange}
      min={0}
      max={maxPrice}
      enableLabel
      allowOverlap={false}
      minMarkerOverlapDistance={30}
      selectedStyle={tw`bg-brandPrimary dark:bg-darkBrandPrimary`}
      markerStyle={tw`w-5 h-5 border-2 shadow-md bg-brandWhite dark:bg-brandDark border-brandDark dark:border-brandWhite`}
    />
  )
}

export default PriceRangeSlider
