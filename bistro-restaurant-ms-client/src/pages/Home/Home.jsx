import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Banner2 />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;