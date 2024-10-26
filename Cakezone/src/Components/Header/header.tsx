import { Link, useLocation } from 'react-router-dom';
import './header.css'
import Topbar from './Topbar/topbar';


const Header = () => {

  const location = useLocation();


  return (
    <>
      <Topbar/>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 me-3"></i>CakeZone</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-lg-auto py-0">
                <Link to="/" className={`nav-item nav-link ${location.pathname=="/"?'active':''}`}>Home</Link>
                {/* <a href="index.html" className="nav-item nav-link">Home</a> */}
                <a href="about.html" className="nav-item nav-link">About Us</a>
                <Link to="/menu&pricing" className={`nav-item nav-link ${location.pathname=="/menu&pricing"?'active':''}`}>Menu & Pricing</Link>
                <a href="team.html" className="nav-item nav-link">Master Chefs</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="service.html" className="dropdown-item">Our Service</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact Us</a>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Header;
