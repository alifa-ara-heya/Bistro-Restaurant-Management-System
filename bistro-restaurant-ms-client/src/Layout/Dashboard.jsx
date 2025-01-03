import { FaCalendar, FaComment, FaFirstOrder, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">

            {/* sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart />My Cart: {cart.length} </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaComment />Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList />My Bookings</NavLink>
                    </li>

                    <div className="divider"></div>

                    <li>
                        <NavLink to='/'>
                            <FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaFirstOrder />Menu</NavLink>
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