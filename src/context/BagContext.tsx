import { createContext, useContext, useState, ReactNode } from 'react'
import type { Product } from '../types/Product'

interface BagItem extends Product {
  quantity: number
}

interface BagContextType {
  items: BagItem[]
  addToBag: (product: Product) => void
  removeFromBag: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearBag: () => void
  totalItems: number
}

const BagContext = createContext<BagContextType | undefined>(undefined)

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([])

  const addToBag = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item._id === product._id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromBag = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item._id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromBag(productId)
      return
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item._id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearBag = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <BagContext.Provider
      value={{
        items,
        addToBag,
        removeFromBag,
        updateQuantity,
        clearBag,
        totalItems,
      }}>
      {children}
    </BagContext.Provider>
  )
}

export function useBag() {
  const context = useContext(BagContext)
  if (context === undefined) {
    throw new Error('useBag must be used within a BagProvider')
  }
  return context
} 