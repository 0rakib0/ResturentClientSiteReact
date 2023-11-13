


const MenuItem = ({item}) =>{
    const {name, recipe, image, price} = item
    return (
        <div className="flex space-x-4 mt-8">
``          <img src={image} style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" alt="" />
            <div>
                <h4 className="text-2xl font-semibold">{name}---------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400 text-xl font-semibold">${price}</p>
        </div>
    )
}

export default MenuItem