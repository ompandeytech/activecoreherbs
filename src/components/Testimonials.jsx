import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      text: 'The Ashwagandha capsules have completely transformed my stress levels. I feel more calm and focused throughout the day. Highly recommend to anyone dealing with daily stress!'
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'Amazing quality products! The Amla hair oil has brought back life to my hair. It\'s thicker, shinier, and healthier than ever. Will definitely be ordering again.'
    },
    {
      name: 'Ananya Patel',
      location: 'Bangalore',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      text: 'I\'ve tried many skincare products, but the Neem face serum is truly exceptional. My skin has never looked better. The natural ingredients make all the difference!'
    },
    {
      name: 'Vikram Singh',
      location: 'Chennai',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      text: 'The Tulsi drops have boosted my immunity significantly. I haven\'t fallen sick in months since I started using them. Pure and effective herbal medicine!'
    },
    {
      name: 'Meera Krishnan',
      location: 'Kolkata',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
      text: 'The Rose Water toner is my daily skincare essential. It\'s refreshing, hydrating, and smells divine. My skin feels so soft and radiant after using it.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section testimonials">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real stories from real people who have experienced the transformative power of our herbal products
        </motion.p>

        <div className="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-icon">
                <FiMessageSquare size={40} />
              </div>
              <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
              <div className="testimonial-author">
                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-location">{testimonials[currentTestimonial].location}</p>
                  <div className="author-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <button className="control-btn" onClick={prevTestimonial}>
              <FiChevronLeft size={24} />
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial}>
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
