import React, { useState } from 'react'
import { FeatureProductData} from '@/data/featureProduct';
import {RelateProductData,RelateServiceData} from '@/data/userRelateService';
import Featurescard from '@/components/elements/featurescard';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const UserRelatedSlide = ({ userRelate }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <div className='service-suggetion-widgets'>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={5}
                centeredSlides={false}
                spaceBetween={30}

                navigation={{
                    prevEl: '.slider-navigation-box .navigation-arrows.prev-arrow',
                    nextEl: '.slider-navigation-box .navigation-arrows.next-arrow',
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.768": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@0.992": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    "@1.20": {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    "@1.44": {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    "@1.50": {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation]}
                className="mySwipers-slide"
            >
                {userRelate === 'service' &&
                    <>
                        {RelateServiceData.map((items) => (<SwiperSlide key={items.id}>
                            <Featurescard id={items?.id} featureImg={items?.featureImg} price={items?.price} featureTitle={items?.featureTitle} serviceLocation={items?.serviceLocation} totalView={items?.totalView} />
                        </SwiperSlide>))}
                    </>
                }

                {userRelate === 'product' &&
                    <>
                        {RelateProductData.map((items) => (<SwiperSlide key={items?.id}>
                            <Featurescard id={items?.id} featureImg={items?.featureImg} price={items?.price} featureTitle={items?.featureTitle} serviceLocation={items?.serviceLocation} totalView={items?.totalView} />
                        </SwiperSlide>))}
                    </>
                }
               
            </Swiper>
        </div>
    )
}

export default UserRelatedSlide
