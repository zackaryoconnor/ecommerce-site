import { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import ImageGallery from '../Components/ImageGallery'
import Footer from '../Components/Footer'
import DetailsComponent from '../Components/ProductDetails/DetailsComponent'
import { fetchProductById } from '../Services/ProductServices'
import type { Product } from '../types/Product'
import { motion } from 'framer-motion'

function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [product, setProduct] = useState<Product | null>(
    location.state?.product || null
  )

  useEffect(() => {
    if (!product && id) {
      const getProduct = async () => {
        try {
          const data = await fetchProductById(id)
          setProduct(data)
        } catch (error) {
          console.error(error)
        }
      }
      getProduct()
    }
  }, [id, product])

  if (!product) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-screen"
      >
        Loading...
      </motion.div>
    )
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-black hover:underline transition">
              ← Back to All Products
            </Link>
          </motion.div>
          <motion.div 
            className="flex-grow grid grid-cols-1 content-center lg:grid-cols-2 gap-8 w-full mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <ImageGallery product={product} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <DetailsComponent product={product} />
            </motion.div>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}

export default ProductDetails
