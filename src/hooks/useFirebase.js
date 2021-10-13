import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut,FacebookAuthProvider   } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initFirebase from "../firebase/firebase.init";

initFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            });
    }

    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert('Succesfully LogOut')
                setUser({})
            })
            .finally(() => {
                setLoading(false)
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false)
          });
    }, [])
    
    return {
        loading,
        user,
        error,
        signInWithGoogle,
        signInWithFacebook,
        logOut
    }
}

export default useFirebase;