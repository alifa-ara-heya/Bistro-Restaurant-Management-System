import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/Navbar";

const MainLayout = () => {
    return (
        <div className="font-inter max-w-[1920px] mx-auto">
            <NavBar />
            <div className="min-h-[calc(100vh-396px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;