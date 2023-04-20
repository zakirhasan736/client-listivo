import Button from '@/components/elements/button'
import SectionTitle from '@/components/elements/sectionTitle'
import { Row, Col } from 'antd'
import React from 'react'
import Image from 'next/image'
import icons from '@/icons'

const WhyChooseUs = () => {
    return (
        <section className='why-choose-us-section'>
            <div className='custom-container'>
                <div className='why-choose-us-main-wrapper'>
                    <Row gutter={0}>
                        <Col xxl={15} xl={15} lg={15} md={24} xs={24}>
                            <div className='why-choose-us-text-content'>
                                <SectionTitle pinText='Why choose us?' title='Are you looking for professional Tamil services in your area?' desc='Our Platform includes a wide range of qualified Tamil professionals ready to meet your needs.' />
                                <ul className='details-list-box'>
                                    <li className='details-list-items'><span className='list-mark-icon'><icons.BsCheck2 /></span> Compare providers by expertise, ratings, and reviews.</li>
                                    <li className='details-list-items'><span className='list-mark-icon'><icons.BsCheck2 /></span> Compare providers by expertise, ratings, and reviews.</li>
                                    <li className='details-list-items'><span className='list-mark-icon'><icons.BsCheck2 /></span> Compare providers by expertise, ratings, and reviews.</li>
                                </ul>
                                <Button btnText='Explore listings' butVerient='button-secondary' btnsIcon={<icons.AiOutlineArrowRight />} />
                                <Image className='mark-modal-image' src='/image/mark-modal.svg' alt='mark modal' width={217} height={217} />
                            </div>
                        </Col>
                        <Col xxl={9} xl={9} lg={9} md={24} xs={24}>
                            <div className='why-choose-us-modal-content'>
                                <Image src='/image/modal-image.png' alt='modal image' width={433} height={622} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
