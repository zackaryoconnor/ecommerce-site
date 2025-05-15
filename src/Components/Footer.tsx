import { Link } from 'react-router-dom'
import styles from '../Components/Navbar/Navbar.module.css'


function Footer() {
  return (
    <footer className="w-full text-gray-700 py-16 mt-48">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h2
            className="text-xl font-bold mb-2"
            id={styles['logo']}>
            Thread & Needle
          </h2>
          <p className="text-sm">Handcrafted sewn goods made with love.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-col items-center space-y-1 text-sm">
            <button className="hover:underline">
              <Link to="/">Home</Link>
            </button>
            <button className="hover:underline">
              <Link to="/about">About</Link>
            </button>
            <button className="hover:underline">
              <Link to="/bag">Bag</Link>
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="mailto:zackary25@gmail.com?subject=Tote bag&body=I want a really cool tote bag!"
                className="hover:underline">
                zackary25@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Thread & Needle. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
