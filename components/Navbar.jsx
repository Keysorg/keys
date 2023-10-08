import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

import { Cart } from '.';
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, removeUser } = useStateContext();
  const [toggle, setToggle] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">ecommerce</Link>
      </p>

      <p className='pages'>
        <Link href="/service/Events">Events</Link>
        <Link href="/service/Travel & Tour">Travel & Tour</Link>
        <Link href="/service/Art">Art</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </p>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        <button type='button' className='cart-icon' onClick={handleClick}>
          <AccountCircleIcon />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href='/profile/luffy@gmail.com'>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/' onClick={() => removeUser()}>Logout</Link>
          </MenuItem>
        </Menu>
        {showCart && <Cart />}

        <div className='app-navbar-menu'>
          <MenuIcon onClick={() => setToggle(true)} />

          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <CloseIcon onClick={() => setToggle(false)} />
                <ul>
                  <li key='events'>
                    <Link href="/service/Events" onClick={() => setToggle(false)}>Events</Link>
                  </li>
                  <li key='travel'>
                    <Link href="/service/Travel & Tour" onClick={() => setToggle(false)}>Travel & Tour</Link>
                  </li>
                  <li key='art'>
                    <Link href="/service/Art" onClick={() => setToggle(false)}>Art</Link>
                  </li>
                  <li key='about'>
                    <Link href="/about" onClick={() => setToggle(false)}>About Us</Link>
                  </li>
                  <li key='contact'>
                    <Link href="/contact" onClick={() => setToggle(false)}>Contact</Link>
                  </li>
                </ul>
              </motion.div>
            )
          }
        </div>
      </Box>
    </div>
  )
}

export default Navbar