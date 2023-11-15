import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatRouts = ( {children} ) => {
    const location = useLocation()
    const {user, loading}  = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivatRouts;