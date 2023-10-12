import React from 'react';
import Link from 'next/link';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Typography } from '@mui/material';

import { urlFor } from '@/lib/client';

const HeroBanner = ({ heroBanner }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: { xs: '560px', sm: '500px' },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' }
          }}
        >
          {heroBanner?.smallText1}
        </Typography>
        <Typography variant='h3'>
          {heroBanner?.midText1}
        </Typography>

        {heroBanner?.buttonText1 &&
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Link href={`/about`}>
              <Box
                component='button'
                type="button"
                sx={{
                  borderRadius: '15px',
                  p: '10px 16px',
                  backgroundColor: '#f02d34',
                  color: 'white',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  width: '150px'
                }}
              >{heroBanner?.buttonText1}</Box>
            </Link>
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
          </Box>
        }
      </Box>

      <Box>
        <Box
          component='img'
          src={urlFor(heroBanner.image1)}
          alt="headphones"
          sx={{
            height: { xs: '400px' },
            width: { xs: '400px' }
          }}
        />
      </Box>
    </Box >
  )
}

export default HeroBanner