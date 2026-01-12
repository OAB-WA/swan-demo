import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Projects - Swan Electric, Plumbing, Heating & Air',
  description: 'View our recent projects showcasing our expertise in plumbing, electrical, and HVAC services in Dallas, Texas.',
}

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Water Line Repair', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
    { id: 2, title: 'Kitchen Plumbing', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop' },
    { id: 3, title: 'Basement Plumbing', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
    { id: 4, title: 'Pipe Line Repair', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
    { id: 5, title: 'Bathroom Renovation', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop' },
    { id: 6, title: 'Gas Line Installation', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
  ]

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Projects"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Projects' }
          ]}
        />

        {/* case area */}
        <div className="case-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Cases</span>
                  <h2 className="site-title">Recent Projects</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Take a look at some of our recent projects showcasing our expertise 
                    in plumbing, electrical, and HVAC services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row popup-gallery">
              {projects.map((project) => (
                <div key={project.id} className="col-md-6 col-lg-4">
                  <div className="case-item">
                    <div className="case-img">
                      <Image 
                        className="img-fluid" 
                        src={project.image} 
                        alt={project.title}
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                      <a className="popup-img case-link" href={project.image}>
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                    <div className="case-content">
                      <div className="case-content-info">
                        <h4><Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {project.title}
                        </Link></h4>
                        <small>{project.category}</small>
                      </div>
                      <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="case-arrow">
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* case area end */}
      </main>

      <Footer />
    </>
  )
}
