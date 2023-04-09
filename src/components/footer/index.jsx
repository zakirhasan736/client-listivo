import { Row, Col } from 'antd'
import Logo from '../navbar/logo'
import Link from 'next/link';
import { Image } from '@packages/packages';
import { MdOutlinePhoneIphone,MdAlternateEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Linked from '../elements/linked';

export default function Footer({ }) {
  return (
    <footer className='footer-section'>
      <div className='custom-container'>
        <div className='footer-main-wrapper'>
          <Row gutter={[0 , 30]}>
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div className='footer-left-content'>
                <div className='footer-logo-box'><Logo src='/image/logo_light-1.svg' Width='112' height='55' alt='footer logo' preview="false" /></div>
                <ul className='contact-details-widgets'>
                  <li className='contact-details-item'><span className='widgets-icons'><MdOutlinePhoneIphone /></span> (123) 345-6789</li>
                  <li className='contact-details-item'><span className='widgets-icons'><MdOutlinePhoneIphone /></span> 518-520 5th AveNew York, USA</li>
                  <li className='contact-details-item'><span className='widgets-icons'><MdAlternateEmail /></span> support@tangibledesign.net</li>
                </ul>
                <div className='widgets-box'>
                  <p className='widgets-title'>Follow our social media</p>
                  <ul className='socials-widgets'>
                    <li className='socials-widgets-items'><Link href='/' ><span className='socials-icon'><FaFacebookF /></span></Link></li>
                    <li className='socials-widgets-items'><Link href='/' ><span className='socials-icon'><FaTwitter /></span></Link></li>
                    <li className='socials-widgets-items'><Link href='/' ><span className='socials-icon'><FaLinkedinIn /></span></Link></li>
                    <li className='socials-widgets-items'><Link href='/' ><span className='socials-icon'><FaInstagram /></span></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={12} xs={24}>
              <div className='footer-link-content'>
                <div className='widgets-box'>
                  <h5 className='widgets-title'>Useful links</h5>
                  <ul className='footer-link-widgets'>
                    <li className='footer-link-items'><Linked href={'/about'} title="About" /></li>
                    <li className='footer-link-items'><Linked href={'/contact'} title="Contact" /></li>
                    <li className='footer-link-items'><Linked href={'/team'} title="Our team" /></li>
                    <li className='footer-link-items'><Linked href={'/faq'} title="FAQ" /></li>
                    <li className='footer-link-items'><Linked href={'/register'} title="Register" /></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={12} xs={24}>
              <div className='footer-link-content'>
                <div className='widgets-box'>
                  <h5 className='widgets-title'>Categories</h5>
                  <ul className='footer-link-widgets'>
                    <li className='footer-link-items'><Linked href={'/'} title="Cleaning" /></li>
                    <li className='footer-link-items'><Linked href={'/'} title="Contractors" /></li>
                    <li className='footer-link-items'><Linked href={'/'} title="Electricians" /></li>
                    <li className='footer-link-items'><Linked href={'/'} title="Landscaping" /></li>
                    <li className='footer-link-items'><Linked href={'/'} title="Plumbers" /></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
              <div className='footer-news-listing-content'>
                <div className='widgets-box'>
                  <h5 className='widgets-title'>Newest listings​</h5>
                  <ul className='footer-news-list-widgets'>
                    <li className='footer-news-items'><Link href={'/'} ><Image className='list-news-image' src='/image/blogs-list1.png' width={45} height={45} alt='news items' preview={false} /> Proffesional painting services</Link></li>
                    <li className='footer-news-items'><Link href={'/'} ><Image className='list-news-image' src='/image/blogs-list1.png' width={45} height={45} alt='news items' preview={false} /> Handy Home Repairs</Link></li>
                    <li className='footer-news-items'><Link href={'/'} ><Image className='list-news-image' src='/image/blogs-list1.png' width={45} height={45} alt='news items' preview={false} /> Home services for you</Link></li>
                    <li className='footer-news-items'><Link href={'/'} ><Image className='list-news-image' src='/image/blogs-list1.png' width={45} height={45} alt='news items' preview={false} /> Local handyman</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

        </div>

      </div>
      <div className='footer-bottom-main'>
        <div className='custom-container'>
          <div className='footer-bottom-wrapper'>
            <p className='copyright-text'>© 2021 Listivo - Listing Directory WordPress Theme. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}