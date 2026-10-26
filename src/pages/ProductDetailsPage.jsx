import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiShoppingCart, FiChevronDown, FiCheck, FiStar, FiTruck, FiShield, FiCreditCard, FiMail, FiPhone, FiUser, FiTrendingUp, FiHeart, FiDroplet, FiActivity, FiAward, FiChevronLeft, FiChevronRight, FiSearch, FiClock, FiWind } from 'react-icons/fi';
import { FaCartShopping, FaBagShopping, FaLeaf, FaLock, FaTruck, FaLeaf as FaLeaf6, FaBolt, FaHandFist, FaPersonRunning, FaShieldHalved, FaArrowRight, FaSpoon, FaMars } from 'react-icons/fa6';
import { getDiscountPercentage, products } from '../data/products';
import { useCart } from '../context/CartContext';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import CheckoutModal from '../components/CheckoutModal';
import img1 from '../assets/images/img1.png';
import img7 from '../assets/images/img7.png';
import blackProductImage from '../assets/images/black.png';
import img6 from '../assets/images/img6.png';
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ useDefaultProduct = false }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCheckoutOpen } = useCart();
  
  // If useDefaultProduct is true (landing page), use black-edition by default
  // Otherwise use the slug from URL params
  const productSlug = useDefaultProduct ? 'black-edition' : slug;
  const product = products.find(p => p.slug === productSlug);
  const relatedProducts = products.filter(p => p.slug !== productSlug);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = useRef({});

  const tabs = ['description', 'benefits', 'ingredients', 'comparison', 'reviews', 'faq'];

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

  const benefits = [
    {
      icon: <FaSpoon className="benefit-icon" />,
      title: "EASY-TO-MIX POWDER",
      description: "Convenient and easy to consume daily."
    },
    {
      icon: <FiTrendingUp className="benefit-icon" />,
      title: "IMPROVES PERFORMANCE",
      description: "Helps you stay active and focused."
    },
    {
      icon: <FaHandFist className="benefit-icon" />,
      title: "BOOSTS STAMINA",
      description: "Helps you do more, go further."
    },
    {
      icon: <FaBolt className="benefit-icon" />,
      title: "INCREASES ENERGY",
      description: "Supports energy and reduces fatigue."
    },
    {
      icon: <FiClock className="benefit-icon" />,
      title: "SUPPORTS LONGER STAY",
      description: "Helps maintain endurance naturally."
    },
    {
      icon: <FaLeaf className="benefit-icon" />,
      title: "NATURAL 15 HERB BLEND",
      description: "Powered by 15 potent herbs for overall wellness."
    }
  ];

  const ingredients = [
    { name: "Ashwagandha", botanical: "Withania somnifera", desc: "Reduces stress & anxiety", color: "#e6f7e6" },
    { name: "Shatavari", botanical: "Asparagus racemosus", desc: "Supports vitality", color: "#f0f9e6" },
    { name: "Safed Musli", botanical: "Chlorophytum borivilianum", desc: "Enhances strength", color: "#e6f4f7" },
    { name: "Gokhru", botanical: "Tribulus terrestris", desc: "Supports wellness", color: "#f7f0e6" },
    { name: "Kaunch Beej", botanical: "Mucuna pruriens", desc: "Natural vitality", color: "#f0f9e6" },
    { name: "Vidarikand", botanical: "Pueraria tuberosa", desc: "Traditional herb", color: "#e6f4f7" },
    { name: "Shilajit", botanical: "Asphaltum punjabianum", desc: "Enhances vitality", color: "#f7f0e6" },
    { name: "Amalaki", botanical: "Phyllanthus emblica", desc: "Rich in Vitamin C", color: "#f0f9e6" }
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
    <div className={`product-details-page ${useDefaultProduct ? 'landing-page' : ''}`}>
      <AnnouncementBar />
      <Navbar />
      <CartDrawer />
      <CheckoutModal />

      <div className="product-details-content">
        {/* Back button - only show on product detail page, not landing page */}
        {!useDefaultProduct && (
          <div className="product-details-breadcrumb">
            <button onClick={handleBack} className="back-button">
              <FiArrowLeft /> Back
            </button>
          </div>
        )}

        {/* Main Product Section - Three Column Layout */}
        <div className="product-details-main">
          {/* Column 1: Product Gallery */}
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

          {/* Column 2: Product Info */}
          <div className="product-details-info">
            <div className="product-details-title-row">
              <h1 className="product-details-name">Active Core Herbs</h1>
              <div className="premium-badge">Premium Formula</div>
            </div>
            <p className="product-details-subtitle">Stamina | Energy | Vitality</p>

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
              <span className="customer-count">5,000+ customers</span>
            </div>

            <div className="product-details-price-section">
              <span className="product-details-offer-price">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="product-details-mrp">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="product-details-offer-badge">
                {getDiscountPercentage(product)}
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

            {/* Trust Badges */}
            <div className="product-details-delivery">
              <div className="delivery-item">
                <FaLeaf6 className="delivery-icon" />
                <span className="delivery-text">100% Herbal & Natural</span>
              </div>
              <div className="delivery-item">
                <FaLock className="delivery-icon" />
                <span className="delivery-text">Secure Payment</span>
              </div>
              <div className="delivery-item">
                <FaTruck className="delivery-icon" />
                <span className="delivery-text">Free Shipping Across India</span>
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
                {tab === 'comparison' ? 'Comparison' : tab.charAt(0).toUpperCase() + tab.slice(1)}
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
                <p className="premium-description">A premium herbal blend featuring 15 carefully selected herbs.</p>
                <p className="premium-description">Discover a thoughtfully formulated blend designed to complement your daily wellness routine.</p>
                <div className="description-highlights">
                  <span className="highlight-badge">Premium Herbal Formula</span>
                  <span className="highlight-badge">15 Herbs Blend</span>
                </div>
              </div>
              <div className="description-right">
                <img src={img7} alt="Premium Herbal Formula" className="description-image" />
              </div>
            </div>
          </section>

          {/* Why You'll Love It */}
          <section className="premium-section why-love-section" id="why-love">
            <div className="why-love-content">
              <h2 className="why-love-heading">
                <span className="why-love-line"></span>
                Why You'll Love It
                <span className="why-love-line"></span>
              </h2>
              <h3 className="why-love-headline">
                <span className="why-love-highlight">100% Natural.</span> Pure & Safe<br />
                For Your Daily Wellness
              </h3>
              <p className="why-love-description">
                Active Core Herbs is a premium herbal blend made with <strong className="why-love-bold-highlight">15 carefully selected herbs</strong> to support your energy, stamina, and overall vitality. It's <strong className="why-love-bold-highlight">100% natural, free from harmful chemicals</strong>, <strong className="why-love-bold-highlight">lab tested for quality</strong>, and proudly <strong className="why-love-bold-highlight">made in India</strong> — a trusted addition to your daily wellness routine.
              </p>
              <button
                className="why-love-buy-btn"
                onClick={handleBuyNow}
              >
                <FaBagShopping />
                BUY NOW
                <FaArrowRight />
              </button>
            </div>
          </section>

          {/* Benefits Section */}
          <section
            className="premium-section"
            id="benefits"
            ref={(el) => (sectionRefs.current.benefits = el)}
          >
            <h2 className="benefits-heading">
              <span className="benefits-heading-maroon">Key</span>
              <span className="benefits-heading-black"> Benefits</span>
            </h2>
            <div className="benefits-heading-decorator">
              <span className="decorator-line"></span>
              <span className="decorator-line"></span>
            </div>
            <div className="benefits-two-column">
              {/* Left side - Infographic image */}
              <div className="benefits-image-side">
                <img src={img6} alt="Key Benefits Infographic" className="benefits-infographic-img" />
              </div>

              {/* Right side - Benefits grid */}
              <div className="benefits-content-side">
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon-circle">
                        {benefit.icon}
                      </div>
                      <div className="benefit-text-wrapper">
                        <h3 className="benefit-title">{benefit.title}</h3>
                        <p className="benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                  <p className="ingredient-botanical">{ingredient.botanical}</p>
                  <p className="ingredient-desc">{ingredient.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Product Comparison Section */}
          <section
            className="premium-section comparison-section"
            id="comparison"
            ref={(el) => (sectionRefs.current.comparison = el)}
          >
            <h2 className="premium-heading centered">Product Comparison</h2>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="comparison-header">Feature</th>
                    <th className="comparison-header active-core">Active Core Herbs</th>
                    <th className="comparison-header standard">Standard Herbal Powder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="comparison-feature">Number of Herbs</td>
                    <td className="comparison-value active-core">
                      <strong>15 herbs</strong>
                      <span className="comparison-detail">Carefully selected blend</span>
                    </td>
                    <td className="comparison-value standard">
                      General blend
                      <span className="comparison-detail">Ingredient details may vary</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="comparison-feature">Formulation</td>
                    <td className="comparison-value active-core">
                      <strong>Herbal blend</strong>
                      <span className="comparison-detail">Precision crafted formula</span>
                    </td>
                    <td className="comparison-value standard">
                      Whole-herb powder
                      <span className="comparison-detail">Basic preparation</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="comparison-feature">Daily Wellness Support</td>
                    <td className="comparison-value active-core">
                      <strong>Designed for regular use</strong>
                      <span className="comparison-detail">As directed</span>
                    </td>
                    <td className="comparison-value standard">
                      Varies
                      <span className="comparison-detail">Formulation and usage vary</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="comparison-feature">Sourcing & Quality</td>
                    <td className="comparison-value active-core">
                      <strong>Verified sourcing</strong>
                      <span className="comparison-detail">Quality information available</span>
                    </td>
                    <td className="comparison-value standard">
                      Varies
                      <span className="comparison-detail">Sourcing and transparency vary by product</span>
                    </td>
                  </tr>
                </tbody>
              </table>
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

          {/* Related Products - Large Horizontal Cards - only show on product detail page */}
          {!useDefaultProduct && relatedProducts.length > 0 && (
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
                        <span className="offer">{getDiscountPercentage(relatedProduct)}</span>
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
                <a href="mailto:contact@activecoreherbs.com" className="cta-btn secondary">Contact Us</a>
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
