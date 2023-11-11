import { Outlet } from "react-router-dom";
import Footer from "../SharePage/Footer";
import Navbar from "../SharePage/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;