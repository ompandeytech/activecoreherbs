import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&q=80',
      heading: 'Pure Herbal Wellness',
      description: 'Discover the power of nature with our premium herbal products crafted with care.',
    },
    {
      image: 'https://images.unsplash.com/photo-1612417836324-8603b0f7ed30?w=1920&q=80',
      heading: 'Ancient Wisdom, Modern Science',
      description: 'Traditional Ayurvedic formulas backed by scientific research for optimal health.',
    },
    {
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1920&q=80',
      heading: '100% Natural Ingredients',
      description: 'No chemicals, no preservatives - just pure, organic herbs from trusted sources.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="slide-image">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].heading} />
            <div className="slide-overlay"></div>
          </div>
          
          <div className="slide-content">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-box"
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slides[currentSlide].heading}
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="shop-now-btn"
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="slider-arrow prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-arrow next" onClick={nextSlide}>
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="floating-elements">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
      </div>
    </section>
  );
};

export default HeroSlider;
