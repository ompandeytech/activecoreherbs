import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    review: 'Amazing products! I\'ve been using their Ashwagandha for 3 months and the difference is incredible. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    review: 'The quality is exceptional. Pure herbal products with no side effects. My whole family now uses Harbel products.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    review: 'Fast delivery and excellent customer service. The Amla capsules have worked wonders for my hair health.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    review: 'Best herbal brand I\'ve found. The Tulsi drops are my daily go-to. Trustworthy and effective!',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Customers Say</h2>
          <p>Real experiences from real people</p>
        </motion.div>

        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote-icon">
                <FaQuoteRight />
              </div>

              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={i < testimonials[currentIndex].rating ? 'star-filled' : 'star-empty'}
                    />
                  ))}
                </div>

                <p className="review-text">"{testimonials[currentIndex].review}"</p>

                <div className="customer-info">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="customer-image"
                  />
                  <div className="customer-details">
                    <h4>{testimonials[currentIndex].name}</h4>
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="nav-btn prev" onClick={prevTestimonial}>
            ‹
          </button>
          <button className="nav-btn next" onClick={nextTestimonial}>
            ›
          </button>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
