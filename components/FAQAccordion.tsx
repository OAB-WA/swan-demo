'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null)

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className="accordion" id="accordionExample">
      {items.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button 
              className={`accordion-button ${activeId === item.id ? '' : 'collapsed'}`} 
              type="button" 
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={activeId === item.id} 
              aria-controls={`collapse${item.id}`}
            >
              <span><FontAwesomeIcon icon={faQuestion} /></span> {item.question}
            </button>
          </h2>
          <div 
            id={`collapse${item.id}`} 
            className={`accordion-collapse collapse ${activeId === item.id ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`} 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
