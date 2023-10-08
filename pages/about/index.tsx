import React from 'react';

import { client, urlFor } from '@/lib/client';
import { Service, FooterBanner, HeroBanner, Review, Carousel, LogoCarousel } from '@/components';
import { Box } from '@mui/material';


const about = ({ pageInfo }: any) => {
    return (
        <>
            <HeroBanner heroBanner={pageInfo} />

            <div className='about-values'>
                {pageInfo.values.map((value: any) => (
                    <div>
                        <h3>{value.name}</h3>
                        <p>{value.desc}</p>
                    </div>
                ))}
            </div>

            <Box
                component='img'
                sx={{
                    height: '600px',
                    width: '100%',
                    objectFit: 'cover'
                }}
                src={urlFor(pageInfo.image2)}
            />

            <div className='products-heading'>
                <h2>We are the best in the game!</h2>
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