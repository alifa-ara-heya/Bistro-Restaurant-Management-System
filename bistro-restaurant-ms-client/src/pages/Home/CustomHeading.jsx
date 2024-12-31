
const CustomHeading = ({ text }) => {
    return (
        <h3 className="md:text-2xl lg:text-3xl text-xl uppercase text-center text-white font-cinzel text-shadow text-shadow-black text-shadow-blur-0 md:-mt-12 lg:-mt-16 -mt-10">
            {text}
        </h3>
    );
};

export default CustomHeading;