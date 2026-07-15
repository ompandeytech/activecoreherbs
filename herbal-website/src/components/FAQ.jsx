import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import './FAQ.css';

const faqs = [
  {
    question: 'How to use your herbal products?',
    answer: 'Our products come with detailed usage instructions on the packaging. Generally, most capsules should be taken with water after meals, while oils can be applied topically. For specific dosages, please refer to the product label or consult our customer support.',
  },
  {
    question: 'What is the delivery time?',
    answer: 'We offer fast delivery across India. Standard delivery takes 3-5 business days for metro cities and 5-7 business days for other locations. Express delivery options are available for urgent orders.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 7 days of delivery if the product is unopened and in its original packaging. For damaged or defective products, please contact us within 48 hours of delivery for a full refund or replacement.',
  },
  {
    question: 'Are your products 100% natural?',
    answer: 'Yes, all our products are made from 100% natural herbal ingredients sourced from certified organic farms. We do not use any artificial preservatives, colors, or harmful chemicals in our formulations.',
  },
  {
    question: 'Are your products safe for daily use?',
    answer: 'Absolutely! Our products are formulated to be safe for daily consumption or application. However, we recommend following the recommended dosage and consulting a healthcare professional if you have any specific medical conditions.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our products</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <FiChevronDown />
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
  );
};

export default FAQ;
