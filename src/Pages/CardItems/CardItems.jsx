import useAxious from "../../Hooks/AxiousSecure";
import useCard from "../../Hooks/useCard";
import SectionTitle from "../../SharePage/SectionTitle";
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2'


const CardItems = () => {
    const [card, refetch] = useCard()
    const axiourSecure = useAxious()


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiourSecure.delete(`/cards/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
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
    console.log(card)
    const totalPrice = card?.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice)
    return (
        <div>
            <SectionTitle
                subHeader="My Card"
                mainDeader="WANNA ADD MORE?"
            ></SectionTitle>
            <div className="flex justify-evenly text-2xl font-semibold">
                <div>TOTALL ORDERS: {card?.length}</div>
                <div>TOTALL PRICE: ${totalPrice}</div>
                <div className="bg-[#D1A054] px-6 py-2 text-white rounded-md"><button>PAY</button></div>
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
                    <tbody className="text-center">
                        {/* row 1 */}
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
                                    <button onClick={() => handleDelete(item._id)} className="btn-ghost btn-xs text-red-500 rounded-lg">
                                        <FaTrashCan className="text-xl" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardItems;