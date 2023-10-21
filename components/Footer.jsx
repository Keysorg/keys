import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';

import { client } from '@/lib/client';


const Footer = () => {
  const [footer, setFooter] = useState();

  useEffect(() => {
    getFooter()
  }, [])

  const getFooter = async () => {
    const query = `*[_type == "footer"][0]`;
    let footer = await client.fetch(query);

    if (footer) {
      setFooter(footer)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        p: 3,
        // position: 'absolute',
        textAlign: 'center',
        bottom: 0,
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{fontSize: {xs: 10, sm: 12}}}>
        <a color="inherit" href={footer?.termsAndConditions} target='_blank'>
          Terms and Conditions
        </a>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: {xs: 10, sm: 12}}}>
        <a color="inherit" href={footer?.legal} target='_blank'>
          Legal Agreement
        </a>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: {xs: 10, sm: 12}}}>
        <a color="inherit" href={footer?.policies} target='_blank'>
          Policies
        </a>
      </Typography>
    </Box>

  )
}

export default Footer