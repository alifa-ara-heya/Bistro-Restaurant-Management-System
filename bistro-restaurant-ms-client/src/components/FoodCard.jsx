
const FoodCard = ({ item }) => {
    const { name, price, image, recipe } = item;
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
                    <button className="btn border-b-2 border-b-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;