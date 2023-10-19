import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { client, urlFor } from '@/lib/client';
import { Box, Divider, Typography } from '@mui/material';
import { QrCodeGenerator } from '@/components';

const TransactionDetails = ({ transaction }: any) => {
    const [qrCodeValue, setQrCodeValue] = useState('');

    useEffect(() => {
        let verifyUrl = `${window?.location.hostname}/transaction-verify/${transaction?.id}`
        console.log(verifyUrl)
        setQrCodeValue(verifyUrl)
    }, [])

    return (
        <Box
            component='div'
            sx={{
                mt: 2,
                mb: 10,
            }}
        >
            <Grid container spacing={2}
                sx={{
                    padding: 5,
                    backgroundColor: '#fff',
                    borderRadius: '25px',
                    margin: 'auto',
                    width: { xs: '100%', sm: '80%' },
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                }}
            >
                <Grid item xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                >
                    <Typography variant='h5'>Order ID: {transaction?.id}</Typography>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { sm: 'center' },
                            gap: 2,
                        }}
                    >
                        <Box component='div'
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 2,
                                fontSize: 10
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#ccc'
                                }}>
                                Order Date:</Typography>
                            <Typography>{(new Date(transaction?.paid_at)).toDateString()}</Typography>
                        </Box>
                        <Box component='div'
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 2,
                                fontSize: 10
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#cccccc'
                                }}>Status:</Typography>
                            <Typography sx={{ color: 'green' }}>{transaction?.status}</Typography>
                        </Box>
                    </Box>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    {transaction?.products.length >= 1 && transaction?.products.map((item: any, index: any) => (
                        <Box component='div' key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between',
                                // alignItems: { sm: 'center' },
                                pb: 2
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
                </Grid>
                <Grid item xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { sm: 'center' },
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { sm: 'center' },
                                    gap: 1,
                                    mb: 1
                                }}
                            >
                                <Typography sx={{ color: '#ccc' }}>Payment Account:</Typography>
                                <Typography>{transaction?.account}</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { sm: 'center' },
                                    gap: 1
                                }}
                            >
                                <Typography sx={{ color: '#ccc' }}>Payment Option:</Typography>
                                <Typography>{transaction?.payment_option}</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { sm: 'center' },
                                    gap: 1
                                }}
                            >
                                <Typography sx={{ color: '#ccc' }}>Total Amount:</Typography>
                                <Typography>GHS {transaction?.price}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}
                    sx={{
                        textAlign: 'center',
                        mt: 2
                    }}
                >
                    <QrCodeGenerator qrCodeValue={qrCodeValue} />
                </Grid>
            </Grid>
        </Box >
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

export default TransactionDetails