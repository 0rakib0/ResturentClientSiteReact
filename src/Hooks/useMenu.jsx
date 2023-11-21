import { useQuery } from "@tanstack/react-query";
import AxiousPublich from "./AxiousPublich";


const useMenu = () => {
    const publisAxious = AxiousPublich()

    const {data: items, isPending: loading, refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async () =>{
            const res = await publisAxious.get('/menu')
            return res.data
        }
    })

    return [items, loading, refetch]
};

export default useMenu;