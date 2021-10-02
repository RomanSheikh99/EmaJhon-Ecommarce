import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {addToDb, getStoredCart} from '../../../utilitis/fakedb'
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './shopping.css';
import { Link } from 'react-router-dom';

const Shopping = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    const searchProduct = event => {
        const getInputValue = event.target.value;
        const getProduct = products.filter(product => product.name.toLowerCase().includes(getInputValue.toLowerCase()));
        setDisplayProduct(getProduct);
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
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, []);


    let totalProduct = 0;
    cart.forEach(product => {
        if (!product.items) {
            product.items = 1;
        }
        totalProduct = totalProduct + product.items;
    })

    return (
        <div>
            <div className="shearch-bar">
                <input onChange={searchProduct} type="text" placeholder="Type Hare to Search" />
                <span className="icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
                <span className="ml-2 text-2xl text-yellow-500">{totalProduct}</span>
            </div>
            <div className="shopping">
                <div className="empty-div"></div>
                <div className="products-container">
                {
                    displayProduct.map(product => <Product
                        cart={addToCart}
                        key={product.key}
                        product={product}>
                    </Product>)
                }
                </div>
                <div className="shopping-cart">
                    <Cart key={cart.key} cart={cart}>
                        <Link to="/orders">
                            <button className='btn'>Review Orders</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shopping;