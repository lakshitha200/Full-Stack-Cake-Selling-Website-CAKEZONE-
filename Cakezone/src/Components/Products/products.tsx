import './products.css'

import img1 from '../../assets/cake-1.jpg'
import img2 from '../../assets/cake-2.jpg'
import img3 from '../../assets/cake-3.jpg'
import img4 from '../../assets/cake-4.jpg'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../Services/product.service'
import BuyModel from './Buy-model/buy-model'
import { getAllOrders } from '../../Services/order.service'

const cakeList:any[] = [1,2,3,4,5,6]

const Products = () => {
    
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getAllProducts().then((response)=>{
            setProducts(response.data);
        }).catch(error=>console.log(error));
    },[])

    let birthdayCakes = products.filter((p:any)=>p.category=="Birthday Cake")
    console.log(birthdayCakes)


    // getAllOrders().then((response)=>{
    //     console.log(response)
    // }).catch(error=>console.log(error))


  return (
    <>
        <div className="container-fluid about py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3">
                <h2 className="font-secondary">Menu & Pricing</h2>
                <h1 className="display-4 text-uppercase square-fonts">Explore Our Cakes</h1>
            </div>
            <div className="tab-className text-center">
                <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
                    <li className="nav-item">
                        <a className="nav-link text-white active" data-bs-toggle="pill" href="#tab-1">Cakes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" data-bs-toggle="pill" href="#tab-2">Birthday</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" data-bs-toggle="pill" href="#tab-3">Custom</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-3">
                            {
                            products.filter((p:any)=>p.category=="Cake").map((cake:any) => {
                                return (
                                    <div className="col-lg-6" key={cake.id}>
                                        <BuyModel stock={cake.stock} price={cake.price} fullProduct={cake}/>
                                        <div className="d-flex h-100">
                                            <div className="flex-shrink-0">
                                                <img className="img-fluid" src={cake.img} alt=""/>
                                                <h4 className="bg-dark square-fonts primary-text p-2 m-0">Rs. {cake.price}</h4>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center text-start border-inner px-4" style={{backgroundColor:"#ffe3c2"}}>
                                                <h5 className="text-uppercase square-fonts">{cake.name}</h5>
                                                <span>
                                                    <small>
                                                    {cake.description==null?"Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo":cake.description}
                                                    </small>
                                                    
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Birthday cakes */}
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-3">
                            {
                             products.filter((p:any)=>p.category=="Birthday Cake").map((cake:any) => {
                                return (
                                    <div className="col-lg-6" key={cake.id}>
                                    <BuyModel stock={cake.stock} price={cake.price} fullProduct={cake}/>
                                        <div className="d-flex h-100">
                                            <div className="flex-shrink-0">
                                                    <img className="img-fluid" src={cake.img} alt=""/>
                                                    <h4 className="bg-dark primary-text square-fonts p-2 m-0">Rs. {cake.price}</h4>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center text-start border-inner px-4" style={{backgroundColor:"#ffceb2"}}>
                                                    <h5 className="text-uppercase square-fonts">{cake.name}</h5>
                                                <span><small>{cake.description==null?"Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo":cake.description}</small></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            )}
                        </div>
                    </div>

                    {/* Custome cakes */}
                    <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-3">
                    {products.map((cake:any) => {
                        return (

                                    <div className="col-lg-6" key={cake.id}>
                                        <div className="d-flex h-100">
                                            <div className="flex-shrink-0">
                                                <img className="img-fluid" src={img3} alt=""/>
                                                <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                                                <h5 className="text-uppercase">Custom Cake</h5>
                                                <span>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo</span>
                                            </div>
                                        </div>
                                    </div>
                             
                            )
                        }
                    )}
                       </div>

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products