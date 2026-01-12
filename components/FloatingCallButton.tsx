'use client'

import { useEffect, useState } from 'react'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="tel:+12145550123"
      className="floating-call-btn"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9998,
        background: '#0000FF',
        color: '#fff',
        borderRadius: '50px',
        padding: '15px 25px',
        boxShadow: '0 4px 20px rgba(0, 0, 255, 0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '600',
        animation: 'pulse 2s infinite',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'
        e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 255, 0.6)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 255, 0.4)'
      }}
    >
      <i className="fas fa-phone" style={{fontSize: '20px'}}></i>
      <span className="d-none d-md-inline">Call (214) 555-0123</span>
      <span className="d-md-none">Call Now</span>
    </a>
  )
}
