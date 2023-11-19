import { useContext } from "react";
import useAxious from "./AxiousSecure";
import { AuthContext } from "../Provider/Provider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const secureAxios = useAxious()
    const {user} = useContext(AuthContext)

    const {data: isAdmin, isPending: adminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async () =>{
            const res = await secureAxios.get(`/user/admin/${user.email}`)
            return res.data
        }
    })

    return [isAdmin, adminLoading]
};

export default useAdmin;