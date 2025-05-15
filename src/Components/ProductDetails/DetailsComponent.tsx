import MoreInfoComponent from './MoreInfoComponent'
import type { Product } from '../../types/Product'

interface DetailsComponentProps {
  product: Product
}

function DetailsComponent({ product }: DetailsComponentProps) {
  return (
    <div className="w-full">
      <div className="container overflow-hidden">
        <h1 className="text-3xl font-bold">{product.type}</h1>
        <p className="text-gray-500 text-xl mb-4">{product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Dimensions</h2>
          <ul className="text-sm text-gray-600">
            <li><span className="font-medium">Height:</span> {product.dimensions.height}</li>
            <li><span className="font-medium">Width:</span> {product.dimensions.width}</li>
            <li><span className="font-medium">Strap Drop:</span> {product.dimensions.strapDrop}</li>
            <li><span className="font-medium">Gusset Depth:</span> {product.dimensions.gussetDepth}</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">{product.dimensions.description}</p>
        </div>
        
        <button className='px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition mb-6'>Add to Bag</button>
        
        <MoreInfoComponent product={product} />
      </div>
    </div>
  )
}

export default DetailsComponent