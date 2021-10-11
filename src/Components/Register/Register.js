import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Resigter Now</h2>
            <form>
                <input type="text" placeholder="Your Full Name" />
                <input type="email" placeholder="Your Email Address" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Re-enter Password" />
                <input type="submit" value="Submit" />
            </form>
            <p>Allready Have An Account? <Link to="/logIn">Login In</Link></p>
            <p>----------Or----------</p>
            <div>
                <FontAwesomeIcon icon={faGoogle} />
            </div>
        </div>
    );
};

export default Register;