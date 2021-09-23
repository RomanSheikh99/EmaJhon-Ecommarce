import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './shopping.css';

const Shopping = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shopping;