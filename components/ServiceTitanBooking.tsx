'use client'

import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCalendarAlt, 
  faClock, 
  faUser, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faCheckCircle,
  faArrowLeft,
  faArrowRight,
  faTools,
  faGasPump,
  faDroplet,
  faBath,
  faPaintRoller,
  faHouseFloodWater,
  faBolt,
  faWind
} from '@fortawesome/free-solid-svg-icons'
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

export default function ServiceTitanBooking() {
  const services = getAllServices()
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({})

  const serviceIcons: { [key: string]: any } = {
    'Kitchen Plumbing': faTools,
    'Gas Line Services': faGasPump,
    'Water Line Services': faDroplet,
    'Bathroom Plumbing': faBath,
    'Pipe Line Install': faPaintRoller,
    'Basement Plumbing': faHouseFloodWater,
    'Electrical Services': faBolt,
    'HVAC Services': faWind,
  }

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
      if (date.getDay() !== 0) { // Skip Sundays
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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setStatus('success')
    setStep(5) // Confirmation step
  }, [])

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  if (status === 'success' && step === 5) {
    return (
      <div className="service-titan-booking" style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="text-center">
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
          <h2 style={{ color: '#0000cc', marginBottom: '20px' }}>Booking Confirmed!</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
            Your service appointment has been scheduled successfully.
          </p>
          <div style={{
            background: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px',
            textAlign: 'left'
          }}>
            <h4 style={{ color: '#333', marginBottom: '20px' }}>Appointment Details</h4>
            <div style={{ marginBottom: '15px' }}>
              <strong>Service:</strong> {bookingData.service}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Date:</strong> {formatDate(bookingData.date || '')}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Time:</strong> {bookingData.time}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Address:</strong> {bookingData.address}, {bookingData.city}, TX {bookingData.zipCode}
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            A confirmation email has been sent to <strong>{bookingData.email}</strong>
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>
            Our team will call you at <strong>{bookingData.phone}</strong> to confirm your appointment.
          </p>
          <button
            onClick={() => {
              setStep(1)
              setStatus('idle')
              setBookingData({})
            }}
            className="theme-btn"
            style={{ minWidth: '200px' }}
          >
            Book Another Service
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="service-titan-booking" style={{
      maxWidth: '900px',
      margin: '0 auto',
      background: '#fff',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#0000cc', marginBottom: '10px' }}>Schedule Your Service</h2>
        <p style={{ color: '#666' }}>Book an appointment with our expert technicians</p>
        
        {/* Progress Steps */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
          gap: '10px'
        }}>
          {[1, 2, 3, 4].map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: step >= s ? '#0000cc' : '#e9ecef',
                color: step >= s ? '#fff' : '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                {step > s ? <FontAwesomeIcon icon={faCheckCircle} /> : s}
              </div>
              {s < 4 && (
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: step > s ? '#0000cc' : '#e9ecef',
                  margin: '0 5px'
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div>
          <h3 style={{ marginBottom: '30px', color: '#333' }}>Select a Service</h3>
          <div className="row g-3">
            {services.map((service) => (
              <div key={service.id} className="col-md-6">
                <div
                  onClick={() => handleServiceSelect(service.title)}
                  style={{
                    border: '2px solid #e9ecef',
                    borderRadius: '12px',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: bookingData.service === service.title ? '#f0f4ff' : '#fff'
                  }}
                  onMouseEnter={(e) => {
                    if (bookingData.service !== service.title) {
                      e.currentTarget.style.borderColor = '#0000cc'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 51, 0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (bookingData.service !== service.title) {
                      e.currentTarget.style.borderColor = '#e9ecef'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '24px'
                    }}>
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: 0, color: '#333', fontSize: '18px' }}>{service.title}</h4>
                      <p style={{ margin: '5px 0 0', color: '#666', fontSize: '14px' }}>
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Additional Services */}
            <div className="col-md-6">
              <div
                onClick={() => handleServiceSelect('Electrical Services')}
                style={{
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0000cc'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 51, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '24px'
                  }}>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, color: '#333', fontSize: '18px' }}>Electrical Services</h4>
                    <p style={{ margin: '5px 0 0', color: '#666', fontSize: '14px' }}>
                      Professional electrical installation and repair services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                onClick={() => handleServiceSelect('HVAC Services')}
                style={{
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0000cc'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 51, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '24px'
                  }}>
                    <FontAwesomeIcon icon={faWind} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, color: '#333', fontSize: '18px' }}>HVAC Services</h4>
                    <p style={{ margin: '5px 0 0', color: '#666', fontSize: '14px' }}>
                      Heating, ventilation, and air conditioning services
                    </p>
                  </div>
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
              gap: '8px'
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Services
          </button>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Select Date & Time</h3>
          <p style={{ color: '#666', marginBottom: '30px' }}>Service: <strong>{bookingData.service}</strong></p>
          
          <div className="row">
            <div className="col-md-6">
              <h4 style={{ marginBottom: '20px', color: '#333', fontSize: '18px' }}>
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" style={{ color: '#0000cc' }} />
                Select Date
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                marginBottom: '30px'
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
                        padding: '15px',
                        border: `2px solid ${isSelected ? '#0000cc' : '#e9ecef'}`,
                        borderRadius: '8px',
                        background: isSelected ? '#f0f4ff' : '#fff',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = '#0000cc'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = '#e9ecef'
                        }
                      }}
                    >
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                        {date.getDate()}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="col-md-6">
              <h4 style={{ marginBottom: '20px', color: '#333', fontSize: '18px' }}>
                <FontAwesomeIcon icon={faClock} className="me-2" style={{ color: '#0000cc' }} />
                Select Time
              </h4>
              {bookingData.date ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
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
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = '#0000cc'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = '#e9ecef'
                          }
                        }}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>Please select a date first</p>
              )}
            </div>
          </div>
          
          {bookingData.date && bookingData.time && (
            <div style={{ marginTop: '30px', textAlign: 'right' }}>
              <button
                onClick={() => setStep(3)}
                className="theme-btn"
                style={{ minWidth: '150px' }}
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
              gap: '8px'
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>
          <h3 style={{ marginBottom: '30px', color: '#333' }}>Your Information</h3>
          <form onSubmit={(e) => {
            e.preventDefault()
            setStep(4)
          }}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
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
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
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
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
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
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
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
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={bookingData.city || ''}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Dallas"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={bookingData.zipCode || ''}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    placeholder="75201"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ marginBottom: '8px', display: 'block', color: '#333', fontWeight: '500' }}>
                    Service Description (Optional)
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    value={bookingData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Tell us more about your service needs..."
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px', textAlign: 'right' }}>
              <button type="submit" className="theme-btn" style={{ minWidth: '150px' }}>
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
              gap: '8px'
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>
          <h3 style={{ marginBottom: '30px', color: '#333' }}>Review Your Booking</h3>
          
          <div style={{
            background: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#0000cc', marginBottom: '20px' }}>Service Details</h4>
            <div style={{ marginBottom: '15px' }}>
              <strong>Service:</strong> {bookingData.service}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Date:</strong> {formatDate(bookingData.date || '')}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Time:</strong> {bookingData.time}
            </div>
          </div>

          <div style={{
            background: '#f8f9fa',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#0000cc', marginBottom: '20px' }}>Contact Information</h4>
            <div style={{ marginBottom: '15px' }}>
              <strong>Name:</strong> {bookingData.name}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Phone:</strong> {bookingData.phone}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Email:</strong> {bookingData.email}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Address:</strong> {bookingData.address}, {bookingData.city}, TX {bookingData.zipCode}
            </div>
            {bookingData.description && (
              <div style={{ marginTop: '15px' }}>
                <strong>Description:</strong>
                <p style={{ marginTop: '5px', color: '#666' }}>{bookingData.description}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="checkbox" required style={{ width: '18px', height: '18px' }} />
                <span style={{ fontSize: '14px', color: '#666' }}>
                  I agree to the terms and conditions and privacy policy
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="theme-btn w-100"
              disabled={status === 'loading'}
              style={{ minHeight: '50px', fontSize: '18px' }}
            >
              {status === 'loading' ? (
                <>Processing...</>
              ) : (
                <>Confirm Booking</>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
