import React from 'react'
import { Col, Row } from 'antd'
import icons from '@/icons';
import SectionTitle from '@/components/elements/sectionTitle';
import Button from '@/components/elements/button';
import SuggestionSlideWidgets from '@/components/elements/suggestionSlideWidgets';

const ServiceSuggestion = () => {
  return (
    <div className='services-suggestion-wrapper'>
    <div className='custom-container'>
        <div className='section-main-topbar-box'>
            <Row justify='center' align="bottom" gutter={[30, 30]}>
                <Col xxl={15} lg={15} md={18} xs={24}>
                    <div className='topbar-left-cont-box'>
                        <div className='blogs-title-box'>
                            <SectionTitle title='You may also like...' />
                        </div>
                    </div>
                </Col>
                <Col xxl={9} lg={9} md={6} xs={24}>
                    <div className='topbar-right-cont-box'>
                        <Button btnText='Start a new search' butVerient='button-secondary' />
                        <div className='slider-navigation-box'>
                            <button className='navigation-arrow prev-arrow'><icons.AiOutlineArrowLeft /></button>
                            <button className='navigation-arrow next-arrow'><icons.AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>

    <div className='service-suggestion-main-wrapper'>
        <SuggestionSlideWidgets />
    </div>

</div>

  )
}

export default ServiceSuggestion
