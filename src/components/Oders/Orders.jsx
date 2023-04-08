import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../Shop/ReviewItem/ReviewItem';
// import ReviewItem from '../ReviewItem/REviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
     const [cart,setCart]= useState(savedCart);
     const handleRemoveFromCart =(id)=>{
        const remaining= cart.filter( product=>product.id !==id)
        setCart(remaining);
        removeFromDb(id);
        //  console.log(id)
     }
    //  clear cart button er jnno
    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart();
    }

   
    return (

        <div className="shop-container">



            <div className="review-container">


                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}


                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                {/* <Car cart={cart}></Cart>
                 */}
              <Cart cart={cart}
                handleClearCart={handleClearCart}
                

              >
                <div> from oder</div>
              </Cart>

            </div>

        </div>
    );
};

export default Orders;