import { useQuery } from "@tanstack/react-query"
import useAxious from "./AxiousSecure"
import { useContext } from "react"
import { AuthContext } from "../Provider/Provider"

const useCard = () => {
    const {user} = useContext(AuthContext)
    const axiousSecure = useAxious()
    console.log('Hello')
    const {refetch, data: card} = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await axiousSecure.get(`/cards?email=${user?.email}`)
            return res.data
        }
    })
    
    return [card, refetch]
}

export default useCard