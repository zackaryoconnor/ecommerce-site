import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/ProductCard'
import Footer from '../../Components/Footer'

function App() {
  return (
    <div className="grid place-items-center my-4 px-24">
      <div className='max-w-600'>
        <Navbar />
        {/* <h1 className="text-2xl font-bold mb-6">All Products</h1> */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 overflow-hidden mt-36'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
