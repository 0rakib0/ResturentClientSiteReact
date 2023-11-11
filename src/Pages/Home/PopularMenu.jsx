import { useEffect, useState } from "react"
import SectionTitle from "../../SharePage/SectionTitle"
import MenuItem from "../../SharePage/MenuItem"



const PopularMenu = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('MenuItem.json')
            .then(res => res.json())
            .then(data => {
                const PopulerItem = data.filter(item => item.category === 'popular')
                setItems(PopulerItem)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                subHeader='Popular Item'
                mainDeader='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
                {
                    items.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    )
}


export default PopularMenu