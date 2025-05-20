import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBag } from '../context/BagContext'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'

function Checkout() {
  const navigate = useNavigate()
  const { items, clearBag } = useBag()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the payment processing
    clearBag()
    navigate('/confirmation')
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + price * item.quantity
    }, 0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <motion.main 
            className="flex-grow px-4 py-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h1 
                className="text-2xl font-bold mb-8"
                variants={itemVariants}
              >
                Checkout
              </motion.h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      className="space-y-4"
                      variants={containerVariants}
                    >
                      <motion.div variants={itemVariants}>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div variants={itemVariants}>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            State
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                          ZIP Code
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                          Card Number
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div variants={itemVariants}>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                            Expiry Date
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                            CVV
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      type="submit"
                      className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
                    >
                      Place Order
                    </motion.button>
                  </form>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                  >
                    {items.map((item) => (
                      <motion.div
                        key={item._id}
                        variants={itemVariants}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">{item.type}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </p>
                      </motion.div>
                    ))}
                    <motion.div 
                      variants={itemVariants}
                      className="border-t pt-4 mt-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total</span>
                        <span className="font-bold">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Checkout 