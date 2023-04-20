import Button from '@/components/elements/button'
import SectionTitle from '@/components/elements/sectionTitle'
import { Row, Col } from 'antd'
import Featurescard from '@/components/elements/featurescard';
import icons from '@/icons';
import { FeatureProductData } from '@/data/featureProduct';

const FeaturesProduct = () => {
    return (
        <section className='features-product-section'>
            <div className='custom-container'>
                <div className='feature-product-main-wrapper'>

                    <div className='section-main-topbar-box'>
                        <Row justify='center' align="bottom">
                            <Col xxl={24} lg={24} xs={24}>
                                <div className='topbar-left-cont-box'>
                                    <div className='product-title-box'>
                                        <SectionTitle pinText={`Check out what's new`} title='Featured Products' />
                                    </div>
                                    <div className='product-filter-box button-filter-box'>
                                        <Button butVerient='filter-button yellow active' btnText='All' />
                                        <Button butVerient='filter-button yellow' btnText='Clothes' />
                                        <Button butVerient='filter-button yellow' btnText='Party Supplies' />
                                        <Button butVerient='filter-button yellow' btnText='Furniture' />
                                          {/*view more button*/}
                                          <Button btnText='View all' butVerient='button-yellow view-more-button' btnsIcon={<icons.AiOutlineArrowRight />} />
                                    </div>
                                </div>
                            </Col>
                     
                        </Row>
                    </div>

                    <div className='features-product-main-content'>
                        <Row gutter={[15, 15]} justify='center'>
                            {FeatureProductData.map((items) => (<Col xxl={6} xl={6} lg={8} md={12} xs={24} key={items.id}>
                                <Featurescard id={items?.id} featureImg={items?.featureImg} price={items?.price} featureTitle={items?.featureTitle} serviceLocation={items?.serviceLocation} totalView={items?.totalView} />
                            </Col>))}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesProduct
