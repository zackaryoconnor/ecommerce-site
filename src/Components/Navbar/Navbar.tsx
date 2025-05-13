import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center w-full mb-24">
        <h2 className="text-xl" id={styles['logo']}><button><Link to="/" className="">Thread & Needle</Link></button></h2>
        <div className='flex space-x-12'>
          <button className='hover:underline'><Link to="/" className="">Home</Link></button>
          <button className='hover:underline'><Link to="/about" className="">About</Link></button>
          <button className='hover:underline'><Link to="/bag">Bag</Link></button>
        </div>
      </nav>
    </>
  )
}

export default Navbar