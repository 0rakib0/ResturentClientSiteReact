
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivatRouts from "./PrivatRouts";
import Dashbord from "../Layout/Dashbord";
import CardItems from "../Pages/CardItems/CardItems";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRouts from "./AdminRouts";
import AddItems from "../Pages/AddItems/AddItems";
import AllItem from "../Pages/AllItem/AllItem";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Payment/PaymentHistory";
import AdminHome from "../Pages/AdminHome/AdminHome";
import UserHome from "../Pages/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <PrivatRouts><Menu></Menu></PrivatRouts>
      },
      {
        path: '/orders/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path:'/dashbord',
    element:<Dashbord></Dashbord>,
    children:[
      {
        path:'card-items',
        element:<CardItems></CardItems>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      {
        path:'all-users',
        element:<AdminRouts><AllUsers></AllUsers></AdminRouts>
      },
      {
        path:'add-items',
        element:<AdminRouts><AddItems></AddItems></AdminRouts>
      },
      {
        path:'all-items',
        element:<AdminRouts>
          <AllItem></AllItem>
        </AdminRouts>
      },
      {
        path:'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'admin-home',
        element: <AdminRouts><AdminHome></AdminHome></AdminRouts>
      },
      {
        path:'user-home',
        element: <UserHome></UserHome>
      }

    ]
  }
]);