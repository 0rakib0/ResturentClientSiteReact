const FoodCard = ({ item }) => {
    const {name, recipe, image, category, price} = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Image Not Found!" /></figure>
                <p className="bg-slate-900 text-white absolute right-4 top-4 py-2 px-4 rounded-md">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="border-b-4 border-black p-2 rounded-lg hover:text-white hover:bg-yellow-500 ">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard