import React, { useState } from 'react'
import Button from '@/components/elements/button'
import SectionTitle from '@/components/elements/sectionTitle'
import { Row, Col } from 'antd';
import BlogsCard from '@/components/elements/blogsCard';
import icons from '@/icons';
import { blogs } from '@/data/blogs';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const BlogNews = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <section className='blogs-section'>
            <div className='blogs-main-wrapper'>
                <div className='custom-container'>
                    <div className='section-main-topbar-box'>
                        <Row justify='center' align="bottom" gutter={[30, 30]}>
                            <Col xxl='17' lg={16} md={12} xs={24}>
                                <div className='topbar-left-cont-box'>
                                    <div className='blogs-title-box'>
                                        <SectionTitle pinText='News' title='From our blog' />
                                    </div>
                                </div>
                            </Col>
                            <Col xxl='7' lg={8} md={12} xs={24}>
                                <div className='topbar-right-cont-box'>
                                    <div className='slider-navigation-box'>
                                        <button className='navigation-arrow prev-arrow'><icons.AiOutlineArrowLeft /></button>
                                        <button className='navigation-arrow next-arrow active'><icons.AiOutlineArrowRight /></button>
                                    </div>
                                    <Button btnText='View all' butVerient='button-secondary' btnsIcon={<icons.AiOutlineArrowRight />} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className='blogs-main-cont-box'>

                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={4}
                        centeredSlides={false}
                        spaceBetween={30}

                        navigation={{
                            prevEl: '.slider-navigation-box .navigation-arrow.prev-arrow',
                            nextEl: '.slider-navigation-box .navigation-arrow.next-arrow',
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
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {blogs.map((items) => (
                            <SwiperSlide key={items.id}>
                                <BlogsCard id={items.id} blogImg={items.blogImg} blogsTitle={items.blogsTitle} userImg={items.userImg} userName={items.userName} postDate={items.postDate} postDesc={items.postDesc} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default BlogNews
