import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import { Link, NavLink, useHistory} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';



const Header = () => {
    const { user, logOut } = useFirebase();
    const history = useHistory();
    const logOutFromThePage = () => {
        logOut();
        history.push("/");
    }
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="navbar">
                <ul>
                    <li className="hover-effect"><NavLink to="/shop">Shop</NavLink></li>
                    <li className="hover-effect"><NavLink to="/orders">Order Review</NavLink></li>
                    <li className="hover-effect"><NavLink to="/inventory">Manage Inventory</NavLink></li>
                </ul>
                <div className="auth-bar">
                    {user.photoURL ?<div className="logOut-section">
                        <button className='logout-btn' onClick={logOutFromThePage}>Log Out</button>
                        <Link to="/profile">
                            <img className="profile-link" src={user.photoURL} alt="" />
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