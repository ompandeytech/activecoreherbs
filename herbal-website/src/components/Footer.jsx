import { FiInstagram, FiPhone, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <h1>Harbel</h1>
              <span>Premium Herbal</span>
            </div>
            <p className="footer-description">
              Experience the power of nature with our premium herbal products. 
              Crafted with care, delivered with love.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram"
            >
              <FiInstagram />
              Follow Us
            </a>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <FiPhone />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>support@harbel.com</span>
            </div>
            <div className="contact-item">
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe for exclusive offers and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Harbel. All rights reserved. Made with <FiHeart /> for your wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
