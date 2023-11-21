import { FaTrashCan } from "react-icons/fa6";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../SharePage/SectionTitle";
import { FaEdit } from "react-icons/fa";
import useAxious from "../../Hooks/AxiousSecure";
import Swal from "sweetalert2";



const AllItem = () => {
    const [items,,refetch] = useMenu()
    const axiousSecure = useAxious()
    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiousSecure.delete(`/menu/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle
                subHeader="Hurry up"
                mainDeader="MANAGE ALL ITEM"
            ></SectionTitle>
            <div className="ext-2xl font-semibold">
                <div>TOTALL USERS: {items?.length}</div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center font-bold">
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">

                            {
                                items?.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="">
                                            <p>{item.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>${item.price}</p>
                                    </td>
                                    <td>
                                        <button className="btn-ghost btn-xs text-yellow-300 rounded-lg">
                                            <FaEdit className="text-2xl" />
                                        </button>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDeleteItem(item._id)} className="btn-ghost btn-xs text-red-500 rounded-lg">
                                            <FaTrashCan className="text-2xl" />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllItem;