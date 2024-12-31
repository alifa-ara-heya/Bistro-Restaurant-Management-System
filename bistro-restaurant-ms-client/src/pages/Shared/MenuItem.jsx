
const MenuItem = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className="flex gap-6 justify-between">
            {/* 0px 200px 200px 200px; */}
            <img src={image} alt="" className="w-32 rounded-tl-none rounded-[200px] object-cover" />
            <div className="">
                <h2 className="font-cinzel md:text-xl text-lg">{name} ---------- </h2>
                <p className="text-gray-500 font-medium">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;