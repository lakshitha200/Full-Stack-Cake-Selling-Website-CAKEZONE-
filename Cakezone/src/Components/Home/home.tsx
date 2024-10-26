import './home.css'

const Home = () => {
  return (
    <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className="font-secondary primary-text mb-4">Super Crispy</h1>
                        <h1 className="display-1 text-uppercase text-white mb-4">CakeZone</h1>
                        <h1 className="text-uppercase text-white">The Best Cake In London</h1>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            <a href="" className="btn btn-primary border-inner py-3 px-5 me-5">Read More</a>
                            {/* <button type="button" className="btn-play">
                                <span></span>
                            </button> */}
                            {/* <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Buy Now</h5> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home