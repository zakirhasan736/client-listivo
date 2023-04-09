import Link from 'next/link';
import icons from '@/icons';
import { Col, Row } from 'antd'
import Breadcrumb from '@/components/elements/breadcrumb';
import Image from 'next/image';
import ServiceSuggestion from '@/components/containers/serviceSuggestion';
import ProviderServiceSlider from '@/components/containers/viewlistings/providerServiceSlider';
import FeaturesListing from '@/components/containers/featuresListing';

const ViewListingBody = () => {
    return (
        <div className='view-listing-page-wrapper'>
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
                                        <ProviderServiceSlider />
                                    </div>
                                    <div className='service-details-info'>
                                        <p className='service-provider-name'><span className='user-icon'><icons.BiUser /></span> Claimed</p>
                                        <div className='service-post-time-view'>
                                            <p className='service-post-time'><span className='user-icon'><icons.AiOutlineClockCircle /></span> 8 months ago</p>
                                            <p className='service-total-view'><span className='user-icon'><icons.FiEye /></span> 126 Views</p>
                                        </div>
                                    </div>
                                    <div className='service-title-main'>
                                        <h2 className='title'>Kothu Labs Niagara Falls</h2>
                                        <p className='desc'>Where Kothu Rotti Dreams come True!</p>
                                        <ul className='category-list'>
                                            <li className='category-list-items'> Restaurant</li>
                                            <li className='category-list-items'>Tamil </li>
                                        </ul>
                                    </div>
                                    <div className='service-location-main'><p className='location-text'><span className='location-icons'><icons.CiLocationOn /></span> 123 Niagara Falls, Ontario, Canada M4G G4E</p> <button className='redirect-to-geo-map'>Get Directions</button></div>
                                    <ul className='service-tags-list'>
                                        <li className='service-tags-items'>Available evenings</li>
                                        <li className='service-tags-items'>Fast-responding</li>
                                        <li className='service-tags-items'>Free consultation</li>
                                        <li className='service-tags-items'>Request a Quote</li>
                                        <li className='service-tags-items'>Speaks English</li>
                                        <li className='service-tags-items'>Speaks Portuguese</li>
                                        <li className='service-tags-items'>Speaks Spanish</li>
                                    </ul>
                                </div>
                                <div className='provider-service-description'>
                                    <h3 className='title'>Description</h3>
                                    <p className='description'>We are TangibleDesign – a group of developers with experience in managing successful websites and e-commerce shops. We know how hard it is for you or your clients to gain a competitive advantage and we are ready to create the optimum products for the growth of your business in the new age of competition.</p>
                                </div>

                                <div className='provider-socials-connection'>
                                    <h3 className='title'>Social Media Connections</h3>
                                    <ul className='socials-connection-type'>
                                        <li className='connection-type-link'><span className='mark-icons'><icons.BsCheckLg /></span> Remodeling</li>
                                        <li className='connection-type-link'><span className='mark-icons'><icons.BsCheckLg /></span> Structural repair</li>
                                    </ul>
                                </div>

                                <div className='provider-service-intro-video'>
                                    <h3 className='title'>Video</h3>
                                    <div className='video-widgets'>
                                        <iframe width="656" height="369" src="https://www.youtube.com/embed/Cf8KR1RWuTM" title="video intro" frameborder="0" allow="autoplay; picture-in-picture;"></iframe>
                                    </div>
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
                                    <div className='ads-widgets-content'>
                                        <div className='service-ads-modal-image'><Image className='provider-image' src='/image/add-user-img.png' width={60} height={60} alt='service modal image' /> <span className='add-source-icons'><icons.BsFacebook /></span></div>
                                        <div className='services-ads-content-box'>
                                            <div className='service-ads-info-text'>
                                                <h5 className='ads-user-name'>Chen Nathan</h5>
                                                <p className='member-duration'><span className='tag-title'>Member since:</span> 2 years</p>
                                            </div>
                                            <button className='ads-see-all-btn'>See all ads</button>
                                        </div>
                                    </div>
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

                                <FeaturesListing />

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <ServiceSuggestion />

        </div>
    )
}

export default ViewListingBody