import React from 'react'
import type { Product } from '../../types/Product'

interface CardComponentProps {
  product: Product
  showInfo?: boolean
}

const CardComponent: React.FC<CardComponentProps> = ({
  product,
  showInfo = true,
}) => {
  const imageUrl = product?.imageURL?.[0] || '/emptyBag.png'
  const type = product?.type || 'No type found'
  const price = product?.price || '0.00'

  return (
    <div className="w-full">
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-110"
          src={imageUrl}
          alt={type}
        />
      </div>
      {showInfo && (
        <div className="mt-4">
          <p className="font-medium">{type}</p>
          <p className="text-gray-500">{price}</p>
        </div>
      )}
    </div>
  )
}

export default CardComponent
