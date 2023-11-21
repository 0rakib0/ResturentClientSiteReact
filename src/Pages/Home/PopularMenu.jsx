import SectionTitle from "../../SharePage/SectionTitle"
import MenuItem from "../../SharePage/MenuItem"
import useMenu from "../../Hooks/useMenu"



const PopularMenu = () => {
    const [menu] = useMenu()
    const Popular = menu?.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle
                subHeader='Popular Item'
                mainDeader='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
                {
                    Popular?.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    )
}


export default PopularMenu