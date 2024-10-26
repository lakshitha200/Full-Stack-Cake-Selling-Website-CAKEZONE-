
export class Order{

    oId?:number;
    orderNumber:number;
    orderDate?:string;
    quantity:number;
    orderState?:string;
    totalPrice:number;
    product:any;
    customer:any;

    constructor(
        orderNumber:number,
        quantity:number,
        totalPrice:number,
        product:any,
        customer:any){

            this.orderNumber = orderNumber;
            this.quantity = quantity;
            this.totalPrice = totalPrice;
            this.product = product;
            this.customer = customer;
    }

}

