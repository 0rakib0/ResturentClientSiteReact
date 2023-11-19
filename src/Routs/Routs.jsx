
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
        path:'all-users',
        element:<AdminRouts><AllUsers></AllUsers></AdminRouts>
      }
    ]
  }
]);