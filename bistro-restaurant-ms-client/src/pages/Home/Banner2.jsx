import banner2 from '../../assets/home/chef-service.jpg';

const Banner2 = () => {
    return (
        <div className='max-w-[1320px] mx-auto my-20 bg-cover bg-fixed bg-center md:p-10 p-3' style={{ backgroundImage: `url(${banner2})` }}>
            <div className='text-center md:p-20 p-5 bg-white md:m-20 m-10 border'>
                <h3 className='font-cinzel text-3xl my-4'>Bistro Boss</h3>
                <p>Progressively scale stand-alone total linkage with cooperative imperatives. Efficiently empower revolutionary communities and optimal niche markets. Dynamically leverage existing installed base infomediaries rather than business partnerships. Dramatically provide access to premium.</p>
            </div>
        </div>
    );
};

export default Banner2;