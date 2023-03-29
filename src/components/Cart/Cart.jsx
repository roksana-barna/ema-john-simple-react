import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price;
    totalShipping = totalShipping + product.shipping;
}
const tax=totalPrice*7/100;
    // const {cart}=props;
     const grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
             <h4>Order Summery</h4>
                    <p>selected items:{cart.length}</p>
                     <p>Total price:${totalPrice}</p>
                     <p>Total shipping:${totalShipping}</p>
                     <p>Tax :${tax}</p>
                     <h6> Grand Total:${grandTotal}</h6>

            
        </div>
    );
};

export default Cart;