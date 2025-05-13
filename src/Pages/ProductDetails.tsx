import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import ProductCard from '../Components/ProductDetails/CardComponent'
import Footer from '../Components/Footer'
import DetailsComponent from '../Components/ProductDetails/DetailsComponent'

function ProductDetails() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-black hover:underline transition">
          ← Back to All Products
        </Link>
        <div className="flex-grow grid grid-cols-1 content-center lg:grid-cols-2 gap-0 w-full mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 place-items-start overflow-hidden">
            <ProductCard showInfo={false} />
            <ProductCard showInfo={false} />
            <ProductCard showInfo={false} />
            <ProductCard showInfo={false} />
          </div>
          <DetailsComponent />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ProductDetails
