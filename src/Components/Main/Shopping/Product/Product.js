import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = props => {
    console.log(props);
    const { name, img,price,seller,stock } = props.product;
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
                        <div className="flex">
                            <i className="fas fa-star mr-1 text-yellow-400"></i>
                            <i className="far fa-star mr-1 text-yellow-400"></i>
                            <i className="far fa-star mr-1 text-yellow-400"></i>
                        </div>
                        <h2 className="text-2xl">Features</h2>
                        <ul className="ml-4">
                            <li className="list-disc ml-4">Lorem, ipsum dolor.</li>
                            <li className="list-disc ml-4">Sunt, ipsum. Cumque!</li>
                            <li className="list-disc ml-4">Aliquid, dolorum reprehenderit.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;