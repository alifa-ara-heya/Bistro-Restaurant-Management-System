import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = async () => {

        try {
            await logOut(); // Ensure logout completes
            await Swal.fire({
                title: "Success",
                text: "Successfully Logged Out",
                icon: "success",
            });
        } catch (err) {
            // console.error("Logout Failed:", err);
            await Swal.fire({
                title: "Error",
                text: err.message || "Failed to log out. Please try again.",
                icon: "error",
            });
        }
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li><Link to='/signUp'>SignUp</Link></li>

        <li><Link to='/dashboard/cart'>
            <button className="btn">
                <FaShoppingCart className="mr-2" />
                <div className="badge badge-secondary">{cart.length}</div>
            </button>
        </Link></li>

        {
            user ?
                <button onClick={handleLogOut}>LogOut</button>
                :
                <li><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-[1920px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {user && <>
                        <span>{user?.displayName}</span>
                        <img src={user?.photoURL} alt="" className="w-12 h-12 object-cover rounded-full" />

                    </>}
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;