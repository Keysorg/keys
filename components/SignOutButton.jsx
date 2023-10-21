import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";

import { useStorage } from '@/lib/utils'

const SignOutButton = () => {
  const { logout } = useAuth0();
  const { removeItem } = useStorage()

  return (
    <Box
      component='button'
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) && removeItem('isAuthenticated', 'session')}
      sx={{
        border: 'none',
        color: '#000',
        fontSize: '16px',
        cursor: 'pointer',
        background: 'none'
      }}
    >
      Sign Out
    </Box >
  );
};

export default SignOutButton;