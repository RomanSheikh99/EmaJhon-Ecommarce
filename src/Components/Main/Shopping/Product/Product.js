import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';
import Rating from 'react-rating';

const Product = props => {
    const { name, img, price, seller, stock, star, features } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3 className="text-blue-600">{name}</h3>
                <span>By: {seller}</span>
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-yellow-500 font-semibold">${price}</h2>
                        <p>Only {stock} in Stock</p>
                        <button onClick={() => props.cart(props.product)} className='btn'>
                            <FontAwesomeIcon icon={faShoppingCart} /> 
                            Add To Cart
                        </button>
                    </div>
                    <div>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star mr-1 text-yellow-400"
                            fullSymbol="fas fa-star mr-1 text-yellow-400"
                            readonly>
                        </Rating>
                        <h2 className="text-2xl">Features</h2>
                        <ul className="ml-4">
                            {features.map(feature => <Li feature={feature.value}></Li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Li = props => {
    return (
        <li className="list-disc ml-4">{props.feature}</li>
    )
}

export default Product;