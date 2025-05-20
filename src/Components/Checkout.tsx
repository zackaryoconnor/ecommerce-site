import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBag } from '../context/BagContext'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

const Checkout = () => {
  const { items, clearBag } = useBag()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Order placed:', { ...formData, items })
    clearBag()
    setSubmitted(true)
    setTimeout(() => navigate('/'), 3000)
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + price * item.quantity
    }, 0).toFixed(2)
  }

  if (submitted) {
    return (
      <div className="outer-container">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl font-bold mb-2">🎉 Thank you for your order!</h1>
          <p className="text-gray-600">You’ll be redirected shortly...</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="outer-container">
      <Navbar />
      <main className="min-h-screen px-4 py-16">
        <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Place Order
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="divide-y border rounded-md shadow-sm p-4">
              {items.map((item) => (
                <div key={item._id} className="py-4 flex justify-between">
                  <div>
                    <p className="font-medium">{item.type}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × {item.price}
                    </p>
                  </div>
                  <div className="font-semibold">
                    $
                    {(
                      parseFloat(item.price.replace('$', '')) * item.quantity
                    ).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
