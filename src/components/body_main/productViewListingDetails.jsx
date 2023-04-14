import Link from 'next/link';
import icons from '@/icons';
import { Col, Row } from 'antd'
import Breadcrumb from '@/components/elements/breadcrumb';
import Image from 'next/image';
import ProductSuggestion from '@/components/containers/productSuggestion';
import RelatedSuggestion from '@/components/containers/relatedSuggestion';
import FeaturesListing from '@/components/containers/featuresListing';
import ProviderProductSlider from '@/components/containers/viewlistings/providerProductSlider';
import AdsPortal from '@/components/elements/adsPortal';
import {ProductAdsPortal} from '@/data/adsPortal';

const ProductViewListingDetailsBody = () => {

    return (
        <div className='view-listing-page-wrapper product-view-listing-wrap'>
            <div className='custom-container'>
                <div className='view-listing-top-box'>
                    <Row gutter={[30, 30]} align='middle'>
                        <Col xxl={15} lg={15} md={18} xs={24}>
                            <div className='view-listing-breadcrumb-widgets'>
                                <Breadcrumb />
                            </div>
                        </Col>
                        <Col xxl={9} lg={9} md={6} xs={24}>
                            <div className='view-listing-socials-widgets'>
                                <ul className='socials-widgets'>
                                    <li className='socials-widgets-items'><Link href='/' ><span className='socials-icon'><icons.FaFacebookF /></span></Link></li>
                                    <li className='socials-widgets-items'><Link href='/' ><span className='socials-icon'><icons.FaTwitter /></span></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='view-listing-main-wrapper'>
                    <Row gutter={[30, 30]}>
                        <Col lg={15} xs={24}>
                            <div className='provider-service-details'>
                                <div className='provider-service-main-info'>
                                    <div className='service-overview-modals'>
                                        <ProviderProductSlider />
                                    </div>
                                    <div className='service-details-info'>
                                        <p className='service-provider-name'><span className='user-icon'><icons.BiUser /></span> Claimed</p>
                                        <div className='service-post-time-view'>
                                            <p className='service-post-time'><span className='user-icon'><icons.AiOutlineClockCircle /></span> 8 months ago</p>
                                            <p className='service-total-view'><span className='user-icon'><icons.FiEye /></span> 126 Views</p>
                                        </div>
                                    </div>
                                    <div className='service-title-main'>
                                        <h2 className='title'>City bike</h2>
                                        <ul className='category-list'>
                                            <li className='category-list-items'> Vehicles</li>
                                            <li className='category-list-items'>Bicycles </li>
                                        </ul>

                                    </div>
                                    <div className='service-location-main'><p className='location-text'><span className='location-icons'><icons.CiLocationOn /></span> New York, NY, USA</p> <button className='redirect-to-geo-map'>See map</button></div>
                                    <h2 className='price'>$200 <span className='currency'>USD</span></h2>

                                </div>
                                <div className='provider-service-description'>
                                    <h3 className='title'>Description</h3>
                                    <p className='description'>We are TangibleDesign – a group of developers with experience in managing successful websites and e-commerce shops. We know how hard it is for you or your clients to gain a competitive advantage and we are ready to create the optimum products for the growth of your business in the new age of competition.</p>
                                </div>

                                <div className='provider-service-location'>
                                    <h3 className='title'>Location</h3>
                                    <div className='location-widgets'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279997513!2d-74.1444876439865!3d40.69763123336166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1681007555653!5m2!1sen!2sbd" width="656" height="332" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={9} xs={24}>
                            <div className='provider-info-details'>

                                <div className='provider-contact-info'>
                                    {ProductAdsPortal.map((items) => (
                                        <AdsPortal key={items.id} sourceAds={items?.sourceAdd} adsModal={items?.adsModal} adsUserName={items?.adsUserName} duration={items?.duration} userActivity={items?.userActivity} userGeo={items?.userGeo} TypeAds='product-listing-adds' />
                                    ))}
                                    <div className='provider-contact-number'>
                                        <span className='call-phone-icons'><icons.HiOutlineDevicePhoneMobile /></span>
                                        <p className='input-nimbers'>431 <span className='hide-number'>* * * * * * * * *</span></p>
                                        <span className='view-eye-icons'><icons.FiEye /></span>
                                    </div>
                                    <div className='provider-contact-types'>
                                        <button className='provider-contact-btn chat-btn'><span className='chat-icons'><icons.IoMdChatboxes /></span> Chat</button>
                                        <button className='provider-contact-btn chat-btn'><span className='chat-icons'><icons.HiOutlineMail /></span> E-mail</button>
                                    </div>
                                </div>

                                <div className='provider-contact-widgets'>
                                    <a href={'/'} className='contact-widgets-btn whatsapp-link' ><Image src='/image/whatsapp.svg' width={30} height={30} alt='link widgets icons' /> Chat via WhatsApp</a>
                                    <a href={'/'} className='contact-widgets-btn viberr-link' ><Image src='/image/viberr.png' width={30} height={30} alt='link widgets icons' /> Visit Website</a>
                                </div>

                                <div className='service-user-act'>
                                    <button className='user-act-btn react-btn'><icons.FiHeart /></button>
                                    <button className='user-act-btn sync-btn'><Image src='/image/sync-icons.svg' width={17} height={17} preview={false} alt='blogs card image' /></button>
                                    <button className='user-act-btn pdf-print-btn'><icons.AiOutlinePrinter /></button>
                                </div>

                                <button className='report-button red-action-report'><span className='alart-icons'><Image src='/image/warning.svg' width={20} height={20} alt="warning icons" /></span> Report abuse</button>

                                <FeaturesListing listing='product' typesListing='product-features-listing' />

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <RelatedSuggestion />

            <ProductSuggestion />

        </div>
    )
}

export default ProductViewListingDetailsBody