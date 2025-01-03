import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/Navbar";

const MainLayout = () => {
    const location = useLocation();
    // console.log(location); //gives the pathname of your current location

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');


    return (
        <div className="font-inter max-w-[1920px] mx-auto">
            {
                noHeaderFooter || <NavBar /> //login page will not have navbar and footer
            }
            <div className="min-h-[calc(100vh-396px)]">
                <Outlet />
            </div>
            {
                noHeaderFooter || <Footer /> //login page will not have navbar and footer
            }
        </div>
    );
};

export default MainLayout;