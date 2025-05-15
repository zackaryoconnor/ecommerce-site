import type { Product } from '../../types/Product'

interface MoreInfoComponentProps {
  product: Product
}

function MoreInfoComponent({ product }: MoreInfoComponentProps) {
  return (
    <div className="w-full mt-8 border-t pt-8">
      <h2 className="text-lg font-semibold mb-2">Materials & Care:</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-6">
        {product.materialsAndCare}
      </p>

      <h2 className="text-lg font-semibold mb-2">Shipping:</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-6">
        {product.shipping}
      </p>

      <h2 className="text-lg font-semibold mb-2">Returns:</h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        {product.returns}
      </p>
    </div>
  )
}

export default MoreInfoComponent