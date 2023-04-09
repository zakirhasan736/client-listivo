import Image from 'next/image'
import { FiEye, FiHeart } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'

const Featurescard = ({ id, featureImg, featureTitle, serviceLocation, totalView, price }) => {
  return (
    <div className='features-card-item' key={id}>
    <Link href={`/view-listing/${featureTitle}`} >
      <div className='card-modal-image'><Image src={featureImg} width={273} height={182} preview={false} alt='blogs card image' /></div>
      <div className='card-content-text-box'>
        <div className='features-info-box'>
          <h4 className='title'>{featureTitle}</h4>
          <p className='location'><span className='location-icons'><CiLocationOn /></span> {serviceLocation}</p>
          <span className='product-price'>{price}</span>
        </div>
        <div className='features-act-box'>
          <div className='post-act-btn'>
            <button className='act-btn eye-btn'><FiEye /></button>
            <button className='act-btn share-btn'><Image src='/image/sync-icons.svg' width={17} height={17} preview={false} alt='blogs card image' /></button>
            <button className='act-btn react-btn'><FiHeart /></button>
          </div>
          <p className='service-area total-view'>{totalView} Views</p>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Featurescard
