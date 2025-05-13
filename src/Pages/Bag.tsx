import { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

function Bag() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 space-y-6">
              <img
                src="/public/emptyBag.png"
                alt="Cat playing in empty bag"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              />

              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">
                Looks like your bag is empty.
              </h1>

              <p className="text-gray-500 text-sm sm:text-base max-w-md">
                You haven't added anything to your bag yet. Browse our
                handcrafted sewn goods to find something special.
              </p>

              <Link
                to="/"
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Continue Shopping
              </Link>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Bag
