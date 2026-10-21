import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa6'
import { FiArrowRight, FiHeadphones, FiMapPin, FiPhone, FiSend, FiShield, FiUser, FiX } from 'react-icons/fi'
import leadPopupImage from '../assets/images/big.png'
import './LeadPopup.css'

const SUBMITTED_KEY = 'activeCoreLeadSubmitted'
const LEADS_KEY = 'activeCoreLeads'
const POPUP_DELAY = 30000
const whatsappMessage = encodeURIComponent('Hello Active Core Herbs, I would like to know more about your products.')
const whatsappUrl = `https://wa.me/916269463325?text=${whatsappMessage}`

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    place: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (localStorage.getItem(SUBMITTED_KEY) === 'true' || isOpen || showSuccess) {
      return undefined
    }

    const popupTimer = setTimeout(() => {
      setIsOpen(true)
    }, POPUP_DELAY)

    return () => clearTimeout(popupTimer)
  }, [isOpen, showSuccess])

  const validateForm = () => {
    const nextErrors = {}
    const mobilePattern = /^\d{10}$/

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Name is required'
    }

    if (!mobilePattern.test(formData.mobile.trim())) {
      nextErrors.mobile = 'Enter a valid 10 digit mobile number'
    }

    if (!formData.place.trim()) {
      nextErrors.place = 'Place is required'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: name === 'mobile' ? value.replace(/\D/g, '').slice(0, 10) : value
    }))
  }

  const handleCancel = () => {
    setIsOpen(false)
    setErrors({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const savedLeads = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]')
    localStorage.setItem(LEADS_KEY, JSON.stringify([
      ...savedLeads,
      {
        ...formData,
        submittedAt: new Date().toISOString()
      }
    ]))
    localStorage.setItem(SUBMITTED_KEY, 'true')
    setIsOpen(false)
    setShowSuccess(true)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
  }

  return (
    <AnimatePresence>
      {(isOpen || showSuccess) && (
        <motion.div
          className="lead-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {isOpen && (
            <motion.div
              className="lead-popup"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-popup-title"
            >
              <button
                type="button"
                className="lead-popup-close"
                onClick={handleCancel}
                aria-label="Close popup"
              >
                <FiX aria-hidden="true" />
              </button>

              <div className="lead-popup-form-panel">
                <div className="lead-popup-kicker"><FaLeaf aria-hidden="true" /> GET IN TOUCH</div>
                <h2 id="lead-popup-title">Stay Connected</h2>
                <p>Share your details and our wellness team will contact you shortly.</p>

                <form onSubmit={handleSubmit} className="lead-popup-form">
                  <label>
                    Full Name
                    <span className="lead-input-wrap"><FiUser aria-hidden="true" /><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} aria-invalid={Boolean(errors.fullName)} required /></span>
                    {errors.fullName && <span className="lead-error">{errors.fullName}</span>}
                  </label>

                  <label>
                    Mobile Number
                    <span className="lead-input-wrap"><FiPhone aria-hidden="true" /><input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} inputMode="numeric" maxLength="10" aria-invalid={Boolean(errors.mobile)} required /></span>
                    {errors.mobile && <span className="lead-error">{errors.mobile}</span>}
                  </label>

                  <label>
                    Place / City
                    <span className="lead-input-wrap"><FiMapPin aria-hidden="true" /><input type="text" name="place" value={formData.place} onChange={handleChange} aria-invalid={Boolean(errors.place)} required /></span>
                    {errors.place && <span className="lead-error">{errors.place}</span>}
                  </label>

                  <div className="lead-popup-actions">
                    <button type="submit" className="lead-submit-btn"><FiSend aria-hidden="true" /> Submit Details <FiArrowRight aria-hidden="true" /></button>
                  </div>
                </form>
                <div className="lead-popup-divider"><span>OR</span></div>
                <a className="lead-whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /> Chat on WhatsApp <FiArrowRight aria-hidden="true" /></a>
                <div className="lead-trust-features" aria-label="Customer support features">
                  <div className="lead-trust-feature"><span><FaLeaf aria-hidden="true" /></span><small>Expert Guidance</small></div>
                  <div className="lead-trust-feature"><span><FiShield aria-hidden="true" /></span><small>Customer Care</small></div>
                  <div className="lead-trust-feature"><span><FiHeadphones aria-hidden="true" /></span><small>Quick Response</small></div>
                </div>
              </div>

              <div className="lead-popup-image-panel">
                <div className="lead-popup-image-frame">
                  <img src={leadPopupImage} alt="Active Core Herbs wellness product" />
                </div>
              </div>
            </motion.div>
          )}

          {showSuccess && (
            <motion.div
              className="lead-popup success"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-success-title"
            >
              <h2 id="lead-success-title">✅ Thank You!</h2>
              <p>Your details have been submitted successfully.</p>
              <button type="button" className="lead-submit-btn lead-ok-btn" onClick={handleSuccessClose}>OK</button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LeadPopup
