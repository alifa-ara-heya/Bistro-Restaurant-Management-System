
const CoverCategory = ({ image, title, subTitle }) => {
    return (

        <div className='max-w-[1920px] mx-auto bg-cover  bg-center bg-fixed min-h-[700px] flex items-center justify-center' style={{ backgroundImage: `url(${image})` }}>
            <div className='text-center bg-black/50 text-gray-200 lg:w-[1096px] md:w-[700px] mx-auto lg:p-20 px-14 py-10'>
                <h3 className='font-cinzel text-3xl my-4 font-semibold md:text-4xl uppercase '>{title}</h3>
                <p className="md:text-2xl text-xl font-medium">{subTitle}</p>
            </div>
        </div>
    );
};

export default CoverCategory;