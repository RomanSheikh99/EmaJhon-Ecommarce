import Button from '../../../utilitis/Button/Button';
import { clearTheCart } from '../../../utilitis/fakedb';
import './cart.css';

const Cart = props => {
    const products = props.cart;
    let price = 0;
    let item = 0;
    products.forEach(product => {
        if (!product.items) {
            product.items = 1;
        }
        price = price + (product.price * product.items);
        item = item + product.items;
    })
    const cost = (price / 100) * 3.6;
    const totatBeforTax = price + cost;
    const tax = (totatBeforTax / 100) * 11;
    const grandTotal = totatBeforTax + tax;

    const clearCart = () => {
        clearTheCart();
        location.reload();
    }
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items ordered: {item}</h5>
            <div className="flex-container"><span>Items:</span><span>$ {price.toFixed(2)}</span></div>
            <div className="flex-container"><span>Shipping & Handling:</span><span>$ {cost.toFixed(2)}</span></div>
            <div className="flex-container"><span>Total before tax:</span><span>$ {totatBeforTax.toFixed(2)}</span></div>
            <div className="flex-container"><span>Estimated Tax:</span><span>$ {tax.toFixed(2)}</span></div>
            <div className="flex-container"><h4>Order Total:</h4><h4>$ {grandTotal.toFixed(2)}</h4></div>
            <button onClick={clearCart} className='btn'>Clear Your Cart</button>
        </div>
    );
};

export default Cart;