import React,{useState} from 'react'
import icons from '@/icons';
import Featurescard from '@/components/elements/featurescard';
import { FeatureListingData } from '@/data/featurelisting';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const FeaturesListing = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className='features-listing'>
    <h5 className='listing-title'>Featured listings</h5>
    <div className='feature-listing-slider-box'>

        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={0}
            pagination={{
                type: "fraction",
            }}
            navigation={{
                prevEl: '.navigation-arrow.prev-arrow',
                nextEl: '.navigation-arrow.next-arrow',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {FeatureListingData.map((items) => (
                <SwiperSlide key={items.id}>
                    <Featurescard id={items.id} featureImg={items.featureImg} featureTitle={items.featureTitle} serviceLocation={items.serviceLocation} />
                </SwiperSlide>
            ))}
            <button className='navigation-arrow prev-arrow'><icons.AiOutlineArrowLeft /></button>
            <button className='navigation-arrow next-arrow active'><icons.AiOutlineArrowRight /></button>
        </Swiper>
    </div>

</div>
  )
}

export default FeaturesListing
