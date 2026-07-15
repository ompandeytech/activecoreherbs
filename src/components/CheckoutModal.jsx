import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCreditCard, FiTruck } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './CheckoutModal.css'

const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: ''
  })

  const handleClose = () => {
    setIsCheckoutOpen(false)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePlaceOrder = () => {
    if (paymentMethod === 'cod') {
      if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
        alert('Please fill in all delivery details')
        return
      }
    }
    alert('Order placed successfully!')
    clearCart()
    handleClose()
  }

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-content checkout-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleClose}>
              <FiX size={28} />
            </button>

            <h2 className="checkout-title">Checkout</h2>

            <div className="checkout-total">
              <span>Total Amount:</span>
              <span className="checkout-amount">₹{cartTotal}</span>
            </div>

            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <div className="payment-options">
                <button
                  className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <FiCreditCard size={24} />
                  <span>UPI Payment</span>
                </button>
                <button
                  className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <FiTruck size={24} />
                  <span>Cash on Delivery</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'upi' && (
              <div className="upi-payment">
                <div className="qr-code">
                  <div className="qr-placeholder">
                    <div className="qr-pattern">
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className="qr-cell" />
                      ))}
                    </div>
                  </div>
                  <p>Scan QR Code to Pay</p>
                </div>
                <button className="btn btn-primary place-order-btn" onClick={handlePlaceOrder}>
                  Confirm Payment
                </button>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="cod-payment">
                <h3>Delivery Details</h3>
                <form className="delivery-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
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
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Delivery Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
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
                      placeholder="Enter your pincode"
                      required
                    />
                  </div>
                </form>
                <button className="btn btn-primary place-order-btn" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CheckoutModal
