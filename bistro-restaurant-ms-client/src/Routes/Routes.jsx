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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers";

import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";

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
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,

        children: [
            //normal user routes
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'payment',
                element: <Payment />
            },

            //admin routes
            {
                path: 'addItems',
                element: <AdminRoute>
                    <AddItems />
                </AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute>
                    <ManageItems />
                </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute>
                    <UpdateItem />
                </AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }

]);

export default router;