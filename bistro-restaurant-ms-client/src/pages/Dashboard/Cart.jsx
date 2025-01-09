import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => { // Make this callback async
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/carts/${id}`);
                    if (data.deletedCount > 0) { // Check if deletion was successful
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        console.log(data);
                        refetch()
                    }
                } catch (err) {
                    console.error("Error deleting item:", err);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete the item. Please try again.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div>
            <div className="flex justify-evenly items-center">
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: {totalPrice}</h2>
                {
                    cart.length ?
                        <Link to='/dashboard/payment'>
                            <button className="btn my-4">Pay</button></Link>
                        : <button disabled className="btn my-4">Pay</button>
                }
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img src={item.image} className="w-20" alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td><button
                                    onClick={() => handleDelete(item._id)} className="btn btn-md text-red-700"><FaTrashAlt /></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;