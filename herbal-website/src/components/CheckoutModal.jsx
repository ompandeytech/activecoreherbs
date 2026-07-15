import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCreditCard, FiTruck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose, product, quantity }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
  });
  const { cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  const total = product ? product.price * quantity : cartTotal;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === 'cod') {
      if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
        alert('Please fill all the fields');
        return;
      }
    }
    
    alert('Order placed successfully!');
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="checkout-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="checkout-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="checkout-header">
            <h2>Checkout</h2>
            <button className="checkout-close" onClick={onClose}>
              <FiX />
            </button>
          </div>

          <div className="checkout-body">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="payment-methods">
              <h3>Payment Method</h3>
              <div className="payment-options">
                <button
                  className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <FiCreditCard />
                  <span>UPI Payment</span>
                </button>
                <button
                  className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <FiTruck />
                  <span>Cash on Delivery</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'upi' && (
              <motion.div
                className="upi-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="qr-code-container">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=herbal@upi&pn=Harbel&am=0&cu=INR"
                    alt="UPI QR Code"
                    className="qr-code"
                  />
                  <p>Scan QR Code to Pay</p>
                </div>
              </motion.div>
            )}

            {paymentMethod === 'cod' && (
              <motion.div
                className="cod-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="cod-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      rows="3"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="Enter pincode"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="checkout-footer">
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
