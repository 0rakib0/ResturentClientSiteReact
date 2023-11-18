import { FaTrashCan, FaUsers } from "react-icons/fa6"
import SectionTitle from "../../SharePage/SectionTitle"
import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hooks/AxiousSecure"
import Swal from "sweetalert2"


const AllUsers = () => {

    const secureAxious = useAxious()
    const { refetch, data: user = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await secureAxious.get('/user')
            return res.data
        }
    })

    const handleAdmin = id => {
        Swal.fire({
            title: "You Want t make admin this user",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxious.patch(`/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "User Role Sucessfully swich in admin",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxious.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

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
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">

                        {
                            user?.map((user, index) => <tr key={user._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="">
                                        <p>{user.name}</p>
                                    </div>
                                </td>
                                <td>
                                    <p>{user.email}</p>
                                </td>
                                <td>
                                   {user.role === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user._id)} className="btn-ghost btn-xs text-red-500 rounded-lg">
                                        <FaUsers className="text-2xl" />
                                    </button>}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn-ghost btn-xs text-red-500 rounded-lg">
                                        <FaTrashCan className="text-2xl" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default AllUsers