import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiSmile } from 'react-icons/fi';
import { FaLeaf, FaFlask } from 'react-icons/fa';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: FaLeaf,
    title: 'Natural Ingredients',
    description: 'Sourced directly from organic farms, ensuring purity and potency in every product.',
  },
  {
    icon: FiAward,
    title: 'Premium Quality',
    description: 'Rigorous quality control processes to deliver only the finest herbal products.',
  },
  {
    icon: FaFlask,
    title: 'Scientifically Tested',
    description: 'Every product undergoes extensive laboratory testing for safety and efficacy.',
  },
  {
    icon: FiHeart,
    title: 'Safe for Daily Use',
    description: 'Gentle formulations suitable for everyday use without any side effects.',
  },
  {
    icon: FiSmile,
    title: 'Customer Satisfaction',
    description: 'Thousands of satisfied customers trust us for their wellness journey.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Harbel?</h2>
          <p>Discover what sets us apart in the world of herbal wellness</p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="reason-icon-wrapper">
                <reason.icon />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
