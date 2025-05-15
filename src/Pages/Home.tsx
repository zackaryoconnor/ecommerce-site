import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../types/Product'

import Navbar from '../Components/Navbar/Navbar'
import CardComponent from '../Components/ProductDetails/CardComponent'
import Footer from '../Components/Footer'
import { fetchProducts } from '../Services/ProductServices'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data as Product[])
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 overflow-hidden mt-36">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              state={{ product }}
            >
              <CardComponent product={product} />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
