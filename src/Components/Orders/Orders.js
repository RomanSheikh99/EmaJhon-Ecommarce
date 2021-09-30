import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products] = useProducts();

    return (
        <div>
            <h2>{products.length}</h2>
        </div>
    );
};

export default Orders;