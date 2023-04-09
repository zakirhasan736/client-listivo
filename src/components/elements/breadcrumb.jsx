import React from 'react'
import Linked from './linked'

const Breadcrumb = () => {
  return (
    <ul className='breadcrumb-items'>
      <li className='breadcrumb-list-items'><Linked href={'/'} title='Home' /></li> 
      <li className='breadcrumb-list-items'><Linked href={'/'} title='Search Results' /></li>
      <li className='breadcrumb-list-items'><Linked href={'/'} title='Canada' /></li>
      <li className='breadcrumb-list-items'><Linked href={'/'} title='Tamil' /></li>
    </ul>
  )
}

export default Breadcrumb
