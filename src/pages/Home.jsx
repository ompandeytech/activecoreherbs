import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HerbalVideoGallery from '../components/HerbalVideoGallery'
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

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HerbalVideoGallery />
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
    </>
  );
};

export default Home;
