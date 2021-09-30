import { useEffect, useState } from "react"
import { getStoredCart } from "../utilitis/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storeCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const items = saveCart[key];
                    addedProduct.items = items;
                    storeCart.push(addedProduct);
                };
            }
            setCart(storeCart);
        }
    }, [products])
    
    return [cart,setCart];
}

export default useCart;