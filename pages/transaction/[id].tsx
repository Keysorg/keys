import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { client, urlFor } from '@/lib/client';
import { Box, Typography } from '@mui/material';

const TransactionDetails = ({ transaction }: any) => {

    return (
        <Box
            component='div'
            sx={{
                mt: 2,
                mb: 10,
            }}
        >
            <Typography variant='h4' sx={{textAlign: 'center'}}>Transaction Details</Typography>
            <Grid container spacing={2}
                sx={{
                    padding: 5
                }}
            >
                <Grid item xs={12} sm={6} className='transaction'>
                    <Typography>user: <span>{transaction?.userName}</span></Typography>
                    <Typography>email: <span>{transaction?.email}</span></Typography>
                    <Typography>price: <span>{transaction?.price}</span></Typography>
                    <Typography>payment option: <span>{transaction?.payment_option}</span></Typography>
                    <Typography>account: <span>{transaction?.account}</span></Typography>
                    <Typography>status: <span>{transaction?.status}</span></Typography>
                    <Typography>paid at: <span>{transaction?.paid_at}</span></Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <div className='product-container'> */}
                    {transaction?.products.length >= 1 && transaction?.products.map((item: any, index: any) => (
                        <div className='product' key={item?._id}>
                            <img src={urlFor(item?.image)} className='cart-product-image' />
                            <div className='item-desc'>
                                <div className='flex-column top'>
                                    <h5>{item?.name}</h5>
                                    <h4>${item?.price}</h4>
                                    <h4>x{item?.quantity}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                </Grid>
            </Grid>
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

export default TransactionDetails