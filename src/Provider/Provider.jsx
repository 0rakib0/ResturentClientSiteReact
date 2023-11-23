import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import AxiousPublich from "../Hooks/AxiousPublich";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const Provider = ( {children} ) =>{
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const publicAxious = AxiousPublich()


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

            if(currentUser){
                const userInfo = { email: currentUser.email }
                publicAxious.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token){
                        
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })
        return () => unSubsCribe()
    },[publicAxious])

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