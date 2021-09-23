import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = props => {
    // console.log(props);
    const { name, img,price,seller,stock } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3 style={{ color: 'blue'}}>{name}</h3>
                <span>By: {seller}</span>
                <p>${price}</p>
                <p>Only {stock} in Stock</p>
                <button onClick={() => props.cart(props.product)} className='btn'>
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                    Add To Cart
                </button>
            </div>
            
        </div>
    );
};

export default Product;