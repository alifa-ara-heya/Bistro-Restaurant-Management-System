import Heading from "../../components/Heading";
import quoteImg from '../../assets/quote.png'
import ReactStars from "react-rating-stars-component";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <section className="md:my-20 my-10 max-w-[1920px] mx-auto">
            <Heading heading={'testimonials'} subHeading={'What our clients say'} />
            {/*  <div className="flex items-center justify-center">
                <FaStar size={30} color="#CD9003" />
                <FaStar size={30} color="#CD9003" />
                <FaStar size={30} color="#CD9003" />
                <FaStar size={30} color="#CD9003" />
                <FaStar size={30} />
            </div> */}


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-[1320px] w-11/12 mx-auto text-center">

                {reviews.map(review => <SwiperSlide key={review._id} >
                    <div className="flex items-center justify-center">
                        <ReactStars
                            count={5}
                            value={review.rating}
                            size={30}
                            isHalf={true}
                            activeColor="#CD9003"
                            edit={false}

                        />
                    </div>
                    <img src={quoteImg} alt="" className="mx-auto my-9 mb-12" />
                    <p className="w-3/4 mx-auto">{review.details}</p>
                    <h5 className="text-[#CD9003] font-medium md:text-3xl text-xl py-6">{review.name}</h5>
                </SwiperSlide>)}

            </Swiper>
        </section>
    );
};

export default Testimonials;