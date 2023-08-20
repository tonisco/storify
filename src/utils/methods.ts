export const getPercentDiscount = (discount: number, price: number) =>
  Math.round((discount / price) * 100)
