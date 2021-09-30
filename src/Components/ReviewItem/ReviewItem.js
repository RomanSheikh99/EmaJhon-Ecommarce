import React from 'react';

const ReviewItem = (props) => {
    const { name, price, items, key } = props.product;
    return (
        <div style={{padding: "10px", borderBottom: '1px solid #d3d3d3'}}>
            <div className="product-info">
                <h2 style={{color: 'blue'}}>{name}</h2>
                <h4>Price: {price}</h4>
                <p>Quantity: {items}</p>
                <button onClick={()=> props.handler(key)} className="btn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;