import { useContext, useEffect, useState } from 'react';
import authBg from '../../assets/others/authentication.png'
import authImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin';

const LogIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    // console.log(location.state);

    const [disabled, setDisabled] = useState(true);

    const handleLogin = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.table(email, password);

        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log('User:', user);
            await Swal.fire({
                title: "Success",
                text: "Successfully Logged In",
                icon: "success"
            });
            navigate(from, { replace: true })

            // form.reset();

        } catch (err) {
            console.error('Login Failed:', err);

            // Show error message
            await Swal.fire({
                title: "Error",
                text: err.message || "Failed to log in. Please try again.",
                icon: "error",
            });
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value); //gives what the user types
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <div style={{ backgroundImage: `url(${authBg})` }}>
            <Link to='/' >
                <button className='btn bg-[#D1A054] text-white m-4'>Bistro Home Page</button>
            </Link>
            <div className='w-11/12 mx-auto max-w-[1440px] flex flex-col md:flex-row justify-center items-center min-h-screen gap-10'>
                <img src={authImg} alt="" className='lg:w-[500px] w-[200px] sm:w-[300px] md:w-[400px]' />
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl ">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h2 className="text-center">Login Now</h2>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* captcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text"
                                onBlur={handleValidateCaptcha}
                                // ref={captchaRef}
                                name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                            {/* <button

                                className='btn btn-outline btn-xs mt-2'>Validate</button> */}
                        </div>



                        {/* submit */}
                        <div className="form-control mt-6">
                            {/* <button className="btn bg-[#D1A054]">Login</button> */}
                            <input disabled={disabled} className="btn bg-[#D1A054]" type='submit' value={'Login'}></input>
                        </div>
                        <p className='my-3 text-sm'>
                            New Here?
                            <span className='text-violet-500 ml-2 '>
                                <Link to="/signUp">
                                    Sign Up
                                </Link>
                            </span>
                        </p>
                        <SocialLogin />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default LogIn;