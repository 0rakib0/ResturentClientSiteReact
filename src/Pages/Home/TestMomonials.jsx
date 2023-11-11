import SectionTitle from "../../SharePage/SectionTitle"

import { Swiper, SwiperSlide } from 'swiper/react';

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
            <div className="m-24">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    {
                        reviews.map(review =><SwiperSlide key={review._id}>
                            <p>{review.details}</p>
                            <h2 className="text-2xl text-orange-400">{review.name}</h2>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TestMonials