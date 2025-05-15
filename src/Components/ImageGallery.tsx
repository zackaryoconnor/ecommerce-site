import React, { useState } from 'react'
import type { Product } from '../../types/Product'

interface ImageGalleryProps {
  product: Product
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = product?.imageURL || ['emptyBag.png']
  
  return (
    <div className="w-full">
      <div className="mb-4">
        <img
          className="w-lg h-124 object-cover rounded-md overflow-hidden"
          src={images[selectedImage]}
          alt={product.type}
        />
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-black' : 'border-transparent'}`}
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`${product.type} - thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery 