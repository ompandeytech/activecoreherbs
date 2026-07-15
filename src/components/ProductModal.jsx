import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiShoppingCart, FiMinus, FiPlus, FiHeart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './ProductModal.css'

const ProductModal = () => {
  const { selectedProduct, setSelectedProduct, addToCart, setIsCheckoutOpen } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!selectedProduct) return null

  const handleClose = () => {
    setSelectedProduct(null)
    setQuantity(1)
    setSelectedImage(0)
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity)
    handleClose()
  }

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity)
    setIsCheckoutOpen(true)
    handleClose()
  }

  const increaseQuantity = () => {
    if (quantity < selectedProduct.stock) {
      setQuantity(prev => prev + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <AnimatePresence>
      {selectedProduct && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-content product-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleClose}>
              <FiX size={28} />
            </button>

            <div className="product-modal-grid">
              <div className="product-modal-left">
                <div className="product-modal-main-image">
                  <motion.img
                    key={selectedImage}
                    src={selectedProduct.images[selectedImage]}
                    alt={selectedProduct.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="product-modal-thumbnails">
                  {selectedProduct.images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${selectedProduct.name} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-modal-right">
                <span className="product-modal-category">{selectedProduct.category}</span>
                <h2 className="product-modal-name">{selectedProduct.name}</h2>
                
                <div className="product-modal-rating">
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(selectedProduct.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="product-modal-reviews">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>

                <div className="product-modal-price-section">
                  <div className="product-modal-prices">
                    <span className="product-modal-price">₹{selectedProduct.price}</span>
                    <span className="product-modal-original-price">₹{selectedProduct.originalPrice}</span>
                    {selectedProduct.offer && (
                      <span className="product-modal-offer">{selectedProduct.offer}</span>
                    )}
                  </div>
                  <span className="product-modal-stock">
                    {selectedProduct.stock > 10 ? 'In Stock' : `Only ${selectedProduct.stock} left`}
                  </span>
                </div>

                <p className="product-modal-description">{selectedProduct.description}</p>

                <div className="product-modal-details">
                  <div className="product-modal-detail-item">
                    <h4>Ingredients</h4>
                    <p>{selectedProduct.ingredients}</p>
                  </div>

                  <div className="product-modal-detail-item">
                    <h4>Benefits</h4>
                    <ul>
                      {selectedProduct.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-modal-detail-item">
                    <h4>How to Use</h4>
                    <p>{selectedProduct.howToUse}</p>
                  </div>

                  <div className="product-modal-detail-item">
                    <h4>Specifications</h4>
                    <div className="product-modal-specs">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-key">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-modal-actions">
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={decreaseQuantity}>
                      <FiMinus size={18} />
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button className="quantity-btn" onClick={increaseQuantity}>
                      <FiPlus size={18} />
                    </button>
                  </div>

                  <button className="btn btn-primary add-to-cart-modal" onClick={handleAddToCart}>
                    <FiShoppingCart size={20} style={{ marginRight: '10px' }} />
                    Add to Cart
                  </button>

                  <button className="btn btn-gold buy-now-modal" onClick={handleBuyNow}>
                    Buy Now
                  </button>

                  <button className="btn btn-secondary wishlist-btn">
                    <FiHeart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProductModal
