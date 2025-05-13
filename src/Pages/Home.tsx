import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'motion/react'

import Navbar from '../Components/Navbar/Navbar'
import CardComponent from '../Components/ProductDetails/CardComponent'
import Footer from '../Components/Footer'

function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Navbar />
        {/* <h1 className="text-2xl font-bold mb-6">All Products</h1> */}
        
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 overflow-hidden mt-36">
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
            <Link to="/productDetails"><CardComponent /></Link>
          </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
