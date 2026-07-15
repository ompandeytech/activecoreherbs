import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiEye } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewDetails = () => {
    onViewDetails(product);
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="product-image-container">
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="product-overlay">
          <button
            className="overlay-button view-btn"
            onClick={handleViewDetails}
            aria-label="View details"
          >
            <FiEye />
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.shortDescription}</p>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
            />
          ))}
          <span className="rating-value">{product.rating}</span>
        </div>

        <div className="product-footer">
          <span className="product-price">₹{product.price}</span>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
