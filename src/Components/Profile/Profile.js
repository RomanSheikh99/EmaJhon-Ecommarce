import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './profile.css'

const Profile = () => {
    const {user } = useFirebase();
    return (
        <div className="profile">
            <div>
            <div>
                <img src={user.photoURL} alt="" />
            </div>
            <h2>{user.displayName}</h2>
            <span>{user.email}</span>
            </div>
        </div>
    );
};

export default Profile;