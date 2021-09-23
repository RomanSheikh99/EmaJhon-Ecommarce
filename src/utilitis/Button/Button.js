import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div>
            <button className="btn">{props.txt}</button>
        </div>
    );
};

export default Button;