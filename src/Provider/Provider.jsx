import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const Provider = ( {children} ) =>{
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const Login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const Register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }
    
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() =>{
        const unSubsCribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubsCribe()
    },[])

    const AuthInfo = {
        user,
        loading,
        Login,
        Register,
        Logout,
        googleLogin
    }

    return (
        <AuthContext.Provider value={AuthInfo}> 
            {children}
        </AuthContext.Provider>
    )
}

export default Provider