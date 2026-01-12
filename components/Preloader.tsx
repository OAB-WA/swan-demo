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
    if (document.readyState === 'complete') {
      // Page already loaded
      setTimeout(hidePreloader, 100)
    } else {
      // Wait for page load
      window.addEventListener('load', () => {
        setTimeout(hidePreloader, 100)
      })
    }

    // Fallback timeout (in case scripts don't load)
    const timeout = setTimeout(() => {
      hidePreloader()
    }, 1000)

    return () => {
      clearTimeout(timeout)
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
