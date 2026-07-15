import React from 'react'
import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import './Instagram.css'

const Instagram = () => {
  const instagramPosts = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]

  return (
    <section className="section instagram">
      <div className="container">
        <motion.div
          className="instagram-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FiInstagram size={40} />
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-subtitle">
            Join our community for daily inspiration, wellness tips, and exclusive offers
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary instagram-btn"
          >
            @ACTIVECOREHERBS
          </a>
        </motion.div>

        <div className="instagram-grid">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={post} alt={`Instagram post ${index + 1}`} />
              <div className="instagram-overlay">
                <FiInstagram size={30} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instagram
