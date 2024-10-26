import axios from 'axios';
import { Order } from '../Models/Order';

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";


    export const getAllOrders = () =>{
        return axios.get(ORDER_API_BASE_URL);
    }

    export const createOrder = (order:Order) => {
        return axios.post(ORDER_API_BASE_URL, order);
    }

    export const getOrdersById = (id:number)=>{
        return axios.get(ORDER_API_BASE_URL + '/' + id);
    }

    // updateOrder(newOrder, id){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

