import React, { useEffect, useState } from 'react';
import Button from '../../../utilitis/Button/Button';
import './cart.css';

const Cart = props => {
    // const productId = props.product;
    const products = props.cart;
    // const [products, setProducts] = useState([]);
    // setProducts(allProducts);
    console.log(products);
    // useEffect(() => {
    //     for (const id in productId) {
    //         const cartProducts = allProducts.find(product => product.key === id);
    //         setProducts(cartProducts);
    //     }
    // },[products])
    const order = products.length;
    let price = 0;
    products.forEach(product => {
        price = price + product.price;
    })
    const cost = (price / 100) * 3.6;
    const totatBeforTax = price + cost;
    const tax = (totatBeforTax / 100) * 11;
    const grandTotal = totatBeforTax + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items ordered: {order}</h5>
            <div className="flex-container"><span>Items:</span><span>$ {price.toFixed(2)}</span></div>
            <div className="flex-container"><span>Shipping & Handling:</span><span>$ {cost.toFixed(2)}</span></div>
            <div className="flex-container"><span>Total before tax:</span><span>$ {totatBeforTax.toFixed(2)}</span></div>
            <div className="flex-container"><span>Estimated Tax:</span><span>$ {tax.toFixed(2)}</span></div>
            <div className="flex-container"><h4>Order Total:</h4><h4>$ {grandTotal.toFixed(2)}</h4></div>
            <Button txt="Review your order"></Button>
        </div>
    );
};

export default Cart;