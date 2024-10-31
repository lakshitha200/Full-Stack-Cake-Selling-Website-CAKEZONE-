import { Link, NavLink, useLocation } from 'react-router-dom';
import './header.css'
import Topbar from './Topbar/topbar';
import userImg from '../../assets/user (1).png'


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
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <a href="about.html" className="nav-item nav-link">About Us</a>
                <NavLink to="/menu&pricing" className="nav-item nav-link">Menu & Pricing</NavLink>
                <a href="team.html" className="nav-item nav-link">Master Chefs</a>
                
                <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                <div className="user-section d-flex mx-2">
                    <NavLink to="/sign-in" className="nav-item nav-link">
                        <i className="fa-solid fa-user"></i> Login
                    </NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link" data-bs-toggle="dropdown">
                            <img className='userImg' src={userImg} alt="" />
                        </a>
                        <div className="dropdown-menu m-0 bg-dark">
                            <a href="service.html" className="dropdown-item">Your Profile</a>
                            <a href="testimonial.html" className="dropdown-item">Logout</a>
                        </div>
                    </div>
                    <a href="team.html" className="nav-item nav-link position-relative">
                        <i className="fa-solid fa-message"></i>
                        <span className='badge rounded-pill bg-danger position-absolute'>99+</span>
                    </a>
                    <a href="team.html" className="nav-item nav-link position-relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className='badge rounded-pill bg-danger position-absolute'>99+</span>
                    </a>
                </div>
               
            </div>
        </div>
    </nav>

    </>
  )
}

export default Header;
