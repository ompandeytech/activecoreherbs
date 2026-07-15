import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiInstagram } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <motion.div 
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1>Active Core Herbs</h1>
        </motion.div>

        <motion.div 
          className="navbar-icons"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-icon"
          >
            <FiInstagram size={24} />
          </a>
          
          <button 
            className="navbar-icon cart-icon"
            onClick={() => setIsCartOpen(true)}
          >
            <FiShoppingCart size={24} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  className="cart-count"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
