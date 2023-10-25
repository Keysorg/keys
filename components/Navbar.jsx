import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Cart, SignInButton, SignOutButton } from '.';
import { useStateContext } from '@/context/StateContext';
import { urlFor, client } from '@/lib/client';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [footer, setFooter] = useState();
  const open = Boolean(anchorEl);

  let loading = true;

  useEffect(() => {
    loading = isLoading
  }, [isLoading])


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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar-container'>
      <p className='logo'>
        {
          footer?.logo &&
          <Link href='/'>
            <Box
              component='img'
              sx={{
                height: '50px;',
                objectFit: 'cover',
              }}
              src={urlFor(footer?.logo)}
              alt="logo"
            />
          </Link>
        }
      </p>

      <p className='pages'>
        <Link href="/service/Events">Events</Link>
        <Link href="/service/Travel & Tour">Travel & Tour</Link>
        <Link href="/service/Art">Art</Link>
        <Link href="/about">About</Link>
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
        {!loading ? 'loading' :
          <>
            {!isAuthenticated && <SignInButton />}
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            <button type='button' className='cart-icon' onClick={handleClick}>
              {isAuthenticated ? user?.picture ?
                <Box
                  component='img'
                  sx={{
                    width: '30px',
                    height: '30px;',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    border: '1px solid #ccc'
                  }}
                  src={user?.picture}
                  alt="profile"
                />
                :
                <AccountCircleIcon fontSize='16'/>
                : ''
              }
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
                <Link href='/profile'>Profile</Link>
              </MenuItem>
              {isAuthenticated &&
                <MenuItem onClick={handleClose}>
                  <SignOutButton />
                </MenuItem>
              }
            </Menu>
            {showCart && <Cart />}

            <MenuIcon sx={{ display: { sm: 'none' } }} onClick={() => setToggle(true)} />

            <div className='app-navbar-menu'>

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
                        <Link href="/about" onClick={() => setToggle(false)}>About</Link>
                      </li>
                      <li key='contact'>
                        <Link href="/contact" onClick={() => setToggle(false)}>Contact</Link>
                      </li>
                    </ul>
                  </motion.div>
                )
              }
            </div>
          </>
        }
      </Box>
    </div>
  )
}

export default Navbar