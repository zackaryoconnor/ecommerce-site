import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../types/Product'
import Navbar from '../Components/Navbar/Navbar'
import CardComponent from '../Components/ProductDetails/CardComponent'
import Footer from '../Components/Footer'
import { fetchProducts } from '../Services/ProductServices'
import { motion } from 'framer-motion'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data as Product[])
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-36 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              variants={itemVariants}
              className="flex justify-center"
            >
              <Link
                to={`/product/${product._id}`}
                state={{ product }}
                className="block w-full"
              >
                <CardComponent product={product} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}

export default App
