'use client'

import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  // Performance: Memoize submit handler to prevent unnecessary re-renders
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Your message has been sent successfully!')
        e.currentTarget.reset()
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('An error occurred. Please try again later.')
    }
  }, [])

  return (
    <div className="quote-content">
      <div className="quote-header">
        <h6>Get Your Free Quote Today</h6>
        <h2>Request A Quote</h2>
        <p className="mb-3" style={{fontSize: '14px', color: '#666'}}>
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" style={{color: '#0000FF'}} />No Obligation
          <span className="mx-2">|</span>
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" style={{color: '#0000FF'}} />Free Estimates
          <span className="mx-2">|</span>
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" style={{color: '#0000FF'}} />Same-Day Response
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="subject" value="Quote Request" />
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" name="name" className="form-control"
                  placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="tel" name="phone" className="form-control"
                  placeholder="Phone Number" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" name="email" className="form-control"
                  placeholder="Email Address" required />
            </div>
          </div>
          <div className="col-md-6">
            <select name="service" className="form-select" required>
              <option value="">Choose Service</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Air Conditioning">Air Conditioning</option>
              <option value="Heating">Heating</option>
              <option value="Electrical">Electrical</option>
              <option value="Drain & Sewer">Drain & Sewer</option>
              <option value="Water Heaters">Water Heaters</option>
            </select>
          </div>
          <div className="col-md-12">
            <select name="urgency" className="form-select" required>
              <option value="">When do you need service?</option>
              <option value="Emergency - Today">Emergency - Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="Just Browsing">Just Browsing</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <textarea name="message" className="form-control" placeholder="Tell us about your project (optional)"
              rows={3}></textarea>
        </div>
        
        <div className="form-group">
          <label className="mb-2">Preferred Contact Method:</label>
          <div className="d-flex gap-3">
            <label className="d-flex align-items-center">
              <input type="radio" name="contactMethod" value="phone" className="me-2" defaultChecked />
              Phone
            </label>
            <label className="d-flex align-items-center">
              <input type="radio" name="contactMethod" value="email" className="me-2" />
              Email
            </label>
          </div>
        </div>
        
        {message && (
          <div className={`alert ${status === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
            {message}
          </div>
        )}
        
        <button type="submit" className="theme-btn w-100" disabled={status === 'loading'}>
          <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> 
          {status === 'loading' ? 'Sending...' : 'Get My Free Quote'}
        </button>
        
        <div className="text-center mt-3">
          <p className="mb-0" style={{fontSize: '14px'}}>
            Or call us directly: <a href="tel:4697277904" className="fw-bold" style={{color: '#0000FF'}}>469-727-7904</a>
          </p>
        </div>
      </form>
    </div>
  )
}
