import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import { urlFor } from '@/lib/client';

const FooterBanner = ({
  footerBanner: { largeText1, smallText2, midText2, desc2, image2 }
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
          <Link href={`/`}>
            <Box
              component='button'
              type="button"
              sx={{
                borderRadius: '15px',
                p: '10px 16px',
                backgroundColor: '#fff',
                color: '#f02d34',
                border: 'none',
                fontSize: '18px',
                fontWeight: 500,
                cursor: 'pointer',
                width: '150px',
                border: '1px solid #f02d34',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >Watch <PlayCircleOutlineIcon />
            </Box>
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