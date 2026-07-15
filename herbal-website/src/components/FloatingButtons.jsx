import { FiMessageCircle, FiInstagram } from 'react-icons/fi';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp"
        aria-label="Contact on WhatsApp"
      >
        <FiMessageCircle />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button instagram"
        aria-label="Visit Instagram"
      >
        <FiInstagram />
      </a>
    </div>
  );
};

export default FloatingButtons;
