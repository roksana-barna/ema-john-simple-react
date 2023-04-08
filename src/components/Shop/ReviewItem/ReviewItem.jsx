import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {img,id,quantity,name,price}=product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p> price:<span className='orange-text'>${price}</span></p>
                <p>Order Quantity:<span className='orange-text'>{quantity}</span></p>

            </div>
            <button  onClick={ ()=>handleRemoveFromCart(id)}className='button-delete'>
              <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;