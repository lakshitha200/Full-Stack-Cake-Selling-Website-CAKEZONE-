
import "./topbar.css";

const Topbar = () => {
  return (
    <>
        <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-4 text-center py-3">
                <div className="d-inline-flex align-items-center justify-content-center">
                    <i className="bi bi-envelope fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Email Us</h6>
                        <span>info@cakezone.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center title border-inner py-3">
                <div className="d-inline-flex align-items-center justify-content-center">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>CakeZone</h1>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 text-center py-3">
                <div className="d-inline-flex align-items-center justify-content-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Call Us</h6>
                        <span>+94 758966569</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Topbar;