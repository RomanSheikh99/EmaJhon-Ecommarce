import React from 'react';
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
        </div>
    );
};

export default Header;