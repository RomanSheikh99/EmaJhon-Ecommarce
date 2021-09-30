import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Main/Cart/Cart';

const Orders = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);

    return (
        <div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Orders;