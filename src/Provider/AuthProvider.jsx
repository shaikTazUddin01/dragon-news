import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader]=useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    const login=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const AuthInFo = {
        user,
        createUser,
        logOut,
        login,
        loader
    }
    return (
        <AuthContext.Provider value={AuthInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;