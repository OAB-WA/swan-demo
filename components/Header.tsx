import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      {/* header top */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <a href="#">
                      <i className="far fa-map-marker-alt"></i>309 US Highway 80 E, Sunnyvale, TX 75150
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@swanplumbingdemo.com">
                      <i className="far fa-envelope"></i>info@swanplumbingdemo.com
                    </a>
                  </li>
                  {/* <li>
                    <a href="tel:+12145550123">
                      <i className="far fa-phone"></i>(214) 555-0123
                    </a>
                  </li> */}
                  <li>
                    <a href="#">
                      <i className="far fa-clock"></i> Sun - Fri (08AM - 10PM)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/assets/img/swan logo.webp" alt="Swan Electric, Plumbing, Heating & Air" style={{maxWidth: '120px', height: 'auto'}} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="far fa-stream"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="header-nav-right">
                <div className="header-btn d-flex gap-2">
                  <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{whiteSpace: 'nowrap'}}>
                    <i className="fas fa-phone me-2"></i>CALL NOW
                  </a>
                  <Link href="/contact" className="theme-btn">GET QUOTE<i className="far fa-arrow-right ms-2"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
