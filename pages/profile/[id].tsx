import React from 'react';
import Grid from '@mui/material/Grid';
import { client, urlFor } from '@/lib/client';
import { Box, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { useStateContext } from '@/context/StateContext';

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


const UserProfile = ({ userInfo, userTransactions }: any) => {
    const { user } = useStateContext();
    const [value, setValue] = React.useState(0);
    let { image, firstName, lastName, email, role } = userInfo;

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
                    {image &&
                        <Box
                            component='img'
                            sx={{
                                width: '150px',
                                height: '150px;',
                                objectFit: 'cover',
                                borderRadius: '75px',
                                border: '1px solid #ccc'
                            }}
                            src={urlFor(image)}
                            alt="profile"
                        />
                    }
                    <h2>{firstName}</h2>
                    <p>bio</p>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
                            <Tab icon={<ShoppingCartIcon  />} label="Orders" />
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

export const getStaticProps = async ({ params: { id } }: any) => {
    console.log(id)
    let userInfo: any = {};
    let userTransactions: any = [];

    const user_query = `*[_type == "user" && email == '${id}'][0]`;
    userInfo = await client.fetch(user_query);

    const transaction_query = `*[_type == "transaction" && email == '${id}']`;
    userTransactions = await client.fetch(transaction_query);

    return {
        props: { userInfo, userTransactions }
    }
}

export const getStaticPaths = async () => {

    let paths: any = [
        // {
        //     params: {
        //         id: 'test@gmail.com'
        //     }
        // }
    ]

    return {
        paths,
        fallback: 'blocking'
    }
}


export default UserProfile