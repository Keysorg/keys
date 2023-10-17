import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Box
          component='button'
          onClick={() => loginWithRedirect()}
          sx={{
            borderRadius: '15px',
            padding: '10px 16px',
            color: '#000',
            border: '1px solid #000',
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