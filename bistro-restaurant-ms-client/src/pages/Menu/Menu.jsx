import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuCover from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import Heading from "../../components/Heading";
import MenuCategory from "./MenuCategory";
import CoverCategory from "../Shared/CoverCategory";
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');

    const soup = menu.filter(item => item.category === 'soup');

    const salad = menu.filter(item => item.category === 'salad');

    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* banner image */}
            <Cover image={menuCover} title={'Our Menu'} subTitle={'Would you like to try a dish?'} />


            {/* today's offer  section*/}
            <Heading heading={"Today's Offer"} subHeading={"Don't miss"} />
            <MenuCategory items={offered} />

            {/* desserts */}
            <CoverCategory title={'Desserts'} subTitle={'Indulge your senses with our irresistible selection of desserts, crafted to perfection to satisfy your sweetest cravings. Whether you’re celebrating a special occasion or simply treating yourself, our desserts promise a moment of pure bliss. '} image={dessertBg} />
            <MenuCategory items={dessert} category={'desserts'} />

            {/* pizza */}
            <CoverCategory title={'Pizza'} subTitle={'Indulge your senses with our irresistible selection of pizzas, crafted to perfection to satisfy your cravings. Whether you’re celebrating a special occasion or simply treating yourself, our desserts promise a moment of pure bliss.'} image={pizzaBg} />
            <MenuCategory items={pizza} category={'pizza'} />

            {/* salads */}
            <CoverCategory title={'Salads'} subTitle={'Indulge your senses with our irresistible selection of salads, crafted to perfection to satisfy your cravings. Whether you’re celebrating a special occasion or simply treating yourself, our desserts promise a moment of pure bliss.'} image={saladBg} />
            <MenuCategory items={salad} category={'salad'} />

            {/* Soups  */}
            <CoverCategory title={'Soups'} subTitle={'Indulge your senses with our irresistible selection of soups, crafted to perfection to satisfy your cravings. Whether you’re celebrating a special occasion or simply treating yourself, our desserts promise a moment of pure bliss.'} image={soupBg} />
            <MenuCategory items={soup} category={'soups'} />
        </div>
    );
};

export default Menu;