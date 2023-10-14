import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const Service = ({ service: { image1, name, desc, buttonText, smallText, midText, largeText1, largeText2, discount, saleTime } }) => {
  return (
    <div>
      <Link href={`/service/${name}`}>
        <div className='product-card'>
          <img
            src={urlFor(image1)}
            width={250}
            height={250}
            className='product-image'
            alt='service-image'
          />
          <p className='product-name'>{name}</p>
          {/* <p className='product-price'>${description}</p> */}
        </div>
      </Link>
    </div>
  )
}

export default Service;