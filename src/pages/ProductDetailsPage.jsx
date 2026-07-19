import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiShoppingCart, FiChevronDown, FiCheck, FiStar, FiTruck, FiShield, FiCreditCard, FiMail, FiPhone, FiUser, FiTrendingUp, FiHeart, FiDroplet, FiActivity, FiAward } from 'react-icons/fi';
import { FaCartShopping, FaBagShopping, FaLeaf } from 'react-icons/fa6';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import CheckoutModal from '../components/CheckoutModal';
import blackProductImage from '../assets/images/black.png';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCheckoutOpen } = useCart();
  const product = products.find(p => p.slug === slug);
  const relatedProducts = products.filter(p => p.slug !== slug);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = useRef({});

  const tabs = ['description', 'benefits', 'ingredients', 'reviews', 'faq'];

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCheckoutOpen(true);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const scrollToSection = (tab) => {
    setActiveTab(tab);
    const element = sectionRefs.current[tab];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    tabs.forEach((tab) => {
      const element = sectionRefs.current[tab];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      tabs.forEach((tab) => {
        const element = sectionRefs.current[tab];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const features = [
    { icon: "🌿", title: "100% Herbal", desc: "Pure natural ingredients" },
    { icon: "🚫", title: "No Chemicals", desc: "Free from harmful additives" },
    { icon: "🧪", title: "Lab Tested", desc: "Certified quality standards" },
    { icon: "🇮🇳", title: "Made in India", desc: "Proudly Indian heritage" }
  ];

  const benefits = [
    { icon: <FiTrendingUp className="benefit-icon" />, title: "Boosts Immunity" },
    { icon: <FiActivity className="benefit-icon" />, title: "Improves Energy" },
    { icon: <FaLeaf className="benefit-icon" />, title: "Better Digestion" },
    { icon: <FiHeart className="benefit-icon" />, title: "Daily Wellness" },
    { icon: <FiDroplet className="benefit-icon" />, title: "Supports Skin" },
    { icon: <FiAward className="benefit-icon" />, title: "Natural Formula" }
  ];

  const ingredients = [
    { name: "Ashwagandha", desc: "Reduces stress & anxiety", color: "#e6f7e6" },
    { name: "Tulsi", desc: "Boosts immunity", color: "#f0f9e6" },
    { name: "Shilajit", desc: "Enhances vitality", color: "#e6f4f7" },
    { name: "Amla", desc: "Rich in Vitamin C", color: "#f7f0e6" }
  ];

  const howItWorks = [
    { step: 1, title: "Take Capsule", desc: "1-2 capsules daily" },
    { step: 2, title: "Daily Routine", desc: "After meals with water" },
    { step: 3, title: "Feel Better", desc: "Experience wellness" }
  ];

  const whyChoose = [
    { icon: <FiTruck />, title: "Free Shipping", desc: "On orders over ₹999" },
    { icon: <FiCreditCard />, title: "COD Available", desc: "Pay on delivery" },
    { icon: <FiShield />, title: "Secure Payment", desc: "100% safe checkout" },
    { icon: <FiAward />, title: "Premium Packaging", desc: "Gift-ready boxes" },
    { icon: <FiMail />, title: "Customer Support", desc: "24/7 assistance" }
  ];

  const reviews = [
    { name: "Arjun Mehta", avatar: "A", rating: 5, date: "2 days ago", text: "Absolutely like this product. It fits easily into my routine and the packaging feels premium.", verified: true },
    { name: "Rahul Verma", avatar: "R", rating: 5, date: "1 week ago", text: "Best herbal supplement I've tried for daily wellness support. The quality feels outstanding and consistent.", verified: true },
    { name: "Karan Patel", avatar: "K", rating: 4, date: "2 weeks ago", text: "Great product. The taste is mild and it's easy to incorporate into my morning routine.", verified: true },
    { name: "Vikram Singh", avatar: "V", rating: 5, date: "3 weeks ago", text: "Premium quality and a good fit for men's wellness. The customer service is also excellent.", verified: true }
  ];

  const faqData = [
    { question: "How long does it take to see results?", answer: "Most customers start noticing positive changes within 2-3 weeks of consistent daily use." },
    { question: "Are there any side effects?", answer: "Our products are made with 100% natural ingredients and are generally well-tolerated. If you have specific medical conditions, please consult your physician." },
    { question: "Is this product suitable for vegetarians?", answer: "Yes! All our products are 100% vegetarian and vegan-friendly." },
    { question: "What is the shelf life?", answer: "Each product has a shelf life of 24 months from the date of manufacture." },
    { question: "Do you offer a money-back guarantee?", answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not happy, contact us for a full refund." }
  ];

  return (
    <div className="product-details-page">
      <Navbar />
      <CartDrawer />
      <CheckoutModal />

      <div className="product-details-content">
        {/* Back button */}
        <div className="product-details-breadcrumb">
          <button onClick={handleBack} className="back-button">
            <FiArrowLeft /> Back
          </button>
        </div>

        {/* Main Product Section */}
        <div className="product-details-main">
          {/* Left Side: Product Gallery */}
          <div className="product-details-gallery">
            <div className="product-details-main-image-wrapper">
              <motion.img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="product-details-main-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="product-details-thumbnails">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`product-details-thumbnail ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="product-details-info">
            <h1 className="product-details-name">{product.name}</h1>

            <div className="product-details-rating">
              <div className="product-details-star-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <span className="product-details-rating-value">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-details-price-section">
              <span className="product-details-offer-price">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="product-details-mrp">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="product-details-offer-badge">
                {product.offer}
              </span>
            </div>

            <div className="product-details-stock">
              {product.stock > 10 ? (
                <span className="in-stock">✓ In Stock</span>
              ) : (
                <span className="low-stock">
                  ⚠️ Limited Stock: {product.stock} left
                </span>
              )}
            </div>

            <p className="product-details-short-desc">
              {product.shortDescription}
            </p>

            <div className="product-details-actions">
              <div className="product-details-quantity-selector">
                <button
                  className="product-details-qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="product-details-qty-value">{quantity}</span>
                <button
                  className="product-details-qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="product-details-action-buttons">
                <button
                  className="product-details-action-btn product-details-buy-now"
                  onClick={handleBuyNow}
                >
                  <FaBagShopping />
                  Buy Now
                </button>
                <button
                  className="product-details-action-btn product-details-add-to-cart"
                  onClick={handleAddToCart}
                >
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="product-details-delivery">
              <div className="delivery-item">
                <span className="delivery-icon">🌱</span>
                <span className="delivery-text">100% Herbal</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">🔒</span>
                <span className="delivery-text">Secure Payment</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">💰</span>
                <span className="delivery-text">COD Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Tab Navigation */}
        <div className="sticky-tabs-container">
          <nav className="sticky-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => scrollToSection(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* All Premium Sections */}
        <div className="premium-sections">
          {/* Product Description - Two Column */}
          <section 
            className="premium-section" 
            id="description"
            ref={(el) => (sectionRefs.current.description = el)}
          >
            <div className="description-two-column">
              <div className="description-left">
                <h2 className="premium-heading">The Essence of Wellness</h2>
                <p className="premium-description">{product.description}</p>
                <p className="premium-description">{product.shortDescription}</p>
              </div>
              <div className="description-right">
                <div className="natural-card">
                  <div className="natural-icon">🌿</div>
                  <p className="natural-text">Pure & Natural</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why You'll Love It */}
          <section className="premium-section" id="features">
            <h2 className="premium-heading centered">Why You'll Love It</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section 
            className="premium-section" 
            id="benefits"
            ref={(el) => (sectionRefs.current.benefits = el)}
          >
            <h2 className="premium-heading centered">Key Benefits</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon-wrapper">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Ingredients Section */}
          <section 
            className="premium-section" 
            id="ingredients"
            ref={(el) => (sectionRefs.current.ingredients = el)}
          >
            <h2 className="premium-heading centered">Powerful Ingredients</h2>
            <div className="ingredients-grid">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  className="ingredient-card"
                  style={{ backgroundColor: ingredient.color }}
                  whileHover={{ y: -5 }}
                >
                  <div className="ingredient-icon">🍃</div>
                  <h3 className="ingredient-name">{ingredient.name}</h3>
                  <p className="ingredient-desc">{ingredient.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="premium-section" id="how-it-works">
            <h2 className="premium-heading centered">How It Works</h2>
            <div className="how-it-works">
              {howItWorks.map((item, index) => (
                <div key={index} className="how-step">
                  <div className="step-number">{item.step}</div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.desc}</p>
                  {index < howItWorks.length - 1 && (
                    <div className="step-connector">↓</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Active Core Herbs */}
          <section className="premium-section why-choose-section" id="why-choose">
            <div className="why-choose-container">
              <div className="why-choose-left">
                <div className="why-choose-decorative-circle circle-1"></div>
                <div className="why-choose-decorative-circle circle-2"></div>
                <div className="why-choose-decorative-circle circle-3"></div>
                <img 
                  src={blackProductImage} 
                  alt="Herbal Product" 
                  className="why-choose-product-image"
                />
              </div>
              <div className="why-choose-right">
                <span className="why-choose-badge">Why Choose Active Core Herbs</span>
                <h2 className="why-choose-heading">Nature Powered Wellness</h2>
                <p className="why-choose-description">
                  Experience the pure essence of nature with our meticulously crafted herbal supplements. 
                  Each product is born from ancient Ayurvedic wisdom, combined with modern scientific 
                  rigor to deliver exceptional results you can feel.
                </p>
                <ul className="why-choose-benefits-list">
                  <li className="why-choose-benefit">
                    <span className="why-choose-benefit-check">
                      <FiCheck />
                    </span>
                    GMP Certified
                  </li>
                  <li className="why-choose-benefit">
                    <span className="why-choose-benefit-check">
                      <FiCheck />
                    </span>
                    Non GMO
                  </li>
                  <li className="why-choose-benefit">
                    <span className="why-choose-benefit-check">
                      <FiCheck />
                    </span>
                    Chemical Free
                  </li>
                  <li className="why-choose-benefit">
                    <span className="why-choose-benefit-check">
                      <FiCheck />
                    </span>
                    Fast Delivery
                  </li>
                  <li className="why-choose-benefit">
                    <span className="why-choose-benefit-check">
                      <FiCheck />
                    </span>
                    Made in India
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customer Reviews */}
          <section 
            className="premium-section" 
            id="reviews"
            ref={(el) => (sectionRefs.current.reviews = el)}
          >
            <h2 className="premium-heading centered">What Our Customers Say</h2>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <div className="review-avatar">{review.avatar}</div>
                    <div className="review-info">
                      <div className="review-name-rating">
                        <h4 className="review-name">{review.name}</h4>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className={i < review.rating ? 'filled' : ''} />
                          ))}
                        </div>
                      </div>
                      {review.verified && <span className="verified-badge">✓ Verified Purchase</span>}
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section 
            className="premium-section" 
            id="faq"
            ref={(el) => (sectionRefs.current.faq = el)}
          >
            <h2 className="premium-heading centered">Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <FiChevronDown className={`faq-icon ${openFAQ === index ? 'rotated' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products - Large Horizontal Cards */}
          {relatedProducts.length > 0 && (
            <section className="premium-section" id="related">
              <h2 className="premium-heading centered">You May Also Like</h2>
              <div className="related-products">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/product/${relatedProduct.slug}`} className="related-product-card-large">
                    <div className="related-product-image-large">
                      <img src={relatedProduct.image} alt={relatedProduct.name} />
                    </div>
                    <div className="related-product-info-large">
                      <h3 className="related-product-name-large">{relatedProduct.name}</h3>
                      <p className="related-product-short-desc">{relatedProduct.shortDescription}</p>
                      <div className="related-product-price-large">
                        <span className="offer-price">₹{relatedProduct.price.toLocaleString('en-IN')}</span>
                        <span className="mrp">₹{relatedProduct.originalPrice.toLocaleString('en-IN')}</span>
                        <span className="offer">{relatedProduct.offer}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA Banner */}
          <section className="cta-banner">
            <div className="cta-content">
              <h2 className="cta-heading">Ready to Experience Natural Wellness?</h2>
              <div className="cta-buttons">
                <button className="cta-btn primary" onClick={handleBuyNow}>Buy Now</button>
                <Link to="/" className="cta-btn secondary">Contact Us</Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
