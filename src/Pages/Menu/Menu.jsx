import { Helmet } from "react-helmet-async";
import Cover from "../../SharePage/Cover";

import image from '../../assets/menu/banner3.jpg'
import Desset from '../../assets/menu/dessert-bg.jpeg'
import Pizza from '../../assets/menu/pizza-bg.jpg'
import Salad from '../../assets/menu/salad-bg.jpg'
import Soup from '../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../SharePage/SectionTitle";
import MenuCategory from "../../SharePage/MenuCategory";
import useMenu from "../../Hooks/useMenu";
const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={image}
                title='OUR MENU'
            >
            </Cover>
            <SectionTitle
                subHeader='Dont Miss'
                mainDeader='TODAYS OFFER'
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <div className="flex justify-center">
                <button className="border-b-4 font-semibold border-black pb-2 rounded-lg mb-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            {/* dessert section */}
            <Cover
                img={Desset}
                title='DESSERTS'
            >
            </Cover>
            <MenuCategory items={dessert}></MenuCategory>
            <div className="flex justify-center">
                <button className="border-b-4 font-semibold border-black pb-2 rounded-lg mb-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            {/* Pizza section */}
            <Cover
                img={Pizza}
                title='PIZZA'
            >
            </Cover>
            <MenuCategory items={pizza}></MenuCategory>
            <div className="flex justify-center">
                <button className="border-b-4 font-semibold border-black pb-2 rounded-lg mb-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>

             {/* Salad section */}
             <Cover
                img={Salad}
                title='SALAD'
            >
            </Cover>
            <MenuCategory items={salad}></MenuCategory>
            <div className="flex justify-center">
                <button className="border-b-4 font-semibold border-black pb-2 rounded-lg mb-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            {/* Soup section */}
            <Cover
                img={Soup}
                title='SOUP'
            >
            </Cover>
            <MenuCategory items={soup}></MenuCategory>
            <div className="flex justify-center">
                <button className="border-b-4 font-semibold border-black pb-2 rounded-lg mb-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>


        </div>
    );
};

export default Menu;