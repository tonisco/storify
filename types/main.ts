import products from "../data/products.json"

export type GroupByCategory = { [index: string]: (typeof products)[0][] }
export type Products = typeof products
export type Product = (typeof products)[0]
