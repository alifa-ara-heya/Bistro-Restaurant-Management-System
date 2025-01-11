import useAuth from "../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h2>Hi, Welcome
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </h2>
        </div>
    );
};

export default UserHome;