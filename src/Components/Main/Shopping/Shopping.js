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

    const searchProduct = event => {
        const getInputValue = event.target.value;
        const getProduct = products.filter(product => product.name.include(getInputValue));
        console.log(getProduct);
    }

    useEffect(() => {
        const productId = getStoredCart();
        if (products.length) {
            const addedProduct = [];
            for (const id in productId) {
                const newCart = products.find(product => product.key === id);
                if (newCart) {
                    const item = productId[id];
                    newCart.items = item;
                    addedProduct.push(newCart);
                }
            }
            setCart(addedProduct);
        }
    },[products])

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="shearch-bar">
            <input onChange={searchProduct} type="text" placeholder="Type Hare to Search" />
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
                <Cart key={cart.key} cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shopping;