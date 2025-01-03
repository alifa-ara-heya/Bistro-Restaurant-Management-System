import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'signUp',
                element: <SignUp />
            }
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }

]);

export default router;