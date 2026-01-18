'use client'

import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCalendarAlt, faClock, faUser, faMapMarkerAlt, faPhone, faEnvelope, faCheckCircle, faArrowLeft, faArrowRight, faTools, faGasPump, faDroplet, faBath, faPaintRoller, faHouseFloodWater, faBolt, faWind } from '@fortawesome/free-solid-svg-icons'
import { getAllServices } from '@/lib/services'

interface BookingData {
  service: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  address: string
  city: string
  zipCode: string
  description: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const services = getAllServices()
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({})

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep(1)
      setStatus('idle')
      setBookingData({})
    }
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const getNextAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      if (date.getDay() !== 0) {
        dates.push(date)
      }
    }
    return dates
  }

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceSelect = (serviceTitle: string) => {
    handleInputChange('service', serviceTitle)
    setStep(2)
  }

  const handleDateSelect = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    handleInputChange('date', dateStr)
  }

  const handleTimeSelect = (time: string) => {
    handleInputChange('time', time)
  }

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    await new Promise(resolve => setTimeout(resolve, 1500))

    setStatus('success')
    setStep(5)
  }, [])

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  const handleClose = () => {
    if (step === 5) {
      setStep(1)
      setStatus('idle')
      setBookingData({})
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9998,
          animation: 'fadeIn 0.2s ease'
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose()
          }
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '95vh',
            overflowY: 'auto',
            position: 'relative',
            animation: 'slideUp 0.3s ease',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: '#f0f0f0',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease',
              fontSize: '20px',
              color: '#333'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e0e0e0'
              e.currentTarget.style.transform = 'rotate(90deg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f0f0f0'
              e.currentTarget.style.transform = 'rotate(0deg)'
            }}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Content */}
          <div style={{ padding: '30px 20px', paddingTop: '40px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ color: '#0000cc', marginBottom: '10px', fontSize: 'clamp(24px, 5vw, 32px)' }}>
                Schedule Your Service
              </h2>
              <p style={{ color: '#666', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                Book an appointment with our expert technicians
              </p>
              
              {/* Progress Steps - Mobile Optimized */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '25px',
                gap: '5px',
                flexWrap: 'wrap'
              }}>
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: 'clamp(32px, 8vw, 40px)',
                      height: 'clamp(32px, 8vw, 40px)',
                      borderRadius: '50%',
                      background: step >= s ? '#0000cc' : '#e9ecef',
                      color: step >= s ? '#fff' : '#666',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                      flexShrink: 0
                    }}>
                      {step > s ? <FontAwesomeIcon icon={faCheckCircle} /> : s}
                    </div>
                    {s < 4 && (
                      <div style={{
                        width: 'clamp(20px, 5vw, 40px)',
                        height: '2px',
                        background: step > s ? '#0000cc' : '#e9ecef',
                        margin: '0 3px'
                      }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h3 style={{ marginBottom: '20px', color: '#333', fontSize: 'clamp(18px, 4vw, 24px)' }}>
                  Select a Service
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.title)}
                      style={{
                        border: '2px solid #e9ecef',
                        borderRadius: '12px',
                        padding: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: bookingData.service === service.title ? '#f0f4ff' : '#fff',
                        minHeight: '80px',
                        touchAction: 'manipulation'
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.transform = 'scale(0.98)'
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '20px',
                          flexShrink: 0
                        }}>
                          <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 style={{ margin: 0, color: '#333', fontSize: 'clamp(16px, 3.5vw, 18px)', lineHeight: '1.3' }}>
                            {service.title}
                          </h4>
                          <p style={{ margin: '4px 0 0', color: '#666', fontSize: 'clamp(12px, 2.5vw, 14px)', lineHeight: '1.4' }}>
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Additional Services */}
                  <div
                    onClick={() => handleServiceSelect('Electrical Services')}
                    style={{
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minHeight: '80px',
                      touchAction: 'manipulation'
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = 'scale(0.98)'
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '20px',
                        flexShrink: 0
                      }}>
                        <FontAwesomeIcon icon={faBolt} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ margin: 0, color: '#333', fontSize: 'clamp(16px, 3.5vw, 18px)', lineHeight: '1.3' }}>
                          Electrical Services
                        </h4>
                        <p style={{ margin: '4px 0 0', color: '#666', fontSize: 'clamp(12px, 2.5vw, 14px)', lineHeight: '1.4' }}>
                          Professional electrical installation and repair services
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleServiceSelect('HVAC Services')}
                    style={{
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minHeight: '80px',
                      touchAction: 'manipulation'
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = 'scale(0.98)'
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '20px',
                        flexShrink: 0
                      }}>
                        <FontAwesomeIcon icon={faWind} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ margin: 0, color: '#333', fontSize: 'clamp(16px, 3.5vw, 18px)', lineHeight: '1.3' }}>
                          HVAC Services
                        </h4>
                        <p style={{ margin: '4px 0 0', color: '#666', fontSize: 'clamp(12px, 2.5vw, 14px)', lineHeight: '1.4' }}>
                          Heating, ventilation, and air conditioning services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0000cc',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    padding: '8px 0',
                    touchAction: 'manipulation'
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to Services
                </button>
                <h3 style={{ marginBottom: '10px', color: '#333', fontSize: 'clamp(18px, 4vw, 24px)' }}>
                  Select Date & Time
                </h3>
                <p style={{ color: '#666', marginBottom: '25px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                  Service: <strong>{bookingData.service}</strong>
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div>
                    <h4 style={{ marginBottom: '15px', color: '#333', fontSize: 'clamp(16px, 3.5vw, 18px)' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} className="me-2" style={{ color: '#0000cc' }} />
                      Select Date
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                      gap: '10px',
                      maxHeight: '300px',
                      overflowY: 'auto',
                      padding: '5px'
                    }}>
                      {getNextAvailableDates().slice(0, 10).map((date) => {
                        const dateStr = date.toISOString().split('T')[0]
                        const isSelected = bookingData.date === dateStr
                        return (
                          <button
                            key={dateStr}
                            type="button"
                            onClick={() => handleDateSelect(date)}
                            style={{
                              padding: '12px 8px',
                              border: `2px solid ${isSelected ? '#0000cc' : '#e9ecef'}`,
                              borderRadius: '8px',
                              background: isSelected ? '#f0f4ff' : '#fff',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease',
                              touchAction: 'manipulation',
                              fontSize: 'clamp(11px, 2.5vw, 13px)'
                            }}
                          >
                            <div style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#666', marginBottom: '4px' }}>
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 'bold', color: '#333' }}>
                              {date.getDate()}
                            </div>
                            <div style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#666' }}>
                              {date.toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '15px', color: '#333', fontSize: 'clamp(16px, 3.5vw, 18px)' }}>
                      <FontAwesomeIcon icon={faClock} className="me-2" style={{ color: '#0000cc' }} />
                      Select Time
                    </h4>
                    {bookingData.date ? (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                        gap: '10px'
                      }}>
                        {timeSlots.map((time) => {
                          const isSelected = bookingData.time === time
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              style={{
                                padding: '12px',
                                border: `2px solid ${isSelected ? '#0000cc' : '#e9ecef'}`,
                                borderRadius: '8px',
                                background: isSelected ? '#f0f4ff' : '#fff',
                                cursor: 'pointer',
                                fontWeight: isSelected ? 'bold' : 'normal',
                                color: isSelected ? '#0000cc' : '#333',
                                transition: 'all 0.2s ease',
                                touchAction: 'manipulation',
                                fontSize: 'clamp(13px, 3vw, 15px)'
                              }}
                            >
                              {time}
                            </button>
                          )
                        })}
                      </div>
                    ) : (
                      <p style={{ color: '#666', fontStyle: 'italic', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        Please select a date first
                      </p>
                    )}
                  </div>
                </div>
                
                {bookingData.date && bookingData.time && (
                  <div style={{ marginTop: '30px', textAlign: 'right' }}>
                    <button
                      onClick={() => setStep(3)}
                      className="theme-btn"
                      style={{ minWidth: '120px', minHeight: '48px', fontSize: 'clamp(14px, 3vw, 16px)' }}
                    >
                      Continue <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Customer Information */}
            {step === 3 && (
              <div>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0000cc',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    padding: '8px 0',
                    touchAction: 'manipulation'
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </button>
                <h3 style={{ marginBottom: '25px', color: '#333', fontSize: 'clamp(18px, 4vw, 24px)' }}>
                  Your Information
                </h3>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  setStep(4)
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        <FontAwesomeIcon icon={faUser} className="me-2" style={{ color: '#0000cc' }} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={bookingData.name || ''}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        style={{ fontSize: 'clamp(14px, 3vw, 16px)', minHeight: '48px' }}
                      />
                    </div>
                    <div>
                      <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        <FontAwesomeIcon icon={faPhone} className="me-2" style={{ color: '#0000cc' }} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        required
                        value={bookingData.phone || ''}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(214) 555-0123"
                        style={{ fontSize: 'clamp(14px, 3vw, 16px)', minHeight: '48px' }}
                      />
                    </div>
                    <div>
                      <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" style={{ color: '#0000cc' }} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        required
                        value={bookingData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        style={{ fontSize: 'clamp(14px, 3vw, 16px)', minHeight: '48px' }}
                      />
                    </div>
                    <div>
                      <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" style={{ color: '#0000cc' }} />
                        Street Address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={bookingData.address || ''}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="123 Main Street"
                        style={{ fontSize: 'clamp(14px, 3vw, 16px)', minHeight: '48px' }}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <div>
                        <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                          City *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={bookingData.city || ''}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Dallas"
                          style={{ fontSize: 'clamp(14px, 3vw, 16px)', minHeight: '48px' }}
                        />
                      </div>
                      <div>
                        <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={bookingData.zipCode || ''}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          placeholder="75201"
                          style={{ fontSize: 'clamp(14px, 3vw, 16px)', minHeight: '48px' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        Service Description (Optional)
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        value={bookingData.description || ''}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Tell us more about your service needs..."
                        style={{ fontSize: 'clamp(14px, 3vw, 16px)', resize: 'vertical' }}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: '30px', textAlign: 'right' }}>
                    <button type="submit" className="theme-btn" style={{ minWidth: '120px', minHeight: '48px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                      Continue <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {step === 4 && (
              <div>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0000cc',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    padding: '8px 0',
                    touchAction: 'manipulation'
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </button>
                <h3 style={{ marginBottom: '25px', color: '#333', fontSize: 'clamp(18px, 4vw, 24px)' }}>
                  Review Your Booking
                </h3>
                
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ color: '#0000cc', marginBottom: '15px', fontSize: 'clamp(16px, 3.5vw, 18px)' }}>
                    Service Details
                  </h4>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Service:</strong> {bookingData.service}
                  </div>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Date:</strong> {formatDate(bookingData.date || '')}
                  </div>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Time:</strong> {bookingData.time}
                  </div>
                </div>

                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '25px'
                }}>
                  <h4 style={{ color: '#0000cc', marginBottom: '15px', fontSize: 'clamp(16px, 3.5vw, 18px)' }}>
                    Contact Information
                  </h4>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Name:</strong> {bookingData.name}
                  </div>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Phone:</strong> {bookingData.phone}
                  </div>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Email:</strong> {bookingData.email}
                  </div>
                  <div style={{ marginBottom: '12px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Address:</strong> {bookingData.address}, {bookingData.city}, TX {bookingData.zipCode}
                  </div>
                  {bookingData.description && (
                    <div style={{ marginTop: '15px' }}>
                      <strong style={{ fontSize: 'clamp(14px, 3vw, 16px)' }}>Description:</strong>
                      <p style={{ marginTop: '5px', color: '#666', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                        {bookingData.description}
                      </p>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                      <input type="checkbox" required style={{ width: '18px', height: '18px', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: 'clamp(13px, 2.8vw, 14px)', color: '#666', lineHeight: '1.5' }}>
                        I agree to the terms and conditions and privacy policy
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="theme-btn w-100"
                    disabled={status === 'loading'}
                    style={{ minHeight: '50px', fontSize: 'clamp(16px, 3.5vw, 18px)' }}
                  >
                    {status === 'loading' ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </form>
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  fontSize: '40px',
                  color: '#fff'
                }}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h2 style={{ color: '#0000cc', marginBottom: '20px', fontSize: 'clamp(24px, 5vw, 32px)' }}>
                  Booking Confirmed!
                </h2>
                <p style={{ fontSize: 'clamp(16px, 3.5vw, 18px)', color: '#666', marginBottom: '30px' }}>
                  Your service appointment has been scheduled successfully.
                </p>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '25px',
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h4 style={{ color: '#333', marginBottom: '20px', fontSize: 'clamp(18px, 4vw, 20px)' }}>
                    Appointment Details
                  </h4>
                  <div style={{ marginBottom: '15px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Service:</strong> {bookingData.service}
                  </div>
                  <div style={{ marginBottom: '15px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Date:</strong> {formatDate(bookingData.date || '')}
                  </div>
                  <div style={{ marginBottom: '15px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Time:</strong> {bookingData.time}
                  </div>
                  <div style={{ marginBottom: '15px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                    <strong>Address:</strong> {bookingData.address}, {bookingData.city}, TX {bookingData.zipCode}
                  </div>
                </div>
                <p style={{ fontSize: 'clamp(13px, 2.8vw, 14px)', color: '#666', marginBottom: '20px' }}>
                  A confirmation email has been sent to <strong>{bookingData.email}</strong>
                </p>
                <p style={{ fontSize: 'clamp(13px, 2.8vw, 14px)', color: '#666', marginBottom: '30px' }}>
                  Our team will call you at <strong>{bookingData.phone}</strong> to confirm your appointment.
                </p>
                <button
                  onClick={handleClose}
                  className="theme-btn"
                  style={{ minWidth: '200px', minHeight: '48px', fontSize: 'clamp(14px, 3vw, 16px)' }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
