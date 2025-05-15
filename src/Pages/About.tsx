import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="px-6 py-12 max-w-screen-md mx-auto text-center space-y-8">
              <h1 className="text-4xl font-bold text-gray-800">
                About Thread & Needle
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                At Thread & Needle, we believe that every stitch tells a story.
                Born out of a love for craftsmanship and creativity, our brand
                is dedicated to creating high-quality, handcrafted sewn goods
                designed to add charm and function to your everyday life.
              </p>

              <img
                src="public/sewingTools.png"
                alt="Sewing tools and fabric"
                className="w-full max-w-md mx-auto rounded-lg shadow-sm"
              />

              <p className="text-gray-600 text-lg leading-relaxed">
                Each product is thoughtfully designed, carefully made, and
                lovingly packaged to reflect the care and attention that goes
                into every piece. Whether you're shopping for yourself or
                someone special, we hope our goods bring a little more beauty
                into your day.
              </p>

              <a
                href="/"
                className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Shop Now
              </a>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
