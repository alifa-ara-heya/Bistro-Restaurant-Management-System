import { FaBook, FaComment, FaEnvelope, FaFirstOrder, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    //TODO: get admin value from the database
    const [isAdmin] = useAdmin();


    return (
        <div className="flex">

            {/* sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    {
                        isAdmin
                            ? <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils></FaUtensils>
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList></FaList>
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaBook></FaBook>
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers></FaUsers>
                                        All Users</NavLink>
                                </li>

                            </>
                            : <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaList />Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart />My Cart: {cart.length} </NavLink>
                                </li>


                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaComment />Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaList />My Bookings</NavLink>
                                </li>

                            </>
                    }

                    {/* shared nav links */}
                    <div className="divider before:bg-orange-200 after:bg-orange-200"></div>

                    <li>
                        <NavLink to='/'>
                            <FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaFirstOrder />Menu</NavLink>
                    </li>

                    <li>
                        <NavLink to='/order/contact'>

                            <FaEnvelope />Contact</NavLink>
                    </li>

                </ul>
            </div>

            {/* content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;