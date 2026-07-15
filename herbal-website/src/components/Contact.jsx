import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>support@harbel.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiInstagram />
              </div>
              <div className="contact-details">
                <h4>Instagram</h4>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  @harbel_official
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
