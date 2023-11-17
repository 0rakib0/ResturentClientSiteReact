import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import app from "../firebase.config";
import { getAuth } from "firebase/auth";
const auth = getAuth(app)
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../Hooks/useCard";
const Navbar = () => {

    const { user, Logout } = useContext(AuthContext)

    const [card] = useCard()
    console.log(card)
    const handleLogout = () => {
        Logout(auth)
    }

    const NavLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/orders/salad'>Orders</Link></li>
        {user ? <li><button onClick={handleLogout}>Logout</button></li> :
            <li><Link to='/login'>Login</Link></li>
        }
        <li>
            <button>
                <Link to='/dashbord/card-items' className="flex items-center gap-2"> <FaShoppingCart className="text-2xl"></FaShoppingCart>
                    <div className="badge badge-secondary">+{card?.length}</div></Link>
            </button>
        </li>


    </>



    return (
        <>

            <div className="navbar fixed w-11/12 mx-auto z-10 bg-opacity-20 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLink}
                    </ul>
                </div>
                {user && <div className="navbar-end">
                    <h1 className="mr-6 text-2xl">{user.displayName}</h1>
                    <div className="avatar">
                        <div className="w-16 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </div>}
            </div>

        </>
    );
};

export default Navbar;