import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import CustomHeading from './CustomHeading';
import Heading from '../../components/Heading';
const Category = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <Heading subHeading={'from 11:00am to 10:00pm'} heading={'Order online'} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                style={{
                    "--swiper-pagination-color": "#202020",
                }}

                breakpoints={
                    // When screen width is >= 640px
                    {
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        // When screen width is >= 768px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        // When screen width is >= 1024px
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }
                }
                modules={[Pagination]}

                className="mySwiper mb-12 md:mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <CustomHeading text={'salads'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <CustomHeading text={'pizza'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <CustomHeading text={'soups'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <CustomHeading text={'dessert'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <CustomHeading text={'salads'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <CustomHeading text={'salads'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <CustomHeading text={'pizza'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <CustomHeading text={'soups'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <CustomHeading text={'dessert'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <CustomHeading text={'salads'} />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;