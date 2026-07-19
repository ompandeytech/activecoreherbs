import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import blackProductImage from '../assets/images/black.png'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <div className="why-choose-decorative-circle circle-1"></div>
          <div className="why-choose-decorative-circle circle-2"></div>
          <div className="why-choose-decorative-circle circle-3"></div>
          <img 
            src={blackProductImage} 
            alt="Herbal Product" 
            className="why-choose-product-image"
          />
        </div>
        <div className="why-choose-right">
          <span className="why-choose-badge">Why Choose Active Core Herbs</span>
          <h2 className="why-choose-heading">Nature Powered Wellness</h2>
          <p className="why-choose-description">
            Experience the pure essence of nature with our meticulously crafted herbal supplements. 
            Each product is born from ancient Ayurvedic wisdom, combined with modern scientific 
            rigor to deliver exceptional results you can feel.
          </p>
          <ul className="why-choose-benefits-list">
            <li className="why-choose-benefit">
              <span className="why-choose-benefit-check">
                <FiCheck />
              </span>
              GMP Certified
            </li>
            <li className="why-choose-benefit">
              <span className="why-choose-benefit-check">
                <FiCheck />
              </span>
              Non GMO
            </li>
            <li className="why-choose-benefit">
              <span className="why-choose-benefit-check">
                <FiCheck />
              </span>
              Chemical Free
            </li>
            <li className="why-choose-benefit">
              <span className="why-choose-benefit-check">
                <FiCheck />
              </span>
              Fast Delivery
            </li>
            <li className="why-choose-benefit">
              <span className="why-choose-benefit-check">
                <FiCheck />
              </span>
              Made in India
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
