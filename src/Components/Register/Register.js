import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import googleIcon from '../../images/google.png'
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { signInWithGoogle, user } = useFirebase();
    console.log(user);
    return (
        <div className='register'>
            <h2 className="text-5xl mb-4">Resigter Now</h2>
            <form>
                <input type="text" placeholder="Your Full Name" />
                <input type="email" placeholder="Your Email Address" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Re-enter Password" />
                <input className="bg-yellow-300 cursor-pointer w-2/4 text-2xl mt-4" type="submit" value="Submit" />
            </form>
            <p>Allready Have An Account? <Link className="text-yellow-600 my-2" to="/logIn">Login In</Link></p>
            <p>----------Or----------</p>
            <div className="iconBtn-container">
                <button onClick={signInWithGoogle} className="iconBtn">
                    <img src={googleIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Register;