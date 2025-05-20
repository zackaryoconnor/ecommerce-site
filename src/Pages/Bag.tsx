import { Link } from 'react-router-dom'
import { useBag } from '../context/BagContext'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

function Bag() {
  const { items, removeFromBag, updateQuantity, clearBag } = useBag()

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

  if (items.length === 0) {
    return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <motion.main 
              className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                variants={itemVariants}
                src="/emptyBag.png"
                alt="Cat playing in empty bag"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <motion.h1 
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-semibold text-gray-700"
              >
                Looks like your bag is empty.
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-gray-500 text-sm sm:text-base max-w-md"
              >
                You haven't added anything to your bag yet. Browse our
                handcrafted sewn goods to find something special.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Continue Shopping
                  </motion.span>
                </Link>
              </motion.div>
            </motion.main>
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
          <motion.main 
            className="flex-grow px-4 py-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="flex justify-between items-center mb-8"
                variants={itemVariants}
              >
                <h1 className="text-2xl font-bold">Shopping Bag</h1>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={clearBag}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Clear Bag
                </motion.button>
              </motion.div>

              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item._id}
                      variants={itemVariants}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex items-center gap-6 border-b pb-6"
                    >
                      <motion.img
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        src={item.imageURL?.[0]}
                        alt={item.type}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.type}</h3>
                        <p className="text-gray-600">{item.price}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <motion.div 
                            className="flex items-center border rounded-md"
                            whileHover={{ scale: 1.02 }}
                          >
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item._id, item.quantity - 1)}
                              className="px-3 py-1"
                            >
                              -
                            </motion.button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item._id, item.quantity + 1)}
                              className="px-3 py-1"
                            >
                              +
                            </motion.button>
                          </motion.div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeFromBag(item._id)}
                            className="text-sm text-gray-600 hover:text-black"
                          >
                            Remove
                          </motion.button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              <motion.div 
                className="mt-8 pt-6"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">
                    ${calculateTotal().toFixed(2)}
                  </span>
                </div>
                <Link to='/checkout'>
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Bag
