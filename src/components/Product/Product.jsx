import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>price:${price}</p>
                <p>manufaturer:{seller}</p>
                <p>Ratings:{ratings}stars</p>

            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>ADD TO CART</button>
        </div>
    );
};

export default Product;