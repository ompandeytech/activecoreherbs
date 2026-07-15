import { useState, useEffect } from 'react';
import { FiShoppingCart, FiInstagram } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Harbel</h1>
          <span>Premium Herbal</span>
        </div>
        
        <div className="navbar-actions">
          <button 
            className="cart-button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-button"
            aria-label="Visit Instagram"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
