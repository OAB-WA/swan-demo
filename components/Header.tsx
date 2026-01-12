'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faEnvelope, 
  faClock, 
  faStream, 
  faPhone, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      {/* header top */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />309 US Highway 80 E, Sunnyvale, TX 75150
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@swanplumbingdemo.com">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />info@swanplumbingdemo.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faClock} className="me-2" /> Sun - Fri (08AM - 10PM)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`main-navigation ${isSticky ? 'fixed-top' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image 
                src="/assets/img/swan logo.webp" 
                alt="Swan Electric, Plumbing, Heating & Air" 
                width={120}
                height={60}
                priority
                style={{maxWidth: '120px', height: 'auto'}}
              />
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen} 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faStream} />
              </span>
            </button>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="main_nav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </li>
              </ul>
              <div className="header-nav-right">
                <div className="header-btn d-flex gap-2">
                  <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{whiteSpace: 'nowrap'}}>
                    <FontAwesomeIcon icon={faPhone} className="me-2" />CALL NOW
                  </a>
                  <Link href="/contact" className="theme-btn" onClick={() => setIsMobileMenuOpen(false)}>
                    GET QUOTE<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
