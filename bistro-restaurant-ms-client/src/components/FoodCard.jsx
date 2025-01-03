
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart(); //we can ignore the first parameter if we don't need it

    const { name, price, image, recipe, _id } = item;
    const handleAddToCart = async () => {
        // console.log(food, user?.email);
        if (user && user?.email) {
            //TODO: send cart data to the database, because food card/order page is public, so anybody can click on the addToCart btn. If there is no logged in user, we will navigate them to log in.
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }

            try {
                // Send data to database
                const { data } = await axiosSecure.post('/carts', cartItem);
                if (data.insertedId) {
                    toast.success('Successfully added cart data in db')

                    //refetch cart to update the items count
                    refetch()
                }
            } catch (err) {
                console.error('Error saving in db:', err);
                toast.error('Error saving in db', err)
            }
        }
        else {
            // Show SweetAlert for unauthenticated users
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page 
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">


            <img
                src={image}
                alt={name}
                className="" />
            <p className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-sm">${price}</p>


            <div className="card-body items-center text-center bg-gray-200">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="btn border-b-2 border-b-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;