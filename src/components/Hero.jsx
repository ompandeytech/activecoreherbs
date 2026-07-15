import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import whiteProductImage from '../assets/images/white.png'
import blackProductImage from '../assets/images/black.png'
import './Hero.css'

const Hero = () => {
  const heroProductImages = [whiteProductImage, blackProductImage]
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentHeroImage((current) => (current + 1) % heroProductImages.length)
    }, 3000)

    return () => clearInterval(imageInterval)
  }, [heroProductImages.length])

  return (
    <section className="hero">
      {/* Background Decorations */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Floating Leaves */}
      <div className="floating-leaves">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="leaf"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -50,
              rotate: Math.random() * 360,
              opacity: 0.3 + Math.random() * 0.3
            }}
            animate={{
              y: window.innerHeight + 50,
              rotate: Math.random() * 360 + 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 25}px`
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="hero-content-wrapper">
        {/* Left Column */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="luxury-badge">
            <span className="badge-icon">🌿</span>
            <span>100% Natural & Herbal</span>
          </div>

          <h1 className="hero-heading">
            Pure Herbal Wellness
            <br />
            For Everyday Life
          </h1>

          <p className="hero-description">
            Experience the power of nature with premium herbal formulations crafted using traditional Ayurvedic ingredients. Safe, effective, and made for daily wellness.
          </p>

          <div className="hero-buttons">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
              <FiArrowRight />
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -3, borderColor: "#3FAE5A" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <FiPhone />
              Contact Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="product-glow"></div>
          <div className="glass-card">
            <AnimatePresence initial={false}>
              <motion.img 
                key={currentHeroImage}
                src={heroProductImages[currentHeroImage]}
                alt="Premium Herbal Product"
                className="product-image"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  opacity: { duration: 0.7, ease: "easeInOut" },
                  x: { duration: 0.7, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05 }}
              />
            </AnimatePresence>
            <div className="glass-reflection"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
