import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initFirebase from "../firebase/firebase.init";

initFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
    }, [])
    
    return {
        user,
        error,
        signInWithGoogle
    }
}

export default useFirebase;