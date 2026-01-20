import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Testimonials - Swan Electric, Plumbing, Heating & Air',
    description: 'Read what our satisfied customers have to say about our 5-star HVAC, electrical, and plumbing services across the DFW area.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sylvia H Green',
      location: 'Dallas, TX',
      text: 'Excellent service! The team was professional, punctual, and completed the work quickly. Highly recommend for all plumbing needs.'
    },
    {
      id: 2,
      name: 'Gordon D Novak',
      location: 'Sunnyvale, TX',
      text: 'Great experience from start to finish. The technicians were knowledgeable and explained everything clearly. Will definitely use again!'
    },
    {
      id: 3,
      name: 'Reid E Butt',
      location: 'Dallas, TX',
      text: 'Professional service at a fair price. They arrived on time and completed the job efficiently. Very satisfied with the results.'
    },
    {
      id: 4,
      name: 'Parker Jimenez',
      location: 'Dallas, TX',
      text: 'Outstanding workmanship and customer service. The team went above and beyond to ensure everything was done correctly. Highly recommended!'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      location: 'Dallas, TX',
      text: 'Quick response time and excellent work. The technician was courteous and cleaned up after the job. Very impressed!'
    },
    {
      id: 6,
      name: 'Michael Chen',
      location: 'Sunnyvale, TX',
      text: 'Best plumbing service in Dallas! Fair pricing, quality work, and friendly staff. Will be using them for all future needs.'
    }
  ]

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Testimonials"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Testimonials' }
          ]}
        />

        {/* testimonial-area */}
        <div className="testimonial-area2 py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Testimonials</span>
                  <h2 className="site-title">Commitment to 5-Star Satisfaction</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Don&apos;t just take our word for it. See why homeowners and businesses across 
                    Mesquite and DFW trust Swan for their essential services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="testimonial-single">
                    <div className="testimonial-quote">
                      <span className="testimonial-quote-icon"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="testimonial-content">
                      <div className="testimonial-author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                        <div className="testimonial-rate">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* testimonial-area end */}
      </main>

      <Footer />
    </>
  )
}
