import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import './Gallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
  'https://images.unsplash.com/photo-1612417836324-8603b0f7ed30?w=600&q=80',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
  'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&q=80',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
  'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&q=80',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Gallery</h2>
          <p>Explore our premium herbal products in detail</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              style={{
                gridRow: index % 3 === 0 ? 'span 2' : 'auto',
              }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <FiZoomIn />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="lightbox-close"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <FiX />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Lightbox"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
