import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
    return (
        <div className='register'>
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
                <FontAwesomeIcon icon={faRecycle} />
            </div>
        </div>
    );
};

export default Register;