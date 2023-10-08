import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';


const Footer = () => {
  return (
    // <div className='footer-container'>
    //   {/* <p>{footer.rights}</p> */}
    //   <p>2023 ecommerce All rights reserved</p>
    //   <p className='icons'>
    //     {/* <a href={footer.instagram}> */}
    //       <AiFillInstagram />
    //     {/* </a> */}
    //     {/* <a href={footer.twitter}> */}
    //       <AiOutlineTwitter />
    //     {/* </a> */}
    //   </p>
    // </div>
    // <div className='footer-container'>
    //   <div>
    //     <h2>Keys Entertainment</h2>
    //     <div className='footer-container-newsletter'>
    //       <input className='footer-container-input' placeholder='email'/>
    //       <button type='button'>subscribe</button>
    //     </div>
    //   </div>
    //   <div className='footer-container-item'>
    //     <h3>Company</h3>
    //     <Link href=''>about us</Link>
    //     <Link href=''>events</Link>
    //     <Link href=''>art</Link>
    //     <Link href=''>travel & tour</Link>
    //   </div>
    //   <div className='footer-container-item'>
    //     <h3>Social</h3>
    //     <Link className='icons' href=''><AiFillInstagram /> instagram</Link>
    //     <Link className='icons' href=''><AiOutlineTwitter /> twitter</Link>
    //   </div>
    //   <div className='footer-container-item'>
    //     <h3>Resources</h3>
    //     <Link className='icons' href=''>Legal</Link>
    //     <Link className='icons' href=''>Policies</Link>
    //   </div>
    // </div>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        p: 3
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://google.com">
          company
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://google.com">
          Legal Agreement
        </Link>{' '}
      </Typography>
    </Box>

  )
}

export default Footer