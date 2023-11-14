import SectionTitle from "../../SharePage/SectionTitle"
import './feature.css'

import image from '../../assets/home/featured.jpg'
const FeatureItme = () => {
    return (
        <div>
            <SectionTitle
                subHeader={'Check it out'}
                mainDeader={'FEATURED ITEM'}
            ></SectionTitle>
             
            <div className="md:flex justify-center bg-fixed items-center pb-20 pt-12 px-36 myStyle pt-8 text-white my-20">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 15, 2023</p>
                    <p>Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam accusantium ipsam sit recusandae aliquam, aspernatur ullam pariatur alias, iure officiis temporibus amet neque dolor.</p>
                    <button className="bg-yellow-400 my-6 px-4 py-3 rounded-lg borde-b-4 ">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureItme