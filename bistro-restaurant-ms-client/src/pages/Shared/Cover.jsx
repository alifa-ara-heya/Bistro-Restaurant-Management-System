
const Cover = ({ image, title, subTitle }) => {
    return (

        <div className='max-w-[1920px] mx-auto bg-cover  bg-center bg-fixed min-h-[800px] flex items-center justify-center' style={{ backgroundImage: `url(${image})` }}>
            <div className='text-center bg-black/50 text-white lg:w-[1320px] md:w-[700px] mx-auto lg:p-20 px-14 py-10'>
                <h3 className='font-cinzel text-3xl my-4 font-bold md:text-7xl uppercase '>{title}</h3>
                <p className="uppercase font-cinzel md:text-2xl text-xl font-semibold">{subTitle}</p>
            </div>
        </div>

    );
};

export default Cover;