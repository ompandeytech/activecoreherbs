import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiStar, FiShoppingCart, FiMinus, FiPlus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onBuyNow }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="product-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <FiX />
          </button>

          <div className="modal-content">
            <div className="modal-left">
              <div className="main-image-container">
                <motion.img
                  key={selectedImage}
                  src={images[selectedImage]}
                  alt={product.name}
                  className="main-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {images.length > 1 && (
                <div className="image-thumbnails">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-right">
              <h2 className="modal-product-name">{product.name}</h2>

              <div className="modal-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
                <span className="rating-value">{product.rating} Rating</span>
              </div>

              <div className="modal-price">
                <span className="current-price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">₹{product.originalPrice}</span>
                )}
              </div>

              <div className="modal-description">
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>

              {product.ingredients && (
                <div className="modal-ingredients">
                  <h4>Ingredients</h4>
                  <p>{product.ingredients}</p>
                </div>
              )}

              {product.benefits && (
                <div className="modal-benefits">
                  <h4>Benefits</h4>
                  <ul>
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.usage && (
                <div className="modal-usage">
                  <h4>Usage</h4>
                  <p>{product.usage}</p>
                </div>
              )}

              <div className="modal-stock">
                <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </span>
              </div>

              <div className="modal-quantity">
                <h4>Quantity</h4>
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <div className="modal-actions">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  <FiShoppingCart />
                  Add to Cart
                </button>
                <button className="buy-now-btn" onClick={() => onBuyNow(product, quantity)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
