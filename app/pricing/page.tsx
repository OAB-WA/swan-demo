import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight, faTag, faHandHoldingHeart, faWrench, faCertificate } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Special Offers & SAM Plan - Swan Electric, Plumbing, Heating & Air',
  description: 'Save on your home services with Swan\'s special offers and the SAM maintenance plan.',
}

export default function PricingPage() {
  const offers = [
    {
      id: 1,
      name: 'Slab Leak Test',
      price: '$199',
      description: 'Testing fees waived with repairs.',
      icon: faWrench,
      features: [
        'Fresh water slab leaks only',
        'Expert diagnostics',
        'Professional evaluation',
        'Waived with completed repair'
      ]
    },
    {
      id: 2,
      name: 'HVAC Install',
      price: '$500 OFF',
      description: 'Complete HVAC System Install.',
      icon: faCertificate,
      features: [
        'Full, high-efficiency replacement',
        'Installed by licensed pros',
        'Residential systems only',
        'Energy-efficient models'
      ]
    },
    {
      id: 3,
      name: 'Service Repair',
      price: '$55 OFF',
      description: 'Any Service Repair.',
      icon: faTag,
      features: [
        'Plumbing repairs',
        'AC or Heating repairs',
        'Electrical repairs',
        'Fast diagnostics'
      ]
    }
  ]

  const samPlan = {
    name: 'SAM Plan',
    subName: 'Swan Annual Maintenance',
    price: '$9.95',
    period: '/month',
    features: [
      '4 VISITS ANUALLY',
      'NO REGULAR SERVICE FEES',
      'PRIORITY SCHEDULING',
      '15% OFF PRODUCTS & SERVICES',
      '50% OFF EMERGENCY SERVICE FEES'
    ]
  }

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Special Offers"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Special Offers' }
          ]}
        />

        {/* offers area */}
        <div className="pricing-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Save More</span>
                  <h2 className="site-title">Special Offers</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Check out our current specials and start saving on your 
                    essential home services today.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-5">
              {offers.map((offer) => (
                <div key={offer.id} className="col-md-6 col-lg-4">
                  <div className="pricing-item">
                    <div className="pricing-icon">
                      <FontAwesomeIcon icon={offer.icon} />
                    </div>
                    <div className="pricing-header">
                      <h5>{offer.name}</h5>
                      <p className="text-muted small">{offer.description}</p>
                    </div>
                    <div className="pricing-amount">
                      <strong>{offer.price}</strong>
                    </div>
                    <div className="pricing-feature">
                      <ul>
                        {offer.features.map((feature, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faCheck} className="me-2" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link href="/contact" className="theme-btn">
                        Claim Offer <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SAM Plan Area */}
        <div className="sam-plan-area py-120 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="site-heading mb-4">
                  <span className="site-title-tagline">Membership</span>
                  <h2 className="site-title">{samPlan.subName}</h2>
                </div>
                <p className="mb-4">
                  Join the SAM Plan today and enjoy year-round peace of mind. 
                  Our members get the best service at the best price.
                </p>
                <div className="pricing-amount mb-4" style={{fontSize: '48px', color: '#0000FF'}}>
                  <strong>{samPlan.price}</strong>
                  <span style={{fontSize: '20px', color: '#666'}}>{samPlan.period}</span>
                </div>
                <Link href="/contact" className="theme-btn">
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="pricing-feature card border-0 shadow-sm p-4 mt-4 mt-lg-0" style={{borderRadius: '15px'}}>
                  <h4 className="mb-4">Member Benefits:</h4>
                  <ul className="list-unstyled">
                    {samPlan.features.map((feature, index) => (
                      <li key={index} className="mb-3 d-flex align-items-center">
                        <FontAwesomeIcon icon={faCheck} className="me-3 text-primary" style={{fontSize: '20px'}} /> 
                        <strong>{feature}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
