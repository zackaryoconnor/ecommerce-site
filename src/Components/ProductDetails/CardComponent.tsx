import { Link } from 'react-router-dom'

function CardComponent({ showInfo = true }) {
  return (
      <div className="max-w-64 mb-8">
        <div className="container overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-124 rounded-md overflow-hidden"
            src="toteBag.png"
            alt="description of product"
          />
        </div>
        { showInfo && (
          <div className="py-4">
          <p className="">Description of product</p>
          <p className="text-gray-500">$000.00</p>
        </div>
        )}
      </div>
  )
}

export default CardComponent
