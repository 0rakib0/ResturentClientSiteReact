import { useContext } from "react";
import useAxious from "./AxiousSecure";
import { AuthContext } from "../Provider/Provider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const secureAxios = useAxious()
    const { user , loading} = useContext(AuthContext)


    const { data: isAdmin = false, isPending: adminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/user/admin/${user?.email}`)
                return res.data
            }
        }
    })
    return [isAdmin, adminLoading]



};

export default useAdmin;