import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { client, urlFor } from '@/lib/client';

const TransactionVerify = ({ transaction }: any) => {
    return (
        <Box
            sx={{
                p: 5,
                backgroundColor: '#fff',
                borderRadius: '25px',
                margin: 'auto',
                width: { xs: '100%', sm: '80%' },
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }}
        >
            <Box
                sx={{
                    p: 2
                }}
            >
                <Typography variant='h5'>Order ID: {transaction?.id}</Typography>
                <Typography>User: {transaction?.userName}</Typography>
                <Typography>Email: {transaction?.email}</Typography>
                <Typography>Status: {transaction?.status}</Typography>
                <Typography>Total Price: GHS {transaction?.price}</Typography>
                <Typography>Status: {transaction?.status}</Typography>
                <Divider />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        width: '100%'
                    }}
                >
                    {transaction?.products.length >= 1 && transaction?.products.map((item: any, index: any) => (
                        <Box component='div' key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between',
                                // alignItems: { sm: 'center' },
                                pb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    // alignItems: 'center',
                                    gap: 2
                                }}
                            >
                                <Box
                                    component='img'
                                    src={urlFor(item?.image)}
                                    alt='cart-product-image'
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '15px',
                                        backgroundColor: '#ebebeb',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Typography>{item?.name}</Typography>
                            </Box>
                            <Box
                                component='div'
                            >
                                <Typography>GHS {item?.price}</Typography>
                                <Typography sx={{ color: '#ccc', fontSize: 14 }}>Qty: {item?.quantity}</Typography>
                            </Box>
                        </Box>
                    ))}
                    <Divider />
                </Box>
                <Box>
                    <CheckCircleIcon sx={{ color: 'green', fontSize: '60px' }} />
                    <Typography sx={{ color: 'green', fontSize: 20 }}>Verified</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export const getStaticProps = async ({ params: { id } }: any) => {
    const query = `*[_type == "transaction" && id == '${id}'][0]`;

    const transaction = await client.fetch(query);

    return {
        props: { transaction }
    }
}

export const getStaticPaths = async () => {

    let paths = [
        {
            params: {
                id: '123456'
            }
        }
    ]

    return {
        paths,
        fallback: 'blocking'
    }
}

export default TransactionVerify