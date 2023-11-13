import SectionTitle from "../../SharePage/SectionTitle"

import { Swiper, SwiperSlide } from 'swiper/react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const TestMonials = () => {

    const [reviews , setReviews] = useState([])
    
    useEffect(() =>{
        fetch('Review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <SectionTitle
                subHeader={'What our client say'}
                mainDeader={'TESTIMONIALS'}
            ></SectionTitle>
            <div className="m-24 text-center">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    {
                        reviews.map(review =><SwiperSlide key={review._id}>
                            <Rating
                            className="mx-auto"
                            style={{maxWidth:180}}
                            value={review.rating}
                            readOnly
                            ></Rating>
                            <BiSolidQuoteLeft className="mx-auto text-8xl my-2"></BiSolidQuoteLeft>
                            <p className="w-6/12 mx-auto my-2">{review.details}</p>
                            <h2 className="text-2xl text-orange-400">{review.name}</h2>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TestMonials