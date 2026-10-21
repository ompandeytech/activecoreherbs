import React from 'react'
import { FaLeaf, FaRegGem, FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import './AboutUs.css'

const whatsappMessage = encodeURIComponent('Hello Active Core Herbs, I would like to know more about your products.')
const whatsappUrl = `https://wa.me/916269463325?text=${whatsappMessage}`

const storyPoints = [
  {
    icon: FaLeaf,
    title: 'Inspired by Nature',
    description: 'We celebrate nature-inspired wellness and the enduring value of herbal traditions.'
  },
  {
    icon: FaRegGem,
    title: 'Quality-Focused Approach',
    description: 'Every detail is considered to create a thoughtful product and customer experience.'
  },
  {
    icon: FaWhatsapp,
    title: 'Wellness Made Simple',
    description: 'Discovering our products and reaching our team is designed to feel effortless.'
  }
]

const AboutUs = () => (
  <section className="about-us" aria-labelledby="about-us-heading">
    <div className="about-us__glow about-us__glow--one" aria-hidden="true" />
    <div className="about-us__glow about-us__glow--two" aria-hidden="true" />
    <div className="about-us__container">
      <div className="about-us__intro">
        <span className="about-us__eyebrow">Our Story</span>
        <h2 id="about-us-heading">Nature’s Goodness. <em>Your Everyday Wellness.</em></h2>
        <p>
          At Active Core Herbs, we believe that wellness begins with nature. Our mission is to bring herbal wellness into everyday life through thoughtfully presented products and a customer-first experience.
        </p>
        <div className="about-us__actions">
          <a className="about-us__products-link" href="#products">
            Explore Our Products <FiArrowRight aria-hidden="true" />
          </a>
          <a
            className="about-us__whatsapp-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Active Core Herbs on WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" /> Chat With Us
          </a>
        </div>
        <p className="about-us__contact">Prefer WhatsApp? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+91 62694 63325</a></p>
      </div>

      <div className="about-us__features">
        {storyPoints.map(({ icon: Icon, title, description }, index) => (
          <article className={`about-us__feature about-us__feature--${index + 1}`} key={title}>
            <span className="about-us__feature-icon"><Icon aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default AboutUs
