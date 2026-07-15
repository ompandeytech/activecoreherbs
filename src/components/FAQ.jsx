import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Are your products 100% organic?',
      answer: 'Yes, all our products are made from 100% organic ingredients sourced from certified organic farms. We believe in purity and transparency in every product we offer.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'We offer free shipping on orders above ₹999. Standard delivery takes 5-7 business days, while express delivery takes 2-3 business days. You can track your order in real-time once shipped.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Currently, we ship within India only. We are working on expanding our shipping to international destinations and will update our customers as soon as international shipping becomes available.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unopened and unused products. If you are not satisfied with your purchase, please contact our customer service team within 30 days of delivery for a full refund.'
    },
    {
      question: 'Are your products tested on animals?',
      answer: 'Absolutely not! We are a cruelty-free brand and none of our products are ever tested on animals. We love and respect all living beings.'
    },
    {
      question: 'How should I store the products?',
      answer: 'Most of our products should be stored in a cool, dry place away from direct sunlight. Specific storage instructions are provided on each product label. Please follow them for best results.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section faq">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to common questions about our products and services
        </motion.p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
