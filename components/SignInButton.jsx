import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Box
          component='button'
          onClick={() => loginWithRedirect()}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            borderRadius: '15px',
            padding: '10px 16px',
            color: '#f02d34',
            border: '1px solid #f02d34',
            fontSize: '18px',
            fontWeight: 500,
            cursor: 'pointer',
            width: '100%',
            backgroundColor: '#fff'
          }}
        >
          Sign In
        </Box >;
};

export default SignInButton;