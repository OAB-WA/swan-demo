import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: '404 Error - Swan Electric, Plumbing, Heating & Air',
  description: 'Page not found',
}

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="404 Error"
          items={[
            { label: 'Home', href: '/' },
            { label: '404 Error' }
          ]}
        />

        {/* error area */}
        <div className="error-area py-120">
          <div className="container">
            <div className="col-md-6 mx-auto">
              <div className="error-wrapper">
                <h1>4<span>0</span>4</h1>
                <h2>Oops... Page Not Found!</h2>
                <p>The page you looking for not found may be it not exist or removed.</p>
                <Link href="/" className="theme-btn">
                  <FontAwesomeIcon icon={faHome} className="me-2" /> Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* error area end */}
      </main>

      <Footer />
    </>
  )
}
