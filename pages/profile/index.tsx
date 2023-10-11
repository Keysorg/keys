import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { client } from '@/lib/client';
import { Box, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth0 } from "@auth0/auth0-react";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [value, setValue] = useState(0);
    const [transactions, setTransactions] = useState<any>([]);

    useEffect(() => {
        getUserTransactions()
    }, [])

    const getUserTransactions = async () => {
        const transaction_query = `*[_type == "transaction" && email == '${user?.email}']`;
        let userTransactions = await client.fetch(transaction_query);

        if (userTransactions) {
            setTransactions(userTransactions)
        }
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                textAlign: 'center'
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {user?.picture &&
                        <Box
                            component='img'
                            sx={{
                                width: '150px',
                                height: '150px;',
                                objectFit: 'cover',
                                borderRadius: '75px',
                                border: '1px solid #ccc'
                            }}
                            src={user?.picture}
                            alt="profile"
                        />
                    }
                    <h2>{user?.name}</h2>
                    <p>bio</p>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
                            <Tab icon={<ShoppingCartIcon />} label="Orders" />
                            <Tab icon={<PersonPinIcon />} label="Account" />
                        </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                        Item One
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Grid>
            </Grid>
        </Box>
    )
}


export default UserProfile