import Heading from "../../components/Heading";
import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="relative  max-w-[1920px] mx-auto">
            {/* Background Image with Overlay */}
            <div
                style={{ backgroundImage: `url(${featuredImg})`, backgroundPosition: 'center' }}
                className=" bg-cover bg-no-repeat absolute inset-0 bg-fixed">
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-65"></div>

            {/* Content */}
            <div className="relative text-gray-200 lg:max-w-[1320px] mx-auto w-11/12">
                <Heading heading={'From our menu'} subHeading={'check it out'} />
                <div className="md:flex flex-col md:flex-row justify-between md:items-center text-gray-200 md:py-20 py-12  gap-10">
                    <div className="md:w-1/2">
                        <img src={featuredImg} alt="" className="object-cover md:w-[648px] pb-8" />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Globally re-engineer next-generation e-commerce via distributed potentialities. Distinctively cultivate intuitive products rather than robust initiatives. Intrinsically create interdependent innovation with synergistic services. Seamlessly whiteboard an expanded array of products for exceptional alignments. Completely user-centric.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Featured;