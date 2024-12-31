import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="flex md:flex-row flex-col text-center">
                <div className="bg-[#1F2937] text-gray-200 py-24 lg:pl-36 md:px-20 md:w-1/2 w-full">
                    <div className="">
                        <h4 className="text-xl md:text-2xl mb-5">Contact Us</h4>
                        <section className="space-y-3 inline-block">
                            <p>123 ABS Street, Uni 21, Bangladesh</p>
                            <p>+88 123456789 </p>
                            <p>Mon - Fri: 08:00 - 22:00 </p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </section>
                    </div>
                </div>
                <div className="bg-[#111827] text-gray-200  py-24  lg:pr-36  md:px-20 md:w-1/2 w-full">
                    <div className=" space-y-4">
                        <h4 className="text-xl md:text-2xl mb-5">Follow Us</h4>
                        <h5>Join Us on Social Media</h5>
                        <div className="flex flex-row justify-center items-center gap-4">
                            <FaFacebook size={24} />
                            <FaInstagram size={24} />
                            <FaTwitter size={24} />
                        </div>
                    </div>
                </div>
            </div>
            <aside className="bg-black text-gray-200 text-center p-4 ">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Bistro Restaurant</p>
            </aside>

        </footer>
    );
};

export default Footer;