import icons from '@/icons'
import { Row, Col, Input } from 'antd'

const CtaWidgets = () => {
    return (
        <section className='cta-section'>
            <div className='custom-container'>
                <Row justify="center">
                    <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
                        <div className='cta-main-wrapper'>
                            <div className='cta-title-box'>
                                <h2 className='cta-title'><span className='color-text'>Sign up</span> to receive the latest updates and news</h2>
                            </div>
                            <div className='cta-main-input-box'>
                                <Input Email size="large" placeholder="Email" prefix={<icons.MdAlternateEmail />} />
                                <button className='cta-button'><span className='right-arrow-icons'><icons.AiOutlineArrowRight /></span></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default CtaWidgets
