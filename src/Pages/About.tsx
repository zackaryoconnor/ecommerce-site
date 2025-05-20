import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <motion.main 
            className="px-6 py-12 max-w-screen-md mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold text-gray-800"
            >
              About Thread & Needle
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed"
            >
              At Thread & Needle, we believe that every stitch tells a story.
              Born out of a love for craftsmanship and creativity, our brand is
              dedicated to creating high-quality, handcrafted sewn goods
              designed to add charm and function to your everyday life.
            </motion.p>

            <motion.img
              variants={itemVariants}
              src="/sewingTools.png"
              alt="Sewing tools and fabric"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Each product is thoughtfully designed, carefully made, and
              lovingly packaged to reflect the care and attention that goes into
              every piece. Whether you're shopping for yourself or someone
              special, we hope our goods bring a little more beauty into your
              day.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/"
                className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Shop Now
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

export default About
