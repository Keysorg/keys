import React from 'react';
import { urlFor } from '@/lib/client';

const LogoCarousel = ({ logos }) => {
    return (
        <div className='logos'>
            <div className='logos-slide'>
                <img src={urlFor(logos[0])} />
                <img src={urlFor(logos[1])} />
                <img src={urlFor(logos[2])} />
                <img src={urlFor(logos[3])} />
                <img src={urlFor(logos[4])} />
                <img src={urlFor(logos[5])} />
                <img src={urlFor(logos[6])} />
                <img src={urlFor(logos[7])} />
                {/* {logos.map((logo) => (
                    <img src={urlFor(logo)} alt="logo" />
                ))} */}
            </div>

            <div className='logos-slide'>
                <img src={urlFor(logos[0])} />
                <img src={urlFor(logos[1])} />
                <img src={urlFor(logos[2])} />
                <img src={urlFor(logos[3])} />
                <img src={urlFor(logos[4])} />
                <img src={urlFor(logos[5])} />
                <img src={urlFor(logos[6])} />
                <img src={urlFor(logos[7])} />
                {/* {logos.map((logo) => (
                    <img src={urlFor(logo)} alt="logo" />
                ))} */}
            </div>
        </div>
    )
}

export default LogoCarousel