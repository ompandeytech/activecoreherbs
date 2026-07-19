import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './FloatingSocialWidget.css'

const FloatingSocialWidget = () => {
  return (
    <div className="floating-social-widget">
      <motion.a
        href="https://wa.me/917580811009"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp-button"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
        }}
        whileHover={{ scale: 1.08, y: -3 }}
        transition={{ duration: 0.5 }}
      >
        <FaWhatsapp className="floating-icon" />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/activecoreherbs?igsh=MWg5ZmRkNjd6bHBscQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button instagram-button"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
        }}
        whileHover={{ scale: 1.08, y: -3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <FaInstagram className="floating-icon" />
      </motion.a>
    </div>
  )
}

export default FloatingSocialWidget
