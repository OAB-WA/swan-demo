'use client'

import { useState } from 'react'

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  }

  return (
    <div className="quote-content">
      <div className="quote-header">
        <h6>Get Your Free Quote Today</h6>
        <h2>Request A Quote</h2>
        <p className="mb-3" style={{fontSize: '14px', color: '#666'}}>
          <i className="fas fa-check-circle me-2" style={{color: '#0000FF'}}></i>No Obligation
          <span className="mx-2">|</span>
          <i className="fas fa-check-circle me-2" style={{color: '#0000FF'}}></i>Free Estimates
          <span className="mx-2">|</span>
          <i className="fas fa-check-circle me-2" style={{color: '#0000FF'}}></i>Same-Day Response
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
              <option value="Kitchen Plumbing">Kitchen Plumbing</option>
              <option value="Gas Line Services">Gas Line Services</option>
              <option value="Water Line Services">Water Line Services</option>
              <option value="Bathroom Plumbing">Bathroom Plumbing</option>
              <option value="Pipe Line Install">Pipe Line Install</option>
              <option value="Basement Plumbing">Basement Plumbing</option>
              <option value="Electrical Services">Electrical Services</option>
              <option value="HVAC Services">HVAC Services</option>
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
          <i className="far fa-paper-plane me-2"></i> 
          {status === 'loading' ? 'Sending...' : 'Get My Free Quote'}
        </button>
        
        <div className="text-center mt-3">
          <p className="mb-0" style={{fontSize: '14px'}}>
            Or call us directly: <a href="tel:+12145550123" className="fw-bold" style={{color: '#0000FF'}}>(214) 555-0123</a>
          </p>
        </div>
      </form>
    </div>
  )
}
