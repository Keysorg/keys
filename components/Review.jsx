import React from 'react';
import Link from 'next/link';
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
          <Link className='icons' href={social && social[0]?.linkedIn}><AiFillLinkedin /></Link>
          <Link className='icons' href={social && social[0]?.instagram}><AiFillInstagram /></Link>
          <Link className='icons' href={social && social[0]?.twitter}><AiOutlineTwitter /></Link>
        </div>
      }

    </div>
  )
}

export default Reviews