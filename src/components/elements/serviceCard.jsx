import React from 'react'
import Image from 'next/image'

const ServiceCard = ({serviceIcon,serviceTitle,serviceDesc}) => {
    return (
        <div className='service-card-item'>
            <div className='service-card-modal-icon'><Image src={serviceIcon} width={45} height={45} alt="service icons" preview={false} /></div>
            <h3 className='service-card-title'>{serviceTitle}</h3>
            <p className='service-card-desc'>{serviceDesc}</p>
        </div>
    )
}

export default ServiceCard
