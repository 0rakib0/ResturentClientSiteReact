import { NavLink, Outlet } from "react-router-dom";
import './Active.css'
const Dashbord = () => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="bg-[#D1A054] pb-16 pl-4 pt-2  col-span-2">
                <div>
                    <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
                    <p className="mb-8">Clint Satisfaction first</p>
                </div>
                <ul className="space-y-3 uppercase myDesign">
                    <li>Dashbord</li>
                    <li className="hover:text-white "><NavLink to='/dashbord'>User Home</NavLink></li>
                    <li><NavLink to='resurvation'>Resurvation</NavLink></li>
                    <li><NavLink to='payment-history'>Payment History</NavLink></li>
                    <li className="w-full"><NavLink to='card-items'>My Card</NavLink></li>
                    <li><NavLink to='add-view'>Add View</NavLink></li>
                    <li><NavLink to='my-booking'>My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='home'>Home</NavLink></li>
                    <li><NavLink to='menu'>Menu</NavLink></li>
                    <li><NavLink to='shope'>Shop</NavLink></li>
                    <li><NavLink to='contact'>Contact</NavLink></li>
                </ul>
            </div>
            <div className="col-span-10 mt-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;