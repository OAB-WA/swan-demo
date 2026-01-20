'use client'

import { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Performance: Memoize scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    // Show button after scrolling 300px
    setIsVisible(window.scrollY > 300)
  }, [])

  useEffect(() => {
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  if (!isVisible) return null

  return (
    <a
      href="tel:4697277904"
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
        transition: 'all 0.3s ease',
        minHeight: '48px',
        minWidth: '48px',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'rgba(0, 0, 255, 0.2)'
      }}
      onMouseEnter={(e) => {
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 255, 0.6)'
        }
      }}
      onMouseLeave={(e) => {
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 255, 0.4)'
        }
      }}
      onTouchStart={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)'
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      <FontAwesomeIcon icon={faPhone} style={{fontSize: '20px', flexShrink: 0}} />
      <span className="d-none d-md-inline">Call 469-727-7904</span>
      <span className="d-md-none">Call Now</span>
    </a>
  )
}
