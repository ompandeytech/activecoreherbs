import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiShoppingCart } from 'react-icons/fi'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import './Hero.css'

const HeroProductSlider = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const goToProduct = (index) => {
    setCurrentProductIndex(index)
  }

  const nextProduct = () => {
    setCurrentProductIndex((current) => (current + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentProductIndex((current) => (current - 1 + products.length) % products.length)
  }

  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProductIndex((current) => (current + 1) % products.length)
    }, 4000)

    return () => clearInterval(productInterval)
  }, [])

  return (
    <>
      <div className="product-glow"></div>
      <div className="glass-card">
        <div
          className="hero-product-track"
          style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div className="hero-product-slide" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
          ))}
        </div>
        <div className="glass-reflection"></div>
      </div>

      <button className="hero-slider-arrow hero-slider-prev" onClick={prevProduct} aria-label="Previous product">
        <FiChevronLeft />
      </button>
      <button className="hero-slider-arrow hero-slider-next" onClick={nextProduct} aria-label="Next product">
        <FiChevronRight />
      </button>

      <div className="hero-slider-dots" aria-label="Product slider pagination">
        {products.map((product, index) => (
          <button
            key={product.id}
            className={`hero-slider-dot ${currentProductIndex === index ? 'active' : ''}`}
            onClick={() => goToProduct(index)}
            aria-label={`Show ${product.name}`}
          />
        ))}
      </div>
    </>
  )
}

const Hero = () => {
  const { addToCart, setIsCheckoutOpen } = useCart()
  const heroDetailsProduct = products[0]

  const handleAddToCart = () => {
    addToCart(heroDetailsProduct, 1)
  }

  const handleBuyNow = () => {
    addToCart(heroDetailsProduct, 1)
    setIsCheckoutOpen(true)
  }

  return (
    <>
      <div className="announcement-bar">
        <span>⚡ Fuel Your Strength Naturally | Premium Herbal Collection | Free Shipping Across India</span>
      </div>
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
        <div className="hero-left">
          <HeroProductSlider />
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <div className="hero-product-info">
            <div className="luxury-badge">
              <span className="badge-icon">🌿</span>
              <span>100% Natural & Herbal</span>
            </div>

            <h1 className="hero-heading">Active Core Herbs</h1>

            <p className="hero-description">{heroDetailsProduct.shortDescription}</p>

            <div className="hero-rating">
              <span className="hero-stars">★★★★★</span>
              <span>{heroDetailsProduct.rating} ({heroDetailsProduct.reviews} reviews)</span>
            </div>

            <div className="hero-price-row">
              <span className="hero-price">₹{heroDetailsProduct.price.toLocaleString('en-IN')}</span>
              <span className="hero-original-price">₹{heroDetailsProduct.originalPrice.toLocaleString('en-IN')}</span>
              <span className="hero-discount-badge">{heroDetailsProduct.offer}</span>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={handleBuyNow}
              >
                Buy Now
                <FiArrowRight />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleAddToCart}
              >
                <FiShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
