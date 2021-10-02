import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/orders">Order Review</NavLink></li>
                    <li><NavLink to="/inventory">Manage Inventory</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;