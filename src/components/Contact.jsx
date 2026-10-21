import React from 'react'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { FaComments, FaHeadset, FaLeaf, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

const whatsappMessage = encodeURIComponent('Hello Active Core Herbs, I have a question about your products.')

const Contact = () => {
  return (
    <section id="contact" className="section contact">
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
                <p><a href="mailto:care@activecoreherbs.com">care@activecoreherbs.com</a></p>
              </div>
            </div>

            <div className="contact-help">
              <span className="contact-help-eyebrow">Support that feels personal</span>
              <h3>We’re Here to Help</h3>
              <p>Have questions about our herbal wellness products? Our team is here to help you discover the right products and make your shopping experience simple.</p>

              <div className="contact-feature-list">
                <article className="contact-feature-card">
                  <span className="contact-feature-icon"><FaHeadset aria-hidden="true" /></span>
                  <div><h4>Personal Assistance</h4><p>Get assistance with product enquiries and orders.</p></div>
                </article>
                <article className="contact-feature-card">
                  <span className="contact-feature-icon"><FaLeaf aria-hidden="true" /></span>
                  <div><h4>Quality-Focused Products</h4><p>Explore our thoughtfully presented herbal wellness collection.</p></div>
                </article>
                <article className="contact-feature-card">
                  <span className="contact-feature-icon"><FaComments aria-hidden="true" /></span>
                  <div><h4>Quick Communication</h4><p>Connect with our team for product-related questions.</p></div>
                </article>
              </div>

              <div className="contact-whatsapp-banner">
                <div>
                  <h4>Need a quick response?</h4>
                  <p>Chat with our team on WhatsApp.</p>
                </div>
                <a
                  href={`https://wa.me/916269463325?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-button"
                >
                  <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                </a>
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
