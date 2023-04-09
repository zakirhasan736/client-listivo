import React, { useState } from 'react'
import Image from 'next/image';
import icons from '@/icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const ProviderServiceSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className='provider-service-slider'>
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
        <SwiperSlide>
            <div className='service-slide-items'>
                <Image src='/image/overview-slider1.png' width={717} height={475} alt='service provider image' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='service-slide-items'>
                <Image src='/image/overview-slider2.png' width={717} height={475} alt='service provider image' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='service-slide-items'>
                <Image src='/image/overview-slider1.png' width={717} height={475} alt='service provider image' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='service-slide-items'>
                <Image src='/image/overview-slider2.png' width={717} height={475} alt='service provider image' />
            </div>
        </SwiperSlide>

        <button className='navigation-arrow prev-arrow'><icons.AiOutlineArrowLeft /></button>
        <button className='navigation-arrow next-arrow active'><icons.AiOutlineArrowRight /></button>
    </Swiper>
</div>
  )
}

export default ProviderServiceSlider
