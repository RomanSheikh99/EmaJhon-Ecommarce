import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {addToDb, getStoredCart} from '../../../utilitis/fakedb'
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './shopping.css';

const Shopping = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    const productId = getStoredCart();

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="shearch-bar">
            <input type="text" placeholder="Type Hare to Search" />
                <span className="icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
                <span className="ml-2 text-2xl text-yellow-500">{cart.length}</span>
        </div>
        <div className="shopping">
            <div className="empty-div"></div>
            <div className="products-container">
                {
                    products.map(product => <Product
                        cart={addToCart}
                        key={product.key}
                        product={product}>
                    </Product>)
                }
            </div>
            <div className="shopping-cart">
                <Cart key={cart.key} product={productId} cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shopping;