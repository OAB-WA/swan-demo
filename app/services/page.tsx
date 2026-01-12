import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTools, 
  faGasPump, 
  faDewpoint, 
  faBath, 
  faPaintRoller, 
  faHouseFlood, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Services - Swan Electric, Plumbing, Heating & Air',
  description: 'Professional plumbing, electrical, and HVAC services in Dallas, Texas. Kitchen plumbing, gas line services, water line services, and more.',
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Kitchen Plumbing',
      description: 'Professional kitchen plumbing services including sink installation, garbage disposal, and faucet repair.',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
      icon: faTools
    },
    {
      id: 2,
      title: 'Gas Line Services',
      description: 'Safe and reliable gas line installation, repair, and maintenance for your home or business.',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      icon: faGasPump
    },
    {
      id: 3,
      title: 'Water Line Services',
      description: 'Complete water line installation, repair, and replacement services to keep your water flowing.',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      icon: faDewpoint
    },
    {
      id: 4,
      title: 'Bathroom Plumbing',
      description: 'Expert bathroom plumbing services including toilet repair, shower installation, and drain cleaning.',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
      icon: faBath
    },
    {
      id: 5,
      title: 'Pipe Line Install',
      description: 'Professional pipe installation and replacement services using quality materials and expert craftsmanship.',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      icon: faPaintRoller
    },
    {
      id: 6,
      title: 'Basement Plumbing',
      description: 'Comprehensive basement plumbing solutions including sump pump installation and water damage prevention.',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      icon: faHouseFlood
    }
  ]

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Services"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' }
          ]}
        />

        {/* service area */}
        <div className="service-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Services</span>
                  <h2 className="site-title">Best Services</h2>
                  <div className="heading-divider"></div>
                  <p>
                    We provide comprehensive plumbing services and also offer electrical and HVAC solutions 
                    for your home and business in Dallas, Texas.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-md-6 col-lg-4">
                  <div className="service-item">
                    <div className="service-img">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="img-fluid"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p className="service-text">{service.description}</p>
                      <div className="service-arrow">
                        <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="theme-btn">
                          Read More<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="mb-0">
                  <strong>We also provide comprehensive Electrical and HVAC services.</strong> 
                  <Link href="/contact" className="ms-2">Contact us</Link> to learn more about our full range of home services.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* service area end */}
      </main>

      <Footer />
    </>
  )
}
