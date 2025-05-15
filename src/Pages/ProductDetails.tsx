import { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import ImageGallery from '../Components/ImageGallery'
import Footer from '../Components/Footer'
import DetailsComponent from '../Components/ProductDetails/DetailsComponent'
import { fetchProductById } from '../Services/ProductServices'
import type { Product } from '../types/Product'

function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [product, setProduct] = useState<Product | null>(
    location.state?.product || null
  )

  useEffect(() => {
    if (!product) {
      const getProduct = async () => {
        try {
          if (id) {
            const data = await fetchProductById(id)
            setProduct(data)
          }
        } catch (error) {
          console.log(error)
        }
      }

      getProduct()
    }
  }, [id, product])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-black hover:underline transition">
          ← Back to All Products
        </Link>
        <div className="flex-grow grid grid-cols-1 content-center lg:grid-cols-2 gap-8 w-full mt-4">
          <div className="w-full">
            <ImageGallery product={product} />
          </div>
          <DetailsComponent product={product} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ProductDetails
