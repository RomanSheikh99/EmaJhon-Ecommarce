import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './header.css';
import logo from '../../images/logo.png';



const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Order Review</a></li>
                    <li><a href="/manage">Manage Inventory here</a></li>
                </ul>
            </nav>
            <div className="shearch-bar">
                <input type="text" placeholder="Type Hare to Search" />
                <span className="icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
        </div>
    );
};

export default Header;