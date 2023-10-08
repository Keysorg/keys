import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const FooterBanner = ({
  footerBanner: { largeText1, largeText2, smallText2, midText2, desc2, buttonText2, image2 }
}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{smallText2}</p>
          <h3>{largeText1}</h3>
          <p>We got you</p>
        </div>
        <div className='right'>
          <h3>{midText2}</h3>
          <p>{desc2}</p>
          <Link href={`/sign-up`}>
            <button type='button'>{buttonText2}</button>
          </Link>
        </div>

        <img
          src={urlFor(image2)}
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner