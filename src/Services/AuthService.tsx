const API_URL = 'http://localhost:3000/api'

export const signup = async (email: string, password: string, name?: string) => {
  try {
    const response = await fetch(`${API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Signup failed')
  }
}
