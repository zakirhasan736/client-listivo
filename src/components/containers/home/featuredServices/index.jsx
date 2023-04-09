import React, { useState } from 'react'
import Button from '@/components/elements/button'
import SectionTitle from '@/components/elements/sectionTitle'
import { Row, Col } from 'antd';
import Featurescard from '@/components/elements/featurescard';
import icons from '@/icons';
import { FeatureServiceData } from '@/data/featureServices';

const FeaturesServices = () => {
    const [activeText, setActive] = useState("");

    const handleFilter = (text) => {
        setActive(text)
    }

    return (
        <section className='features-services-section'>
            <div className='custom-container'>
                <div className='features-product-main-wrapper'>
                    <div className='section-main-topbar-box'>
                        <Row gutter={[0, 30]} justify='center' align="bottom">
                            <Col xxl={24} lg={24} xs={24}>
                                <div className='topbar-left-cont-box'>
                                    <div className='product-title-box'>
                                        <SectionTitle pinText={`Check out what's new`} title='Featured Services' />
                                    </div>
                                    <div className='product-filter-box button-filter-box'>
                                        {/* <div className={`${activeText === "All" ? styles.active : ""}`}></div> */}
                                        <Button click={true} handleFilter={handleFilter} butVerient='filter-button primary-button active' btnText='All' />
                                        <Button click={true} handleFilter={handleFilter} butVerient='filter-button primary-button' btnText='Real Estate' />
                                        <Button click={true} handleFilter={handleFilter} butVerient='filter-button primary-button' btnText='Medical' />
                                        <Button click={true} handleFilter={handleFilter} butVerient='filter-button primary-button' btnText='Financial' />
                                        <Button click={true} handleFilter={handleFilter} butVerient='filter-button primary-button' btnText='Photography' />
                                 
                                        {/*view more button*/}
                                        <Button btnText='View all' butVerient='primary-button view-more-button' btnsIcon={<icons.AiOutlineArrowRight />} />
                                        
                                        </div>
                                </div>
                            </Col>
                        
                        </Row>
                    </div>

                    <div className='features-services-content-wrap'>
                        <Row gutter={[15, 15]} justify='center'>
                            {FeatureServiceData.map((items) => (<Col xxl={6} xl={6} lg={8} md={12} xs={24} key={items.id}>
                                <Featurescard id={items?.id} featureImg={items?.featureImg} price={items?.price} featureTitle={items?.featureTitle} serviceLocation={items?.serviceLocation} totalView={items?.totalView} />
                            </Col>))}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesServices
