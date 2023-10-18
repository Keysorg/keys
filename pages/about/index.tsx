import React from 'react';

import { client, urlFor } from '@/lib/client';
import { Service, FooterBanner, HeroBanner, Review, Carousel, LogoCarousel } from '@/components';
import { Box, Grid, Typography } from '@mui/material';


const about = ({ pageInfo }: any) => {

    return (
        <>
            <Typography
                variant='h4'
                sx={{
                    width: { xs: '350px', sm: '400px' },
                    margin: 'auto',
                    p: 1
                }}
            >
                {pageInfo?.header1}
            </Typography>
            <Box
                sx={{
                    margin: 'auto',
                    height: '500px',
                    width: { sm: '97%', md: '90%' },
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <Box
                    component='img'
                    src={urlFor(pageInfo?.image1)}
                    alt=''
                    sx={{
                        width: { xs: '100%', sm: '350px', md: '500px' },
                        height: '450px',
                        borderRadius: { sm: '10px', md: '5px' },
                        backgroundColor: '#ebebeb',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: '100%',
                        // gap: 1
                    }}
                >
                    <Box
                        component='img'
                        src={urlFor(pageInfo?.image2)}
                        alt=''
                        sx={{
                            width: { xs: '', sm: '350px', md: '500px' },
                            height: '210px',
                            borderRadius: { sm: '10px', md: '5px' },
                            backgroundColor: '#ebebeb',
                            objectFit: 'cover',
                        }}
                    />
                    <Box
                        component='img'
                        src={urlFor(pageInfo?.image3)}
                        alt=''
                        sx={{
                            width: { xs: '', sm: '350px', md: '500px' },
                            height: '210px',
                            borderRadius: { sm: '10px', md: '5px' },
                            backgroundColor: '#ebebeb',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Box>

            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: { xs: '20px', sm: '30px' },
                    fontWeight: '300px'
                }}
            >
                {pageInfo?.header2}
            </Typography>
            <LogoCarousel logos={pageInfo?.logos} />

            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: { xs: '20px', sm: '30px' },
                    fontWeight: '300px',
                    backgroundColor: '#000',
                    color: '#fff'
                }}
            >
                {pageInfo?.header3}
            </Typography>

            <div className='about-values'>
                {pageInfo.values.map((value: any) => (
                    <div>
                        <h3>{value.name}</h3>
                        <p>{value.desc}</p>
                    </div>
                ))}
            </div>

            <div className='about-members'>
                {pageInfo.members.map((member: any) => (
                    <Review review={member} />
                ))}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    let pageInfo: any = {};
    const page_query = `*[_type == "about"][0]`;

    pageInfo = await client.fetch(page_query);

    return {
        props: { pageInfo }
    }
}

export default about