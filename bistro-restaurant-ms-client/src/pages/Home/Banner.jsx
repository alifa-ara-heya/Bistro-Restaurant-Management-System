import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel autoPlay>
            <div className="h-[660px]">
                <img src={img1} alt="" className="h-full object-cover" />
            </div>
            <div className="h-[660px]">
                <img src={img2} alt="" className="h-full object-cover" />
            </div>
            <div className="h-[660px]">
                <img src={img3} alt="" className="h-full object-cover" />
            </div>
            <div className="h-[660px]">
                <img src={img4} alt="" className="h-full object-cover" />
            </div>
            <div className="h-[660px]">
                <img src={img5} alt="" className="h-full object-cover" />
            </div>
            <div className="h-[660px]">
                <img src={img6} alt="" className="h-full object-cover" />
            </div>
        </Carousel>
    );
};

export default Banner;
