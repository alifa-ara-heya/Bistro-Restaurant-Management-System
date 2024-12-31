// import CoverCategory from "../Shared/CoverCategory";
import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, category }) => {

    return (
        <div className="max-w-[1320px] mx-auto w-11/12 my-10 md:my-20">
            {/*  <CoverCategory image={image} title={title} subTitle={subTitle} /> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                {items.map(item => <MenuItem key={item._id} item={item} />)}
            </div>

            <div className="flex justify-center">
                <Link to={`/order/${category}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Food Now
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default MenuCategory;