import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // for set data local storage and get
    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];
        // step1
        for(const id in storedCart){
            // console log(id)step 2 get product using id
            const addedProduct=products.find(product=>product.id===id);
        //   console.log(savedProduct);
        //   step:3 get quantity of the product
        if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity = quantity
        // step 4 saved cart a added product add kora
        savedCart.push(addedProduct);
        
        }
        console.log('added Product',addedProduct);
    }
    // step 5 set the cart
    setCart(savedCart);

    },[products])

    const handleAddToCart=(product)=>{
        let newCart=[];
        const exists =cart.find(pd=>pd.id === product.id);
        if (!exists){
            product.quantity=1;
            newCart=[...cart,product]
        }
        else{
            exists.quantity=exists.quantity+1;
            const remaining=cart.filter(pd=>pd.id!==product.id);
            newCart=[...remaining,exists];
        }  

        // const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart();
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product=><Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                    }

                </div>

                <div className="cart-container">
               <Cart cart={cart}
               handleClearCart={handleClearCart}
               >
                <Link to = "/order">
                <button className='review-order'>Review Order
                <FontAwesomeIcon className='' icon={faArrowAltCircleRight} />
                </button></Link>
               </Cart>

                </div>
            </div>

        </div>
    );
};

export default Shop;