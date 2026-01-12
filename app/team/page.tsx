import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Our Team - Swan Electric, Plumbing, Heating & Air',
  description: 'Meet our experienced team of professionals dedicated to providing the highest quality service for your home and business.',
}

export default function TeamPage() {
  const teamMembers = [
    { id: 1, name: 'George Hooks', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { id: 2, name: 'Veron Reyn', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
    { id: 3, name: 'Karl Hart', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', active: true },
    { id: 4, name: 'Adam Coon', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  ]

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Our Team"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Team' }
          ]}
        />

        {/* team-area */}
        <div className="team-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Team</span>
                  <h2 className="site-title">Meet Experts</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Our experienced team of professionals is dedicated to providing 
                    the highest quality service for your home and business.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-md-6 col-lg-3">
                  <div className={`team-item ${member.active ? 'active' : ''}`}>
                    <img src={member.image} alt={member.name} />
                    <div className="team-content">
                      <div className="team-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                      </div>
                      <div className="team-bio">
                        <h5><Link href="/team">{member.name}</Link></h5>
                        <span>{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* team-area end */}
      </main>

      <Footer />
    </>
  )
}
