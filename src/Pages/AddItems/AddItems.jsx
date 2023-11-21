import Swal from "sweetalert2";
import AxiousPublich from "../../Hooks/AxiousPublich";
import useAxious from "../../Hooks/AxiousSecure";
import SectionTitle from "../../SharePage/SectionTitle";
import { useForm } from "react-hook-form"


const image_hosting_key = 'd5817a7979da28a9d189101f4fa45174'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiousePublic = AxiousPublich()
    const axiouseSecure = useAxious()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiousePublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type':'multipart/form-data'
            }
        });
        console.log(res.data.data.display_url)

        const menuItem = {
            name: data.name,
            category: data.Category,
            price: parseFloat(data.price),
            recipe: data.details,
            image: res.data.data.display_url

        }
        const MenuRes = await axiouseSecure.post('/menu', menuItem)
        console.log(MenuRes)
        if(MenuRes.data.insertedId){
            Swal.fire({
                title: "Menu Item Successfully Added",
                text: "Item successfully add to your menu",
                icon: "success"
              });
        }
    }
    return (
        <div>
            <SectionTitle
                subHeader="What's New "
                mainDeader="ADD AN ITEM"
            ></SectionTitle>
            <div className="bg-[#F3F3F3] p-6 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true})} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='default' {...register("Category", { required: true})} className="select select-bordered w-full">
                                <option disabled value='default'>Select Category</option>
                                <option value='salad'>SALAD</option>
                                <option value='pizza'>PIZZA</option>
                                <option value='soup'>SOUP</option>
                                <option value='desserts'>DESSERTS</option>
                                <option value='dringks'>DRINGKS</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true})} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("details", { required: true})} className="textarea textarea-bordered h-28" placeholder="Recipe Details"></textarea>
                    </div>
                    <div>
                        <input {...register("image", { required: true})} type="file" className="file-input file-input-bordered w-full my-4" />
                    </div>
                    <button className="bg-yellow-400 py-3 px-24 w-full rounded-lg text-white">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;