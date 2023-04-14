import React from 'react'
import icons from '@/icons';
import Image from 'next/image';

const AdsPortal = ({adsModal,adsUserName,duration,userActivity,userGeo,TypeAds,sourceAds}) => {
    return (
        <div className={`ads-widgets-content ${TypeAds}`}>
        <div className='ads-widgets-main-cont'>
            <div className='service-ads-modal-image'><Image className='provider-image' src={adsModal} width={60} height={60} alt='service modal image' /> <span className='add-source-icons'>{sourceAds}</span></div>
            <div className='services-ads-content-box'>
                <div className='service-ads-info-text'>
                    <h5 className='ads-user-name'>{adsUserName}</h5>
                    <p className='member-duration'><span className='tag-title'>Member since:</span> {duration}</p>
                    <div className='users-activity'><span></span> {userActivity}</div>
                    <div className='adds-location-main'><p className='location-text'><span className='location-icons'><icons.CiLocationOn /></span> {userGeo}</p></div>
                </div>
            </div>
        </div>
        <button className='ads-see-all-btn'>See all ads</button>
        </div>
    )
}

export default AdsPortal
