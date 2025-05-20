import { useState } from 'react'
import type { FormEvent } from 'react'
import type { LoginSignupUIProps } from '../../types/User'
import { motion, AnimatePresence } from 'framer-motion'

const LoginSignupUI = ({ onSubmit, onToggleMode, isLogin, error }: LoginSignupUIProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(email, password, name)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.2 
          }}
          className="text-4xl font-bold text-gray-900 mb-2"
        >
          {isLogin ? 'Log in.' : 'Sign up.'}
        </motion.h1>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 space-y-6" 
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0, x: -20 }}
                  animate={{ opacity: 1, height: 'auto', x: 0 }}
                  exit={{ opacity: 0, height: 0, x: 20 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <motion.label 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </motion.label>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="John Doe"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <motion.label 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </motion.label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="me@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
              <motion.label 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password *
              </motion.label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="********"
              />
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="submit"
            className="w-full py-3 px-4 rounded-full text-sm font-medium text-white bg-black"
            >
            {isLogin ? 'Log in' : 'Sign up'}
          </motion.button>

        <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05, textDecoration: "underline" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="button"
              className="text-black-600"
              onClick={onToggleMode}
            >
              {isLogin ? 'Create an account' : 'Already have an account?'}
            </motion.button>
        </div>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default LoginSignupUI