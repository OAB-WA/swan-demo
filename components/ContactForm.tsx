'use client'

import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function ContactForm() {
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
        setMessage('Your message has been sent successfully! We will get back to you soon.')
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
    <div className="contact-form">
      <div className="contact-form-header">
        <h2>Get In Touch</h2>
        <p>Have a question or need assistance? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
      </div>
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="name" placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="subject" placeholder="Your Subject" required />
        </div>
        <div className="form-group">
          <textarea name="message" cols={30} rows={5} className="form-control" placeholder="Write Your Message" required></textarea>
        </div>
        
        {message && (
          <div className={`form-messege ${status === 'success' ? 'text-success' : 'text-danger'}`}>
            {message}
          </div>
        )}
        
        <button type="submit" className="theme-btn" disabled={status === 'loading'}>
          <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
