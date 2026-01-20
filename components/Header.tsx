'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useBooking } from '@/contexts/BookingContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faEnvelope, 
  faClock, 
  faBars,
  faTimes,
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
  const pathname = usePathname()
  const { openModal } = useBooking()

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

  // Add/remove class to body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

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
                    <a href="https://www.google.com/maps/search/?api=1&query=309+U.S.+80+Frontage+Rd,+Sunnyvale,+TX+75182" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />309 U.S. 80 Frontage Rd, Sunnyvale, TX 75182
                    </a>
                  </li>
                  <li>
                    <a href="tel:4697277904">
                      <FontAwesomeIcon icon={faPhone} className="me-2" />469-727-7904
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faClock} className="me-2" /> 24/7 Emergency Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#" aria-label="Whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`main-navigation ${isSticky ? 'fixed-top shadow-sm sticky-nav' : ''}`}>
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
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
              </span>
            </button>
            {/* Backdrop overlay */}
            {isMobileMenuOpen && (
              <div 
                className="mobile-menu-backdrop"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  zIndex: 998,
                  animation: 'fadeIn 0.3s ease'
                }}
              />
            )}
            <div 
              className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} 
              id="main_nav"
            >
              {/* Mobile Menu Header */}
              <div className="mobile-menu-header">
                <Link className="mobile-menu-logo" href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image 
                    src="/assets/img/swan logo.webp" 
                    alt="Swan Electric, Plumbing, Heating & Air" 
                    width={100}
                    height={50}
                    priority
                    style={{maxWidth: '100px', height: 'auto'}}
                  />
                </Link>
                <button 
                  className="mobile-menu-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <ul className="navbar-nav ms-auto">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link 
                      className={`nav-link ${pathname === link.href ? 'active' : ''}`} 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="header-nav-right">
                <div className="header-btn d-flex gap-2">
                  <a href="tel:4697277904" className="theme-btn theme-btn2" style={{whiteSpace: 'nowrap'}}>
                    <FontAwesomeIcon icon={faPhone} className="me-2" />CALL NOW
                  </a>
                  <button 
                    onClick={() => {
                      openModal()
                      setIsMobileMenuOpen(false)
                    }} 
                    className="theme-btn" 
                    style={{background: '#0000cc', whiteSpace: 'nowrap', border: 'none'}}
                  >
                    BOOK NOW<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
