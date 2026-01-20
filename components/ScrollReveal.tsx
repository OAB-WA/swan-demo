'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Performance: Optimized IntersectionObserver with better options
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px', // Start animation slightly before element is visible
    }

    const revealedElements = new WeakSet() // Track revealed elements to avoid re-processing

    const revealElement = (el: Element) => {
      if (revealedElements.has(el)) return
      
      const target = el as HTMLElement
      target.classList.add('animate__animated')
      target.style.visibility = 'visible'
      revealedElements.add(el)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target)
          observer.unobserve(entry.target) // Unobserve immediately after reveal
        }
      })
    }, observerOptions)

    const observeNewElements = (root: Node) => {
      const elements = (root as HTMLElement).querySelectorAll?.('.wow')
      elements?.forEach((el) => {
        if (!revealedElements.has(el) && !(el as HTMLElement).classList.contains('animate__animated')) {
          ;(el as HTMLElement).style.visibility = 'hidden'
          observer.observe(el)
        }
      })
    }

    // Initial observation - use requestIdleCallback if available for better performance
    const initObservation = () => {
      observeNewElements(document.body)
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(initObservation, { timeout: 2000 })
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(initObservation, 0)
    }

    // Performance: Optimized MutationObserver - only observe main content area, not entire body
    const mainContent = document.querySelector('main') || document.body
    const mutationObserver = new MutationObserver((mutations) => {
      // Batch DOM reads/writes for better performance
      const nodesToObserve: Node[] = []
      
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            nodesToObserve.push(node)
          }
        })
      })

      // Process all new nodes at once
      if (nodesToObserve.length > 0) {
        requestAnimationFrame(() => {
          nodesToObserve.forEach(node => observeNewElements(node))
        })
      }
    })

    // Only observe main content area instead of entire body subtree
    mutationObserver.observe(mainContent, { 
      childList: true, 
      subtree: true 
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
