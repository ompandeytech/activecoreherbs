import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  const handleQuantityChange = (productId, delta) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + delta);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />
          
          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="cart-close" onClick={() => setIsCartOpen(false)}>
                <FiX />
              </button>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <FiShoppingBag />
                  <p>Your cart is empty</p>
                  <button
                    className="continue-shopping-btn"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">₹{item.price}</p>

                        <div className="cart-item-quantity">
                          <button
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <FiMinus />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-actions">
                        <p className="cart-item-total">₹{item.price * item.quantity}</p>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>₹{cartTotal}</span>
                  </div>
                </div>

                <button className="checkout-btn" onClick={() => setIsCartOpen(false)}>
                  Proceed to Checkout
                </button>

                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
