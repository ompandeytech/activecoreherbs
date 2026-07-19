import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Arjun Mehta',
      location: 'Mumbai',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'Active Core Herbs fits well into my daily routine. I feel more balanced through busy workdays, and the product quality feels consistent every time.'
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'I wanted a simple herbal supplement for overall wellness, and this has been easy to use daily. The packaging is premium and delivery was smooth.'
    },
    {
      name: 'Karan Malhotra',
      location: 'Bangalore',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      text: 'I like that it feels clean and practical, without being overcomplicated. It has become part of my morning routine for general vitality and wellness support.'
    },
    {
      name: 'Vikram Singh',
      location: 'Chennai',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      text: 'The capsules are easy to take and the blend feels thoughtfully made. I appreciate having a natural option that supports my everyday wellness goals.'
    },
    {
      name: 'Rohan Nair',
      location: 'Kolkata',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'Good experience overall. The product feels reliable, the instructions are clear, and it is a comfortable addition to my men\'s wellness routine.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section testimonials">
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
