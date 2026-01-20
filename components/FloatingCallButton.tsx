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
    >
      <FontAwesomeIcon icon={faPhone} style={{fontSize: '20px', flexShrink: 0}} />
      <span className="d-none d-md-inline">Call 469-727-7904</span>
      <span className="d-md-none">Call Now</span>
    </a>
  )
}
