import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
import Image from 'next/image';

const BlogsCard = ({ id, blogImg, blogsTitle, userImg, userName, postDate, postDesc }) => {
  return (
    <div className='blogs-card-items' key={id}>
      <div className='card-modal-img'><Image src={blogImg} width={360} height={240} alt='blogs card image' /></div>
      <div className='blogs-card-text-cont'>
        <h3 className='title'>{blogsTitle}</h3>
        <div className='user-post-info'>
          <div className='user-name-img'><Image src={userImg} width={20} height={20} alt='user image' /> <span className='users-name'>{userName}</span></div>
          <div className='post-date'><span className='calendar-icon'><AiOutlineCalendar /></span>  {postDate}</div>
        </div>
        <p className='desc'>{postDesc}</p>
      </div>
    </div>
  )
}

export default BlogsCard
