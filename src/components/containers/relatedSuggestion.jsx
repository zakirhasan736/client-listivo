import React from 'react'
import { Col, Row } from 'antd'
import icons from '@/icons';
import SectionTitle from '@/components/elements/sectionTitle';
import Button from '@/components/elements/button';
import UserRelatedSlide from '@/components/elements/userRelatedSlide';

const RelatedSuggestion = () => {
  return (
    <div className='services-suggestion-wrapper related-suggestion-widgets'>
    <div className='custom-container'>
        <div className='section-main-topbar-box'>
            <Row justify='center' align="bottom" gutter={[30, 30]}>
                <Col xxl={15} lg={15} md={18} xs={24}>
                    <div className='topbar-left-cont-box'>
                        <div className='blogs-title-box'>
                            <SectionTitle title='More from this user' />
                        </div>
                    </div>
                </Col>
                <Col xxl={9} lg={9} md={6} xs={24}>
                    <div className='topbar-right-cont-box'>
                        <Button btnText='Start a new search' butVerient='sky-button' />
                        <div className='slider-navigation-box'>
                            <button className='navigation-arrows prev-arrow'><icons.AiOutlineArrowLeft /></button>
                            <button className='navigation-arrows next-arrow'><icons.AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>

    <div className='service-suggestion-main-wrapper'>
        <UserRelatedSlide userRelate='product' />
    </div>

</div>

  )
}

export default RelatedSuggestion
