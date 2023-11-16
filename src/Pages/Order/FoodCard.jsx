import { useContext } from "react"
import { AuthContext } from "../../Provider/Provider"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

// import axios from 'axios';
import useAxious from "../../Hooks/AxiousSecure";
import useCard from "../../Hooks/useCard";

const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, category, price } = item
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const [, refetch ] = useCard()

    const axious = useAxious()

    const naviget = useNavigate()
    const CardItem = {
        user: user?.email,
        itemId: _id,
        name,
        price,
        image
    }
    const handlAdd = (i) => {
        if (user) {
            axious.post('/cards', CardItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item successfully added to your card",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        } else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "For add product to card you need login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Here"
            }).then((result) => {
                if (result.isConfirmed) {
                    naviget('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Image Not Found!" /></figure>
                <p className="bg-slate-900 text-white absolute right-4 top-4 py-2 px-4 rounded-md">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handlAdd(item)} className="border-b-4 border-black p-2 rounded-lg hover:text-white hover:bg-yellow-500 ">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard