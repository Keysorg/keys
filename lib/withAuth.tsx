import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { Box, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import { client } from '@/lib/client';
import { useStorage } from '@/lib/utils';


export default function withAuth(Component: any) {
    return function withAuth(props: any) {
        const router = useRouter();
        const { getItem } = useStorage();
        const { loginWithRedirect } = useAuth0();
        const [validate, setValidate] = useState<boolean>(false);

        let isAuthenticated = getItem('isAuthenticated', 'session') || 'false';
        let userEmail = getItem('userEmail', 'session')

        useEffect(() => {
            handleUserValidation()
        }, [])

        const handleUserValidation = async () => {
            const query = `*[_type == "admin"]`;
            let result = await client.fetch(query);
            if (result) {
                handleRedirect(result)
            }
        }

        const handleRedirect = (admin: any) => {
            if (!JSON.parse(isAuthenticated)) {
                loginWithRedirect()
            }
            else {
                let check = admin.find((e: any) => e.email === userEmail)
                if (!check) {
                    router.push('/')
                } else {
                    setValidate(true)
                }
            }
        }

        return !validate ?
            <Box
                sx={{
                    textAlign: 'center',
                    height: '100vh'
                }}
            >
                <Typography variant="h6">
                    Checking...
                </Typography>
                <CircularProgress />
            </Box>
            :
            <Component {...props} />
    }
}