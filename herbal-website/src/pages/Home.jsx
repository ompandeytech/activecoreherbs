import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import CartDrawer from '../components/CartDrawer';
import CheckoutModal from '../components/CheckoutModal';
import FeatureSection from '../components/FeatureSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import FloatingButtons from '../components/FloatingButtons';
import './Home.css';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [checkoutQuantity, setCheckoutQuantity] = useState(1);
  const { notification } = useCart();

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBuyNow = (product, quantity) => {
    setCheckoutProduct(product);
    setCheckoutQuantity(quantity);
    setCheckoutOpen(true);
    setSelectedProduct(null);
  };

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <CartDrawer />
      
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onBuyNow={handleBuyNow}
          />
        )}
      </AnimatePresence>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        product={checkoutProduct}
        quantity={checkoutQuantity}
      />

      <AnimatePresence>
        {notification && (
          <motion.div
            className="notification"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <HeroSlider />

        <section id="products" className="products-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Products</h2>
              <p>Discover our range of premium herbal products</p>
            </motion.div>

            <div className="products-grid">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        </section>

        <FeatureSection />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <FloatingButtons />
    </>
  );
};

export default Home;
