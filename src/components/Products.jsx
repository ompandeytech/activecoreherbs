import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEye, FaCartShopping, FaBagShopping } from 'react-icons/fa6'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import './Products.css'

const Products = () => {
  const { addToCart, setIsCheckoutOpen } = useCart()
  const navigate = useNavigate()
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const currentProduct = products[currentProductIndex]

  const handleAddToCart = () => {
    addToCart(currentProduct, quantity)
  }

  const handleViewDetails = () => {
    navigate(`/product/${currentProduct.slug}`)
  }

  const handleBuyNow = () => {
    addToCart(currentProduct, quantity)
    setIsCheckoutOpen(true)
  }

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length)
    setQuantity(1)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length)
    setQuantity(1)
  }

  const goToProduct = (index) => {
    setCurrentProductIndex(index)
    setQuantity(1)
  }

  return (
    <section id="products" className="section products-section">
      <div className="products-header">
        <h2 className="section-title">Premium Herbal Collection</h2>
      </div>

      <div className="product-showcase-wrapper">
        {/* Product Slider Container */}
        <div className="product-slider-container">
          {/* Slides */}
          <div 
            className="product-slides" 
            style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="product-slide">
                <div className="product-content">
                  {/* Left Column: Images */}
                  <div className="product-images">
                    <div className="main-image-wrapper">
                      <motion.img 
                        src={product.image} 
                        alt={product.name}
                        className="main-product-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Info */}
                  <div className="product-info">
                    <div className="product-name-wrapper">
                      <h3 className="product-name">{product.name}</h3>
                    </div>

                    <p className="product-short-desc">{product.shortDescription}</p>

                    <div className="product-rating-section">
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="star">
                            {i < Math.floor(product.rating) ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="rating-value">{product.rating} ({product.reviews} reviews)</span>
                    </div>

                    <div className="product-price-section">
                      <span className="offer-price">₹{product.price}</span>
                      <span className="mrp">₹{product.originalPrice}</span>
                      <span className="offer-badge">{product.offer}</span>
                    </div>

                    <div className="product-stock">
                      {product.stock > 10 ? (
                        <span className="in-stock">✓ In Stock</span>
                      ) : (
                        <span className="low-stock">⚠️ Limited Stock: {product.stock} left</span>
                      )}
                    </div>

                    <div className="product-benefits">
                      <h4 className="info-title">Key Benefits</h4>
                      <ul className="benefits-list">
                        {product.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="benefit-item">
                            <span className="benefit-icon">🌿</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-ingredients">
                      <h4 className="info-title">Ingredients</h4>
                      <p className="ingredients-text">{product.ingredients}</p>
                    </div>

                    <div className="product-actions-section">
                      <div className="quantity-selector">
                        <button 
                          className="qty-btn"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >−</button>
                        <span className="qty-value">{quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => setQuantity(quantity + 1)}
                        >+</button>
                      </div>

                      <div className="action-buttons">
                        <button className="action-btn view-details" onClick={handleViewDetails}>
                          <FaEye size={16} />
                          View Details
                        </button>
                        <button className="action-btn buy-now" onClick={handleBuyNow}>
                          <FaBagShopping size={16} />
                          Buy Now
                        </button>
                        <button className="action-btn add-to-cart" onClick={handleAddToCart}>
                          <FaCartShopping size={16} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <button className="slider-nav slider-prev" onClick={prevProduct}>
            <FiChevronLeft size={24} />
          </button>
          <button className="slider-nav slider-next" onClick={nextProduct}>
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="product-slider-dots">
          {products.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${currentProductIndex === idx ? 'active' : ''}`}
              onClick={() => goToProduct(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
