'use client'

import { useEffect } from 'react'

export default function Preloader() {
  useEffect(() => {
    // Performance: Optimized preloader - faster hide, non-blocking
    const hidePreloader = () => {
      const preloader = document.querySelector('.preloader')
      if (preloader) {
        preloader.classList.add('preloader-deactivate')
      }
    }

    // Use requestAnimationFrame for smoother, non-blocking hide
    const hideWithRAF = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(hidePreloader)
      })
    }

    // Try multiple methods to ensure preloader hides quickly
    if (document.readyState === 'complete') {
      // Page already loaded - hide immediately
      hideWithRAF()
    } else {
      // Wait for DOMContentLoaded (faster than 'load' event)
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideWithRAF, { once: true })
      } else {
        hideWithRAF()
      }
      
      // Fallback for 'load' event
      window.addEventListener('load', hideWithRAF, { once: true })
    }

    // Reduced fallback timeout from 2000ms to 500ms
    const timeout = setTimeout(hidePreloader, 500)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('DOMContentLoaded', hideWithRAF)
      window.removeEventListener('load', hideWithRAF)
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
