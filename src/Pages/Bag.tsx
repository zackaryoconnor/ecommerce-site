import { Link } from 'react-router-dom'
import { useBag } from '../context/BagContext'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

function Bag() {
  const { items, removeFromBag, updateQuantity, clearBag } = useBag()

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + price * item.quantity
    }, 0)
  }

  if (items.length === 0) {
    return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 space-y-6">
              <img
                src="/emptyBag.png"
                alt="Cat playing in empty bag"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">
                Looks like your bag is empty.
              </h1>
              <p className="text-gray-500 text-sm sm:text-base max-w-md">
                You haven't added anything to your bag yet. Browse our
                handcrafted sewn goods to find something special.
              </p>
              <Link
                to="/"
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Continue Shopping
              </Link>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Shopping Bag</h1>
                <button
                  onClick={clearBag}
                  className="text-sm text-gray-600 hover:text-black">
                  Clear Bag
                </button>
              </div>


              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-6 border-b pb-6">
                    
                    <img
                      src={item.imageURL?.[0]}
                      alt={item.type}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.type}</h3>
                      <p className="text-gray-600">{item.price}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100">
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100">
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromBag(item._id)}
                          className="text-sm text-gray-600 hover:text-black">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Bag
