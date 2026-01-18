'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Service } from '@/lib/services'

interface ServiceSidebarProps {
  services: Service[]
  currentServiceId: number
}

export default function ServiceSidebar({ services, currentServiceId }: ServiceSidebarProps) {
  return (
    <div className="service-sidebar" style={{ position: 'sticky', top: '100px' }}>
      <div className="widget category" style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '30px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #f0f0f0'
      }}>
        <h4 className="widget-title" style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#0000cc',
          marginBottom: '25px',
          paddingBottom: '15px',
          borderBottom: '2px solid #f0f0f0',
          position: 'relative'
        }}>
          All Services
          <span style={{
            position: 'absolute',
            bottom: '-2px',
            left: '0',
            width: '50px',
            height: '2px',
            background: '#0000cc',
            borderRadius: '2px'
          }}></span>
        </h4>
        <div className="category-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {services.map((s) => {
            const isActive = s.id === currentServiceId
            return (
              <Link 
                key={s.id} 
                href={`/services/${s.slug}`}
                className={`category-link ${isActive ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  color: isActive ? '#fff' : '#333',
                  background: isActive ? 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)' : '#f8f9fa',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: isActive ? '600' : '400',
                  boxShadow: isActive ? '0 4px 12px rgba(0, 0, 51, 0.2)' : 'none',
                  border: isActive ? 'none' : '1px solid #e9ecef',
                  minHeight: '48px',
                  touchAction: 'manipulation'
                }}
                onMouseEnter={(e) => {
                  if (!isActive && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    e.currentTarget.style.background = '#f0f4ff'
                    e.currentTarget.style.transform = 'translateX(5px)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 51, 0.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    e.currentTarget.style.background = '#f8f9fa'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
                onTouchStart={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'scale(0.98)'
                  }
                }}
                onTouchEnd={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'scale(1)'
                  }
                }}
              >
                <FontAwesomeIcon 
                  icon={faAngleDoubleRight} 
                  style={{ 
                    marginRight: '12px',
                    fontSize: '14px',
                    color: isActive ? '#fff' : '#0000cc',
                    flexShrink: 0
                  }}
                /> 
                <span>{s.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="widget service-download download-widget" style={{
        background: 'linear-gradient(135deg, #0000cc 0%, #3333FF 100%)',
        borderRadius: '16px',
        padding: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 51, 0.15)'
      }}>
        <h4 className="widget-title" style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '25px',
          paddingBottom: '15px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
        }}>
          Download
        </h4>
        <div className="download-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a 
            href="#" 
            className="download-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 20px',
              background: '#fff',
              color: '#0000cc',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '2px solid transparent',
              minHeight: '48px',
              touchAction: 'manipulation'
            }}
            onMouseEnter={(e) => {
              if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)'
                e.currentTarget.style.borderColor = '#0000cc'
              }
            }}
            onMouseLeave={(e) => {
              if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.borderColor = 'transparent'
              }
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <FontAwesomeIcon 
              icon={faFilePdf} 
              style={{ marginRight: '10px', fontSize: '18px', flexShrink: 0 }}
            /> 
            Download Brochure
          </a> 
          <a 
            href="#"
            className="download-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 20px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              minHeight: '48px',
              touchAction: 'manipulation'
            }}
            onMouseEnter={(e) => {
              if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
              }
            }}
            onMouseLeave={(e) => {
              if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              }
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <FontAwesomeIcon 
              icon={faFileAlt} 
              style={{ marginRight: '10px', fontSize: '18px', flexShrink: 0 }}
            /> 
            Download Application
          </a> 
        </div>
      </div>
    </div>
  )
}
