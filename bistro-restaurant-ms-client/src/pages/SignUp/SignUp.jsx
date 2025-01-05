import { Link, useNavigate } from 'react-router-dom';
import authBg from '../../assets/others/authentication.png'
import authImg from '../../assets/others/authentication2.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import axios from 'axios'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin';



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            //1. Prepare FormData for ImageBB
            const formData = new FormData();
            formData.append('image', data.photo[0]) //// `photo` comes from React Hook Form

            // 2. Upload Image to ImageBB
            const imageResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
            const imageURL = imageResponse.data.data.display_url;

            // 3. User Registration
            const result = await createUser(data.email, data.password);
            const user = result.user;
            console.log('Sign Up User:', user);

            //4. Save username & profile photo
            await updateUserProfile(data.name, imageURL)

            const userInfo = {
                name: data.name,
                email: data.email,
            }

            // 5. Save user info to the database
            const response = await axiosPublic.post('/users', userInfo)
            if (response.data.insertedId) {
                console.log(response);
                // 4. Show success message
                await Swal.fire({
                    title: "Success",
                    text: "Successfully Registered",
                    icon: "success"
                });
            }

            // 6. Reset form and navigate to the login page
            reset();
            navigate(from, { replace: true })
            // navigate('/')

            // 5. Log out the user and navigate to the login page
            // await logOut();
            // navigate('/login')
        } catch (err) {
            await Swal.fire({
                title: "Error",
                text: err.message || "Failed to register. Please try again.",
                icon: "error",
            });
        }
    }

    /*   const handleRegister = async e => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
  
          try {
              const result = await createUser(email, password);
              const user = result.user;
              console.log('Sign Up User:', user);
          } catch (err) {
              console.log('Sign Up Failed', err);
          }
      } */
    return (
        <div style={{ backgroundImage: `url(${authBg})` }}>

            <Link to='/' >
                <button className='btn bg-[#D1A054] text-white m-4'>Bistro Home Page</button>
            </Link>

            <div className='w-11/12 mx-auto max-w-[1440px] flex flex-col md:flex-row justify-center items-center min-h-screen gap-10'>
                <img src={authImg} alt="" className='lg:w-[500px] w-[200px] sm:w-[300px] md:w-[400px]' />
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl ">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-center">Register</h2>

                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: true })}
                                name='name' placeholder="Type here" className="input input-bordered" />
                            {errors.name && <span className='text-red-400 text-sm'>Name is required</span>}
                        </div>

                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Image</span>
                            </label>
                            <input type="file"
                                {...register("photo", { required: true })}
                                name='photo'
                                placeholder="Type here" className="input input-bordered"
                                accept='image/*' />
                            {errors.photo && <span className='text-red-400 text-sm'>Photo is required</span>}
                        </div>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-400 text-sm'>Email is required</span>}
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    validate: {
                                        hasUppercase: (value) =>
                                            /[A-Z]/.test(value) || "Password must include at least one uppercase letter.",
                                        hasLowercase: (value) =>
                                            /[a-z]/.test(value) || "Password must include at least one lowercase letter.",
                                        hasNumber: (value) =>
                                            /\d/.test(value) || "Password must include at least one number.",
                                        hasSpecialChar: (value) =>
                                            /[@$!%*?&]/.test(value) || "Password must include at least one special character.",
                                        isLongEnough: (value) =>
                                            value.length >= 7 || "Password must be at least 7 characters long.",
                                        isShortEnough: (value) =>
                                            value.length <= 20 || "Password must not exceed 20 characters."
                                    }
                                })}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            {/* Individual error messages */}
                            {errors.password?.type === "hasUppercase" && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                            {errors.password?.type === "hasLowercase" && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                            {errors.password?.type === "hasNumber" && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                            {errors.password?.type === "hasSpecialChar" && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                            {errors.password?.type === "isLongEnough" && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                            {errors.password?.type === "isShortEnough" && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                        </div>
                        {/* simple password related error message */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                                        message: "Password must include 8-20 characters, with uppercase, lowercase, number, and special character."
                                    }
                                })}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            {errors.password?.type === 'required' && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <span className="text-red-400 text-sm">{errors.password.message}</span>
                            )}
                        </div> */}


                        {/* submit */}
                        <div className="form-control mt-6">
                            {/* <button className="btn bg-[#D1A054]">Login</button> */}
                            <input className="btn bg-[#D1A054]" type='submit' value={'Register'}></input>
                        </div>

                        <p className='my-2 text-sm'>
                            New Here?
                            <span className='text-violet-500 ml-2 '>
                                <Link to="/login">
                                    Sign In
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

export default SignUp;