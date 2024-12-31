// import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    /* const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
                // setMenu(data)
            })
    }, []) */
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')


    return (
        <div className=" max-w-[1320px] mx-auto w-11/12 mb-10">
            <Heading heading={'From our menu'} subHeading={'check it out'} />

            {/* <h2>Menu:{menu.length} </h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                {/* {menu.map(item => <MenuItem key={item._id} item={item} />)} */}
                {popularItems.map(item => <MenuItem key={item._id} item={item} />)}

            </div>

            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4 my-6 ">View Full Menu
                </button>
            </div>
        </div>
    );
};

export default PopularMenu;