import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket, 
  faCheck, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Pricing - Swan Electric, Plumbing, Heating & Air',
  description: 'Affordable pricing plans for plumbing, electrical, and HVAC services in Dallas, Texas.',
}

export default function PricingPage() {
  const plans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$59',
      period: '/Monthly',
      features: [
        'Get 10% Off',
        'Test Water Pressure',
        'Extended Equipment Life',
        'Priority Scheduling',
        'Annual Boiler Service'
      ]
    },
    {
      id: 2,
      name: 'Business Plan',
      price: '$99',
      period: '/Monthly',
      features: [
        'Get 15% Off',
        'Test Water Pressure',
        'Extended Equipment Life',
        'Priority Scheduling',
        'Annual Boiler Service',
        '24/7 Emergency Support'
      ]
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$156',
      period: '/Monthly',
      features: [
        'Get 20% Off',
        'Test Water Pressure',
        'Extended Equipment Life',
        'Priority Scheduling',
        'Annual Boiler Service',
        '24/7 Emergency Support',
        'Free Annual Inspection'
      ]
    }
  ]

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Pricing Plan"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Pricing Plan' }
          ]}
        />

        {/* pricing area */}
        <div className="pricing-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Pricing</span>
                  <h2 className="site-title">Pricing Plan</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Choose the plan that best fits your needs. All plans include 
                    professional service and quality workmanship.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-5">
              {plans.map((plan) => (
                <div key={plan.id} className="col-md-6 col-lg-4">
                  <div className="pricing-item">
                    <div className="pricing-icon">
                      <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <div className="pricing-header">
                      <h5>{plan.name}</h5>
                    </div>
                    <div className="pricing-amount">
                      <strong>{plan.price}</strong>
                      <span>{plan.period}</span>
                    </div>
                    <div className="pricing-feature">
                      <ul>
                        {plan.features.map((feature, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faCheck} className="me-2" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link href="/contact" className="theme-btn">
                        Get Started <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* pricing area end */}
      </main>

      <Footer />
    </>
  )
}
