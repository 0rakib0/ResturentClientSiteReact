import { useContext } from "react";
import useAxious from "./AxiousSecure";
import { AuthContext } from "../Provider/Provider";


const useAdmin = () => {
    const secureAxios = useAxious()
    const {user} = useContext(AuthContext)

    return (
        <div>
            
        </div>
    );
};

export default useAdmin;