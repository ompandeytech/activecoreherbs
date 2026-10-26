import React from 'react';
import { FaBolt, FaLeaf, FaTruckFast, FaCircleCheck, FaShieldHalved } from 'react-icons/fa6';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  const announcements = [
    { icon: <FaBolt />, text: 'Fuel Your Strength Naturally' },
    { icon: <FaLeaf />, text: 'Premium Herbal Collection' },
    { icon: <FaTruckFast />, text: 'Free Shipping Across India' },
    { icon: <FaCircleCheck />, text: 'Quality You Can Trust' },
    { icon: <FaShieldHalved />, text: 'Secure Shopping Experience' },
  ];

  // Duplicate the announcements for seamless looping
  const allAnnouncements = [...announcements, ...announcements, ...announcements];

  return (
    <div className="announcement-bar">
      <div className="announcement-marquee">
        {allAnnouncements.map((item, index) => (
          <div key={index} className="announcement-item">
            <span className="announcement-icon">{item.icon}</span>
            <span className="announcement-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
