import React from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiMail } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Active Core Herbs</h2>
            <p>
              Premium herbal products crafted with care using traditional Ayurvedic wisdom and modern science. 
              Experience the healing power of nature with our 100% organic, cruelty-free formulations.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/activecoreherbs?igsh=MWg5ZmRkNjd6bHBscQ==" target="_blank" rel="noopener noreferrer">
                <FiInstagram size={24} />
              </a>
              <a href="mailto:care@activecoreherbs.com">
                <FiMail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FiMail size={18} />
                <span>care@activecoreherbs.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; 2024 Active Core Herbs. All rights reserved.</p>
          <p>Made with ❤️ for your wellness journey</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
