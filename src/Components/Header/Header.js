import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';



const Header = () => {
    const {user, logOut} = useFirebase();
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
                <div className="auth-bar">
                    {user.photoURL ?<div className="logOut-section">
                        <button onClick={logOut}>Log Out</button>
                        <Link to="/profile">
                            <img src={user.photoURL} alt="" />
                        </Link>
                    </div>:
                    <div>
                    <NavLink to="/logIn">Login</NavLink>
                    <span>/</span>
                    <NavLink to="/register">Register</NavLink>
                    </div>}
                </div>
            </nav>
        </div>
    );
};

export default Header;