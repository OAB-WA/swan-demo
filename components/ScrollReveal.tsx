'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const revealElement = (el: Element) => {
      const target = el as HTMLElement
      target.classList.add('animate__animated')
      target.style.visibility = 'visible'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target)
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const observeNewElements = (root: Node) => {
      const elements = (root as HTMLElement).querySelectorAll?.('.wow')
      elements?.forEach((el) => {
        if (!(el as HTMLElement).classList.contains('animate__animated')) {
          ;(el as HTMLElement).style.visibility = 'hidden'
          observer.observe(el)
        }
      })
    }

    // Initial observation
    observeNewElements(document.body)

    // Mutation observer to handle dynamically loaded components (like HeroSlider)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            observeNewElements(node)
          }
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
