import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../assets/home/slide1.jpg'
import image2 from '../../assets/home/slide2.jpg'
import image3 from '../../assets/home/slide3.jpg'
import image4 from '../../assets/home/slide4.jpg'
import SectionTitle from '../../SharePage/SectionTitle';

const Category = () => {
    return (
        <>
            <SectionTitle
            subHeader={'From 11:00 AM to 10:00 PM'}
            mainDeader={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <h4 className='text-4xl text-white -mt-24 text-center'>SALAD</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <h4 className='text-4xl text-white -mt-24 text-center'>SCOPS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                    <h4 className='text-4xl text-white -mt-24 text-center'>SOUP</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                    <h4 className='text-4xl text-white -mt-24 text-center'>REJALA</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <h4 className='text-4xl text-white -mt-24 text-center'>SALAD</h4>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Category