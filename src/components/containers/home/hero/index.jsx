import React from 'react'
import { Col, Row, Input } from 'antd'
import Button from '@/components/elements/button';
import Linked from '@/components/elements/linked';
import Image from 'next/image';
import icons from '@/icons';

const HeroBanner = () => {
    return (
        <div className='hero-banner-section'> 
            <div className='hero-banner-wrapper-main'>
                <div className='custom-container'>
                    <Row gutter={0}>
                        <Col xxl={19} xl={19} lg={19} md={24} xs={24}>
                            <div className='hero-banner-wrapper'>
                                <div className='hero-banner-content-box'>
                                    <div className='banner-text-content'>
                                        <h1 className='banner-title'>Your Trusted Partner for The <span className='lang-event color-text'>Tamil</span> Community</h1>
                                        <p className='banner-description'>Search for a service is free and easy – it only takes a few simple steps!  Find the best service for your needs.</p>
                                        <Image className='banner-shape' src='/image/banner-shape.svg' alt='shape image' width={63} height={156} />
                                    </div>
                                    <div className='banner-search-widgets'>
                                        <div className='category-search-widgets-box'>
                                            <Input Text size="large" placeholder="Type here" prefix={<icons.HiOutlineLightBulb />} />
                                            <Input Search size="large" placeholder="Location" prefix={<icons.CiLocationOn />} />
                                            <Button butVerient='button-secondary banner-search-button' btnText='Search' btnsIcon={<icons.AiOutlineSearch />} />
                                        </div>
                                        <p className='category-suggetion-list'><span className='title'>{`What's popular:`}</span> <Linked href={'/'} title='Pool' />,<Linked href={'/'} title='Movers' />,<Linked href={'/'} title='Landscaping' />,<Linked href={'/'} title='Locksmiths' />,<Linked href={'/'} title='Plumbers' />,<Linked href={'/'} title='Painters' /></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner

