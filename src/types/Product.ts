export interface Product {
  _id: string
  type: string
  price: string
  description: string
  imageURL?: string[]

  dimensions: {
    height: string
    width: string
    strapDrop: string
    gussetDepth: string
    description: string
  }

  materialsAndCare: string
  shipping: string
  returns: string
}
