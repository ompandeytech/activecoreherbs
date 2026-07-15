import React from 'react'
import { FaLeaf } from 'react-icons/fa6'
import './ScrollingMarquee.css'

const ScrollingMarquee = () => {
  const products = [
    "Ashwagandha Capsules",
    "Tulsi Drops",
    "Aloe Vera Juice",
    "Giloy Syrup",
    "Neem Capsules",
    "Amla Powder",
    "Brahmi Tonic",
    "Triphala Churna",
    "Moringa Tablets",
    "Keshya Syrup",
    "Herbal Tea",
    "Immunity Booster",
    "Digestive Care",
    "Hair Wellness",
    "Liver Care",
    "Skin Glow Formula"
  ]

  const marqueeContent = [...products, ...products]

  return (
    <section className="scrolling-marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeContent.map((product, index) => (
            <div key={`${product}-${index}`} className="marquee-item">
              <FaLeaf className="marquee-icon" />
              <span>{product}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollingMarquee