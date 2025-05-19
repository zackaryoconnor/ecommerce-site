import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useBag } from '../../context/BagContext'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

function Navbar() {
  const { totalItems } = useBag()
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center w-full mb-24">
      <h2 className="text-xl" id={styles['logo']}>
        <Link to="/">Thread & Needle</Link>
      </h2>


      <div className='hidden md:flex space-x-12'>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/bag" className="hover:underline relative">
          Bag
          {totalItems > 0 && (
            <span className='absolute -top-2 -right-4 bg-gray-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="/account" className="hover:underline">Account</Link>
      </div>


      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>


      {isOpen && (
        <div className="absolute top-20 right-0 w-48 bg-white shadow-lg rounded-lg py-2 md:hidden">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className="hover:underline py-2"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:underline py-2"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/bag" 
              className="hover:underline py-2 relative"
              onClick={() => setOpen(false)}
            >
              Bag
              {totalItems > 0 && (
                <span className='absolute -top-2 -right-4 bg-gray-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                  {totalItems}
                </span>
              )}
            </Link>
            <Link 
              to="/account" 
              className="hover:underline py-2"
              onClick={() => setOpen(false)}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar