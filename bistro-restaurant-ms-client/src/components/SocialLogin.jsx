import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            console.log('Google Sign-In Success:', result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }

            const response = await axiosPublic.post('/users', userInfo);
            console.log(response);
            toast.success('Successfully logged in')
            navigate(from, { replace: true })


        } catch (err) {
            console.error('Google Sign-In Error:', err.message || 'An error occurred.');
            toast.error(err.message || 'Failed to log in with Google.');
        }
    };

    return (
        <>
            <span className="divider -mt-2">or,</span>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline"
                aria-label="Sign in with Google"
            >
                Sign In with Google <FaGoogle className="ml-2" />
            </button>
        </>
    );
};

export default SocialLogin;
