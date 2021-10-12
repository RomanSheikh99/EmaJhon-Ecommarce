import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/register.css';
import googleIcon from '../../images/google.png'
import fbIcon from '../../images/facebook.png'
import twiIcon from '../../images/twitter.png'
import gitIcon from '../../images/github.png'
import useFirebase from '../../hooks/useFirebase';



const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className='register'>
            <h2 className="text-5xl mb-4">Login Now</h2>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <input className="bg-yellow-300 cursor-pointer w-2/4 text-2xl mt-4" type="submit" value="Submit" />
            </form>
            <p>Don't Have An Account?
                <Link className="text-yellow-600 my-2" to="/register"> Register Now</Link></p>
            <p>----------Or----------</p>
            <div className="iconBtn-container">
                <button onClick={signInWithGoogle} className="iconBtn">
                    <img src={googleIcon} alt="" />
                </button>
                <button onClick={signInWithGoogle} className="iconBtn">
                    <img src={fbIcon} alt="" />
                </button>
                <button onClick={signInWithGoogle} className="iconBtn">
                    <img src={twiIcon} alt="" />
                </button>
                <button onClick={signInWithGoogle} className="iconBtn">
                    <img src={gitIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Login;