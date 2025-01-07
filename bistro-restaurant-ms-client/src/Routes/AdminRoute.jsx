import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-primary"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return (
        <Navigate to='/' state={{ from: location }} replace />
    );
};

export default AdminRoute;

/**
 * 1. do not show the link to those user who should not see the link
 * 2. even if they gets the link, do not allow them to visit the link
 * 3. do not allow user to access the api. check admin in the server as well
 * (verifyAdmin)
*/