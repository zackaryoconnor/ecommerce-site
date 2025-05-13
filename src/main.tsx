import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './Pages/Home.tsx'
import About from './Pages/About.tsx'
import Bag from './Pages/Bag.tsx'
import ProductDetails from './Pages/ProductDetails.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/bag', element: <Bag /> },
  { path: '/productDetails', element: <ProductDetails /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
