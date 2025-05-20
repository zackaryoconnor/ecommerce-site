import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import LoginSignup from '../Components/LoginSignup/LoginSignup'
import type { User } from '../types/User'
import { motion, AnimatePresence } from 'framer-motion'

function Account() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLoginSuccess = (userData: User) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const handleSignOut = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        <Navbar />
        <AnimatePresence mode="wait">
          {user ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="mt-36 px-4"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl mx-auto"
              >
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl font-bold text-gray-900 mb-4"
                >
                  Welcome{user.name ? `, ${user.name}` : ''}!
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 mb-8"
                >
                  You are logged in as {user.email}
                </motion.p>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(220, 38, 38, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={handleSignOut}
                  className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700"
                >
                  Sign Out
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <LoginSignup onLoginSuccess={handleLoginSuccess} />
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  )
}

export default Account