import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
// Kept for easy restoration of the original customer-video carousel.
// import HerbalVideoGallery from '../components/HerbalVideoGallery'
import Products from '../components/Products'
import WhyChooseUs from '../components/WhyChooseUs'
import ScrollingMarquee from '../components/ScrollingMarquee'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Instagram from '../components/Instagram'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'
import CheckoutModal from '../components/CheckoutModal'
import LeadPopup from '../components/LeadPopup'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <HerbalVideoGallery /> */}
      <AboutUs />
      <Products />
      <WhyChooseUs />
      <ScrollingMarquee />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Instagram />
      <Contact />
      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <LeadPopup />
    </>
  );
};

export default Home;
