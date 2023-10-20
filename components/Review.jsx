import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

import { urlFor } from '@/lib/client';

const Reviews = ({ review: { image, name, details, bio, social } }) => {

  return (
    <div className='review-container'> 
      <img src={urlFor(image)} alt="profile" />
      <h2>{name}</h2>
      <p>{details || bio}</p>

      {social &&
        <div className='social'>
          <a className='icons' href={social && social[0]?.linkedIn} target='_blank'><AiFillLinkedin /></a>
          <a className='icons' href={social && social[0]?.instagram} target='_blank'><AiFillInstagram /></a>
          <a className='icons' href={social && social[0]?.twitter} target='_blank'><AiOutlineTwitter /></a>
        </div>
      }

    </div>
  )
}

export default Reviews