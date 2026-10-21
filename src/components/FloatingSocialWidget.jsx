import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './FloatingSocialWidget.css'

const whatsappMessage = encodeURIComponent('Hello Active Core Herbs, I would like to know more about your products.')

const FloatingSocialWidget = () => {
  return (
    <div className="floating-social-widget">
      <motion.a
        href={`https://wa.me/916269463325?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp-button"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
        }}
        whileHover={{ scale: 1.08, y: -3 }}
        transition={{ duration: 0.5 }}
      >
        <FaWhatsapp className="floating-icon" aria-hidden="true" />
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
