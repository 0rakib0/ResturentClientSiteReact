import { NavLink, Outlet } from "react-router-dom";
import './Active.css'
import { FaBook, FaCalendarAlt, FaCreditCard, FaHome, FaIndent, FaList, FaNotesMedical, FaRegCalendarPlus, FaRegCommentAlt, FaShoppingBag, FaShoppingCart, FaUsers, FaMailBulk } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
const Dashbord = () => {

    const [isAdmin] = useAdmin()

    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="bg-[#D1A054] pb-16 pl-4 pt-2  col-span-2">
                <div>
                    <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
                    <p className="mb-8">Clint Satisfaction first</p>
                </div>
                <ul className="space-y-3 uppercase myDesign">
                    <li>Dashbord</li>

                    {
                        isAdmin ? <>
                            <li className="hover:text-white"><NavLink className='flex items-center gap-1' to='/dashbord'> <FaHome className="text-lg"></FaHome> Admin Home</NavLink></li>

                            <li><NavLink to='add-items' className='flex items-center gap-1'><FaNotesMedical className="text-lg"></FaNotesMedical> Add Item</NavLink></li>

                            <li><NavLink to='all-items' className='flex items-center gap-1'><FaList className="text-lg"></FaList> Manage Item</NavLink></li>

                            <li className="w-full"><NavLink to='card-items' className='flex items-center gap-1'><FaBook className="text-lg"></FaBook>Bookings</NavLink></li>

                            <li><NavLink to='all-users' className='flex items-center gap-1'> <FaUsers className="text-lg"></FaUsers> All Users</NavLink></li>
                        </>
                            :
                        <>
                            <li className="hover:text-white "><NavLink to='/dashbord' className='flex items-center gap-1'><FaHome className="text-lg"></FaHome> User Home</NavLink></li>

                            <li><NavLink to='resurvation' className='flex items-center gap-1'><FaCalendarAlt className="text-lg"></FaCalendarAlt> Resurvation</NavLink></li>

                            <li><NavLink to='payment-history' className='flex items-center gap-1'><FaCreditCard className="text-lg"></FaCreditCard>  Payment History</NavLink></li>

                            <li className="w-full"><NavLink to='card-items' className='flex items-center gap-1'><FaShoppingCart className="text-lg"></FaShoppingCart> My Card</NavLink></li>

                            <li><NavLink to='add-view' className='flex items-center gap-1'><FaRegCommentAlt className="text-lg"></FaRegCommentAlt> Add Review</NavLink></li>

                            <li><NavLink to='my-booking' className='flex items-center gap-1'><FaRegCalendarPlus className="text-lg"></FaRegCalendarPlus> My Booking</NavLink></li>

                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='home' className='flex items-center gap-1'><FaHome className="text-lg"></FaHome> Home</NavLink></li>
                    <li><NavLink to='menu' className='flex items-center gap-1'><FaIndent className="text-lg"></FaIndent> Menu</NavLink></li>
                    <li><NavLink to='shope' className='flex items-center gap-1'><FaShoppingBag className="text-lg"></FaShoppingBag> Shop</NavLink></li>
                    <li><NavLink to='contact' className='flex items-center gap-1'><FaMailBulk className="text-lg"></FaMailBulk> Contact</NavLink></li>
                </ul>
            </div>
            <div className="col-span-10 mt-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;