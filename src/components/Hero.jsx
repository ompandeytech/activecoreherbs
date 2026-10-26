import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCartShopping, FaBagShopping } from 'react-icons/fa6'
import { getDiscountPercentage, products } from '../data/products'
import { useCart } from '../context/CartContext'
import './Hero.css'

const Hero = () => {
  const { addToCart, setIsCheckoutOpen } = useCart()
  const heroProduct = products[0]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(heroProduct, quantity)
  }

  const handleBuyNow = () => {
    addToCart(heroProduct, quantity)
    setIsCheckoutOpen(true)
  }

  return (
    <section className="hero-product-section">
      <div className="hero-product-content">
        {/* Main Product Section - Matching ProductDetailsPage */}
        <div className="hero-product-main">
          {/* Left Side: Product Gallery */}
          <div className="hero-product-gallery">
            <div className="hero-product-main-image-wrapper">
              <motion.img
                src={heroProduct.images[currentImageIndex]}
                alt={heroProduct.name}
                className="hero-product-main-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="hero-product-thumbnails">
              {heroProduct.images.map((img, index) => (
                <button
                  key={index}
                  className={`hero-product-thumbnail ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`${heroProduct.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="hero-product-info">
            <h1 className="hero-product-name">{heroProduct.name}</h1>

            <div className="hero-product-rating">
              <div className="hero-product-star-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">
                    {i < Math.floor(heroProduct.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <span className="hero-product-rating-value">
                {heroProduct.rating} ({heroProduct.reviews} reviews)
              </span>
            </div>

            <div className="hero-product-price-section">
              <span className="hero-product-offer-price">
                ₹{heroProduct.price.toLocaleString('en-IN')}
              </span>
              <span className="hero-product-mrp">
                ₹{heroProduct.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="hero-product-offer-badge">
                {getDiscountPercentage(heroProduct)}
              </span>
            </div>

            <div className="hero-product-stock">
              {heroProduct.stock > 10 ? (
                <span className="in-stock">✓ In Stock</span>
              ) : (
                <span className="low-stock">
                  ⚠️ Limited Stock: {heroProduct.stock} left
                </span>
              )}
            </div>

            <p className="hero-product-short-desc">
              {heroProduct.shortDescription}
            </p>

            <div className="hero-product-actions">
              <div className="hero-product-quantity-selector">
                <button
                  className="hero-product-qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="hero-product-qty-value">{quantity}</span>
                <button
                  className="hero-product-qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="hero-product-action-buttons">
                <button
                  className="hero-product-action-btn hero-product-buy-now"
                  onClick={handleBuyNow}
                >
                  <FaBagShopping />
                  Buy Now
                </button>
                <button
                  className="hero-product-action-btn hero-product-add-to-cart"
                  onClick={handleAddToCart}
                >
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="hero-product-delivery">
              <div className="delivery-item">
                <span className="delivery-icon">🌱</span>
                <span className="delivery-text">100% Herbal</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">🔒</span>
                <span className="delivery-text">Secure Payment</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">💰</span>
                <span className="delivery-text">COD Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
