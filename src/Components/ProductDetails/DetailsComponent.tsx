import { Link } from 'react-router-dom'
import MoreInfoComponent from './MoreInfoComponent'

function ProductDetails() {
  return (
    <div className="w-full">
      <div className="container overflow-hidden">
        <h1 className="text-3xl font-bold">Tote Bag</h1>
        <p className="text-gray-500 text-xl mb-4">$000.00</p>
        <button className='px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition'>Add to Bag</button>
        <MoreInfoComponent />
      </div>
    </div>
  )
}

export default ProductDetails
