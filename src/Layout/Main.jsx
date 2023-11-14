import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharePage/Footer";
import Navbar from "../SharePage/Navbar";

const Main = () => {
    const location = useLocation()
    const DontShow = location.pathname.includes('login')
    return (
        <div>
            {DontShow || <Navbar></Navbar>}
            <Outlet></Outlet>
            {DontShow || <Footer></Footer>}
        </div>
    );
};

export default Main;