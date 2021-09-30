import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilitis/fakedb';
import Cart from '../Main/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);

    const removeItem = key => {
        const newCart = cart.filter(singleCart => singleCart.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className="shopping">
                <div className="empty-div"></div>
                <div className="products-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handler={removeItem}>
                    </ReviewItem>)
                }
                </div>
                <div className="shopping-cart">
                    <Cart key={cart.key} cart={cart}></Cart>
                </div>
            </div>
    );
};

export default Orders;