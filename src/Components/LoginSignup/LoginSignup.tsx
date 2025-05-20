import { useState } from 'react'
import LoginSignupUI from '../LoginSignup/LoginSignupUI'
import { signup } from '../../Services/AuthService'
import type { LoginSignupProps } from '../../types/User'

const LoginSignup = ({ onLoginSuccess }: LoginSignupProps) => {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')

  const handleSubmit = async (email: string, password: string, name?: string) => {
    try {
      if (!isLogin) {
        const user = await signup(email, password, name)
        onLoginSuccess(user)
      } else {
        onLoginSuccess({ email })
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <LoginSignupUI 
      onSubmit={handleSubmit}
      onToggleMode={() => setIsLogin(!isLogin)}
      isLogin={isLogin}
      error={error}
    />
  )
}

export default LoginSignup