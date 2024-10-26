
import { useState } from 'react';
import './buy-model.css'
import { Order } from '../../../Models/Order';
import { createOrder, getAllOrders } from '../../../Services/order.service';

const BuyModel = (props:any) => {

    let [count, updateCount] = useState(0);
    let decrement = function(){
      if(count>0){
        updateCount(--count);
      }
    }
    let increment = function(){
      if(count<props.stock){
        updateCount(++count);
      }
    }

    let customer = {
        cusNumber: 100,
        name: "Lakshitha Fernando",
        username: "lakshitha",
        location: "Colombo",
        email: "lakshithaf20@gmail.com",
        password: "lakshitha",
        phone: 758955639,
        role: "ROLE_CUSTOMER",
        cid: 1
    }

    // lastOrder Number
    let lastOrderNumber:number;
    getAllOrders().then((response=>{
        lastOrderNumber = response.data[response.data.length-1].orderNumber;
    })).catch(error=>console.error(error))

    // Make a new Order
    function makeOrder(){
        let order = new Order(lastOrderNumber+1,count,props.price * count,props.fullProduct,customer);
        console.log(order)
        createOrder(order).then((response)=>{
          window.alert("Order places success!")
          window.location.reload();
        })
        .catch(error=>console.error(error));
    }
    

  return (
    <>
        <div className="buy-model">
            <span className='text-white'>Available Stock: {props.stock}</span>
            <div className="btn-group">
                <button className='btn' onClick={decrement} disabled={count==0}><i className="fa-solid fa-minus"></i></button>
                <span className='mx-3'>{count}</span>
                <button className='btn' onClick={increment}  disabled={count==props.stock}><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="price-count">
                <span className='text-white'>Total Price: </span><span style={{color:"#E88F2A"}}>Rs. {props.price * count}</span>
            </div>
            <div>
                <button className="buy-btn btn" onClick={makeOrder}>Buy</button>
                <button className='btn text-white'><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    </>
  )
}

export default BuyModel;