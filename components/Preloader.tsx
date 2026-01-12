'use client'

import { useEffect } from 'react'

export default function Preloader() {
  useEffect(() => {
    // Hide preloader when page loads - multiple fallbacks
    const hidePreloader = () => {
      const preloader = document.querySelector('.preloader')
      if (preloader) {
        preloader.classList.add('preloader-deactivate')
      }
    }

    // Try multiple methods to ensure preloader hides
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // Page already loaded or interactive
      hidePreloader()
    } else {
      // Wait for DOM to be ready
      document.addEventListener('DOMContentLoaded', hidePreloader)
      window.addEventListener('load', hidePreloader)
    }

    // Fallback timeout (shorter for better UX)
    const timeout = setTimeout(() => {
      hidePreloader()
    }, 1500)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('DOMContentLoaded', hidePreloader)
      window.removeEventListener('load', hidePreloader)
    }
  }, [])

  return (
    <div className="preloader">
      <div className="loader">
        <div className="loader-box-1"></div>
        <div className="loader-box-2"></div>
      </div>
    </div>
  )
}
