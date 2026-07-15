import { motion } from 'framer-motion';
import { FaLeaf } from "react-icons/fa";
import { FiShield, FiTruck, FiCreditCard, FiLock, FiAward, FiCheckCircle } from "react-icons/fi";
import './FeatureSection.css';

const features = [
  {
    icon: FaLeaf,
    title: '100% Herbal',
    description: 'Pure herbal ingredients sourced from nature',
  },
  {
    icon: FiShield,
    title: 'Chemical Free',
    description: 'No harmful chemicals or preservatives',
  },
  {
    icon: FiTruck,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping nationwide',
  },
  {
    icon: FiLock,
    title: 'Secure Payment',
    description: 'Safe and encrypted payment options',
  },
  {
    icon: FiAward,
    title: 'Trusted Quality',
    description: 'Premium quality products you can trust',
  },
  {
    icon: FiCheckCircle,
    title: 'Certified',
    description: 'GMP and ISO certified manufacturing',
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Us</h2>
          <p>Experience the difference with our premium herbal products</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
