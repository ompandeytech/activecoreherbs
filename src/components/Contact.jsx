import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  return (
    <section className="section contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail size={24} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@activecoreherbs.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone size={24} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>123 Herbal Street, Mumbai, Maharashtra 400001</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your message" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
