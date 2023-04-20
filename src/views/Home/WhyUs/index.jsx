import Button from '@/components/elements/button'
import SectionTitle from '@/components/elements/sectionTitle'
import { Row, Col } from 'antd'
import icons from '@/icons'
import Image from 'next/image'

const WhyUs = () => {
    return (
        <section className='why-us-section'>
            <div className='custom-container'>
                <dic className='why-us-main-wrapper'>
                    <Row gutter={0} align='center'>
                        <Col xxl={10} xl={10} lg={10} md={24} xs={24}>
                            <div className='why-us-modal-content'>
                                <Image src='/image/about-us-modal.png' alt='modal image' width={433} height={622} />
                                <Image className='badge-modal-img' src='/image/bedhe-icon.svg' alt='modal image' width={200} height={228} />
                            </div>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} xs={24} offset-lg={2}>
                            <div className='why-us-text-content'>
                                <SectionTitle pinText='Why us?' title='Feeling Safe and Confident  in Your Community' />
                                <ul className='details-list-box'>
                                    <li className='details-list-items'><span className='list-mark-icon'><icons.BsCheck2 /></span> Compare providers by expertise, ratings, and reviews.</li>
                                    <li className='details-list-items'><span className='list-mark-icon'><icons.BsCheck2 /></span> Compare providers by expertise, ratings, and reviews.</li>
                                    <li className='details-list-items'><span className='list-mark-icon'><icons.BsCheck2 /></span> Compare providers by expertise, ratings, and reviews.</li>
                                </ul>
                                <ul className='list-of-data'>
                                    <li className='list-data-items'>
                                        <div className='list-data-number'>27 <span className='list-data-prefix'>k</span></div>
                                        <p className='list-data-text'>Listings added</p>
                                    </li>
                                    <li className='list-data-items'>
                                        <div className='list-data-number'>20 <span className='list-data-prefix'>+</span></div>
                                        <p className='list-data-text'>Listings added</p>
                                    </li>
                                    <li className='list-data-items'>
                                        <div className='list-data-number'>50 <span className='list-data-prefix'>+</span></div>
                                        <p className='list-data-text'>Listings added</p>
                                    </li>
                                </ul>
                                <p className='desc-text'>Feeling safe and confident in local business strengthens community and economy.</p>
                                <Button btnText='Explore listings' butVerient='sky-button' btnsIcon={<icons.AiOutlineArrowRight />} />
                            </div>
                        </Col>
                    </Row>
                </dic>
            </div>
        </section>
    )
}

export default WhyUs
