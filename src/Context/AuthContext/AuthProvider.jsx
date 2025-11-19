import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const Googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loadding,setLoadding]=useState(true)
    
    const creatUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin=()=>{
        setLoadding(true)
        return signInWithPopup(auth,Googleprovider)
    }

    const logOut=()=>{
        setLoadding (true)
        return signOut(auth)
    }

    const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile)
    }

    const ResetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    //Objerver user state 
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUse)=>{
            setUser(currentUse)
            setLoadding(false)
        })
        return () => unSubscribe()
    },[])


    const authInfo={
        ResetPassword,
        updateUserProfile,
        logOut, 
        user,
        loadding,
        creatUser,
        loginUser,
        googleLogin
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;