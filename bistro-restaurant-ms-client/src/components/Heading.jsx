
const Heading = ({ heading, subHeading }) => {
    return (
        <div className="text-center py-7">
            <p className="capitalize text-[#D99904] italic pb-3">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-2 py-3 lg:w-1/4 md:w-1/2 w-3/4 mx-auto">{heading}</h3>
        </div>
    );
};

export default Heading;