import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Testimonials - Swan Electric, Plumbing, Heating & Air',
  description: 'Read what our satisfied customers have to say about our plumbing, electrical, and HVAC services in Dallas, Texas.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sylvia H Green',
      location: 'Dallas, TX',
      text: 'Excellent service! The team was professional, punctual, and completed the work quickly. Highly recommend for all plumbing needs.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Gordon D Novak',
      location: 'Sunnyvale, TX',
      text: 'Great experience from start to finish. The technicians were knowledgeable and explained everything clearly. Will definitely use again!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Reid E Butt',
      location: 'Dallas, TX',
      text: 'Professional service at a fair price. They arrived on time and completed the job efficiently. Very satisfied with the results.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Parker Jimenez',
      location: 'Dallas, TX',
      text: 'Outstanding workmanship and customer service. The team went above and beyond to ensure everything was done correctly. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      location: 'Dallas, TX',
      text: 'Quick response time and excellent work. The technician was courteous and cleaned up after the job. Very impressed!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Michael Chen',
      location: 'Sunnyvale, TX',
      text: 'Best plumbing service in Dallas! Fair pricing, quality work, and friendly staff. Will be using them for all future needs.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face'
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
                  <h2 className="site-title">What Client Say&apos;s</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Don&apos;t just take our word for it. See what our satisfied customers 
                    have to say about our services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="col-md-6 col-lg-4">
                  <div className="testimonial-single">
                    <div className="testimonial-quote">
                      <span className="testimonial-quote-icon"><i className="fal fa-quote-left"></i></span>
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="testimonial-content">
                      <div className="testimonial-author-img">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          width={200}
                          height={200}
                          loading="lazy"
                          className="img-fluid"
                          sizes="100px"
                        />
                      </div>
                      <div className="testimonial-author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                        <div className="testimonial-rate">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
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
