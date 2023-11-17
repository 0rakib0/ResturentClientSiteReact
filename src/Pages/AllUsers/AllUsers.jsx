import { FaTrashCan } from "react-icons/fa6"
import SectionTitle from "../../SharePage/SectionTitle"
import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hooks/AxiousSecure"


const AllUsers = () =>{

    const secureAxious = useAxious()
    const {data: user=[]} = useQuery ({
        queryKey:['users'],
        queryFn: async () => {
            const res = await secureAxious.get('/user')
            return res.data
        }
    })
    
    return (
        <div>
            <SectionTitle
                subHeader="My Card"
                mainDeader="USER LIST?"
            ></SectionTitle>
            <div className="ext-2xl font-semibold">
                <div>TOTALL USERS: {user.length}</div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center font-bold">
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    {/* <tbody className="text-center">
                        
                        {
                            card?.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{item.name}</p>
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn-ghost btn-xs text-red-500 rounded-lg">
                                        <FaTrashCan className="text-xl" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody> */}
                </table>
            </div>
        </div>
    )
}


export default AllUsers